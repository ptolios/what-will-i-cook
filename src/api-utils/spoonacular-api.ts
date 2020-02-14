/* eslint-disable */
import axios from "axios"

interface Config {
  apiKey: string
  baseURL: string
}

interface SearchParams {
  query: string
  number?: number
  cuisine?: string
  diet?: string
  excludedIngredients?: string
  intolerances?: string
  offset?: number
  limitLicense?: boolean
  instructionsRequired?: boolean
}

interface RecipeParams {
  id: number
  includeNutrition?: boolean
}

interface RandomRecipesParams {
  number: number
  limitLicense?: boolean
  tags?: string
}

interface SimilarRecipesParams {
  id: number
  number: number
}

const searchRecipes = async (params: SearchParams, config: Config) => {
  const { apiKey, baseURL } = config
  const URL = baseURL + "/search"
  try {
    const response = await axios.get(URL, {
      params: {
        apiKey,
        ...params,
      }
    })
    return response
  } catch (error) {
    return error
  }
}

function fetchRecipe(params: RecipeParams, config: Config) {
  const { apiKey, baseURL } = config
  const { id, includeNutrition } = params
  const URL = baseURL + id + "/information"
  return axios
    .get(URL, { params: { apiKey, includeNutrition } })
    .then(response => response)
    .catch(error => error)
}


function getRandomRecipes(params: RandomRecipesParams, config: Config) {
  const { apiKey, baseURL } = config
  const URL = baseURL + "/random"
  return axios
    .get(URL, { params: { apiKey, ...params } })
    .then(response => response)
    .catch(error => error)
}

function getSimilarRecipes(params: SimilarRecipesParams, config: Config) {
  const { apiKey, baseURL } = config
  const { id, number } = params
  const URL = baseURL + id + "/similar"
  return axios
    .get(URL, { params: { apiKey, ...params } })
    .then(response => response)
    .catch(error => error)
}

export {
  fetchRecipe,
  searchRecipes,
  getRandomRecipes,
  getSimilarRecipes,
  Config,
  SearchParams,
  RecipeParams,
  RandomRecipesParams,
  SimilarRecipesParams
}
