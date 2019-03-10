<template>
  <main id="content" class="container mx-auto">
    <div class="mx-auto flex justify-center flex-row-reverse flex-wrap md:flex-no-wrap md:items-center">
      <img
        :src="slides[currentSlide]"
        alt="Where do you picture yourself next in your career?"
        class="w-full flex-no-shrink md:max-w-sm"
      >
      <div class="w-full md:w-auto mx-2 my-4 bg-white px-4 py-4 rounded shadow-md">
        <h1 class="text-xl leading-tight">
          Welcome to HJW Executive Search
        </h1>
        <p class="mt-2 text-black leading-normal">
          HJW Executive Search is one of the leading executive search firms in North America. By understanding both our client's staffing needs and our candidates' skill sets, our experienced team of recruiters will work closely with you to find the perfect match for your company or career.
        </p>
        <div class="buttons flex flex-row -mx-2 mt-4">
          <nuxt-link to="/jobs" class="flex-grow mx-2 no-underline leading-none py-2 bg-blue-lighter text-center text-blue-darker rounded shadow">
            Find a Job
          </nuxt-link>
          <nuxt-link to="/contact" class="flex-grow mx-2 no-underline leading-none py-2 bg-blue-lighter text-center text-blue-darker rounded shadow">
            Hire Someone
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="p-6 sm:mx-2 sm:mt-2 sm:mb-4 md:mr-0 sm:px-4 bg-blue-darkest text-grey-lightest">
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
        <li class="mt-2">
          VP Customer and Business Analytics
        </li>
        <li class="mt-2">
          Director Customer Strategy
        </li>
        <li class="mt-2">
          VP Loyalty Marketing
        </li>
        <li class="mt-2">
          Director of Loyalty Marketing
        </li>
      </ul>
      <p class="my-4 leading-normal max-w-md">
        HJW Executive Search has recently completed several key searches with several of our prestigious interactive marketing clients. The positions filled included but were not limited to:
      </p>
      <ul class="list-reset job-list sm:mx-4 leading-normal">
        <li class="mt-2">
          VP Client Service
        </li>
        <li class="mt-2">
          Director of Client Services
        </li>
        <li class="mt-2">
          Key Account Executive
        </li>
        <li class="mt-2">
          Sales Manager
        </li>
        <li class="mt-2">
          Account Manager
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import Slide1 from '@/assets/images/slide1.jpg'
import Slide2 from '@/assets/images/slide2.jpg'
import Slide3 from '@/assets/images/slide3.jpg'
import Slide4 from '@/assets/images/slide4.jpg'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      slides: [Slide1, Slide2, Slide3, Slide4]
    }
  },
  mounted() {
    this.slideInterval = setInterval(() => {
      if (this.currentSlide + 1 < this.slides.length)
        return (this.currentSlide += 1)
      this.currentSlide = 1
    }, 1500)
  },
  destroyed() {
    clearInterval(this.slideInterval)
  }
}
</script>

<style>
.job-list {
  list-style: circle;
}
</style>
