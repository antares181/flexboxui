<template>
  <div>
    <div v-if="loading" class="loading">
      <h1 style="color: black;">Loading {{ loading.toString() }}</h1>
    </div>
    <header>
      <nav>
        <h3 ref="logo" id="logo">HRMS</h3>
        <div ref="hamburger" class="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <section>
        <div ref="hero" class="hero">
          <img src="../assets/images/kurt-cotoaga-cqbLg3lZEpk-unsplash.jpg" alt />
          <h1 ref="headline" class="headline">Dream Big</h1>
        </div>
      </section>
    </header>
    <div ref="slider" class="slider"></div>
  </div>
</template>

<script lang="ts" src="./sample.ts"></script>

<style lang="scss">
.loading {
  min-height: 100vh;
  width: 100%;
  background: white;
  align-items: center;
  justify-content: space-around;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
.hamburger {
  width: 25px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: end;

  div {
    height: 3px;
    width: 100%;
    background: white;
  }
}
.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  background: linear-gradient(to left, orange, brown);
}
nav {
  display: grid;
  grid-template-columns: 10% 1fr 1fr 10%;
  min-height: 10vh;
  align-items: center;
}
#logo {
  grid-column: 2/3;
  font-size: 24px;
}
section {
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
}
.hero {
  height: 60%;
  width: 100%;
  position: relative;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.headline {
  position: absolute;
  top: 70%;
  left: 25%;
  font-size: 100px;
  transform: translate(-20%, -70%);
  color: white;
  z-index: 3;
}
.hero::after {
  content: "";
  background: black;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.3;
}
</style>