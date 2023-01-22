<template>
  <div class="clavier">
    <h2>{{ contactExist }}</h2>
    <span id="type_num">{{ dialCall.num }}</span>
    <div class="digit">
      <button @click="typeNum('1')">1</button>
      <button @click="typeNum('2')">2</button>
      <button @click="typeNum('3')">3</button>
      <button @click="typeNum('4')">4</button>
      <button @click="typeNum('5')">5</button>
      <button @click="typeNum('6')">6</button>
      <button @click="typeNum('7')">7</button>
      <button @click="typeNum('8')">8</button>
      <button @click="typeNum('9')">9</button>
      <button @click="clearNum()">Effacer</button>
      <button @click="typeNum('0')">0</button>
      <button @click="call()">Appeler</button>
    </div>
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
<style scoped>
.clavier{
  height: 100%;
}
#type_num{
  display: inline-block;
  height: 18px;
}
  .digit{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  button{
    width: 50px;
    background-color: rgb(29, 29, 70);
    color: white;
    border: none;
    margin: 2px;
  }
  button:hover{
    background-color: rgb(44, 44, 102);
  }
</style>
