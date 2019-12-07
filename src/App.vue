<template>
  <v-app>
    <Header />
    <router-view></router-view>
    <!-- TODO: change header background from transparent to white when scrolling down -->
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  background: none;
}
</style>
