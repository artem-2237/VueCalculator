<template>
  <button :class="{operator: isOperator}" :style="{color}" @click.prevent="$emit('action', button.value)">{{ button.value }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    button: Object,
  },
  computed: {
    color() {
      const val = this.button.value
      const id = this.button.id
      if (Number(val) || val === '.' || val === '0' || val === '00') {
        return '#a2a2a2'
      } else if ([0, 1, 2].includes(id)) {
        return '#000000'
      } else if ([3, 7, 11, 15].includes(id)) {
        return '#ea6162'
      } else {
        return '#ffffff'
      }
    },
    isOperator() {
      return this.color === '#ea6162'
    }
  },
}
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

button:last-child {
  background-color: #ea6162;
}

button:last-child:hover {
  background-color: #ea6162;
}
button:active {
  background-color: #dddddd;
}
.operator:active {
  background-color: #ea6162;
  color: #ffffff !important;
}

@media (min-width: 500px) {
  button {
    transition: .3s all;
  }
  button:hover {
    background-color: #dddddd;
  }
  .operator:hover {
    background-color: #ea6162;
    color: #ffffff !important;
  }
}
</style>