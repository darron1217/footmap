<template>
  <div id="app">
    <ion-header>
      <ion-toolbar color="warning">
        <ion-title>푸트맵</ion-title>
      </ion-toolbar>
    </ion-header>
    <router-view/>
  </div>
</template>

<style>
/* Core CSS required for Ionic components to work properly */
@import "~@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
@import "~@ionic/core/css/normalize.css";
@import "~@ionic/core/css/structure.css";
@import "~@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
@import "~@ionic/core/css/padding.css";
@import "~@ionic/core/css/float-elements.css";
@import "~@ionic/core/css/text-alignment.css";
@import "~@ionic/core/css/text-transformation.css";
@import "~@ionic/core/css/flex-utils.css";

body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
