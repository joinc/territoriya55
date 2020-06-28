<template>
  <footer>
    <div class="container">
      <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="3">
        <b-col>
          <p>
            Copyright © 2018-2020. All rights reserved. <br />Разработка
            <a href="https://www.facebook.com/yuriy.belyakov" target="_blank">
              Yuriy Belyakov
            </a>
          </p>
        </b-col>
        <b-col>
          <ul class="footer_links">
            <li>
              <a href="https://vk.com/omsktt" target="_blank"><font-awesome-icon :icon="['fab', 'vk']" /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/omsk.tt/" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-square']" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/territoriatvorchestva55/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            </li>
            <li>
              <scrollactive>
                <a href="/#home" class="scrollactive-item"><font-awesome-icon :icon="['fa', 'angle-double-up']" /></a>
              </scrollactive>
            </li>
          </ul>
        </b-col>
        <b-col>
          <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="license">
            <img src="https://i.creativecommons.org/l/by/4.0/88x31.png" style="width:88px; height:31px; border:0;" alt="Лицензия Creative Commons" title="Это произведение, автор которого — https://территория55.рф, доступно по лицензии Creative Commons «Attribution» («Атрибуция») 4.0 Всемирная." />
          </a>
        </b-col>
      </b-row>
      <b-row cols="1" cols-sm="1" cols-md="1" cols-lg="1">
        <b-col>
          <p>
            Использование материалов сайта возможно только при условии указания автора и ссылки на сайт.
          </p>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #303441;
  border-bottom: 5px solid #4A4F5E;
  color: #EB5055;
  padding: 25px 0 10px;
}
footer a { 
  color: #EB5055;
  text-decoration: none;
}
footer a:hover {
  color: #BA383D;
}
.footer_links {
  list-style: none;
  margin: 0;
  padding: 4px;
}
.footer_links a {
  font-size: xx-large;
}
.footer_links li {
  display: inline;
  margin-right: 5px;
  padding: 3px;
}
.scrollactive-nav {
  display: inline;
}
.footer_social > li { float: left; height: 25px; line-height: 25px; margin-right: 5px; text-align: center; width: 25px; }
.footer_social > li:hover a { color: #EB5055; }
.footer_social li.go_top { margin-left:15px; border:none }
</style>