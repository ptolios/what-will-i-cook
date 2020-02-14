import "@mdi/font/css/materialdesignicons.css"
import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      //     dark: true,
      light: {
        primary: "#FFC501",
        secondary: "#57C701",
        accent: "#7FC613",
        ingredients: "#F1F1F1"
      }
    }
  }
})
