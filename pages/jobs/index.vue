<template>
  <main id="content" class="container mx-auto">
    <h1 class="text-2xl leading-tight m-4">
      Job Openings
    </h1>
  </main>
</template>

<script>
import Listings from '@/assets/data/jobs.json'

export default {
  data() {
    return {
      jobs: Listings
    }
  }
}
</script>

<style>
</style>
