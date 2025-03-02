const baseUrl = 'http://localhost:3000'

// 拦截器
/***
 * @param {Response<any>} resp - The response object to be processed.
 * @returns {void}
 *
 */
const codeHandler = (resp) => {

}

export const useRequest = (requestInit) => {
	return new Promise((resolve, reject)=>{
		uni.request({
			url: baseUrl + requestInit.url,
			method: requestInit.method || 'GET',
			header: {
				'Authorization': 'Bearer ' + (requestInit.needAuth ? uni.getStorageSync('token') : ''),
				...requestInit.header
			},
			timeout: 60000,
			responseType: 'arraybuffer',
			success: (res) => {
				if (!res.data) {
					// 发过来是空的
					reject(null)
					return
				}
				const uint8 = new Uint8Array(res.data)
				const decoder = new TextDecoder('utf-8');
				const jsonStr = decoder.decode(uint8);
				const resp = JSON.parse(jsonStr)
				if (resp.code !== 100) {
					codeHandler(resp)
					reject(resp)
					return
				}
				resolve(resp.data);
			},
			fail: (err) => {
				reject(err)
			}
		})
	}) ;
}