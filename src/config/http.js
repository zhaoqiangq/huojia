/**
 * Created by 小强 on 2018/1/26.
 */
import axios from 'axios'
let token = window.localStorage.getItem('shanbiao');

if(token==null){
  token = ''
}else {
  token = token.replace("\"","").replace("\"","")
}
var HTTP = axios.create({
  baseURL:'http://apicet.shsbip.com/api',
  responseType:'json',
  headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': token
          }
})

export default HTTP;
