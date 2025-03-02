import {
	useRequest
} from "../useRequest";

export const userLogin = (loginRequestBody) => {
	return useRequest({
		url: '',
		method: 'POST',
		header: {
			'Content-Type': 'application/json'
		},
		needAuth:false,
		data:loginRequestBody
	})
}