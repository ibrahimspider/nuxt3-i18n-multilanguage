<template>
  <section>
    <div>
      <h1>Home Page</h1>
      <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
      <nuxt-link class="link" to="/about">About Page</nuxt-link>
    </div>
  </section>
</template>
