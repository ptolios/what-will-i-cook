import Vue from "vue"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import VueRouter from "vue-router"
import Vuetify from "vuetify"
import SearchForm from "@/components/common/search/SearchForm.vue"

Vue.config.silent = true
const localVue = createLocalVue()

describe("SearchForm", () => {
  const label: String = "Search by ingredient, cuisine, meal type etc."
  const inputText = "Eggs salad mexican"

  // localVue.use(Vuetify)
  localVue.use(VueRouter)

  const routes = [{ path: "/search", name: "search" }]

  const router = new VueRouter({ routes })
  const data = { query: inputText }

  let wrapper = shallowMount(SearchForm, {
    router,
    propsData: { label }
  })

  it("sets the correct props", () => {
    expect(wrapper.props("label")).toBe(label)
  })
  it("sets the correct data", () => {
    wrapper.setData(data)
    const searchform = wrapper.find("[data-test='searchform']")
    const searchbox = wrapper.find("[data-test='searchbox']")
    expect(searchbox.attributes("label")).toBe(label)
    expect(searchform.vm.$data.query).toBe(inputText)
  })
  it("submitQuery event emits the correct payload", () => {
    wrapper.setData(data)
    wrapper.vm.$emit("submitQuery", inputText)
    expect(wrapper.emitted().submitQuery).toBeTruthy
    expect(wrapper.emitted().submitQuery.length).toBe(1)
    expect(wrapper.emitted().submitQuery[0]).toEqual([inputText])
  })
})
