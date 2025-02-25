const baseUrl = 'http://localhost:3000'

/**
 * @typedef {Object} RequestInit
 * @template T
 * @property {string} url - The URL to send the request to.
 * @property {'GET'|'POST'} method - The HTTP method to use for the request.
 * @property {Object} header - Headers to include with the request.
 * @property {unknown} [data] - Optional data to send with the request.
 * @property {boolean} [needAuth] - Whether the request requires authentication.
 * @property {function(T): void} success - Callback function to execute on successful response.
 * @property {RequestFailCallback} fail - Callback function to execute on request failure.
 * @property {RequestCompleteCallback} [completeFunc] - Optional callback function to execute when request completes.
 */

/**
 * @typedef {Object} Response
 * @template T
 * @property {number} code - The response status code.
 * @property {string} message - A message describing the response status.
 * @property {T} data - The actual data returned by the API.
 */

// 拦截器
/***
 * @param {Response<any>} resp - The response object to be processed.
 * @returns {void}
 *
 */
const codeHandler = (resp) => {

}

export const useRequest = (requestInit) => {
	const task = uni.request({
		url: baseUrl + requestInit.url,
		method: requestInit.method || 'GET',
		header: {
			'Authorization': 'Bearer ' + (requestInit.needAuth ? 'token' : ''),
			...requestInit.header
		},
		timeout: 60000,
		responseType: 'arraybuffer',
		success: (res) => {
			if (!res.data) {
				// 发过来是空的
				return
			}
			const uint8 = new Uint8Array(res.data)
			const decoder = new TextDecoder('utf-8');
			const jsonStr = decoder.decode(uint8);
			const resp = JSON.parse(jsonStr)
			if (resp.code !== 100) {
				codeHandler(resp)
				return
			}
			requestInit.success(resp.data);
		},
		fail: (err) => {
			requestInit.fail(err)
		},
		complete: () => {
			if (!requestInit.completeFunc) {
				return
			}
			requestInit.completeFunc()
		}
	})
	return task
}