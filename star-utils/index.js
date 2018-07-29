/*
 * @Author: Qzx 
 * @Date: 2018-07-27 19:43:45 
 * @Description: Cookie的常用操作
 * @Last Modified by: Qzx
 * @Last Modified time: 2018-07-27 19:44:27
 */

function getCookie(name) {
	var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}
function setCookie(name, value, days) {
	var d = new Date;
	d.setTime(d.getTime() + 24*60*60*1000*days);
	window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name){
	setCookie(name, '', -1);
}

module.exports = {
	getCookie,
	setCookie,
	deleteCookie
}