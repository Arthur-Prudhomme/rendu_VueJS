<template>
    <div class="container">
        <form @submit.prevent="ajoutContact" class="form">
            <span v-if="errorC">numéro déjà enregistré</span>
            <input type="text" placeholder="name" v-model="formContact.name">
            <span v-if="formContact.num.length < 10 && error">num inférieure à 10</span>
            <input type="text" placeholder="num" maxlength="10" v-model="formContact.num">
            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'FormVue',
  computed:{
        contacts(){
            return this.$store.state.contacts
        }
    },
    data(){
        return{        
            error: false,
            errorC: false,

            formContact:{
                name: '',
                num: ''
            }
    }
},
    methods:{
        ajoutContact(){
            if(this.formContact.num.length < 10){
              this.error = true
              return
            }
            if(this.contacts.find((contact) => contact.num == this.formContact.num)){
              this.errorC = true
              return
            }
            
            this.$store.commit('ajoutContact',this.formContact)

            this.error = false
            this.errorC = false

            this.formContact ={
                name: '',
                num: ''
            }
        }
    }
}
</script>
<style scoped>
  .form{
    display:flex;
    flex-direction: column;
  }
</style>
