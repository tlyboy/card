export const useCounterStore = defineStore('counter', () => {
  let count = $ref(0)

  function increment() {
    count++
  }

  return $$({
    count,
    increment
  })
})
