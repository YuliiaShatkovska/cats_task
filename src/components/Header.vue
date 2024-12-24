<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",

  props: {
    user: Object,
    toLogout: Boolean,
  },

  methods: {
    ...mapActions(["setTheme"]),
    toggleTheme() {
      const theme = this.theme === "light" ? "dark" : "light";
      this.setTheme(theme);
      this.applyTheme(theme);
      localStorage.setItem("theme", theme);
    },
    handleToggleLogout() {
      this.$emit("toggleLogout");
    },
    handleLogout() {
      this.$emit("logout");
    },

    applyTheme(theme) {
      if (theme === "light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    },
  },

  created() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.applyTheme(savedTheme);
      this.setTheme(savedTheme);
    }
    this.applyTheme(this.theme);
  },

  computed: {
    ...mapState({
      theme: (state) => state.theme,
    }),
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <a href="/">
          <img src="../assets/images/icons/logo.svg" alt="logo" class="logo" />
        </a>

        <button type="button" @click="toggleTheme" class="theme_btn">
          <img
            v-if="theme === 'light'"
            src="../assets/images/icons/sun-icon.svg"
            alt="theme light sun button"
            class="theme_icon"
          />
          <img
            v-else
            src="../assets/images/icons/moon-icon.svg"
            alt="theme dark moon button"
            class="theme_icon"
          />
        </button>

        <button
          type="button"
          v-if="$router.currentRoute.name !== 'login' && user !== null"
          class="header__btn"
          @click="handleToggleLogout"
        >
          <p style="padding-top: 10px">{{ user.name[0] }}</p>
        </button>
      </div>

      <div v-if="toLogout" class="logout">
        <button type="button" class="logout__btn" @click="handleLogout">
          Logout
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.header {
  height: 60px;
  display: flex;
  align-items: center;

  background-color: var(--light-violet);

  @include on-tablet {
    height: 95px;
  }

  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn {
    width: 32px;
    height: 32px;
    background-color: $accent-color;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    color: $main-white-color;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;

    @include on-tablet {
      width: 56px;
      height: 56px;
      font-size: 28px;
      line-height: 38px;
    }
  }
}

.logout {
  position: absolute;
  right: 24px;
  top: 40px;
  z-index: 20;

  @include on-tablet {
    right: 40px;
    top: 84px;
  }

  @include on-desktop {
    right: 74px;
  }

  &__btn {
    width: 116px;
    height: 48px;
    padding-inline: 16px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0);
    background-color: $light-violet;

    color: $secondary-black-color;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    text-align: start;
    z-index: 21;

    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: $accent-color;
      color: $main-white-color;
    }
  }
}

.theme_btn {
  background-color: transparent;
  border: none;
}

.theme_icon {
  width: 24px;
  height: 24px;
}
</style>
