<template>
  <ion-button color="warning" @click="openModal">Open Modal</ion-button>
</template>

<script>
import Modal from './Modal.vue'

export default {
  methods: {
    openModal() {
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
  },
}
</script>