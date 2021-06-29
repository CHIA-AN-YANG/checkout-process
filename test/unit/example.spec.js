import { shallowMount } from "@vue/test-utils";
import NameInput from "@/views/NameInput.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

describe("NameInput.vue", () => {
test('Block unvalidated input', () => {
  // render the component
  const wrapper = shallowMount(NameInput)

  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({ firstname: ' '.repeat(3) })

  // assert the error is rendered
  // expect(wrapper.find('.error').exists()).toBe(true)
  expect(errorMsg).toContain('Contain invalid characters.')
  // update the name to be long enough
  wrapper.setData({ firstname: 'Lachlan' })
  wrapper.setData({ lastname: 'Murray' })

  // assert the error has gone away
  // expect(wrapper.find('.error').exists()).toBe(false)
})

})
