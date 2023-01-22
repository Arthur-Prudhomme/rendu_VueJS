<template>
    <div class="cartes">
        <h2>{{ contact.name }}</h2>
        <span>{{ contact.num }}</span>
        <button @click="call(contact.num,contact.name)"><ion-icon name="call-outline"></ion-icon></button>
    </div>
</template>
<script>
export default {
    name: 'CarteContact',
    props: [
        'contact'
    ],
    data(){
          return{        
              dialCall:{
                  name: '',
                  num: '',
                  date: ''
              }
          }
      },
    methods: {
    call(name, num) {
        this.dialCall.name = name
        this.dialCall.num = num
        this.dialCall.date = new Date().toLocaleString();
        this.$store.commit('call', this.dialCall)
        }
    }
}
</script>
<style scoped>

    ion-icon{
        width: 30px;
        height: 30px;
    }
    .cartes {
        display: flex;
        background-color: rgb(50, 50, 50);
        color: white;
        width: fit-content;
        min-width: 250px;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        margin-bottom: 20px;
        padding: 20px;
    }
</style>