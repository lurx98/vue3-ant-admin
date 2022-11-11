import { createPinia } from 'pinia'
export const pinia = createPinia()

import useTabsStore from './modules/tabs'
import useUserStore from './modules/user'
import usePermissionStore from './modules/permission'
export default function useStore() {
  return {
    tabs: useTabsStore(),
    user: useUserStore(),
    permission: usePermissionStore()
  }
}
