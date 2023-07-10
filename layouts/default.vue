<template>
  <div>
    <div>
      <form>
        <label for="locale-select">{{ $t("language") }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </form>
    </div>
    <slot />
  </div>
</template>
<style>
form {
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 20px;
  left: 10px;
}
select {
    padding: 5px;
}
</style>
