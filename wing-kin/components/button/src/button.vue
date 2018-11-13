<template>
  <button :class="classes"
          :disabled="disabled">
    <span>xxxx</span>
    <span>xxxxx</span>
  </button>
</template>

<script>
export default {
  name: 'wk-button',
  props: {
    type: {
      validator (value) {
        return ['primary', 'success', 'info', 'danger', 'warning', 'blank'].indexOf(value) > -1;
      },
      default: 'primary'
    },
    disabled: {
      defaut: false
    }
  },

  computed: {
    classes () {
      let classes = ['wk-btn']
      classes.push(`wk-btn-${this.type}`)
      return classes
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common.scss';

.wk-btn {
  background: $color-primary;
  border: 0;
  color: #fff;
  padding: 5px 10px;
  outline-color: aquamarine;
}
</style>
