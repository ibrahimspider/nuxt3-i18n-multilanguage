<template>
  <section>
    <div>
      <h1>About Page</h1>
      <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
      <nuxt-link class="link" to="/">Home page</nuxt-link>
    </div>
  </section>
</template>

<style>
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
h1 {
  margin-bottom: 50px;
  font-size: 50px;
}
.link {
  padding: 10px 15px;
  background-color: green;
  color: #fff;
  border-radius: 20px;
  text-decoration: none;
}
</style>
