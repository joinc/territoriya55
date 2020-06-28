<template>
  <scrollactive class="header">
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-container>
        <b-navbar-brand href="/"
          ><img src="@/assets/images/logo_small.png" alt="Территория55.рф"
        /></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="navbar-right">
            <b-nav-item v-for="link in links" :key="link.id">
              <a :href="link.link" class="scrollactive-item">{{ link.text }}</a>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </scrollactive>
</template>

<style scoped>
.navbar {
  background-color: #f2f2f2 !important;
  border-bottom: 2px solid #4a4f5e;
  margin-left: auto;
  margin-right: auto;
}
.navbar-brand {
  margin-right: 3rem;
}
a.scrollactive-item {
  text-decoration: none;
  color: #a3a7b9;
  font-size: 1em;
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
}
a.scrollactive-item.is-active {
  color: #eb5055;
}
</style>

<script>
export default {
  data: function() {
    return {
      links: [
        {
          id: 1,
          text: "Главная",
          link: "/#home"
        },
        {
          id: 2,
          text: "Услуги",
          link: "/#services"
        },
        {
          id: 3,
          text: "Об организации",
          link: "/#about"
        },
        {
          id: 4,
          text: "Проекты",
          link: "/#projects"
        },
        {
          id: 5,
          text: "Команда",
          link: "/#team"
        },
        {
          id: 6,
          text: "Опросы",
          link: "/#polls"
        },
        {
          id: 7,
          text: "Документы",
          link: "/#documents"
        },
        {
          id: 8,
          text: "Контакты",
          link: "/#contact"
        }
      ]
    };
  }
};
</script>
