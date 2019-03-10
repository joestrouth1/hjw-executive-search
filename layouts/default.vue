<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style lang="postcss">
body {
  @apply w-full min-h-screen font-sans bg-grey-lightest text-black;
}
</style>
