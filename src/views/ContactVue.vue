<template>
  <div class="contact">
    <router-link to="/form"><button>+</button></router-link>
    <div v-for="contact in contacts" :key="contact.num">
      <CarteContact :contact="contact" />
    </div>
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
