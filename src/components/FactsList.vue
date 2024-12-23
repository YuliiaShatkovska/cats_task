<script>
export default {
  name: "FactsItem",

  props: {
    fact: Object,
  },
};
</script>

<template>
  <li class="facts__item">
    <router-link
      :to="{
        name: 'fact',
        params: { fact: fact },
      }"
    >
      <img :src="`${fact.image}`" alt="cat" class="facts__img" />
      <p class="facts__text" :class="{ 'facts__text-bold': fact.length < 100 }">
        {{ fact.fact }}
      </p>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.facts__item {
  border-radius: 6px;
  transition: background-color 0.4s ease-in;

  @include on-tablet {
    width: 300px;
  }

  @include on-desktop {
    width: 411px;
  }

  &:hover {
    background-color: $light-violet;
  }
}
.facts__img {
  width: 327px;
  border-radius: 6px;
  margin-bottom: 24px;

  @include on-tablet {
    width: 300px;
  }

  @include on-desktop {
    width: 411px;
  }
}

.facts__text {
  @include on-tablet {
    max-width: 270px;
    padding: 10px;
  }

  @include on-desktop {
    max-width: 379px;
    padding: 16px;
  }
}

.facts__text-bold {
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
}
</style>
