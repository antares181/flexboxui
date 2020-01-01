<template>
  <div>
    <div v-if="loading" class="loading">
      <h1 style="color: black;">Loading {{ loading.toString() }}</h1>
    </div>
    <div class="splash"></div>
    <header>
      <nav>
        <img ref="logo" id="logo" src="../assets/icons/logo-flexbox.svg" alt />
        <img ref="hamburger" class="hamburger" src="../assets/icons/menu.svg" alt />
      </nav>
    </header>
    <section class="hero-container">
      <div class="hero-left">
        <div class="content-hero">
          <h1 ref="titleHero">
            Think Outside
            <br />The Box
          </h1>
          <div ref="heading" class="heading">
            <span>Flexboxui</span> is a place to learn about UI/UX design development in easy way and can be applied in real world software development
          </div>
          <div ref="subheading" class="subheading">
            Feel free to contact me
            <strong>harumshidiqi@gmail.com</strong>
          </div>
        </div>
        <div ref="contentFooter" class="content-footer">
          <div ref="titleFooter" class="flex-title-footer">flexboxui.com</div>
          <div class="social-media">
            <img ref="soc1" src="../assets/icons/youtube.svg" alt />
            <img ref="soc2" src="../assets/icons/behance.svg" alt />
            <img ref="soc3" src="../assets/icons/instagram.svg" alt />
          </div>
        </div>
      </div>
      <div class="prototype">
        <img ref="highFidelity" class="first-img" src="../assets/icons/high-fidelity.svg" alt />
        <img ref="lowFidelity" src="../assets/icons/low-fidelity.svg" alt />
      </div>
    </section>
    <div ref="heroRight" class="hero-right"></div>
  </div>
</template>

<script src="./home.ts" lang="ts"></script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loading {
  min-height: 100vh;
  width: 100%;
  background: white;
  align-items: center;
  justify-content: space-around;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
}
nav {
  z-index: 2;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-template-columns: 10% 1fr 1fr 10%;
  min-height: 10vh;
  align-items: center;
}
#logo {
  grid-column: 2/3;
  width: 25px;
}
.hamburger {
  justify-self: end;
}
.hero-container {
  display: grid;
  grid-template-columns: 2.8fr 2fr;
  min-height: 100vh;
  position: relative;
  align-items: center;
}
.hero-left {
  background: white;
  // z-index: 4;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  align-content: center;
}
.heading {
  font-size: 16px;
  margin-bottom: 30px;
}
.content-hero {
  grid-column: 2/3;
}
.content-hero h1 {
  margin-bottom: 30px;
  line-height: 1.2;
  font-size: 50px;
  font-weight: 600;
  color: #534fd3;
}
.social-media {
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20px;
  }
}
.subheading {
  margin-bottom: 30px;
}
.content-footer {
  position: absolute;
  width: 60%;
  bottom: 0;
  left: 0;
  background: #fafafa;
  height: 15vh;
  align-items: center;
  display: grid;
  grid-template-columns: 20% 1fr 15% 20%;
}
.flex-title-footer {
  color: grey;
  grid-column: 2/3;
}
.hero-right {
  position: absolute;
  background: #4a48e4;
  width: 40%;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: -1;
}
.prototype {
  // position: relative;
  right: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
}
.prototype img {
  width: 200px;
  margin-left: 0;
}
.first-img {
  width: 250px !important;
}
</style>