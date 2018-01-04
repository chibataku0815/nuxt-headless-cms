<template lang="pug">
  el-row.main-visual(type='flex')
    - var list = ['HTML5', 'CSS3', 'JavaScript', 'BEM','SCSS/SASS','Pug']
    each item, index in list
      el-col.main-visual__title #{item}
    el-col.main-visual__text 最新技術に対応したコーディングで高品質！シンプルな料金体系でご提供！
</template>


<style lang="scss">
@import "~assets/stylesheets/settings/color";
  .main-visual {
    min-height: 50vh;
    padding: 20px 0;
    flex-direction: column;
    position: relative;
    &__title {
      padding: 0 2vw;
      color: $color-primary;
      font-size: 30px;
      font-weight: bold;
      border-left: 5px solid $color-primary;
    }
    &__text {
      padding: 10px;
    }
  }
</style>

