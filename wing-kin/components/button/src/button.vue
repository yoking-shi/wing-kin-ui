<template>
  <button :class="classes">
    <span><slot name="icon"></slot></span>
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
  
  &-primary {
    background: $color-primary;
    color: $write;
  }

  &-success {
    background: $color-success;
    color: $write;
  }

  &-info {
    background: $color-info;
    color: $write;
  }

  &-danger {
    background: $color-danger;
    color: $write;
  }

  &-warning {
    background: $color-warning;
    color: $write;
  }

  &-blank {
    background: $color-blank;
    color: $black;
  }

  span {
    font-size: 1rem;
    display: inline-block;
    line-height: 1rem;
  }
}
</style>
