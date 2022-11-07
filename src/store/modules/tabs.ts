import { defineStore } from 'pinia'
import router from '@/router/index'

export default defineStore('tabs', {
  state: () => {
    return {
      tab: [] as Array<any>
    }
  },
  actions: {
    add(obj: any) {
      const item = { ...obj }
      const index = this.tab.findIndex((val) => {
        return val.path === item.path
      })
      console.log(item, index)

      if (index === -1) {
        this.tab.push(item)
      }
    },
    del(val: string | MouseEvent) {
      const index = this.tab.findIndex((v) => {
        return v.path === val
      })
      this.tab.splice(index, 1)
      if (index > 0) {
        router.push(this.tab[index - 1])
      }
      if (index === 0 && this.tab.length !== 0) {
        router.push(this.tab[0])
      }
      if (this.tab.length === 0) {
        router.push('/dashboard')
      }
    }
  }
})
