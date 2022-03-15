<template>
  <div class="panel">

    <AppButton v-for="(value, id) in buttons" :button="{value, id}" :key="value" @action="onClick($event)" />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'AppPanel',
  components: {
    AppButton,
  },
  data() {
    return {
      buttons: ['C', '<', '%', '/', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '0', '00', '.', '='],
      expression: '0',
    }
  },
  methods: {
    onClick(value) {
      let str = this.expression
      let arr = str.split(' ')
      const idx = str.length - 1
      if (value !== '=') {


        if (Number(value)) {
          if (arr[arr.length - 1] === '0') {
            arr[arr.length - 1] = value
            str = arr.join(' ')
          } else {
            str += value
          }
          this.expression = str
        }
        if (value ==='0' || value ==='00') {
          str[idx] === ' ' ? str += '0' : (arr[arr.length - 1] === '0' ? false : str += value)
          this.expression = str
        }
        if (value === '.') {
          str[idx] === ' ' ? str += '0.' : (str[idx] === '.' ? false : str += value)
          this.expression = str
        }
        if (value === 'C') {
          this.expression = '0'
          this.$emit('onResult', 0)
        }
        if (value === '<') {
          const arr = this.expression.trim().split('')
          arr.pop()
          str = arr.join('')
          const i = str.length - 2
          if ((Number(str[i]) || Number(str[i]) === 0) && str[i] !== ' ') {
            str = str.trim()
          }
          this.expression = str || '0'
        }
        if (['%', '/', '*', '*', '-', '+'].includes(value)) {
          if (str[idx] === '.') {
            const arr = str.split('')
            arr.pop()
            str = arr.join('')
          }
          if (!(str[idx] === ' ')) {
            str += ` ${value} `
          }
          this.expression = str
        }
        // this.expression.split(' ').map(el => ).join(' ')
        this.$emit('onCalculate', this.expression || '0')
      } else {
        arr = str.trim().split(' ')
        if (!['/', '*', '+', '-', '%'].includes( arr[arr.length - 1] )) {
          if (str[idx] === '.') {
            const arr = str.split('')
            arr.pop()
            str = arr.join('')
            this.$emit('onCalculate', str || 0)
          }
          this.expression = str
          const getResult = new Function(`return ${this.expression}`)
          this.$emit('onResult', getResult())
        }
      }
    }
  }
}
</script>

<style scoped>
.panel {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>