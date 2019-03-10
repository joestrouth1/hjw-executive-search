<template>
  <header class="flex flex-wrap header">
    <div id="skip">
      <a href="#content">Skip to main content</a>
    </div>
    <div class="p-4 mx-auto">
      <Logo />
    </div>
    <div class="w-full lg:hidden">
      <button
        :class="[navCollapsed ? 'border-grey text-grey-darker' : 'border-grey-dark',
                 'shadow block border rounded mx-auto mb-4 px-4 py-4 w-64 uppercase']"
        @click="navCollapsed = !navCollapsed"
      >
        Menu
      </button>
    </div>
    <nav :class="['nav w-full', {collapsed: navCollapsed}]">
      <ul class="list-reset flex flex-col lg:flex-row lg:justify-center">
        <li
          v-for="(route, index) in routes" 
          :key="route.path"
          class="text-center leading-loose lg:p-4"
        >
          <nuxt-link
            :to="route.path"
            :class="[{
                       // Inverse themes for even/odd rows
                       'bg-blue-lighter text-blue-darker': index % 2,
                       'bg-blue-darker text-blue-lighter': !(index % 2)
                     },
                     'uppercase block no-underline lg:bg-transparent lg:text-black p-2 lg:p-0',
            ]"
          >
            {{ route.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'TheHeader',
  components: {
    Logo
  },
  data() {
    return {
      navCollapsed: true,
      routes: [
        { name: 'Home', path: '/' },
        { name: 'Jobs', path: '/jobs' },
        { name: 'Our Process', path: '/process' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
        { name: 'About Us', path: '/about' }
      ]
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.navCollapsed = true
      }
    }
  }
}
</script>

<style lang="postcss">
.header {
  background: rgb(239, 248, 255);
  background: linear-gradient(
    0deg,
    rgba(239, 248, 255, 1) 0%,
    rgba(188, 222, 250, 1) 60%,
    rgba(108, 178, 235, 1) 100%
  );
}

#skip {
  @apply w-screen h-8 flex justify-center items-center bg-white;
}

#skip {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

#skip:focus-within {
  @apply w-screen h-8;
  left: 0;
}

.nav {
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  height: auto;
  max-height: 400px;
}
.collapsed {
  max-height: 0;
}
@media (min-width: 992px) {
  .collapsed {
    max-height: 400px;
  }
}
</style>
