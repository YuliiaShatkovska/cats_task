<script>
import { mapActions } from "vuex";
import { letterRegex } from "../assets/constants/regex";

import Loader from "../components/Loader.vue";

export default {
  name: "Login",
  components: {
    Loader,
  },

  data() {
    return {
      userName: "",
      errorMessage: "",
      timeoutId: null,
    };
  },

  methods: {
    ...mapActions(["setLoading"]),

    handleSubmit: function () {
      this.errorMessage = "";

      if (!this.userName) {
        this.errorMessage = "You should enter your name";
        return;
      }

      if (!letterRegex.test(this.userName)) {
        this.errorMessage = "Your name should contains from letters";
        return;
      }

      if (this.userName.length < 3 || this.userName > 15) {
        this.errorMessage = "Your name should contains from 3 to 15 letters";
        return;
      }

      this.setLoading(true);

      this.timeoutId = setTimeout(() => {
        localStorage.setItem(
          "cat_user",
          JSON.stringify({ name: this.userName })
        );

        this.userName = "";

        this.$router.push({ name: "facts" });

        this.setLoading(false);
      }, 2000);
    },

    cancelTimer() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
  },
};
</script>

<template>
  <div class="auth">
    <h1 class="auth__title">Log in</h1>

    <form @submit.prevent="handleSubmit" class="auth__form">
      <div class="auth__input-wrap">
        <label for="name" class="auth__label">Name</label>
        <input
          type="text"
          id="name"
          v-model="userName"
          @input="errorMessage = ''"
          class="auth__input"
          :class="{ error_input: errorMessage }"
          placeholder="Enter your name"
        />

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>

      <button type="submit" class="auth__btn">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.auth {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  @include on-desktop {
    gap: 48px;
  }

  &__title {
    color: var(--main-black-color);
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  &__input-wrap {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__label {
    color: var(--secondary-black-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
  }

  &__input {
    width: 327px;
    padding: 16px;

    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0);
    background: $light-violet;

    outline: none;

    &:hover,
    &:focus {
      border-color: $accent-color;
    }

    @include on-tablet {
      width: 378px;
    }

    &::placeholder {
      color: $grey-color;
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
    }
  }

  &__btn {
    width: 224px;
    height: 48px;
    border-radius: 6px;
    background-color: $btn-color;
    color: $main-white-color;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    border: none;
    cursor: pointer;
    margin: 0 auto;

    &:hover {
      background-color: $accent-color;
    }
  }
}

.error {
  color: red;
}

.error_input {
  border-color: red;
}
</style>
