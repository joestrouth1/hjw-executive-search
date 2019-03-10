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
    <form @submit.stop.prevent="handleSubmit">
      <label>
        Name
        <input type="text" name="name" v-model="form.name"  class="block w-full rounded border h-8 p-2" required>
      </label>
      <label>
        Email
        <input type="email" name="email" v-model="form.email"  class="block w-full rounded border h-8 p-2" required>
      </label>
      <label>
        Phone
        <input type="tel" name="phone" v-model="form.phone" class="block w-full rounded border h-8 p-2" pattern="[0-9-()]+" >
      </label>
      <label>
        Subject
        <input type="text" name="subject" v-model="form.subject"  class="block w-full rounded border h-8 px-2" required>
      </label>
      <label>
        Address
        <textarea name="address" v-model="form.address" cols="30" rows="4" class="block w-full resize-y p-2 rounded border" ></textarea>
      </label>
      <label>
        Comments
        <textarea name="comments" v-model="form.comments" cols="30" rows="6" class="block w-full resize-y p-2 rounded border" required></textarea>
      </label>
      <button class="leading-none mt-2 px-4 py-2 bg-blue-lighter text-center text-blue-darker rounded shadow">Submit</button>
    </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: null,
        subject: '',
        address: '',
        comments: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      alert(this.form)
    }
  }
}
</script>

<style lang="postcss" scoped>
input:invalid,
textarea:invalid {
  @apply border border-red-lighter outline-none;
}
</style>
