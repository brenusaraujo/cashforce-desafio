<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  imageSource: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="d-flex">
      <img :src="imageSource" :alt="imageAlt" />
      <h1 class="title text-d-blue mx-1">
        {{ title }}
      </h1>
    </div>
    <p class="text-darkish fs-l">
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.title {
  font-size: 24px;
}
</style>
