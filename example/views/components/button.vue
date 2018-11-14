<template>
  <div class="button-page">
    <h3>基础按钮：</h3>
    <hr>
    <div class="base-btn">
      <wk-button primary>
        primary
      </wk-button>
      <wk-button success>
        success
      </wk-button>
      <wk-button info>
        info
      </wk-button>
      <wk-button danger>
        danger
      </wk-button>
      <wk-button warning>
        warning
      </wk-button>
      <wk-button blank>
        blank
      </wk-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-page{
  .base-btn {
    >.wk-btn {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>

