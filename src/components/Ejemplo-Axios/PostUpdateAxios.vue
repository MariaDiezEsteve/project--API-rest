<template>
    <h1>PUT</h1>
    <div >
      <h3>{{ postsUnit.id }}. {{ postsUnit.title }}</h3>
      <p>{{ postsUnit.body }}</p>
    </div>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>

    <h1>EDITADO</h1>
    <div>
      <h3>{{ postsUpdate.id }}. {{postsUpdate.title }}</h3>
      <p>{{ postsUpdate.body }}</p>
    </div>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>

    <button @click="deleteData">Eliminar Post 1</button>
 
</template>
  
  <script>
  import { ref, reactive } from 'vue'
  import axios from 'axios'

   export default{
    name: "PostUpdateAxios",
  
    setup(){
  
      const postsUpdate = reactive({
        id: "1",
        userId:"1",
        title: "María",
        body: "Este texto está editado"
      })

      const postsUnit = ref(null)
      const errorMsg = ref("")

       /* axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          posts.value = response.data
        })
        .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        }) */

        const  putData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
            postsUnit.value = await response.data
        }

        putData();

        const updatePost = () => {
        axios 
        .put('https://jsonplaceholder.typicode.com/posts/1', postsUpdate.value)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        }) 
    } 
      
         
        const deleteData = () => {
            axios
            .delete('https://jsonplaceholder.typicode.com/posts/1') 
            .then((response) => {
          console.log(response)
        }) 
        }
        
      return{
        postsUpdate, 
        postsUnit,
        errorMsg,
        putData,
        updatePost,
        deleteData,
      }
    }
  } 


 
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>