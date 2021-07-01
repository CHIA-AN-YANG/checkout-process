import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import NameInput from "@/views/NameInput.vue"
import store from '@/store'


describe("NameInput.vue", () => {
  const wrapper = shallowMount(NameInput, {
    propsData: {stepA: { id: 1 }},
    store
  })
  const input = wrapper.find('input')
  test('Show correct warning msg when the input is invalid.', async () => {
    wrapper.setData({ firstname: ' '.repeat(3) })
    wrapper.setData({ lastname: '@$%%%' })
    await input.trigger('keydown')
    expect(wrapper.vm.valid).toBe(false)
    expect(wrapper.text()).toContain("名字太短。")    
  })

  it('Become validated with legitimate name input.', async () => {
    wrapper.setData({ firstname: 'Lachlan' })
    wrapper.setData({ lastname: 'Murray' })
    await input.trigger('keydown')
    expect(wrapper.vm.valid).toBe(true)
  })
})