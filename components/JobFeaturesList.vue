<template functional>
  <div :class="['p-4', props.dark ? 'bg-blue-darkest text-grey-lightest' : 'bg-blue-lightest text-black']">
    <h3 class="m-0 text-2xl leading-tight font-light border-b-2">
      {{ props.title }}
    </h3>
    <ul class="list-reset job-list sm:mx-4 leading-normal">
      <li v-for="feature in props.features" :key="feature" class="mt-2">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    title: {
      type: String,
      default: 'Responsibilities'
    },
    features: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
