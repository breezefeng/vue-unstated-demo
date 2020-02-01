import { reactive } from '@vue/composition-api'
import { createContainer } from 'vue-unstated'

const useCounter = (initialState = { count: 0 }) => {
  const state = reactive(initialState)

  const increment = () => {
    state.count++
  }

  return { state, increment }
}

export default createContainer(useCounter)