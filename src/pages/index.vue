<script setup lang="ts">
defineOptions({
  name: 'HomePage'
})

const card = ref(null)

const { elementX, elementY, elementWidth, elementHeight, isOutside } =
  useMouseInElement(card)

const transform = computed(() => {
  if (isOutside.value) return `rotateX(0deg) rotateY(0deg)`

  const x = elementX.value - elementWidth.value / 2
  const y = elementY.value - elementHeight.value / 2
  const rotateX = (y / elementHeight.value) * 20
  const rotateY = (x / elementWidth.value) * -20

  return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})
</script>

<template>
  <main class="home">
    <div class="card" ref="card"></div>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  perspective: 300px;
}

.card {
  width: 270px;
  height: 480px;
  background: url('@/assets/images/card.webp') center / cover no-repeat;
  border-radius: 1rem;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
  transform: v-bind(transform);
}
</style>
