<template>
  <div class="product-info">
    <div class="banner">
      <img class="banner-img" :src="detail.image" alt="product.name" />
    </div>
    <div class="desc-box">
      <div class="price-box">
        <span class="price-text">$230</span>
        <span class="price-old">$300</span>
        <!-- <span>4.8</span> -->
        <span class="sales-text">已售 1000</span>
      </div>
      <h3 class="product-title">{{ detail.name }}</h3>
      <p class="product-desc">标签</p>
      <!-- sell-ranking -->
      <div class="cell-box">
        <span>榜单</span>
        <span>好评榜第1名</span>
      </div>

      <span class="cell-box">参数</span>
      <div class="brand-dogma">
        <span>假一赔三</span>
        <span>正品保证</span>
        <span>24小时内发货</span>
        <span>7天无理由退货</span>
      </div>
    </div>

    <!-- <div class="desc-box">
      <div class="cell-box">
        <span>送至</span>
        <span>北京市</span>
      </div>
      <div class="cell-box">
        <span>门店</span>
        <span>北京市</span>
      </div>
      <div class="cell-box">
        <span>运费</span>
        <span>免运费</span>
      </div>
    </div> -->

    <div class="remark-box">
      <span>评价</span>
    </div>

    <div class="column">
      <span>商品详情</span>
      <span>描述</span>

      <div class="column">
        <img src="https://via.placeholder.com/150" alt="product.name" />
        <img src="https://via.placeholder.com/150" alt="product.name" />
        <img src="https://via.placeholder.com/150" alt="product.name" />

        <img src="https://via.placeholder.com/150" alt="product.name" />
        <img src="https://via.placeholder.com/150" alt="product.name" />
        <img src="https://via.placeholder.com/150" alt="product.name" />
      
      </div>
    </div>

    <div class="bottom-actions">
      <div class="service">
        <span>1</span>
        <span>客服</span>
      </div>
      <button class="add-cart" @click="router.push('/cart')">加入购物车</button>
      <button class="now-buy" @click="router.push('/cart')">立即购买</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const detail = ref({
  id: 1,
  name: '这是商品的标签标题会很长很长很长很长很长很长很长很长很长很长很长很长',
  description: 'Description of product 1',
  price: 100,
  image: 'https://via.placeholder.com/150',
});

</script>

<style scoped>
.product-info {
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.banner {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: aliceblue;
}

.desc-box {
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 8px;
  background-color: white;
}

.price-box {
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
}
.price-text {
  margin-right: 4px;
  font-weight: 700;
  font-size: 24px;
  color: #f40;
}
.price-old {
  margin-right: auto;
  font-weight: 500;
  font-size: 15px;
  color: #969696;
  text-decoration: line-through;
}
.sales-text {
  font-size: 14px;
  color: #323232;
}

.product-title {
  color: #232323;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}
.product-desc {
  margin: 8px 0;
  font-size: 14px;
  color: #666;
}
.cell-box {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #323232;

  padding: 10px 0;
}
.brand-dogma {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #676767;
  margin-top: 10px;
}

.remark-box {
  display: flex;
  padding: 16px;
  background-color: white;
  margin-bottom: 8px;
}

.bottom-actions {
  width: 100vw;
  bottom: 0;
  z-index: 3;
  padding: 8px 0;
  position: fixed;
  display: flex;
  background-color: white;
}
.add-cart {
  flex: 1;
  border-radius: 6px 0 0 6px;
  padding: 12px 0;
  border: none;
  background-color: #FF9900;
  color: white;
  font-size: 16px;
  font-weight: 500;
}
.now-buy {
  flex: 1;
  border-radius: 0 6px 6px 0;
  margin-right: 8px;
  padding: 12px 0;
  border: none;
  background-color: #ff4500;
  color: white;
  font-size: 16px;
  font-weight: 500;
}
.service {
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
