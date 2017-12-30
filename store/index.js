import Vuex from 'vuex'

const store = () => new Vuex.Store({
  namespaced: true,
  state: {
    // 単純なテキストデータ
    message: '初期メッセージ'
  },
  validate () {
    this.debug && console.log('setMessageAction triggered with', this.state.message)

    console.log(this.state.message.length)
    if (this.state.message.length <= 3) {
      throw new Error('3文字以上入力してください')
    }
    return true
  },
  mutations: {
    // メッセージの書き換え
    setMessage (state, payload) {
      state.message = payload
    }
  },
  getters: {
    // message をそのまま使用
    message (state) {
      return state.message
    }
  }
})

export default store
