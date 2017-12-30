<template lang="pug">
  div
    input(value='新しいメッセージ', ref='InputMessage')
    button(@click='update') click!
</template>

<script>
export default {
  methods: {
    update () {
      // ボタンを押したらコミット＠ ref を使っているけど勿論データバインドでも良い。
      this.$store.commit('setMessage', this.$refs.InputMessage.value)
    }
  }
}
</script>

