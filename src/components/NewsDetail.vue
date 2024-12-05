<script setup>
import { ref } from "vue";
import { onBeforeMount, computed } from "vue";
import { defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
function closePop() {
  router.push("/news");
}
</script>
<template>
  <div v-for="data in datas.getData">
    {{ data.name }}
  </div>
  <div class="news">
    <div class="news__content inner-content">
      <div class="news-popup" style="padding-right: 16px">
        <div class="news-popup-sect">
          <div class="exit-btn" @click="closePop">
            <img src="../assets/frame3000.svg" alt="exit" />
          </div>
          <div
            class="scroll news-popup__scrollbar"
            data-scrollbar="true"
            tabindex="-1"
            style="
              display: block;
              width: 100%;
              height: 100%;
              overflow: hidden;
              outline: none;
            "
          >
            <div
              class="scroll-content"
            >
              <div class="scroll__content">
                <div class="news-popup__header container_1058">
                  <div class="news-popup-content__breadcrumbs">
                    <div class="bread" color="dark">
                      <div class="bread-item">
                        <a href="/" class="bread-item-txt">главная</a>
                      </div>
                      <div class="bread-item">
                        <a
                          href="/news"
                          class="router-link-active bread-item-txt"
                          >Новости</a
                        >
                      </div>
                      <div class="bread-item">
                        <span class="no-link bread-item-txt"
                          >Средняя ставка по ипотеке в России превысила 8%</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container_1058 news-popup-content">
                  <div class="news-popup-tags">
                    <div class="tag-cat active" color="blue">
                      <div class="tag-cat-text">
                        <span>В СМИ</span>
                      </div>
                    </div>
                    <div class="tag-cat active" color="red">
                      <div class="tag-cat-ic">
                        <img src="../assets/icon-glyphs(1).svg" alt="" />
                      </div>
                      <div class="tag-cat-text">
                        <span>акции</span>
                      </div>
                    </div>
                  </div>
                  <div class="h1 news-popup-title">
                    <h1>
                        Средняя ставка по ипотеке в России превысила 8%
                    </h1>
                  </div>
                  <div class="news-popup-date">
                    <span>06.10.2023</span>
                  </div>
                  <div class="news-popup-dynamic-block news-popup__next">
                    <div class="news-popup-h2">
                      <span>Следующая статья</span>
                    </div>
                    <div
                      class="news-card arrow-mask-hover"
                      bg="gray"
                      type-mask=""
                      id="430"
                      picture="https://bsk-admin.testers-site.ru/upload/iblock/83c/4r9pfd5uvv98d093h508qv9ufhqdpfpa/077A9084.jpg"
                    >
                      <div
                        class="arrow-mask"
                        isbackground="true"
                        size="80"
                        type="right"
                      >
                        <div class="arrow-mask-ic">
                          <img src="../assets/icon-glyphs.svg" alt="" />
                        </div>
                      </div>
                      <div class="news-card-cont">
                        <div class="news-card-poster">
                          <div
                            class="tag-pos news-card-date"
                            type="purple"
                            fontsize="14"
                          >
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
                            <span
                              >Правительство продлило «Льготную ипотеку» и расширило «Семейную».</span
                            >
                          </a>
                          <div class="news-card-inf-tags">
                            <div class="tag-cat active" color="blue">
                              <div class="tag-cat-text">
                                <span>В СМИ</span>
                              </div>
                            </div>
                            <div class="tag-cat active" color="red">
                              <div class="tag-cat-ic">
                                <img
                                  src="../assets/icon-glyphs(1).svg"
                                  alt=""
                                />
                              </div>
                              <div class="tag-cat-text">
                                <span>акции</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
