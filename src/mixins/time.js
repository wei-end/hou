export default {
  data() {
    return {
      time:new Date()
    }
  },
  mounted(){
    console.log(this.time , '混入');
  }
}