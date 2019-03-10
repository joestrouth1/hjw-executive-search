<template>
  <main id="content" class="container mx-auto">
    <h1 class="text-2xl leading-tight m-4">
      Job Openings
    </h1>
    <div>
      <ul class="list-reset">
        <li v-for="(job) in jobs" :key="job.title">
          <div class="shadow rounded mx-2 mb-4 p-4">
            <h2 class="text-xl font-light uppercase leading-tight">
              {{ job.title }}
            </h2>
            <p v-if="job.location" class="my-2 leading-normal">
              📍 {{ job.location }}
            </p>
            <nuxt-link
              :to="{ name: 'jobs-slug', params: { slug: job.slug } }"
              class="text-blue-darker block mt-2 leading-normal"
            >
              Learn more
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import listings from '@/assets/data/jobs.json'

export default {
  data() {
    return {
      jobs: listings
    }
  }
}
</script>

<style>
</style>
