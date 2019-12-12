import {
  fetchRecipe,
  searchRecipes,
  getRandomRecipes,
  Config,
  SearchParams,
  RecipeParams,
  RandomRecipesParams
} from "@/api-utils/spoonacular-api";
import dotenv from "dotenv";

dotenv.config({ path: "../" });

const apiKey: string = process.env.VUE_APP_SPOONACULAR_API_KEY || "";
const baseURL: string = process.env.VUE_APP_SPOONACULAR_API_URL || "";

let config: Config = {
  apiKey,
  baseURL
};

describe("fetchRecipe({id: 210685})", () => {
  const params: RecipeParams = {
    id: 210685
  };

  let data: any, status: any, apiResponse: any;

  fetchRecipe(params, config).then(response => {
    const { data, staus } = response;
    const apiResponse = response;
  });

  it("should return status code 200", done => {
    if (apiResponse) {
      expect(status).toBe(200);
    }
    done();
  });

  it("should return data with id = 210685", done => {
    if (apiResponse) {
      expect(data.id).toBe(210685);
    }
    done();
  });
});

describe("fetchRecipe({id: 4588573)", () => {
  const params: RecipeParams = {
    id: 4588573
  };

  let data: any, errorResponse: any;

  fetchRecipe(params, config).then(error => {
    const { data } = error;
    const errorResponse = error;
  });

  it("should return status code 404", done => {
    if (errorResponse) {
      expect(data.code).toBe(404);
    }
    done();
  });
});

describe("searchRecipes({query: 'burger', number: 2})", () => {
  const params: SearchParams = {
    query: "burger",
    number: 2
  };

  let data: any, status: string, apiResponse: any;

  searchRecipes(params, config).then(response => {
    // extract variables from response
    const { data, status } = response;
    const apiResponse = response;
  });

  it("should return status code 200", done => {
    if (apiResponse) {
      expect(status).toBe(200);
    }
    done();
  });

  it("should return exactly 2 recipes", done => {
    if (apiResponse) {
      expect(data.results).toHaveLength(2);
    }
    done();
  });

  it("should return an object with specific indexes", done => {
    if (apiResponse) {
      expect(data.results.keys()).toContain("id");
      expect(data.results.keys()).toContain("title");
      expect(data.results.keys()).toContain("image");
      expect(data.results.keys()).toContain("servings");
      expect(data.results.keys()).toContain("readyInMinutes");
    }
    done();
  });
});

describe("getRandomRecipes({number: 5})", () => {
  const params: RandomRecipesParams = {
    number: 5
  };

  let data: any, status: string, apiResponse: any;

  getRandomRecipes(params, config).then(response => {
    // extract variables from response
    const { data, status } = response;
    const apiResponse = response;
  });

  it("should return status code 200", done => {
    if (apiResponse) {
      expect(status).toBe(200);
    }
    done();
  });

  it("should return 5 random recipes", done => {
    if (apiResponse) {
      expect(data.recipes).toHaveLength(5);
    }
    done();
  });
});
