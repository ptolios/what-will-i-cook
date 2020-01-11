// Vuetify components were not being registered, so I found a workaround here:
// https://github.com/vuetifyjs/vuetify/issues/243#issuecomment-288467099
import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import RecipeCard from "@/components/RecipeCard.vue";

Vue.use(Vuetify);

describe("RecipeCard.vue", () => {
  const recipeProps = {
    id: 998877,
    title: "Blueberry, Chocolate & Cocao Superfood Pancakes",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    readyInMinutes: 45
  };
  const recipeCardComponent = shallowMount(RecipeCard, {
    propsData: {
      recipe: recipeProps
    }
  });

  it("sets the correct props", () => {
    expect(Object.keys(recipeCardComponent.props())).toContain("recipe");
    expect(recipeCardComponent.props("recipe")).toBeInstanceOf(Object);
    expect(recipeCardComponent.props("recipe").id).toEqual(recipeProps.id);
    expect(recipeCardComponent.props("recipe").title).toEqual(
      recipeProps.title
    );
    expect(recipeCardComponent.props("recipe").image).toEqual(
      recipeProps.image
    );
    expect(recipeCardComponent.props("recipe").readyInMinutes).toEqual(
      recipeProps.readyInMinutes
    );
  });

  it("renders the correct HTML nodes", () => {});
});
