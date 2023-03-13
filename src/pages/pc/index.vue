<script setup>
import { Pagination } from 'swiper'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import logo from './imgs/logo.png'

import banner1 from './imgs/banner1.png'
import banner2 from './imgs/banner2.png'
import banner3 from './imgs/banner3.png'
import banner4 from './imgs/banner4.png'

import more from './imgs/more.png'
import comment from './imgs/comment.png'
import connect from './imgs/connect.png'
import record from './imgs/record.png'
import company from './imgs/company.png'

let modules = reactive([Pagination])
let banners = reactive([banner1, banner2, banner3, banner4])

let conList = reactive([more, comment, connect, record, company])
</script>
<template>
  <div class="pc">
    <div class="ignore">
      <div class="head">
        <img class="logo" :src="logo" alt="" />
        <span>AI一键照片编辑制作</span>
      </div>
    </div>

    <swiper
      class="my-swipe"
      :modules="modules"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(b, i) of banners" :key="i">
        <img class="sw-img" :src="b" alt="" />
      </swiper-slide>
    </swiper>

    <div class="con-list">
      <img v-for="(c, i) of conList" :key="i" :src="c" alt="" />
    </div>
  </div>
</template>
<style lang="less" scope>
.ignore {
  .head {
    width: 100%;
    height: 57.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    color: #000;
    font-family: PingFangSC-Regular, PingFang SC;
    padding: 0 50px;
    box-sizing: border-box;
    .logo {
      width: 100px;
      height: 21.5px;
    }
  }
}
.my-swipe {
  width: 100%;
  --van-swipe-indicator-active-background: #000;
  --van-swipe-indicator-inactive-background: rgba(0, 0, 0, 0.3);
  --swiper-theme-color: #000000;
}
.sw-img {
  width: 100%;
}
.con-list {
  > img {
    width: 100%;
  }
}
</style>
