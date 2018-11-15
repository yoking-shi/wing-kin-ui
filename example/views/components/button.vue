<template>
  <div class="button-page">
    <h3>基础按钮：</h3>
    <div class="base-btn">
      <wk-button primary>primary</wk-button>
      <wk-button success>success</wk-button>
      <wk-button info>info</wk-button>
      <wk-button danger>danger</wk-button>
      <wk-button warning>warning</wk-button>
      <wk-button blank>blank</wk-button>
    </div>
    <hr>

    <h3>圆角按钮</h3>
    <div class="base-btn">
      <wk-button primary round>主色调</wk-button>
      <wk-button success round>success</wk-button>
      <wk-button info round>info</wk-button>
      <wk-button danger round>danger</wk-button>
      <wk-button warning round>warning</wk-button>
      <wk-button blank round>blank</wk-button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.button-page {
  .base-btn {
    > .wk-btn {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>

