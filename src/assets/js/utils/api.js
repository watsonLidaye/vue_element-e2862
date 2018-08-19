//  接口服务
var api = {

}
//  域名
var https = 'master'

var url = (function() {
	let urls = ''
	if (https == 'master') {
		urls = 'https://api.e2862.com/'
	} else {
		urls = 'https://i.e2862.com/'
	}
	return urls
})()

var appid = 'wxaaa2807e6a74ed2f'
module.exports = {
	url,
	api
}