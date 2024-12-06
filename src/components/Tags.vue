<script setup>
    const props = defineProps(["dataTags"]);
</script>
<template>
    <div class="news-popup-tags">
        <div class="tag active" v-for="data in dataTags" :color="data.values[0].color">
            <div class="tag-ic" v-if="data.values[0].src">
                <img src="../assets/icon-glyphs(1).svg" alt="" />
            </div>
            <div class="tag-text">
                <span>{{data.values[0].name}}</span>
            </div>
        </div>
    </div>    
</template>
<style>
.news-popup-tags {
    -webkit-box-flex: 0;
    -moz-column-gap: 8em;
    column-gap: 8em;
    display: flex;
    margin-top: 25em;
}
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
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .news-popup-tags[data-v-ebf45262] {
        -webkit-box-flex: 0;
        -moz-column-gap: 8em;
        column-gap: 8em;
        display: flex;
        margin-top: 15px;
    } 
}
@media only screen and (max-width: 767px) {
    .tag-pos[fontSize="14"] span {
        font-size: 12px;
        line-height: 12px;
    }
}
@media(max-width:428px){
    .news-popup-tags {
        -webkit-box-flex: 0;
        -moz-column-gap: 8em;
        column-gap: 8em;
        display: flex;
        margin-top: 16px;
    }   
}
</style>