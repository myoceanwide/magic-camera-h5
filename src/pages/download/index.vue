<template>
  <div class="ignore download">
    <img :src="top" alt="" />
    <img :src="con" alt="" />
    <img class="btn" :src="btn" alt="" />
    <div class="footer">
      <p>
        北京多可利可科技有限公司 版权所有
      </p>
      <p>
        京ICP备20019158号
      </p>
    </div>
  </div>
</template>
<script setup>
import top from './imgs/top.png'
import con from './imgs/con.png'
import btn from './imgs/btn.png'
</script>
<style lang="less" scope>
.ignore {
  min-height: 812px;
}
.download {
  width: 100%;
  height: 100vh;
  background: #0f0e14;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 100%;
  }
  .btn {
    margin-top: 120px;
    width: 688px;
    height: 118px;
  }
}

.footer {
  font-size: 9px;
  color: #797787;
  text-align: center;
}
</style>
