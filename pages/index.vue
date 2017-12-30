<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        store-lesson
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div id="app">
        <Message></Message>
        <InputMessage></InputMessage>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import InputMessage from '~/components/InputMessage.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    Logo,
    InputMessage,
    Message
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

