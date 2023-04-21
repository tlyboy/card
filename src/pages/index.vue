<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'IndexPage'
})

const card = ref(null)

const { elementX, elementY, elementWidth, elementHeight, isOutside } =
  useMouseInElement(card)

const style = computed<CSSProperties>(() =>
  isOutside.value
    ? {
        transform: 'rotateX(0deg) rotateY(0deg)'
      }
    : {
        transform: `rotateX(${
          ((elementY.value - elementHeight.value / 2) / elementHeight.value) *
          20
        }deg) rotateY(${
          ((elementX.value - elementWidth.value / 2) / elementWidth.value) * -20
        }deg)`
      }
)
</script>

<template>
  <main class="index">
    <div ref="card" class="card" :style="style"></div>
  </main>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  perspective: 300px;
}

.card {
  width: 270px;
  height: 480px;
  background: url('@/assets/images/card.webp') center / cover no-repeat;
  border-radius: 1rem;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);
}
</style>
