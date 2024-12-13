Vue.createApp({
  data() {
    return {
      names: 0,
    }
  },
  methods: {
    increase() {
      this.names = this.names + 1
    },
    reset() {
      this.names = 0
    },
    decrease() {
      this.names = this.names - 1
    },
  },
}).mount('#app')
