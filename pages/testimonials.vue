<template>
  <main id="content" class="container mx-auto">
    <h1 class="text-2xl leading-tight m-4">
      Testimonials
    </h1>
    <div>
      <ul class="list-reset leading-normal flex flex-wrap">
        <li v-for="(testimonial, index) in testimonials" :key="index" class="testimonial mb-4 md:flex-grow">
          <div class="shadow rounded mx-2 p-4 h-full">
            <p class="text-lg mb-2">
              {{ testimonial.greeting }}
            </p>
            <p>{{ testimonial.body }}</p>
            <p class="text-sm mt-4 leading-tight">
              {{ testimonial.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import testimonials from '@/assets/data/testimonials.json'

export default {
  data() {
    return {
      testimonials
    }
  }
}
</script>

<style lang="postcss" scoped>
@screen md {
  .testimonial {
    flex-basis: 24rem;
  }
}
</style>
