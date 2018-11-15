<template>
  <button :class="classes">
    <slot name="icon"></slot>
    <span><slot></slot></span>
  </button>
</template>

<script>
// 颜色类型
const colorTypes = ['primary', 'success', 'info', 'danger', 'warning', 'blank']

export default {
  name: 'wk-button',

  data() {
    return {
    }
  },

  computed: {
    classes () {
      let classes = ['wk-btn']

      if (this.$attrs.hasOwnProperty('round')) {
        classes.push(`wk-btn-round`)
        delete this.$attrs.round
      }

      if (this.$attrs.hasOwnProperty('block')) {
        classes.push(`wk-btn-round`)
        delete this.$attrs.round
      }

      colorTypes.forEach(color => {
        if (this.$attrs.hasOwnProperty(color)) {
          classes.push(`wk-btn-${color}`)
          delete this.$attrs[color]
        }
      })

      return classes
    }
  },

  mounted() {
    if (this.$attrs.hasOwnProperty('disabled')) {
      this.$el.setAttribute('disabled', '')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/common.scss';

.wk-btn {
  border: 0;
  padding: 0.5rem 1rem;
  min-width: 5rem;
  min-height: 2rem;
  color: $write;
  
  &-primary {
    background: $color-primary;
  }

  &-success {
    background: $color-success;
  }

  &-info {
    background: $color-info;
  }

  &-danger {
    background: $color-danger;
  }

  &-warning {
    background: $color-warning;
  }

  &-blank {
    background: $color-blank;
    color: $black;
  }

  &-round {
    border-radius: 1vw;
  }

  span {
    font-size: 1rem;
    display: inline-block;
    line-height: 1.5rem;
  }
}
</style>
