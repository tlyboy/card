<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'HomePage'
})

const card = $ref(null)

const { elementX, elementY, elementWidth, elementHeight, isOutside } = $(
  useMouseInElement($$(card))
)

const style = $computed<CSSProperties>(() =>
  isOutside
    ? {
        transform: `rotateX(0deg) rotateY(0deg)`
      }
    : {
        transform: `rotateX(${
          ((elementY - elementHeight / 2) / elementHeight) * 20
        }deg) rotateY(${
          ((elementX - elementWidth / 2) / elementWidth) * -20
        }deg)`
      }
)
</script>

<template>
  <main class="home">
    <div ref="card" class="card" :style="style" />
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
}
</style>
