<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import {bus} from '../main'
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      title: 'Vue Ninjas',
    }
  },
  methods: {
    changeTitle: function() {
      // this.$emit('changeTitle', 'Vue Scholars');
      this.title = 'Vue Scholars'
      bus.$emit('titleChanged', 'Vue Scholars');
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>