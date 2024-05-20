import "@/style/main.scss";
import "animate.css";

// 引入lib-flexible 转换 rem 单位自适应
import "lib-flexible";
import Vue from "vue";

import App from "./App.vue";

const app = new Vue({
	render: (h) => h(App),
});

app.$mount('#app');