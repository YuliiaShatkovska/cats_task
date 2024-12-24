<script>
import { mapState } from "vuex";
import Loader from "./components/Loader.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: { Loader, Footer, Header },

  data() {
    return {
      user: null,
      toLogout: false,
    };
  },

  watch: {
    $route() {
      this.checkUser();
    },
  },

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
    }),
  },

  methods: {
    checkUser() {
      const foundUser = localStorage.getItem("cat_user");

      if (foundUser) {
        this.user = JSON.parse(foundUser);
      }
    },

    toggleLogout() {
      this.toLogout = !this.toLogout;
    },

    logout() {
      localStorage.removeItem("cat_user");
      this.user = null;
      this.toLogout = false;
      this.$router.push({ name: "login" });
    },
  },

  created() {
    this.checkUser();
  },
};
</script>

<template>
  <div class="content">
    <div class="loader_box" v-if="isLoading">
      <Loader />
    </div>

    <template v-else>
      <Header
        :user="user"
        :toLogout="toLogout"
        @toggleLogout="toggleLogout"
        @logout="logout"
      />

      <div class="container">
        <transition name="slide">
          <router-view />
        </transition>
      </div>

      <Footer v-if="$router.currentRoute.name !== 'login'" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/mixins.scss";
@import "./assets/styles/variables.scss";

.content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.loader_box {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 36px;

  @include on-tablet {
    height: 67px;
  }
}
</style>
