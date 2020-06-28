<template>
  <div class="slides">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 20px #000"
      fade
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="slide in slides"
        :key="slide.id"
        :caption="slide.text"
        :img-src="slide.image"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
.slides {
  padding-top: 50px;
}
</style>

<script>
export default {
  data: function() {
    return {
      slides: [
        {
          id: 1,
          text: "Добро пожаловать на Территорию творчества!",
          image: require("@/assets/images/slider/1.jpg")
        },
        {
          id: 2,
          text: "Омская. Открытая. Для людей.",
          image: require("@/assets/images/slider/2.jpg")
        },
        {
          id: 3,
          text: "Поддержка профессионального и любительского искусства.",
          image: require("@/assets/images/slider/3.jpg")
        }
      ]
    };
  }
};
</script>
