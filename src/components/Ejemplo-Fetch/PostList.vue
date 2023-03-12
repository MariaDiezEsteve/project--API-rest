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
import { ref } from 'vue'
/*
export default{
  name: "PostList",

  setup(){

    const posts = ref(null)
    const errorMsg = ref("")

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())// guardamos la respuesta en formato json
        .then(data => posts.value = data)
        // .then((json) => console.log(json))
         .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        })
    
    return{
      posts,
      errorMsg
    }
  }  
}
*/

export default{
  name: "PostList",

  setup(){

    const posts = ref(null)
      
      const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      posts.value = await response.json()
    }

    fetchData();

    return{
      posts,
    }
  }  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


