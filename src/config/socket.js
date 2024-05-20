import PubSub from "pubsub-js"
import { socketUrl } from '@/config/env.js';

class WsClient {
    reconnectTimes = 0
	resendTimes = 0
	constructor(token) {
		this.token = token
        this.ws = null
        this.socketSendTimer = null
	}
	connectWs() {
		let timer = null
		let timers = null
        let check_timer = null
		const ws = new WebSocket(`${socketUrl}?token=${btoa(this.token)}`)
		this.ws = ws
		ws.onopen = () => {
			this.resend()
		}
		ws.onmessage = event => {
			if (this.reconnectTimes > 0) {
				PubSub.publish("WSReconnect", { code: "重连成功" })
			}
			this.reconnectTimes = 0
            this.resendTimes = 0
			const event_data = JSON.parse(event.data)
            const { commandType } = event_data
			switch (commandType) {
				case 'RADIO_UPDATE':
					PubSub.publish("RADIO_UPDATE", event_data)
					break
				case 'SITE_INFORMATION':
					PubSub.publish("SITE_INFORMATION", event_data)
					break
				case 'VIP_PROMOTION':
					PubSub.publish("VIP_PROMOTION", event_data)
					break
				case 'SYSTEM_MSG':
					PubSub.publish("SYSTEM_MSG", event_data)
					break
				case 'EXPIRE_SESSION':
					PubSub.publish("EXPIRE_SESSION", event_data)
					break
				default:
					break
			}
		}
		ws.onclose = event => {
			if (timer) clearTimeout(timer)
			if (timers) clearTimeout(timers)
            if (check_timer) clearTimeout(check_timer)
            this.socketSendTimer && clearInterval(this.socketSendTimer)
			console.warn(event)
			console.log(this.reconnectTimes)
			if (this.reconnectTimes < 5) {
				this.reconnect()
            }
		}
		ws.onerror = error => {
			console.warn(error)
			if (timer) clearTimeout(timer)
			if (timers) clearTimeout(timers)
			if (check_timer) clearTimeout(check_timer)
			if (this.ws) {
				this.ws.close()
			}else{
				this.reconnect()
			}

		}
	}

	closeWs() {
		this.reconnectTimes = 6
        this.ws && this.ws.close()
        this.socketSendTimer && clearInterval(this.socketSendTimer)
		this.ws = null
	}

	resend() {
		this.socketSendTimer = setInterval(() => {
            let send_t = new Date().getTime()
            let params = {
                commandType: 'PING',
                data: {},
                sendTime: send_t
            }
			this.ws.send(JSON.stringify(params))
		}, 10000)
	}

	reconnect() {
		this.reconnectTimes++
		if (this.reconnectTimes === 1) {
			this.connectWs()
		} else if (this.reconnectTimes >= 5) {
			console.log("网络错误")
			PubSub.publish("WSOffline", { code: "网络错误" })
		} else {
			console.log("WS已断开，1s后进行第" + this.reconnectTimes + "次重连")
			const timer_connect = setTimeout(() => {
				this.connectWs()
				clearTimeout(timer_connect)
			}, 1000)
		}
	}
}

export default WsClient;