import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import SimilarRecipe from "@/components/Recipe/SimilarRecipe.vue";

// Vue.use(Vuetify);
Vue.config.silent = true
const localVue = createLocalVue()

describe("SimilarRecipe", () => {
  const title: String = "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs";
  const imageUrl: String = "https://spoonacular.com/recipeImages/716429-556x370.jpg";
  const readyInMinutes: String = "45";
  // localVue.use(Vuetify);

  let wrapper = mount(SimilarRecipe, {
    propsData: {
      title,
      imageUrl,
      readyInMinutes
    },
    localVue: Vue,
    sync: false
  })

  it("sets the correct props", () => {
    expect(wrapper.props("title")).toBe(title);
    expect(wrapper.props("imageUrl")).toBe(imageUrl);
    expect(wrapper.props("readyInMinutes")).toBe("45");
  })

  it("renders the correct image", () => {
    const image = wrapper.find("v-img");
    expect(image.attributes("src")).toBe(imageUrl);
  })
  
  it("renders the correct title", () => {
    const renderedTitle = wrapper.find("v-card-title");
    expect(renderedTitle.text()).toBe(title);
  })
  
  it("renders the correct preparation time", () => {
    const prepTime = wrapper.find("preptime-chip");
    expect(prepTime.text()).toBe(readyInMinutes);
  })

});
