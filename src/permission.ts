import router from './router'
import { getToken } from '@/utils/auth' // get token from cookie
import { pinia } from './store/store'
import useUserStore from '@/store/modules/user'
import usePermission from '@/store/modules/permission'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
const user = useUserStore(pinia)
const permission = usePermission()
const whiteList = ['/login']
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (!user.username) {
      // 读取角色信息
      let menus = await user.getUserInfo()
      // 调用过滤筛选动态路由的ation 传入权限菜单标识
      let routers = await permission.filterRoutes(menus)
      console.log(routers)
      routers.forEach((item) => {
        router.addRoute(item)
      })
      next(to.path)
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
