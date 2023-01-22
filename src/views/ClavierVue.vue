<template>
  <div class="clavier">
    <span>{{ dialCall.num }}</span>
    <h2>{{ contactExist }}</h2>
    <button @click="typeNum('1')">1</button>
    <button @click="typeNum('2')">2</button>
    <button @click="typeNum('3')">3</button>
    <button @click="typeNum('4')">4</button>
    <button @click="typeNum('5')">5</button>
    <button @click="typeNum('6')">6</button>
    <button @click="typeNum('7')">7</button>
    <button @click="typeNum('8')">8</button>
    <button @click="typeNum('9')">9</button>
    <button @click="typeNum('0')">0</button>
    <button @click="clearNum()">Effacer</button>
    <button @click="call()">Appeler</button>
  </div>
</template>

<script>
	export default {
		name: 'ClavierVue',
    computed:{
        contactExist(){
            let contactExist = this.$store.state.contacts.find(contact => contact.num == this.dialCall.num)
              
            if(contactExist){
              return contactExist.name
            }else{
              return "Unknow"
            }
        }
    },
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
			typeNum(inputNum) {
        if(this.dialCall.num.length < 10){
          this.dialCall.num += inputNum
        }
			},
      clearNum() {
        this.dialCall.num = ''
			},
      call() {
        if(this.dialCall.num.length < 10){
          this.dialCall.num = ''
          return
        }
        this.dialCall.name = this.contactExist
        this.dialCall.date = new Date().toLocaleString();
        this.$store.commit('call', this.dialCall)
			}
		}
	}
</script>
