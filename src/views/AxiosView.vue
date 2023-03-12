<template>
  <h1>Axios</h1>
  <ListPosts />
  <IncludePosts />

</template>

<script>
import ListPosts from '@/components/Ejemplo-Axios/ListPosts.vue'
import IncludePosts from '@/components/Ejemplo-Axios/IncludePosts.vue';

export default {
  name: 'AxiosView',
  components: {
    ListPosts,
    IncludePosts,
  }
}
</script>

<style>

</style>
