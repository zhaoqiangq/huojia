/**
 * Created by 小强 on 2018/1/26.
 */
import axios from 'axios'
var HTTP = axios.create({
  baseURL:'http://apicet.shsbip.com/api',
  responseType:'json',
  headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
})

export default HTTP;
