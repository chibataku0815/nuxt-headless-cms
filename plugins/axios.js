import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

const options = {
  text: 'Message from slack bot!!'
}

export default {
  created: function (resolve, reject) {
    axios.post('https://hooks.slack.com/services/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', JSON.stringify(options))
      .then((response) => {
        console.log('SUCCEEDED: Sent slack webhook: \n', response.data)
        resolve(response.data)
      })
      .catch((error) => {
        console.log('FAILED: Send slack webhook', error)
        reject(new Error('FAILED: Send slack webhook'))
      })
  }
}
