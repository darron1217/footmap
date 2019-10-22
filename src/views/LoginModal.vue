<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>

        <ion-buttons slot="primary">
          <ion-button @click="closeModal">Close Modal</ion-button>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    <ion-content>
      {{ content }}
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  methods: {
    closeModal() {
      return this.$ionic.modalController
        .dismiss()
    },
  }
}
</script>