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
    <div>
      <img :src="imageSource" :alt="imageAlt" />
      <h1 class="title">
        {{ title }}
      </h1>
    </div>
    <p>
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.title {
  font-size: 24px;
}
</style>
