<template>
  <div id="home">
    <Carousel />
    <Services />
    <About />
    <Projects />
    <Team />
    <Polls />
    <Documents />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Team from "@/components/Team.vue";
import Polls from "@/components/Polls.vue";
import Documents from "@/components/Documents.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Services,
    About,
    Projects,
    Team,
    Polls,
    Documents,
    Contact
  }
};
</script>
