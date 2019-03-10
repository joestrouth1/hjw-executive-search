<template>
  <div class="container mx-auto">
    <nuxt-link :to="{ name: 'jobs' }" class="text-blue-darker block leading-none my-4 mx-6 text-sm uppercase no-underline">
      View all jobs
    </nuxt-link>
    <main id="content">
      <div class="my-4 mx-6">
        <h1 class="text-2xl uppercase font-light leading-tight border border-t-0 border-r-0 border-l-0 border-blue-darker">
          {{ job.title }}
        </h1>
        <p v-if="job.location" class="my-2 leading-normal">
          📍 {{ job.location }}
        </p>
        <p class="leading-normal max-w-md mt-8">
          {{ job.summary }}
        </p>
      </div>
      <FeaturesList v-if="job.responsibilities" title="Responsibilities" :features="job.responsibilities" dark />
      <FeaturesList v-if="job.requirements" title="Requirements" :features="job.requirements" />
      <nuxt-link :to="{ name: 'contact', query: { job: job.title } }" class="block md:inline-block text-blue-darkest bg-blue-lighter leading-none mx-6 mb-4 py-2 px-4 text-center no-underline rounded shadow">
        Contact us
      </nuxt-link>
    </main>
  </div>
</template>

<script>
import listings from '@/assets/data/jobs.json'
import FeaturesList from '@/components/JobFeaturesList.vue'

export default {
  components: {
    FeaturesList
  },
  asyncData({ params }) {
    const job = listings.find(listing => listing.slug === params.slug)
    return { job }
  }
}
</script>

<style>
</style>
