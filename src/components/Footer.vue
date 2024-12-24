<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <a href="/">
          <img
            src="../assets/images/icons/logo_white.svg"
            alt="logo"
            class="logo"
          />
        </a>

        <div class="footer__top-nav">
          <div class="footer__top-wrap">
            <h3 class="footer__top-title">Built for catlovers</h3>
            <ul class="footer__top-links">
              <li>
                <a href="" class="footer__link">About</a>
              </li>
              <li>
                <a href="" class="footer__link">Blog</a>
              </li>
            </ul>
          </div>
          <div class="footer__top-wrap">
            <h3 class="footer__top-title">Social</h3>
            <ul class="footer__top-soc-links">
              <li>
                <a href="" class="footer__link">
                  <img
                    src="../assets/images/icons/instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="" class="footer__link">
                  <img
                    src="../assets/images/icons/facebook.svg"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href=""
                  ><img src="../assets/images/icons/youtube.svg" alt="youtube"
                /></a>
              </li>
              <li>
                <a href=""
                  ><img src="../assets/images/icons/twitter.svg" alt="twitter"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>@cats.com inc. All rights reserved.</p>
        <p class="footer__bottom-lang">
          English
          <span><img src="../assets/images/icons/arrow.svg" alt="" /></span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/variables.scss";

.footer {
  background-color: $bg-black;
  color: $main-white-color;

  padding-block: 32px;

  font-size: 14px;

  @include on-desktop {
    height: 191px;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-bottom: 55px;
    border-bottom: 1px solid $secondary-grey-color;

    @include on-tablet {
      gap: unset;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__top-nav {
    gap: 20px;
    display: flex;
    flex-direction: column;

    @include on-tablet {
      gap: 20px;
      flex-direction: row;
    }
  }

  &__top-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__top-title {
    font-size: 16px;
    line-height: 22px;
  }

  &__top-soc-links {
    display: flex;

    gap: 8px;

    @include on-desktop {
      gap: 24px;
    }
  }

  &__bottom {
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
  }

  &__bottom-lang {
    display: flex;
    gap: 3px;
  }

  &__link {
    &:hover {
      color: $accent-color;
      fill: $accent-color;
    }
  }
}
</style>
