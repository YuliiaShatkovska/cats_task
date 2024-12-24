<script>
import { getFacts } from "../api/catsFacts.js";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { options } from "../assets/constants/selectOptions.js";
import { images } from "../assets/constants/images.js";
import { getVisibleFacts } from "../helpers/getVisibleFacts.js";
import Loader from "../components/Loader.vue";
import FactsItem from "../components/FactsItem.vue";

export default {
  name: "Facts",
  components: { vSelect, Loader, FactsItem },
  data() {
    return {
      facts: [],
      selectedValue: "All facts",
      options: options,
      query: "",
      page: 1,
      perPage: 10,
      totalPages: 34,
      isLoading: false,
    };
  },

  async mounted() {
    this.isLoading = true;
    try {
      const response = await getFacts();
      this.facts = response.data.map((data, index) => ({
        ...data,
        image: images[index % images.length],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  },

  computed: {
    getVisibleFacts() {
      const filteredFacts = getVisibleFacts(
        this.facts,
        this.query,
        this.selectedValue
      );

      const start = 0;
      const end = this.page * this.perPage;
      return filteredFacts.slice(start, end);
    },
  },

  methods: {
    async loadMoreFacts() {
      if (this.page <= this.totalPages) {
        this.page++;
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <div class="facts">
    <div v-if="isLoading" class="loader_box">
      <Loader />
    </div>

    <template v-else>
      <h1 class="facts__title">Facts About Cats To Share With Kids!</h1>

      <div class="facts__box">
        <div class="facts__input-wrap">
          <input
            type="search"
            placeholder="Search facts here"
            class="facts__input"
            v-model.trim="query"
          />

          <img
            src="../assets/images/icons/search.svg"
            alt="search icon"
            class="facts__input-icon"
          />
        </div>

        <div class="facts__select-wrap">
          <v-select
            :options="options"
            v-model="selectedValue"
            label="label"
            :reduce="(option) => option.value"
            :searchable="false"
          />
        </div>
      </div>

      <p v-if="getVisibleFacts.length === 0" class="no-facts">No facts found</p>

      <div v-else>
        <ul class="facts__list">
          <FactsItem
            v-for="(fact, index) in getVisibleFacts"
            :key="index"
            :fact="fact"
          />
        </ul>

        <button
          type="button"
          class="facts__btn"
          @click="loadMoreFacts"
          v-show="page < totalPages"
        >
          Load more facts
        </button>

        <button type="button" class="to-top" @click="scrollToTop">
          <img
            src="../assets/images/icons/top.svg"
            alt="to top"
            class="to-top-icon"
          />
        </button>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.loader_box {
  display: flex;
  justify-content: center;
  padding-top: 200px;
  height: 100vh;
}

.facts {
  position: relative;
  padding-top: 36px;
  padding-bottom: 40px;

  @include on-tablet {
    padding-top: 48px;
    padding-bottom: 30px;
  }

  @include on-desktop {
    padding-top: 56px;
    padding-bottom: 48px;
  }

  &__title {
    margin: 0 auto 20px;
    text-align: center;
    color: var(--main-black-color);
    font-size: 24px;
    line-height: 30px;

    @include on-tablet {
      font-size: 23px;
      line-height: 40px;
      margin-bottom: 24px;
    }

    @include on-desktop {
      font-size: 56px;
      line-height: 68px;
      margin-bottom: 32px;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 12px;

    @include on-tablet {
      gap: unset;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 26px;
    }

    @include on-desktop {
      margin-bottom: 32px;
    }
  }

  &__select-wrap {
    width: 100%;
    @include on-tablet {
      width: 300px;
      height: 48px;
    }
  }

  &__input-wrap {
    position: relative;
  }

  &__input-icon {
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 16px;
  }

  &__input {
    width: 327px;
    height: 48px;
    padding: 12px 16px 12px 49px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0);
    background-color: $light-violet;
    color: inherit;
    outline: none;

    @include on-tablet {
      width: 300px;
    }

    @include on-desktop {
      width: 373px;
    }

    &:hover,
    &:focus {
      border-color: $accent-color;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;

    @include on-tablet {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    @include on-desktop {
      gap: 40px 31px;
      margin-bottom: 56px;
    }
  }

  &__btn {
    margin: 0 auto;
    width: 260px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: $btn-color;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    font-family: inherit;
    background-color: transparent;

    border: 1px solid $btn-color;
    border-radius: 6px;

    transition: background-color 0.4s ease-in;

    @include on-desktop {
      width: 310px;
    }

    &:hover {
      background-color: $light-violet;
    }
  }

  .no-facts {
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    color: var(--main-black-color);
  }
}

.to-top {
  position: fixed;
  bottom: 100px;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 1px solid $accent-color;
  border-radius: 50%;

  width: 20px;
  height: 20px;

  z-index: 20;

  &:hover {
    background-color: $light-violet;
  }

  @include on-tablet {
    width: 30px;
    height: 30px;
    right: 10px;
  }

  @include on-desktop {
    width: 40px;
    height: 40px;
    right: 20px;
  }
}

.to-top-icon {
  width: 20px;
  height: 20px;

  @include on-desktop {
    width: 30px;
    height: 30px;
  }
}
</style>
