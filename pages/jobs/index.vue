<template>
  <main id="content" class="container mx-auto">
    <h1 class="text-2xl leading-tight m-4">
      Job Openings
    </h1>
    <div>
      <ul class="list-reset">
        <li v-for="(job) in jobs" :key="job.title">
          <div class="shadow mx-2 mb-4 p-2">
            <h2 class="text-xl font-light uppercase leading-tight">
              {{ job.title }}
            </h2>
            <p v-if="job.location" class="font-bold my-2">
              📍 {{ job.location }}
            </p>
            <nuxt-link :to="{ name: 'jobs-slug', params: { slug: slugify(job.title) } }"
              class="text-blue-dark block mt-2"
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
import Listings from '@/assets/data/jobs.json'

export default {
  data() {
    return {
      jobs: Listings
    }
  },
  methods: {
    slugify(text) {
      return (
        text
          .toString()
          .toLowerCase()
          .trim()
          /* eslint-disable no-useless-escape */
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(/[^\w\-]+/g, '') // Remove all non-word chars
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
        /* eslint-enable no-useless-escape */
      )
    }
  }
}
</script>

<style>
</style>
