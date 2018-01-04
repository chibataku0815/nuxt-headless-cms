<template lang="pug">
  el-container
    el-row.header(type='flex', justify='center', align='middle')
      el-col(:xs='20', :sm='20', :md='20', :lg='22', :xl='1',type='flex', justify='center')
        Logo
      el-col(:xs='4', :sm='4', :md='4', :lg='2', :xl='1',type='flex', justify='center', align='middle')
        MainNavi
    el-main
      nuxt
    el-footer Footer
</template>

<script>
  import Logo from '~/components/Logo'
  import MainNavi from '~/components/MainNavi'

  export default {
    components: {
      Logo,
      MainNavi
    }
  }
</script>

<style lang="scss">
  .header {
    padding: 0;
    min-height: 60px;
    box-shadow: 0 3px 10px rgba(0,0,0,.1);
  }
  .el-main {
    padding: 0;
  }
</style>
