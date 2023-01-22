<template>
  <div class="cartes">
    <div v-for="call in callHist" :key="call.num">
      <span>{{ call.name }} | {{ call.num }} | {{ call.date }}</span>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
        callHist(){
            return this.$store.state.callHist
        }
    },
}
</script>