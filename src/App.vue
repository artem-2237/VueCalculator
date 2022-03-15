<template>
  <div class="calc">
    <span class="calc__expression">{{ expression }}</span>
    <span class="calc__result">{{ formatResult }}</span>

    <AppPanel @on-calculate="onCalculate($event)" @on-result="onResult($event)" />
  </div>
</template>

<script>
import AppPanel from '@/components/AppPanel'

export default {
  name: 'App',
  components: {
    AppPanel,
  },
  data() {
    return {
      expression: '0',
      result: 0,
    }
  },
  computed: {
    formatResult() {
      let newResult = this.result.toString()
      if (isNaN(+newResult)) {
        return 'Error'
      }
      if (newResult.length > 10) {
        let arr = newResult.split('')
        arr.splice(8)
        newResult = arr.join('') + '...'
      }
      return +newResult === Infinity ? 'Error' : newResult
    }
  },
  methods: {
    onCalculate(expression) {
      this.expression = expression
    },
    onResult(result) {
      this.result = result
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  display: flex;
  justify-content: center;
  background-color: #eb6262;
  padding-top: 100px;
  width: 100vw;
  height:100vh;
}
.calc {
  width: 300px;
  max-width: 100%;
  border-radius: 15px;
  background-color: #fff;
  padding: 100px 20px 20px 20px;
  overflow: hidden;
}
.calc__expression, .calc__result {
  display: block;
  text-align: right;
}
.calc__expression {
  color: #a2a2a2;
  font-size: 14px;
  margin-bottom: 20px;
}
.calc__result {
  font-size: 50px;
  margin-bottom: 30px;
}
@media (max-width: 500px) {
  body {
    align-items: center;
    padding: 0;
  }
}
</style>
