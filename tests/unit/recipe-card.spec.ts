import { shallowMount } from "@vue/test-utils";
import RecipeCard from "@/components/RecipeCard.vue";

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
