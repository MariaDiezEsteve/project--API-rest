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
  import { ref } from 'vue'
   export default{
    name: "PostUpdateFetch",
  
    setup(){
  
      const postsUpdate = ref(null)
      const postsUnit = ref(null)
      const errorMsg = ref("")

        /* fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())// guardamos la respuesta en formato json
        .then(data => postsUnit.value = data)
        .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        }) */


        const  putData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            postsUnit.value = await response.json()
        }
      
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'María',
                body: 'Este es el nuevo post editado',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then((response) => response.json())
        .then(data => postsUpdate.value = data)
        .catch((error) => {
          console.log(error)
          errorMsg.value = 'Error no se cargo la data'
        })

        putData();

        const deleteData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => postsUpdate.value = data)    
        }
        
      return{
        postsUpdate, 
        postsUnit,
        errorMsg,
        putData,
        deleteData 
      }
    }
  } 


 
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  