<script setup>
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
const headers = reactive({
  "X-rushbrush-website": language.value,
});

watch(language, (newVal) => {
  headers["X-rushbrush-website"] = newVal;
});
</script>

<template>
  <div>Switch Language</div>
  <select v-model="language">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === "object" ? item.name : item }}
    </option>
  </select>
</template>
