<script setup>
</script>
<template>
    <div class="bread" color="dark">
        <div class="bread-item">
            <a href="/" class="bread-item-txt">главная</a>
        </div>
        <div class="bread-item">
            <a href="/news" class="router-link-active bread-item-txt">Новости</a>
        </div>
        <div class="bread-item">
            <span class="no-link bread-item-txt">Средняя ставка по ипотеке в России превысила 8%</span>
        </div>
    </div>    
</template>
<style>
.bread {
  -webkit-box-flex: 0;
  display: flex;
}

.bread[color=dark] .bread-item a,.bread[color=dark] .bread-item span {
  color: #423f3f;
  opacity: 1;
}

.bread[color=dark] .bread-item:last-child span {
  opacity: 0.4;
}

.bread[color=dark] .bread-item:after {
  background: #423f3f;
}

.bread-item {
  position: relative;
  -webkit-box-flex: 0;
  align-items: center;
  display: flex;
}

.bread-item:not(:last-child) {
  margin-right: 20px;
}

.bread-item:not(:last-child):after {
  background: #fff;
  border-radius: 100px;
  content: "";
  height: 4px;
  left: calc(100% + 8em);
  position: absolute;
  width: 4px;
}

.bread-item-txt {
  text-decoration: none;
  color: #fff;
  font-family: "Onest", serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
}
.bread-item-txt.no-link {
  opacity: 0.6;
}
</style>