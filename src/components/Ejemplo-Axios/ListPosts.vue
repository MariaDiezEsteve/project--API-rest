<template>
  <h1> GET </h1>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
  
</template>

<script>

import axios from 'axios'
import { ref } from 'vue'
export default {
  name: "ListPosts",

  setup(){

    const posts = ref("")
    const errorMsg = ref("")

   /* axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          posts.value = response.data
        })
        .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        }) */

      const getData  = async () => {
      const response =  await axios.get('https://jsonplaceholder.typicode.com/posts') 
            posts.value = await response.data
      }

    getData();

    return{
      posts,
      errorMsg,
      getData
    }
  }

}
</script>

<style>

</style>