<template>
    <h1>POST</h1>
  <div>
        <template v-for="value in posts" :key="value">
          <h3>{{ value.title }}</h3>
          <p>{{ value.body }}</p>
      </template>
  </div>
 
</template>
  
  <script>
  import { reactive } from 'vue'
   export default{
    name: "PostList",
  
    setup(){
  
      const posts = reactive({
        userId:"",
        title: "",
        body: ""

      })
      
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then((response) => response.json())
        .then(data => posts.value = data)

      return{
        posts, 
      }
    }
  } 


 
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>