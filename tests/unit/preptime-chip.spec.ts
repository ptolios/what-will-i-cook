import Vue from "vue"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import PreptimeChip from "@/components/common/PreptimeChip.vue"

const localVue = createLocalVue()

describe("PreptimeChip", () => {
  // let vuetify = new Vuetify;
  Vue.use(Vuetify)

  it("renders the correct prep time", () => {
    let wrapper = shallowMount(PreptimeChip, {
      slots: {
        default: "45"
      }
    })
    const chipContent = wrapper.find("[data-test='prep-chip']")
    expect(chipContent.text()).toContain("45 min")
  })

  it("renders the default prep time", () => {
    let wrapper = shallowMount(PreptimeChip)
    const chipContent = wrapper.find("[data-test='prep-chip']")
    expect(chipContent.text()).toContain("- min")
  })
})
