import Mock from 'mockjs'
const baseURL = import.meta.env.VITE_APP_BASE_API
Mock.mock('/api/addgoods', 'post', function (option) {
  let $name = JSON.parse(option.body).name
  if ($name) {
    return Mock.mock({
      status: 200,
      message: '提交成功！！！'
    })
  } else {
    return Mock.mock({
      status: 400,
      message: '未提交参数'
    })
  }
})
Mock.mock(baseURL + '/user/login', 'post', option => {
  console.log(option)
  return Mock.mock({
    status: 200,
    message: 'success',
    token: '@guid'
  })
})
Mock.mock(baseURL + '/user/userInfo', 'get', option => {
  console.log(option)
  return Mock.mock({
    status: 200,
    message: 'success',
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    menu: ['a', 'table', 'b', 'tree', 'user', 'userindex', 'usersetting', 'userdata']
  })
})
