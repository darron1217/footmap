<template>
  <div id="app">
    <ion-header>
      <ion-toolbar color="warning">
        <ion-title>푸트맵</ion-title>
        <ion-buttons slot="secondary">
          <ion-button @click="showLoginPrompt">
            <ion-icon slot="icon-only" name="person"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    openLogin() {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {
              content: 'New Content',
            },
            propsData: {
              title: 'New title',
            },
          },
        })
        .then(m => m.present())
    },
    // 로그인
    showLoginPrompt() {
      return this.$ionic.alertController
        .create({
          header: '관리자 확인',
          inputs: [
            {
              name: 'password',
              type: 'password',
              placeholder: '비밀번호를 입력하세요',
            },
          ],
          buttons: [
            {
              text: '취소',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: '확인',
              handler: () => {
                console.log('Confirm Ok');
                // 관리자페이지로 이동
                this.$router.push('/admin');
              },
            },
          ],
        })
        .then(a => a.present());
    },
  },
}


</script>

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
  
}
</style>
