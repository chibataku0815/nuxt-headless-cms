<template lang="pug">
  .main-navi
    i(type='text', @click='dialogVisible = true').main-navi.material-icons dehaze
    el-dialog(title='Tips', :visible.sync='dialogVisible')
</template>

<style lang="scss">
  .main-navi{
    padding: 10px;
    background: black;
  }
  .material-icons {
    color: white;
    font-size: 32px;
  }
  .el-dialog {
    width: 100%;
  }

</style>

<script>
  export default {
    data () {
      return {
        dialogVisible: false
      }
    }
  }
</script>