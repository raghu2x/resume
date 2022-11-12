import { defineStore } from 'pinia'
import userData from '@/data.json'
export const useUserStore = defineStore('userInfo', {
  state: () => ({
    user: {}
  }),
  getters: {
    userInfo: (state) => userData,
  },
})
