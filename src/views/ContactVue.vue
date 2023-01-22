<template>
  <div class="contact">
    <div id="contact">
      <div v-for="contact in contacts" :key="contact.num">
        <CarteContact :contact="contact" />
      </div>
    </div>
    <router-link to="/form"><button>+</button></router-link>
  </div>
</template>
<script>
import CarteContact from '@/components/CarteContact.vue'
export default {
    name: 'ContactVue',
    components:{
        CarteContact
    },
    computed:{
        contacts(){
            return this.$store.state.contacts
        }
    },
}
</script>
<style scoped>
  .contact{
    display:flex;
  }
  #contact{
    display:flex;
    flex-direction: column;
    overflow-y: scroll;
  }
</style>
