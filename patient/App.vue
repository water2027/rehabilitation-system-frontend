<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.login({
				provider:'weixin',
				onlyAuthorize:true
			})
			.then((res)=>{
				if(!res.code) {
					console.log('登录失败')
					console.log(res)
					return
				}
				// 将code发给后端
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
page {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	height:100%;
	width:100%;
	overflow:hidden;
}
view, text {
	margin:0;
	padding:0;
}
</style>
