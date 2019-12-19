import service from '@/utils/request.js'
/**
 * 登陆
 */
export function getUserList(){
  service.request({
    url:'/getSms',
    method:'POST',
    data:{module:'login',username:'44@qq.com'}
  })
}