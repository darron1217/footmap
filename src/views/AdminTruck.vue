<template>
  <div>
    <ion-list>
      <ion-item v-for="truck in trucks" v-bind:key="truck.id">
        {{ truck.name }}
      </ion-item>
    </ion-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trucks: [{ id:1, name: '푸드트럭1', description: '세상에서 제일 잘나가는 푸드트럭이다', foods:[{id:1,name:'양념치킨',price:10000}]}],
    }
  },
  methods: {
    
  },
}
</script>