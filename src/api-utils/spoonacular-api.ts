import axios from "axios";

interface Config {
  apiKey: string;
  baseURL: string;
}

interface SearchParams {
  query: string;
  number?: number;
  cuisine?: string;
  diet?: string;
  excludedIngredients?: string;
  intolerances?: string;
  offset?: number;
  limitLicense?: boolean;
  instructionsRequired?: boolean;
}

interface RecipeParams {
  id: number;
  includeNutrition?: boolean;
}

interface RandomRecipesParams {
  number: number;
  limitLicense?: boolean;
  tags?: string;
}

const searchRecipes = async (params: SearchParams, config: Config) => {
  const { apiKey, baseURL } = config;
  const URL = baseURL + "/search";
  try {
    const response = await axios.get(URL, {
      params: {
        apiKey,
        ...params
      }
    });
    return response;
  } catch (error) {
    console.error(
      "Could not fetch search results\n",
      error.response.data.code + " - " + error.response.data.message
    );
    return error;
  }
};

const fetchRecipe = async (params: RecipeParams, config: Config) => {
  const { apiKey, baseURL } = config;
  const { id, includeNutrition } = params;
  const URL = baseURL + id + "/information";
  try {
    const response = await axios.get(URL, {
      params: { apiKey, includeNutrition }
    });
    return response;
  } catch (error) {
    console.error(
      "Could not fetch Recipe data\n",
      error.response.data.code + " - " + error.response.data.message
    );
    return error;
  }
};

const getRandomRecipes = async (params: RandomRecipesParams, config: Config) => {
  const { apiKey, baseURL } = config;
  const { number } = params;
  const URL = baseURL + "/random";
  try {
    const response = await axios.get(URL, {
      params: { apiKey, ...params }
    });
    return response;
  } catch (error) {
    console.error(
      "Could not fetch random recipes\n",
      error.response.data.code + " - " + error.response.data.message
    );
    return error;
  }
};

export { fetchRecipe, searchRecipes, getRandomRecipes, Config, SearchParams, RecipeParams, RandomRecipesParams };
