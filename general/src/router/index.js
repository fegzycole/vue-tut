import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from '../components/showBlogs.vue'
import AddBlog from '../components/AddBlog.vue'
import SingleBlog from '../components/SingleBlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShowBlogs
    },
    {
      path: '/add',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      component: SingleBlog
    }
  ],
  mode: 'history'
})
