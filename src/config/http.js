import axios from "axios";
import store from "@/store";
import router from "@/router";
import { Toast } from "vant";
// import { baseUrl } from '@/config/env.js';
Toast.allowMultiple();

const cancelMap = (window.cancelMap = new Map());
function clearRequest() {
    if (cancelMap.size) {
        cancelMap.forEach(c => {
            c && c();
        });
        cancelMap.clear();
    }
}
if (/(FlutterTestApp)/g.test(window.navigator.userAgent)) {
    axios.defaults.baseURL = `https://${process.env.testUrl}/member`;
} else if (/(FlutterApp)/g.test(window.navigator.userAgent)) {
    axios.defaults.baseURL = "https://km938b.com/member";
} else {
    // 环境的切换
    axios.defaults.baseURL =
        process.env.NODE_ENV === "development" ? "/apis" : "/member";
}
// 环境的切换

// 请求超时时间
axios.defaults.timeout = 10000;

// 请求拦截器
axios.interceptors.request.use(
    config => {
        config.cancelToken = new axios.CancelToken(c =>
            cancelMap.set(config.url, c)
        );
        config.headers["accept-Language"] = "vi-VN,vi;";
        if (config.url !== "/member/login") {
            // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
            const token = store.state.user.token;
            token && (config.headers.token = token);
            return config;
        } else {
            config.headers["base-url"] =
                process.env.NODE_ENV === "development"
                    ? process.env.testUrl
                    : window.location.host;
            return config;
        }
    },
    error => {
        return Promise.error(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            const { code } = response.data;
            switch (code) {
                case 0:
                    return Promise.resolve(response);
                case 5:
                case 9:
                case 10:
                    store.dispatch("do_logout", true);
                    // clearRequest();
                    return Promise.reject(response);
                case 13:
                    return Promise.resolve(response);
                default:
                    // Toast({
                    //   message: response.data.msg,
                    //   duration: 1500,
                    //   forbidClick: true
                    // })
                    return Promise.resolve(response);
            }
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 互踢
                case 409:
                    store.commit("setStatusMsg", error.response.data.message);
                    store.commit("setShowLoginPopup", true);
                    break;
                // 412: 登陆超时
                case 412:
                    store.commit("setStatusMsg", error.response.data.message);
                    store.commit("setShowLoginPopup", true);
                    break;
                // 403 token过期
                // case 403:
                //     Toast({
                //         message: error.response.data.message,
                //         duration: 1000,
                //         forbidClick: true
                //     });
                //     break;
                // // 404请求不存在
                // case 404:
                //     Toast({
                //         message: error.response.data.message,
                //         duration: 1500,
                //         forbidClick: true
                //     });
                //     break;
                // // 其他错误，直接抛出错误提示
                default:
                    router.push("/maintain");
                // Toast({
                //     message: error.response.data.message,
                //     duration: 1500,
                //     forbidClick: true
                // });
            }
            return Promise.reject(error.response);
        }
    }
);
/**
 * get方法，对应get请求
 * @param {String} url    [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    if (params == undefined) params = {};
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params: params })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            });
    });
}
/**
 * post方法，对应post请求
 * @param {String} url    [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, option) {
    if (params == undefined) {
        params = {};
    }
    let toast;
    if (option && option.isLoading) {
        toast = Toast.loading({
            mask: true,
            icon: require("@/assets/images/casino/loading.gif"),
            duration: 0,
            className: "van-loading"
        });
    }
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(res => {
                if (option && option.resErr) {
                    toast && toast.clear();
                    resolve(res.data);
                } else {
                    if (res.data.code == 0) {
                        toast && toast.clear();
                        resolve(res.data.data);
                    } else {
                        toast && toast.clear();
                        console.log('这里option是。。。', option)
                        if (option && option.err){
                            reject(res.data)
                            return
                        }
                        Toast({
                            mask: true,
                            message: res.data.msg,
                            duration: 1500,
                            forbidClick: true
                        });
                        reject(res.data);
                    }
                }
            })
            .catch(err => {
                toast && toast.clear();
                reject(err.data);
            });
    });
}
