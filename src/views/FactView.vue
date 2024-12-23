<script>
export default {
  name: "Fact",
  data () {
    return {
      fact: {},
    };
  },

  mounted() {
    this.fact = this.$route.params.fact;
  },
};
</script>

<template>
  <div class="fact">
    <button type="button" @click="$router.go(-1)" class="fact__btn">
      <img src="../assets/images/icons/arrow_left.svg" alt="arrow back" />
      <p class="back">Back</p>
    </button>

    <div class="fact__wrapper">
      <img :src="`${fact.image}`" alt="cat image" class="fact__img" />
      <p class="fact__desc">{{ fact.fact }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.fact {
  padding-block: 27px 140px;

  &__btn {
    margin-bottom: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 2px;

    color: $secondary-black-color;
    line-height: 27px;
    font-size: 16px;
  }

  &__wrapper {
    width: 327px;
    margin: 0 auto;

    @include on-tablet {
      width: 600px;
    }

    @include on-desktop {
      width: 854px;
    }
  }

  &__img {
    width: 100%;
    margin-bottom: 40px;
  }

  &__desc {
    color: $secondary-black-color;
    font-size: 20px;
    line-height: 32px;
  }
}

.back {
  padding-top: 4px;
}
</style>
