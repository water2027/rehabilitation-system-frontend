/**
 * @param {string} url
 * @param {Object} init
 * @param {'GET'|'POST'|'PUT'|'DELETE'} [init.method]
 * @param {any} [init.data] 
 * @param {string} [init.dataType]
 */
const useRequest = async (url, init = {}) => {
	const baseUrl = 'http://localhost:3000'
	let finalUrl = baseUrl + url;

	const token = uni.getStorageSync('token')
	let header = {}
	if (token) {
		header = {
			Authorization: `Bearer ${token}`
		}
	}
	try {
		const resp = await uni.request({
			url: finalUrl,
			method: init.method || 'GET',
			data: init.data,
			dataType: init.dataType || 'json',
			header
		});
		const {
			data:res
		} = resp
		console.log(JSON.stringify(resp, null, 2))
		if(!res.code || res.code <100) {
			// 失败了
			// 失败处理
			
			
			
			return Promise.reject(res.message)
		}
		const {
			data
		} = res
		return data
	} catch (err) {
		console.error(err)
	} finally {

	}
}

/**
 * @param {Object} data 自动转为query到url中
 */
const get = (url, data) => {
	return useRequest(url, {
		method: 'GET',
		data
	})
}

const post = (url, data, dataType) => {
	return useRequest(url, {
		method: 'POST',
		data,
		dataType
	})
}

const put = (url, data, dataType) => {
	return useRequest(url, {
		method: 'PUT',
		data,
		dataType
	})
}

const del = (url, data, dataType) => {
	return useRequest(url, {
		method: 'DELETE',
		data,
		dataType
	})
}

export default {
	get,
	post,
	put,
	del
}