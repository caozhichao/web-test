const crypto = require('crypto');


/**
 * 
 * 签名
生成签名

OK-ACCESS-SIGN的请求头是对timestamp + method + requestPath + body字符串（+表示字符串连接），以及SecretKey，使用HMAC SHA256方法加密，通过Base-64编码输出而得到的。

如：sign=CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'GET' + '/api/v5/account/balance?ccy=BTC', SecretKey))

其中，timestamp的值与OK-ACCESS-TIMESTAMP请求头相同，为ISO格式，如2020-12-08T09:08:57.715Z。

method是请求方法，字母全部大写：GET/POST。

requestPath是请求接口路径。如：/api/v5/account/balance

body是指请求主体的字符串，如果请求没有主体（通常为GET请求）则body可省略。如：{"instId":"BTC-USDT","lever":"5","mgnMode":"isolated"}
 * 
 */

const secretkey = 'CBD5111C904A7E74C8BCCA1DFFE9D5C5'

// 创建一个hmac对象
const hmac = crypto.createHmac('sha256', secretkey);

// timestamp + method + requestPath + body
const timestamp = new Date().toISOString()
const method = 'GET'
// const requestPath = '/api/v5/account/config'
// const requestPath = '/api/v5/public/funding-rate?instId=BTC-USD-SWAP'
const requestPath = '/api/v5/public/funding-rate?instId=UNI-USDT-SWAP'
const body = ''
const signStr = timestamp + method + requestPath + body
// 往hmac对象中添加摘要内容
const up = hmac.update(signStr);

// 使用 digest 方法输出摘要内容

const result = up.digest('base64'); 

console.log(timestamp,result); // 8c7498982f41b93eb0ce8216b48ba21d
