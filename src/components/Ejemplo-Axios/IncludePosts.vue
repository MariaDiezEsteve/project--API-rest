<template>
  <div>
    <h1>Create a Post</h1>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post User ID</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>

    <div v-for="value in formData" :key="value">
               <p> {{ value }} </p> 
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import { reactive } from 'vue'
import { ref } from 'vue'

export default {
name: "IncludePosts",

setup(){
    const formData = reactive({
        userId:"",
        title: "",
        body: ""
      })

      const errorMsg = ref("")

     const createPost = () => {
      axios
        .post('https://jsonplaceholder.typicode.com/posts', formData.value)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        }) 
    } 
    
return{
  formData,
    createPost
}
} 
}

</script>

<style>

</style>