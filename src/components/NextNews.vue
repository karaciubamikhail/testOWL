<script setup>
import Tags from './Tags.vue';
</script>
<template>
    <div class="news-card arrow-mask-hover" bg="gray" type-mask="" id="430" picture="https://bsk-admin.testers-site.ru/upload/iblock/83c/4r9pfd5uvv98d093h508qv9ufhqdpfpa/077A9084.jpg">
        <div class="arrow-mask" isbackground="true" size="80" type="right">
            <div class="arrow-mask-ic">
                <img src="../assets/icon-glyphs.svg" alt="" />
            </div>
        </div>
        <div class="news-card-cont">
            <div class="news-card-poster">
                <div class="tag-pos news-card-date" type="purple" fontsize="14">
                    <span>25.11.2024</span>
                </div>
                <div class="news-card-poster-img">
                <picture>
                    <img src="../assets/img.png" alt="" />
                </picture>
            </div>
        </div>
            <div class="news-card-inf">
                <a href="/news/" class="news-card-title">
                    <span>Правительство продлило «Льготную ипотеку» и расширило «Семейную».</span>
                </a>
            <div class="news-card-inf-tags">
                <Tags></Tags>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.arrow-mask-hover {
  cursor: pointer
}

.arrow-mask-hover:hover .arrow-mask {
  background: #fff;
  box-shadow: 0 12px 40px #1e1a230d,0 8px 24px #5912731a,0 8px 8px #3e4a5905
}

.arrow-mask {
  height: 80px;
  width: 80px;
  -webkit-box-flex: 0;
  align-items: center;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  transition: .3s ease-in-out;
  z-index: 2;
}

.arrow-mask:not([type-arr=light]) {
  background: #fff;
  box-shadow: 0 4px 12px #1e1a230d,0 2px 6px #5912731a,0 1px 2px #3e4a5905
}

.arrow-mask:not([type-arr=light]) .arrow-mask-ic {
  align-items: center;
  display: flex;
  font-size: 0;
  justify-content: center;
  width: 42%
}

.arrow-mask:not([type-arr=light]) .arrow-mask-ic img {
  width: 100%
}

.arrow-mask:not([type-arr=light]):hover {
  background: #fff;
  box-shadow: 0 12px 40px #1e1a230d,0 8px 24px #5912731a,0 8px 8px #3e4a5905
}

.arrow-mask[isBackground=false] {
  background: transparent;
  box-shadow: none
}

.arrow-mask-ic {
  font-size: 0;
  width: 40%
}

.arrow-mask-ic img {
  width: 100%
}

.arrow-mask[type-arr=light] {
  height: 52px;
  right: 6px;
  top: 6px;
  width: 52px;
}

.arrow-mask[size="80"] {
  border-radius: 24px;
  height: 80px;
  width: 80px;
}

@media only screen and (max-width: 767px) {
  .arrow-mask[size="80"] {
      border-radius:16px;
      height: 48px;
      width: 48px
  }
}
.h1 {
  color: #423f3f;
  margin-bottom: 32px;
}
.news-card {
  cursor: pointer;
  position: relative;
  transition: box-shadow .2s
}

.news-card .tag-pos {
  left: 16px;
  position: absolute;
  top: 16px;
  z-index: 2
}
.news-card[bg=gray] .news-card-cont {
  background: #f3f3f3
}

.news-card:hover .news-card-hover {
  opacity: 1
}

.news-card:hover .news-card-title span {
  color: #ca2250
}

.news-card:hover .news-card-poster-img img {
  transform: scale(1.1)
}

.news-card-title:before {
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.news-card-inf {
  -webkit-box-flex: 0;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding-bottom: 16px;
  padding-right: 24px;
  padding-top: 16px;
  width: 600px;
}

.news-card-cont {
  -webkit-box-flex: 0;
  background: #fff;
  display: flex;
  height: 228px;
  -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABCAAAADkCAYAAABJ2lXUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAoASURBVHgB7d3hURtZFoDR2ySwbATbzkBEYBGBZyIYTwT2RgCOwN4M7AjsiQARgXEE2xksGfS+hxqXYAxIoAut1jlVFw0aMeUqfvmb+143sUV938/Ky+sys2EOy7QBAADAvrgc5q7vq26YH/W1aZqLYPKaeKISHebl5U2Zt7EMDgAAALCJrsyizF8lRnwLJunRAWIIDydl5gEAAADb0ZU5LXNeYkQXTMbGAUJ4AAAA4Bl0ZU5LhPgSTMLaAaKEh3q84rTMuwAAAIDn0ZU5tg2x+9YKECU+tOXlLFwoCQAAwPOrl1j+6X6I3Xbw0AeGJ1t8D/EBAACAl1E38r+Wv5+eBjvr3gBRfrlvYxkfPN0CAACAl3YiQuyuO49grGw+AAAAwJj8u2maT8FO+WWAGO58sPkAAADAWNWLKRfBzvhbgBieduHOBwAAAMasK3NUIsRlsBN+dQfEaYgPAAAAjFtb5mOwM25sQAxHL/4bAAAAsBscxdgRtzcgzgIAAAB2x0mwE34GiOGRm20AAADA7piXv8/Og9H7eQSj/MLqxZOzAAAAgN2yaJrmOBi1qw2IEh9qeBAfAAAA2EWz4YmOjNj1EYx3AQAAALupxoc3wahdB4h5AAAAwO6aB6N2MBy/aAMAAAB21zwYtboB8ToAAABgt7XugRi3GiDaAAAAgN33j2C0aoDw9AsAAACmoA1GywYEAAAAU+EIxogJEAAAAEyFADFiBwEAAACQTIAAAAAA0gkQAAAAQDoBAgAAAEgnQAAAAADpBAgAAAAgnQABAAAApBMgAAAAgHQCBAAAAJBOgAAAAADSCRAAAABAOgECAAAASCdAAAAAAOkECAAAACCdAAEAAACkEyAAAACAdAIEAAAAkE6AAAAAANIJEAAAAEA6AQIAAABIJ0AAAAAA6QQIAAAAIJ0AAQAAAKQTIAAAAIB0AgQAAACQToAAAAAA0gkQAAAAQDoBAgAAAEgnQAAAAADpBAgAAAAgnQABAAAApBMgAAAAgHQCBAAAAJBOgAAAAADSCRAAAABAOgECAAAASCdAAAAAAOkECAAAAKbiMBgtAQIAAICpaIPREiAAAACYChsQIyZAAAAAMBWzYLQECAAAAKaiDUZLgAAAAGAqDvu+/1cwSgIEAAAAU+IYxkgJEAAAAEzJPBglAQIAAIApsQExUk1fBAAAAEzHP5umuQxGxQYEAAAAU/MmGB0BAgAAgKl5G4yOAAEAAMDUzPq+PwxGRYAAAABgamp8+CMYFQECAACAKfotGBUBAgAAgCma930/D0ZDgAAAAGCqToLRECAAAACYKlsQIyJAAAAAMGW2IEZCgAAAAGDKbEGMRFN+EX0AAADAdHVljpqmuQxejA0IAAAApq4t8y54UTYgAAAA2Bd1C+IieBE2IAAAANgXX8v/gz8MXoQAAQAAwL5ow1MxXowAAQAAwD553/f9++DZuQMCAACAfXTcNM0ieDY2IAAAANhH9T6IWfBsBAgAAAD2Ub2MskaINngWAgQAAAD7qi1zJkI8DwECAACAfdaW+e44Rj4BAgAAgH1Xj2N893SMXAIEAAAALH0sEeI0SOExnAAAAHDTRZnfm6bpgq2xAQEAAAA31fsg6uWUfwRbYwMCAAAA7va5zAfbEE8nQAAAAMDDPpT5LEQ8ngABAAAA6+nKfAkh4lEECAAAANjMZZlv4WjGRgQIAAAAeLxFLO+JOBcj7idAAAAAwHYsYrkZ8aPEiEVwgwABAAAAORZlLmJ5d8SPWB7d6EqcuIw9JEAAAADA87scZoy6WP7Zajw5r6/biCYCBAAAAPCQRSyf/vElHkmAAAAAANbVxSMfRSpAAAAAAJvqypxushEhQAAAAACPVe+J+H2dbYiDAAAAAHicWZmzvu9/e+iDAgQAAADwFG2ZryVCvL/vQwIEAAAAsA0f74sQ7oAAAAAAtqneCfHt9psCBAAAALBNl2WObl9M6QgGAAAAsE2HZb7eflOAAAAAALZt1vf9yeobjmAAAAAAGepRjFdN09RXGxAAAABAinoU4931NzYgAAAAgCw/tyBsQAAAAABZfm5BCBAAAABApnn94ggGAAAAkK21AQEAAABkmwsQAAAAQLaZIxgAAABAtgsbEAAAAEC2QxsQAAAAQDobEAAAAEA6AQIAAABIJ0AAAAAA6QQIAAAAIJ0AAQAAAKQTIAAAAIB0AgQAAACQToAAAAAA0gkQAAAAQDoBAgAAAEgnQAAAAADpBAgAAAAgnQABAAAApBMgAAAAgHQCBAAAAJBOgAAAAADSCRAAAABAOgECAAAASCdAAAAAAOkECAAAACCdAAEAAACkEyAAAACAdAIEAAAAkE6AAAAAANIJEAAAAEA6AQIAAABIJ0AAAAAA6QQIAAAAIJ0AAQAAAKQTIAAAAIB0AgQAAACQToAAAAAA0gkQAAAAQDoBAgAAAEgnQAAAAADpBAgAAAAgnQABAAAApBMgAAAAgHQCBAAAAJBOgAAAAADSCRAAAABAOgECAAAASCdAAAAAAOkECAAAACCdAAEAAACkEyAAAACAdAIEAAAAkE6AAAAAANIJEAAAAEA6AQIAAABIJ0AAAAAA6QQIAAAAIJ0AAQAAAKQTIAAAAIB0AgQAAACQToAAAAAA0gkQAAAAQDoBAgAAAEgnQAAAAADpBAgAAAAgnQABAAAApBMgAAAAgHQCBAAAAJBOgAAAAADSCRAAAABAOgECAAAASCdAAAAAAOkECAAAACCdAAEAAACkEyAAAACAdAIEAAAAkE6AAAAAANIJEAAAAEA6AQIAAABIJ0AAAAAA6QQIAAAAIJ0AAQAAAKSrAaILAAAAgDxdDRCXAQAAAJDnKkBcBAAAAECeCwECAAAAyHa1AXEeAAAAAHnOm/q17/v/lZfDAAAAANiurmmaV9eP4fwcAAAAANu3qF+uA8RfAQAAALB9/6lfrgJE0zSLGIoEAAAAwJZclOZw9fCLg5U3PwQAAADA9ny6/odm9d2+78/KyzwAAAAAnubq8snrbw5u/UtbEAAAAMA2HK9+cyNADHdBfAoAAACAx/tUGkO3+kZz+xN93x+Wl+9l2gAAAADYTFfmqASIy9U3m199skSINpYR4jAAAAAA1lOjw9Ht7YequesnSoSYxTJCAAAAAKzj6Pqxm7cd3PUTww/8GQAAAAAPe3tXfKiaeMCwCVEfz+k4BgAAAHBbPXZxfF98qB4MENVwJ0SNEG0AAAAALHWxjA/dQx88iDUM/6Gj8IhOAAAAYKk2gqN14kO11gbEKtsQAAAAsNcWZU5LeDjf5IfW2oBYVctGmVexvKDyIgAAAIB9sCgzL03geNP4UG28AXHbcEnlu/qHCFsRAAAAMCX1gsnPZb49JjqsenKAWDXEiNexDBGz4bUNAAAAYOy6WAaHi2HOH3qyxSb+D5qmrGtOJsL1AAAAAElFTkSuQmCC);
  mask-image: url(data:image/png;base64,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);
  -webkit-mask-position: right;
  mask-position: right;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  width: 100%
}

@media only screen and (max-width: 767px) {
  .news-card-cont {
      border-radius:16px;
      flex-direction: column;
      height: auto;
      -webkit-mask-image: none!important;
      mask-image: none!important
  }
}

.news-card-poster {
  padding: 4px;
  position: relative;
  width: 320px;
}

@media only screen and (max-width: 767px) {
  .news-card-poster {
      height:164px;
      width: 100%;
  }
}

.news-card-poster-img {
  border-radius: 24px;
  font-size: 0;
  height: 100%;
  overflow: hidden;
  width: 100%;
  will-change: transform;
}

@media only screen and (max-width: 767px) {
  .news-card-poster-img {
      border-radius:16px;
  }
}

.news-card-poster-img img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: .2s ease-in-out;
  width: 100%;
}

.news-card-inf {
  -webkit-box-flex: 0;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding-bottom: 16px;
  padding-right: 24px;
  padding-top: 16px;
  width: 600px;
}

@media only screen and (max-width: 767px) {
  .news-card-inf {
      margin-left:12px;
      width: 100%;
  }
}

.news-card-inf-tags {
  margin-top: auto;
  -webkit-box-flex: 0;
  -moz-column-gap: 8px;
  column-gap: 8px;
  display: flex;
}

@media only screen and (max-width: 767px) {
  .news-card-inf-tags {
      flex-wrap:wrap;
      margin-top: 16px;
      max-width: 80%;
      row-gap: 8px;
  }
}

.news-card-title:before {
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media only screen and (max-width: 767px) {
  .news-card-title {
      max-width:80%
  }
}

.news-card-title span {
  color: #423f3f;
 font-family: "Unbounded", serif;
 font-weight:700;
  font-size: 24px;
  line-height: 32px;
  transition: .2s ease-in-out;
}
.news-card-title{
    text-decoration: none;
}
@media only screen and (max-width: 767px) {
  .news-card-title span {
      font-size:16px;
      font-size: 14px;
      line-height: 18px;
      line-height: 16px;
  }

  .news-card .arrow-mask {
      inset: auto 0 0 auto
  }
}

.news-card[type-mask=big] .news-card-hover {
  height: 134%;
  width: 104.7%
}

.news-card[type-mask=big] .news-card-cont {
  -webkit-mask-image: url(data:image/png;base64,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);
  mask-image: url(data:image/png;base64,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)
}

.news-card-mob-btn-bg {
  bottom: 0;
  font-size: 0;
  position: absolute;
  right: 0;
  width: 80px;
  z-index: 1
}

.news-card-mob-btn-bg img {
  width: 100%
}
.tag-pos[type=purple] {
  background: #5b4481cc;
}
.news-card .tag-pos {
  left: 16px;
  position: absolute;
  top: 16px;
  z-index: 2;
}
.tag-pos {
  align-self: flex-start;
  background: #f2f2f2cc;
  border-radius: 14px;
  justify-content: flex-start;
  padding: 12px 18px;
  position: relative;
  z-index: 1;
}
.scroll__content{
  position: relative; 
  display: block; 
  height: auto
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
  overflow: hidden
}
@media only screen and (max-width: 767px) {
  .news-card-cont {
      border-radius: 16em;
      flex-direction: column;
      height: auto;
      -webkit-mask-image: none !important;
      mask-image: none !important;
  }
}
    .news-card {
  cursor: pointer;
  position: relative;
  transition: box-shadow .2s
}
.news-card .tag-pos {
  left: 16em;
  position: absolute;
  top: 16em;
  z-index: 2
}
.arrow-mask-hover {
  cursor: pointer
}

.arrow-mask-hover:hover .arrow-mask {
  background: #fff;
  box-shadow: 0 12rem 40rem #1e1a230d,0 8rem 24rem #5912731a,0 8rem 8rem #3e4a5905
}

.arrow-mask {
  height: 48rem;
  width: 48rem;
  -webkit-box-flex: 0;
  align-items: center;
  border-radius: 16rem;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  transition: .3s ease-in-out;
  z-index: 2
}

.arrow-mask:not([type-arr=light]) {
  background: #fff;
  box-shadow: 0 4rem 12rem #1e1a230d,0 2rem 6rem #5912731a,0 1rem 2rem #3e4a5905
}

.arrow-mask:not([type-arr=light]) .arrow-mask-ic {
  align-items: center;
  display: flex;
  font-size: 0;
  justify-content: center;
  width: 42%
}

.arrow-mask:not([type-arr=light]) .arrow-mask-ic img {
  width: 100%
}

.arrow-mask:not([type-arr=light]):hover {
  background: #fff;
  box-shadow: 0 12rem 40rem #1e1a230d,0 8rem 24rem #5912731a,0 8rem 8rem #3e4a5905
}

.arrow-mask[isBackground=false] {
  background: transparent;
  box-shadow: none
}

.arrow-mask-ic {
  font-size: 0;
  width: 40%
}

.arrow-mask-ic img {
  width: 100%
}

.arrow-mask[type-arr=light] {
  height: 52rem;
  right: 6rem;
  top: 6rem;
  width: 52rem
}

.arrow-mask[size="80"] {
  border-radius: 24rem;
  height: 80rem;
  width: 80rem
}

@media only screen and (max-width: 767px) {
  .arrow-mask[size="80"] {
      border-radius:16em;
      height: 48em;
      width: 48em
  }
}
.news-card[bg=gray] .news-card-cont {
  background: #f3f3f3
}
@media only screen and (max-width: 767px) {
  .news-card-cont {
      border-radius:16em;
      flex-direction: column;
      height: auto;
      -webkit-mask-image: none!important;
      mask-image: none!important
  }
}
@media only screen and (max-width: 767px) {
  .news-card-cont {
      border-radius: 16em;
      flex-direction: column;
      height: auto;
      -webkit-mask-image: none !important;
      mask-image: none !important;
  }
}

</style>