<script setup>
</script>
<template>
    <div class="tag active" color="blue">
        <div class="tag-text">
            <span>В СМИ</span>
        </div>
        </div>
            <div class="tag active" color="red">
                <div class="tag-ic">
                    <img src="../assets/icon-glyphs(1).svg" alt="" />
            </div>
            <div class="tag-text">
                <span>акции</span>
            </div>
        </div>
</template>
<style>
.tag[color=red] span {
    color: #ca2250;
}
.tag-text span {
    font-family: "Onest", serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
.tag-ic {
    bottom: 1px;
    font-size: 0;
    height: 18px;
    margin-right: 4px;
    position: relative;
    width: 18px;
}
.news-popup .tag {
    cursor: default;
}
.tag.active {
    opacity: 1;
}
.tag[color=red] {
    border: 1px solid #ca2250;
}
.tag.active {
    opacity: 1;
}
.tag {
    border-radius: 20px;
    -webkit-box-flex: 0;
    align-items: flex-end;
    cursor: pointer;
    display: flex;
    opacity: .6;
    padding: 4em 12px;
    position: relative;
    transition: opacity .2s ease-in-out;
}
@media only screen and (max-width: 767px) {
  .tag-pos[fontSize="14"] span {
      font-size: 12px;
      line-height: 12px;
  }
}
.tag-pos[type=purple] {
  background: #5b4481cc;
}
.tag-pos[type=purple] span {
  color: #fff;
}
.tag-pos[fontSize="14"] span {
  font-family: "Onest", serif;
  font-weight: 500;
  font-size: 14px;
  line-height:14px;
  text-transform: uppercase;
}
.tag[color=blue] {
    border: 1em solid #5b4481;
}
</style>