<template>
  <div>
    <h1>Child</h1>
    <div>
      <p>{{ state.count }}</p>
      <button @click="increment">++</button>
    </div>
  </div>
</template>
<script>
import counterContainer from '../use/counter'
export default {
  setup() {
    const { state, increment } = counterContainer.useContainer()

    return {
      state,
      increment
    }
  }
}
</script>