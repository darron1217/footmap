<template>
<div>
  <ion-button color="warning" @click="openModal">Open Modal</ion-button>
  <vue-daum-map

      :appKey="appKey"

      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"

      @load="onLoad"

      @center_changed="onMapEvent('center_changed', $event)"
      @zoom_start="onMapEvent('zoom_start', $event)"
      @zoom_changed="onMapEvent('zoom_changed', $event)"
      @bounds_changed="onMapEvent('bounds_changed', $event)"
      @click="onMapEvent('click', $event)"
      @dblclick="onMapEvent('dblclick', $event)"
      @rightclick="onMapEvent('rightclick', $event)"
      @mousemove="onMapEvent('mousemove', $event)"
      @dragstart="onMapEvent('dragstart', $event)"
      @drag="onMapEvent('drag', $event)"
      @dragend="onMapEvent('dragend', $event)"
      @idle="onMapEvent('idle', $event)"
      @tilesloaded="onMapEvent('tilesloaded', $event)"
      @maptypeid_changed="onMapEvent('maptypeid_changed', $event)"

      style="width:400px;height:600px;">
    </vue-daum-map>
</div>
</template>

<script>
import Modal from './Modal.vue'
import VueDaumMap from 'vue-daum-map';
import config from './config';
import axios from 'axios';

export default {
  name: 'App',
    components: {VueDaumMap},
    data: () => ({
      appKey: config.appKey,
      center: {lat:33.450701, lng:126.570667},
      level: 3,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: [],
      mapObject: null,
      latitude: 1.1,
      longitude: 1.1,
      trucks:[{
        title: "새우 천국",
        id: 0,
        foods:[{
          id: 0,
          name: "새우 꼬치",
          price: 9000
        },{
          id: 1,
          name: "등심 꼬치",
          price: 7000
        }]
      },{
        title: "스탠딩 스테이크",
        id: 1,
        foods:[{
          id: 0,
          name: "등심 스테이크",
          price: 9000
        },{
          id: 1,
          name: "안심 스텡키ㅡ",
          price: 7000
        }]
      }]
    }),
  methods: {
    openModal(truckid) {
      console.log("@@@@@@@@@@@@@@@");
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            title: "Teeste",
            id: truckid,
            image: "",
            foods:[]
          }
        })
        .then(m => m.present())
    },
    onLoad (map) {
        if (navigator.geolocation) { // GPS를 지원하면
          navigator.geolocation.getCurrentPosition(function(position) {
          //alert(position.coords.latitude + ' ' + position.coords.longitude);
          // this.latitude = position.coords.latitude;
          // this.longitude = position.coords.longitude;
        }, function(error) {
          console.error(error);
        }, {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity
        });
        } else {
          alert('GPS를 지원하지 않습니다');
        } // 여기까지가 사용자 위치정보 가져오기!

        // axios.get('https://footmap-api-xfydr.run.goorm.io/?lat='+this.latitude+'+&lng='+this.longitude)
        // .then(res => {
        //   console.log(res.lat);
        // })
        

        // 지도의 현재 영역을 얻어옵니다
        var bounds = map.getBounds();

        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
        var boundsStr = bounds.toString();

        console.log('Daum Map Loaded', boundsStr);

        this.mapObject = map;

        var positions = [
          {
            content: '스탠딩 스테이크',
            latlng : new kakao.maps.LatLng(33.450705, 126.570677)
          },
          {
            content: '쉬림프 파티',
            latlng : new kakao.maps.LatLng(33.450936, 126.569477)
          },
          {
            content: 'Just Alone', 
            latlng: new kakao.maps.LatLng(33.450879, 126.569940)
          },
          {
            content: '타코야키 정',
            latlng: new kakao.maps.LatLng(33.451393, 126.570738)
          }
        ];

        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png"

        for (var i=0; i<positions.length; i++){
          var imageSize = new kakao.maps.Size(33,35);
          var markerImage = new kakao.maps.MarkerImage(imageSrc,imageSize);
          var marker = new kakao.maps.Marker({
            map: this.mapObject,
            position: positions[i].latlng,
            image: markerImage
          });
          var truckid = i;

          var leftContent = '<div class ="label"><span class="left"></span><span class="center">';
          // var leftContent = `<div @click="${}" class ="label"><span class="left"></span><span class="center">`;
          var rightContent = '</span><span class="right"></span></div>';

          var customOverlay = new kakao.maps.CustomOverlay({
            map: this.mapObject,
            position: positions[i].latlng,
            content: leftContent+positions[i].content+rightContent,
            yAnchor: 0.5,
            xAnchor: 0.57
          });


          // 이벤트 리스너로는 클로저를 만들어 등록합니다 
          // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
          kakao.maps.event.addListener(marker, 'mouseover', makeOverListener());
          // () => this.openModal(truckid));
        
        }

        function makeOverListener(){
          return function(){
            console.log("dsfsdfs");
          };
        }

        // function openModal(truckid) {
        //   return function(){
        //     console.log(truckid);
        //     // return this.$ionic.modalController
        //     //   .create({
        //     //     component: Modal,
        //     //     componentProps: {
        //     //       title: "Teeste",
        //     //       id: truckid
        //     //     }
        //     //   })
        //     //   .then(m => m.present())
        //   }
        // };
      },
      onMapEvent (event, params) {
        console.log(`Daum Map Event(${event})`, params);
      }
  },
}
</script>