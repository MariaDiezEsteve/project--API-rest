<template>
  <h1>Fetch</h1>
  <PostList />
  <PostInclude />

</template>

<script>
import PostList from '@/components/Ejemplo-Fetch/PostList.vue'
import PostInclude from '@/components/Ejemplo-Fetch/PostInclude.vue';

export default {
  name: 'FetchView',
  components: {
    PostList,
    PostInclude,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
