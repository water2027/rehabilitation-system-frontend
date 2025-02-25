import {
	useRequest
} from "../useRequest";

export const userLogin = (sendCodeRequestBody, success, fail, complete) => {
	return useRequest({
		url: '',
		method: 'POST',
		header: {
			'Content-Type': 'application/json'
		},
		needAuth:false,
		data:sendCodeRequestBody,
		success,
		fail,
		complete
	})
}