import { shallowMount, mount } from "@vue/test-utils"
import NameInput from "@/views/NameInput.vue"
import Steps from "@/components/pageElements/Steps.vue"

describe("NameInput.vue", () => {
  const wrapper = shallowMount(NameInput, {
    propsData: {stepA: { id: 1 }}})
    const input = wrapper.find('input')

  test('Show correct warning msg when the input is invalid.', async () => {
    wrapper.setData({ firstname: ' '.repeat(3) })
    wrapper.setData({ lastname: '@$%%%' })
    await input.trigger('keydown')
    expect(wrapper.text()).toContain('Name too short.', 'Contain invalid characters.')
  })

  it('Become validated with legitimate name input.', async () => {
    wrapper.setData({ firstname: 'Lachlan' })
    wrapper.setData({ lastname: 'Murray' })
    await input.trigger('keydown')
    expect(wrapper.vm.valid).toBe(true)
  })
})