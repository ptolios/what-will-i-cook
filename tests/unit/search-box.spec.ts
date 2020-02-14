import Vue from "vue"
import { mount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import SearchBox from "@/components/common/search/SearchBox.vue"

const localVue = createLocalVue()

describe("SearchBox", () => {
  // let vuetify = new Vuetify;
  // let SearchBoxComponent: BaseWrapper;
  const inputText1: String = "Eggs burgers chicken    "
  const inputText2: String = "Lebanese   Greek breakfast"
  Vue.use(Vuetify)

  let SearchBoxComponent = mount(SearchBox)

  it("sets the correct data", () => {
    const input = SearchBoxComponent.find("[data-test='textfield']")
    input.setValue(inputText1)
    expect(SearchBoxComponent.vm.$data.query).toBe(inputText1)
  })
  it("emits the correct payload", () => {
    SearchBoxComponent.vm.$emit("submitQuery", inputText1)
    expect(SearchBoxComponent.emitted().submitQuery).toBeTruthy()
    expect(SearchBoxComponent.emitted().submitQuery).toHaveLength(1)
    expect(SearchBoxComponent.emitted().submitQuery[0][0]).toBe(inputText1)
  })
  it("triggers the correct event", () => {
    SearchBoxComponent.find("[data-test='textfield']").setValue(inputText2)
    SearchBoxComponent.find("[data-test='searchbox-btn']").trigger("click")
    expect(SearchBoxComponent.emitted().submitQuery).toBeTruthy()
    expect(SearchBoxComponent.emitted().submitQuery).toHaveLength(2)
    expect(SearchBoxComponent.emitted().submitQuery[1]).toEqual([
      inputText2.replace(/\s+/g, " ").trim()
    ])
  })
})
