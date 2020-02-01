<template>
  <div>
    <h1>Parent</h1>
    <div>
      <p>{{ state.count }}</p>
      <button @click="increment">++</button>
    </div>
    <Child />
  </div>
</template>
<script>
import counterContainer from '../use/counter'
import Child from './Child.vue'

export default {
  components: {
    Child
  },
  setup() {
    const { state, increment } = counterContainer.provide()

    return {
      state,
      increment
    }
  }
}
</script>