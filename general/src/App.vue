<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/showBlogs";
import ListBlogs from "./components/listBlogs";
import Header from "./components/sHeader";
export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    "list-blogs": ListBlogs,
    "app-header": Header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
