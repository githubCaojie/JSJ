import { request } from './request';

export function login(user, pass, type = 1) {
  return request({
    url: 'login/VerifyLogin.jsp?loginid=' + user + '&userpassword=' + pass + '&logintype=' + type
  })
}