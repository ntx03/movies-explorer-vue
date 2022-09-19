<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div className="page">
    <router-view></router-view>
  </div>
</template>

<style>
.page {
  margin: 0 auto;
  position: relative;
  background-color: #202020;
  height: 110vh;
}
</style>
