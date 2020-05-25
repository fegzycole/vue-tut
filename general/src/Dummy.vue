<template>
  <div>
    <app-header @changeTitle="updateTitle($event)" :title="title"></app-header>
    <!-- <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper> -->
    <keep-alive>
      <component :is="component"></component>
    <keep-alive>
    <button @click="component = 'ninjas'">Ninjas</button>
    <button @click="component = 'app-footer'">Button Two</button>
    <!-- <ninjas :ninjas="ninjas"></ninjas> -->
    <!-- <app-footer :title="title"></app-footer> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import FormHelper from "./components/FormHelper";
import Ninjas from "./components/Ninjas";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "ninjas": Ninjas,
    "form-helper": FormHelper,
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: 'Vue Ninjas',
      component: 'ninjas'
    };
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
