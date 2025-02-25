import {
	useRequest
} from "../useRequest";

export const userLogin = (loginRequestBody, success, fail, complete) => {
	return useRequest({
		url: '',
		method: 'POST',
		header: {
			'Content-Type': 'application/json'
		},
		needAuth:false,
		data:loginRequestBody,
		success,
		fail,
		complete
	})
}