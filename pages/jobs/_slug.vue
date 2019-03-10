<template>
  <div class="container mx-auto">
    <nuxt-link :to="{ name: 'jobs' }" class="text-blue-darker block leading-none m-4 text-sm uppercase no-underline">
      View all jobs
    </nuxt-link>
    <main id="content">
      <div class="m-4">
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
      <div class="p-6 bg-blue-darkest text-grey-lightest">
        <h3 class="m-0 text-2xl leading-tight font-light border-b-2">
          Recent News
        </h3>
        <p class="my-4 leading-normal max-w-md">
          HJW Executive Search has recently successfully completed several key retained searches with our Fortune 10 client. The positions filled included but were not limited to:
        </p>
        <ul class="list-reset job-list sm:mx-4 leading-normal">
          <li class="mt-2">
            VP CRM
          </li>
        </ul>
      </div>
      {{ job }}
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
