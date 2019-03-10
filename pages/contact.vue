<template>
  <main id="content" class="container mx-auto">
    <h1 class="text-2xl m-4 leading-tight">
      Contact Us
    </h1>
    <div class="m-4 leading-normal max-w-sm">
      <address class="">
        301 Commerce Drive<br>
        Fairfield, CT 06825<br>
        <a href="tel:+12033338000">(203) 333-8000</a>
      </address>
      <form ref="contactForm" netlify @submit.prevent="handleSubmit">
        <label>
          Name
          <input
            v-model="form.name"
            type="text"
            name="name"
            class="block w-full rounded border shadow-inner h-8 p-2"
            required
            placeholder="Jane Doe"
          >
        </label>
        <label>
          Email
          <input
            v-model="form.email"
            type="email"
            name="email"
            class="block w-full rounded border shadow-inner h-8 p-2"
            required
            placeholder="jane@example.com"
          >
        </label>
        <label>
          Phone
          <input
            v-model="form.phone"
            type="tel"
            name="phone"
            class="block w-full rounded border shadow-inner h-8 p-2"
            pattern="[0-9-()]+"
            placeholder="(123) 555-0000"
          >
        </label>
        <label>
          Subject
          <input v-model="form.subject" type="text" name="subject" class="block w-full rounded border shadow-inner h-8 px-2" required>
        </label>
        <label>
          Address
          <textarea v-model="form.address" name="address" cols="30" rows="4" class="block w-full resize-y p-2 rounded border shadow-inner" />
        </label>
        <label>
          Comments
          <textarea
            v-model="form.comments"
            name="comments"
            cols="30"
            rows="6"
            class="block w-full resize-y p-2 rounded border shadow-inner"
            required
          />
        </label>
        <button type="submit" class="leading-none w-full sm:w-auto mt-2 px-4 py-2 bg-blue-lighter text-center text-blue-darker rounded shadow">
          Submit
        </button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  asyncData({ query }) {
    return {
      form: {
        name: '',
        email: '',
        phone: null,
        subject: query.job || '',
        address: '',
        comments: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="postcss" scoped>
input:invalid:not(:focus),
textarea:invalid:not(:focus) {
  @apply border border-red-lighter;
}
input:invalid:focus,
textarea:invalid:focus {
  @apply border border-red-lightest;
}

label {
  @apply block my-2;
}
</style>
