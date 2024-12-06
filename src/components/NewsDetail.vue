<script setup>
    import Breadcrumbs from "./Breadcrumbs.vue";
    import Tags from "./Tags.vue";
    import NextNews from './NextNews.vue'
    import { defineProps, onMounted } from "vue";
    import { useRouter } from "vue-router";
    import { useDataStore } from "../stores/store";
    const datas = useDataStore();
    const props = defineProps(["slug"]);
    const router = useRouter();
    onMounted(async () => {
        await datas.FetchData(props.slug);
    });
    function closePop() {
        router.push("/news");
    }
</script>
<template>
    <div v-for="data in datas.getNext">
        {{ data }}
    </div>
    <div class="news">
        <div class="news__content">
            <div class="news-popup">
                <div class="news-popup-sect">
                    <div class="news-popup-sect__exit-btn" @click="closePop">
                        <img src="../assets/frame3000.svg" alt="exit" />
                    </div>
                    <div class="news-popup__scrollbar scroll">
                        <div class="news-popup__header container">
                            <div class="news-popup__breadcrumbs">
                                <Breadcrumbs :bread = "datas.getData"></Breadcrumbs>
                            </div>
                        </div>
                        <div class="container news-popup-content">
                            <Tags :dataTags="datas.getData.tags"></Tags>
                        <div class="h1 news-popup-title">
                            <h1>
                                {{ datas.getData.title }}
                            </h1>
                        </div>
                        <div class="news-popup-date">
                            <span>{{datas.getData.date}}</span>
                        </div>
                        <div class="news-popup-dynamic-block news-popup__next">
                            <div class="news-popup-h2">
                                <span>Следующая статья</span>
                            </div>
                            <NextNews :next = "datas.getNext"></NextNews>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.container {
    margin: 0 auto;
    width: calc(100% - 480em);
}
.h1 h1, .h1 h2, .h1 span {
    font-family: "Unbounded", serif;
    font-weight:700;
    font-size: 48px;
    line-height: 56px;
    margin: 0;
    color: #423F3F;
}
h1, h2, h3, h4, h5 {
    font-weight: 400;
}
.news-popup-h2 {
    color: #423f3f;
    font-family: "Unbounded", serif;
    font-weight:700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 32px;
}
@font-face {
    font-family: swiper-icons;
    font-style: normal;
    font-weight: 400;
    src: url(data:application/font-woff;charset=utf-8;base64,\ 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)
}

:root {
    --swiper-theme-color: #007aff;
}

:host {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
}
.news-card {
    cursor: pointer;
    position: relative;
    transition: box-shadow .2s;
}
.news-card[bg=gray] .news-card-cont {
    background: #f3f3f3;
}

.news-card:hover .news-card-hover {
    opacity: 1;
}

.news-card:hover .news-card-title span {
    color: #ca2250;
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
.news-card:hover .news-card-poster-img img {
    transform: scale(1.1);
}

.news-card .arrow-mask {
    inset: auto 0 0 auto;
  }

.scroll__content{
    position: relative; 
    display: block; 
    height: auto;
}
.news {
    background-color: #423f3fb3;
    height: 100vh;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 19;
}

.news__content {
    height: 100%;
    overflow: hidden;
}
.news-popup-sect__exit-btn {
    align-items: center;
    background-color: #ca2250;
    cursor: pointer;
    display: flex;
    font-size: 0;
    height: 47px;
    justify-content: flex-end;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABQCAYAAADRAH3kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgB7d3PbdRAFMfx33iJxDElTNIAyyniFOjA6SBUEKgg0AFUQDrAHSQXFNjLQgemAnIP6+GNyUpWpEj5s89+s+/3OVm5RfpqZjyz8oRFPDrEBlSzFFNC7BLmIWAuf4og8wKUfIv1fKfCIRKO8T8IMkgtgKGbGE7k8RhkyigBrF3GOs4CvnJEsGPUANa+79fvKuBUHndBk5okgKwfDSqcg4vFSVWYyKu2aVcd3sgi8SdoMpONAGvLWO9eBxkJuC6YxOQBZH0EFZbgdDC6yaaAoZdtc9VPB8AVaFQmAsjymiB1eAsalZkAsoO2aWQ7uQGNxlQAmZwlvAengtGYCyBPBbIy/QQahbkAsmcdPoOjwChMBpDfCuRI+QKkzmQA2d9VPwqQMhMbQXdZ7Nd/wAMjVWZHgIzTgD7TAciewAVIlekAqoDfIFWmA7he8ahYm+kAnnMvQJ3pt4BM3gQSSI3pEYD0MQDnGIBzDMA5BuAcA3COATjHAJxjAM4xAOcYgHMMwDkG4BwDcI4BOMcAnGMAzjEA5xiAcwzAOQbgHANwjgE4xwCcYwDOMQDnGIBzDMA5BuAcA3COATjHAJxjAM6VEAA/E6OIAThnPoAQ+KUwTfZHgIQWpMZ8AAn4BVJjPoCdjlfIaDIfQL47APxmsJoi9gH41XA9RQTAK2T0FBFAf4UML5JSUcxWMEcBHcUEwFFAh/mvhd+22KuXvGl8c4o7DVwlHIFTwcYUF0C+WXTV9dfL0gYU+XsAieAsdfgAerLi1gBDP2J9GiqG8BRFB5BJBLVE8AW8YPJRig8gu4x1nFU4l8cIepCtCGCNU8LDbdWPQg/a5qO8IezJ4xnoXrZqBBi6mRZey1HyCTeO7ra1AQytY5B/9kVKEkPo1woRhH+eyoqADy9wTgAAAABJRU5ErkJggg==);
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABQCAYAAADRAH3kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKiSURBVHgB7d3PbdRAFMfx33iJxDElTNIAyyniFOjA6SBUEKgg0AFUQDrAHSQXFNjLQgemAnIP6+GNyUpWpEj5s89+s+/3OVm5RfpqZjyz8oRFPDrEBlSzFFNC7BLmIWAuf4og8wKUfIv1fKfCIRKO8T8IMkgtgKGbGE7k8RhkyigBrF3GOs4CvnJEsGPUANa+79fvKuBUHndBk5okgKwfDSqcg4vFSVWYyKu2aVcd3sgi8SdoMpONAGvLWO9eBxkJuC6YxOQBZH0EFZbgdDC6yaaAoZdtc9VPB8AVaFQmAsjymiB1eAsalZkAsoO2aWQ7uQGNxlQAmZwlvAengtGYCyBPBbIy/QQahbkAsmcdPoOjwChMBpDfCuRI+QKkzmQA2d9VPwqQMhMbQXdZ7Nd/wAMjVWZHgIzTgD7TAciewAVIlekAqoDfIFWmA7he8ahYm+kAnnMvQJ3pt4BM3gQSSI3pEYD0MQDnGIBzDMA5BuAcA3COATjHAJxjAM4xAOcYgHMMwDkG4BwDcI4BOMcAnGMAzjEA5xiAcwzAOQbgHANwjgE4xwCcYwDOMQDnGIBzDMA5BuAcA3COATjHAJxjAM6VEAA/E6OIAThnPoAQ+KUwTfZHgIQWpMZ8AAn4BVJjPoCdjlfIaDIfQL47APxmsJoi9gH41XA9RQTAK2T0FBFAf4UML5JSUcxWMEcBHcUEwFFAh/mvhd+22KuXvGl8c4o7DVwlHIFTwcYUF0C+WXTV9dfL0gYU+XsAieAsdfgAerLi1gBDP2J9GiqG8BRFB5BJBLVE8AW8YPJRig8gu4x1nFU4l8cIepCtCGCNU8LDbdWPQg/a5qO8IezJ4xnoXrZqBBi6mRZey1HyCTeO7ra1AQytY5B/9kVKEkPo1woRhH+eyoqADy9wTgAAAABJRU5ErkJggg==);
    -webkit-mask-position: right;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    padding: 16px 15px;
    transition: opacity .3s ease-in;
    width: 88px;
}

.news-popup-sect__exit-btn:hover {
    opacity: .6;
}

.news-popup-sect__exit-btn img {
    height: 60px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 32px;
}

.news-popup {
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 20;
}

.news-popup .tag {
    cursor: default;
}
.news-popup-sect {
    background: #fff;
    border-radius: 16em 16em 0 0;
    height: calc(100% - 77em);
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    position: relative;
    top: 85em;
    width: calc(100% - 64em);
    will-change: transform;
}

.news-popup-sect:after {
    background: linear-gradient(180deg,#fff,#fff0);
    content: "";
    height: 32em;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
}
.news-popup .news-popup-sect__exit-btn {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 21;
}
.news-popup__scrollbar {
    height: 100%;
}

.news-popup-content {
    -webkit-box-flex: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 145em;
}

.news-popup__breadcrumbs {
    padding-top: 32em;
    transition: box-shadow .3s ease-in-out;
}

.news-popup__breadcrumbs.active {
    box-shadow: 0 4em 12em #1e1a230d,0 2em 6em #5912731a,0 1em 2em #3e4a5905;
}

.news-popup-tags {
    -webkit-box-flex: 0;
    -moz-column-gap: 8em;
    column-gap: 8em;
    display: flex;
    margin-top: 25em;
}

.news-popup-title {
    margin-bottom: 0;
    margin-top: 16em;
}

.news-popup-date {
    align-self: flex-start;
    margin-top: 16em;
    position: relative;
}

.news-popup-date:after {
    background: #cfcfcf;
    content: "";
    height: 1em;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
}

.news-popup-date span {
    color: #cfcfcf;
    font-family: "Onest", serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
}
.news-popup-dynamic-block {
    -webkit-box-flex: 0;
    display: flex;
    flex-direction: column;
}

.news-popup-dynamic-block:not(:first-child) {
    margin-top: 32em;
}

.news-popup-dynamic-sect .news-popup-dynamic-block {
    margin-top: unset;
}
.news-popup-h2 {
    color: #423f3f;
    font-family: "Unbounded", serif;
    font-weight:700;
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 56px;
}

.padding-top-0 {
    padding-top: 0;
}
.news-popup-date{
    width: 100%;
}
.news-card .tag-pos {
    left: 16em;
    position: absolute;
    top: 16em;
    z-index: 2;
    border-radius: 16px;
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .news-card-title span {
    color: #423f3f;
    font-family: "Unbounded", serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 32px;
    transition: .2s ease-in-out;
}
}
@media only screen and (min-width: 577px) and (max-width: 768px) {
    .news-popup-tags[data-v-ebf45262] {
        -webkit-box-flex: 0;
        -moz-column-gap: 8em;
        column-gap: 8em;
        display: flex;
        margin-top: 15px;
    }    
.news-popup-content[data-v-ebf45262] {
        overflow: auto;
        padding: 16em 16em 180em;
        width: 100%;
    }
}
@media only screen and (max-width: 767px) {
    .container{
        max-width: 91%;
    }
    .news-popup .news-popup-sect__exit-btn {
        right: -3px;
}
    .news-popup-sect__exit-btn {
        height:48px;
        -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwCAYAAABUtfevAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB3ZtPi9NAGMafpF2RxWXrSfAUvKgnK+tBEbH1A7jZu4IXvaoXb7ot3jz1ql568G7rF9j6D3ERtjf1osFDFfRQEQpak3HebCOhbLvZTN5sZn4wJIS2JL++M/MMSSwkYMtxKyPAWYC1DFtUhUDNsuBCb4ayebL1RYDeAaB72usMk3zRQkpI5NgOxa3L5sAM2n6A5jmv4837UGppcd467rplowFDkJXXkpXXnFV5mUgjXjtudcHGUxhSdXII8gKB+k5Vl5k04o3jOiUbGzBI3F+BtfNepx8/nqk0YlJxWzCEnSrORsbQvxIAt2EIMiU4toUNmviiY5lLI85+6rQg0IchkLg/2ykhhEUa4Qtzqo2Q6eAWjdm0zyZNjgE9bAdIYyjbuElbNmmEnGXaMAgBXKOxjVeahecwi4pfwiqrtLFvzmQQIeNHjVXawQzGtOXLF3CovoIsWDxzMvw9JQSqmYfbaTaPuQIKHH/1EPbSIgZ3H+Hns5dIC8k6ev9GuP/+1FUoMGSttCz49uBJuKULTlslcWEkX5FKCcxcP3yiAQV+f/yC8eAHli6thI326VhSpoWpVGtE4aURacVxCCO0kEbsVRyXMEIbaURScZzCCK2kEbuJ4xZGaCeNmCUuD2FE4XPaPOKSSFAUSTiFEYXPafMgMVHuyksYobW0/UJrafHuOey+CLcqK4ekaCttetD/eu/x/67KLU7L2XPWLKm65EqKdtJ2ixV5iNNKWtIcxi1OG2l7Da6c4rSQljbpc4krvDTVpRGHuMJHjizWkvGVw5E7V6BKGQWHLnY8+I7Ruw9QgcQFv0bh/QZV8liwf4Y5T0qGsHdPecPYuHuf7NKEQA+GwS7ND9CFYbBLC58gNKzacokcvkATBpGLNHpWTU7TLRhCbuG2HITV5sEAcpNGLzLISaEOA8Sxh9tpTHjXIPe1J82mk4prQ1Nyr7Q4m87aRViiIc+iBo3YV2kRky67KvMcvdVXkWdVRYH5ByzovkfclQJIAAAAAElFTkSuQmCC);
        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAAwCAYAAABUtfevAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB3ZtPi9NAGMafpF2RxWXrSfAUvKgnK+tBEbH1A7jZu4IXvaoXb7ot3jz1ql568G7rF9j6D3ERtjf1osFDFfRQEQpak3HebCOhbLvZTN5sZn4wJIS2JL++M/MMSSwkYMtxKyPAWYC1DFtUhUDNsuBCb4ayebL1RYDeAaB72usMk3zRQkpI5NgOxa3L5sAM2n6A5jmv4837UGppcd467rplowFDkJXXkpXXnFV5mUgjXjtudcHGUxhSdXII8gKB+k5Vl5k04o3jOiUbGzBI3F+BtfNepx8/nqk0YlJxWzCEnSrORsbQvxIAt2EIMiU4toUNmviiY5lLI85+6rQg0IchkLg/2ykhhEUa4Qtzqo2Q6eAWjdm0zyZNjgE9bAdIYyjbuElbNmmEnGXaMAgBXKOxjVeahecwi4pfwiqrtLFvzmQQIeNHjVXawQzGtOXLF3CovoIsWDxzMvw9JQSqmYfbaTaPuQIKHH/1EPbSIgZ3H+Hns5dIC8k6ev9GuP/+1FUoMGSttCz49uBJuKULTlslcWEkX5FKCcxcP3yiAQV+f/yC8eAHli6thI326VhSpoWpVGtE4aURacVxCCO0kEbsVRyXMEIbaURScZzCCK2kEbuJ4xZGaCeNmCUuD2FE4XPaPOKSSFAUSTiFEYXPafMgMVHuyksYobW0/UJrafHuOey+CLcqK4ekaCttetD/eu/x/67KLU7L2XPWLKm65EqKdtJ2ixV5iNNKWtIcxi1OG2l7Da6c4rSQljbpc4krvDTVpRGHuMJHjizWkvGVw5E7V6BKGQWHLnY8+I7Ruw9QgcQFv0bh/QZV8liwf4Y5T0qGsHdPecPYuHuf7NKEQA+GwS7ND9CFYbBLC58gNKzacokcvkATBpGLNHpWTU7TLRhCbuG2HITV5sEAcpNGLzLISaEOA8Sxh9tpTHjXIPe1J82mk4prQ1Nyr7Q4m87aRViiIc+iBo3YV2kRky67KvMcvdVXkWdVRYH5ByzovkfclQJIAAAAAElFTkSuQmCC);
        padding: 7px 10px;
        width: 77px;
    }
    .news-popup-sect__exit-btn img {
        height: 44px;
        width: 44px;
    }
    .news-popup .container {
        width:100%;
    }
    .news-popup-title h1{
        font-size: 24px;
        line-height: 28px;
    }
    .bread-item-txt{
        font-size: 24px;
    }
    .news-popup-sect {
        height:100%;
        top: 62em;
        width: calc(100% - 8em);
    }
    .news-popup-sect:after {
        display:none;
    }
    .news-popup-content {
        overflow:auto;
        padding: 30em 16em 180em;
        width: 100%;
    }
    .news-popup__breadcrumbs {
        align-items:center;
        background: #fff;
        display: flex;
        height: 48px;
        left: 0;
        padding-top: unset;
        position: relative;
        top: 16px;
        width: 100%;
        z-index: 20;
    }
    .bread-item:not(:last-child):after {
        background: #fff;
        border-radius: 100px;
        content: "";
        height: 4px;
        left: calc(90% + 8em);
        position: absolute;
        width: 4px;
    }
    .news-popup__breadcrumbs .bread {
        overflow: hidden;
        position: relative;
    }
    .news-popup__breadcrumbs .bread-item {
        flex-shrink: 0;
    }
    .news-popup-date span {
        font-size:14px;
        line-height: 14px;
    }
    .news-popup-h2 {
        font-size:20px;
        line-height: 22px;
        margin-bottom: 16px;
    }
    .news-card-cont {
        border-radius: 16px;
        flex-direction: column;
        height: auto;
        -webkit-mask-image: none !important;
        mask-image: none !important;
    }
    .news-popup .container {
        width: 100%;
    }
    .news-popup .exit-btn {
        position: absolute;
        right: -4px;
        top: 0;
        z-index: 21;
    }
    .news-popup .container {
        width: 100%;
    }
    .tag-pos {
        padding: 8px 16px;
    }
    .news-popup__scrollbar{
        overflow-y: scroll!important;
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
