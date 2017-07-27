import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'

Vue.use(Router)

var router =new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.group('beforeEach ===============》');
  console.log("%c%s", "color:red" , "toName     : " + to.name); //undefined
  console.log("%c%s", "color:red" , "fromName     : " + from.name); //undefined
 console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
 console.log("%c%s", "color:red","data   : " + this.$data); //undefined
 console.log("%c%s", "color:red","message: " + this.message); //已被初始化
  next();
})
router.afterEach((to,from) => {
  console.group('afterEach ===============》');
  console.log("%c%s", "color:red" , "toName     : " + to.name); //undefined
  console.log("%c%s", "color:red" , "fromName     : " + from.name); //undefined
 console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
 console.log("%c%s", "color:red","data   : " + this.$data); //undefined
 console.log("%c%s", "color:red","message: " + this.message); //已被初始化
})
export default router
