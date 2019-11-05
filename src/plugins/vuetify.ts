import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      //     dark: true,
      light: {
        primary: "#FFC501",
        secondary: "#57C701",
        accent: "#7FC613"
      }
    }
  }
});
