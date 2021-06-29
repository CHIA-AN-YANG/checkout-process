import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import NameInput from '../src/views/NameInput.vue'

describe('Mounted App', () => {
  const wrapper = mount(App);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('AYUDA')
  })
})

describe('First router page - NameInput', () => {
  const wrapper = mount(NameInput);

  it('Renders the correct markup', () => {
    expect(wrapper.html()).toContain('Mis Datos')
    expect(wrapper.html()).toContain('form')
  })
  it('Check name input', async () => {
    wrapper.setData({ firstname: 5, lastname: '&^' })
    await wrapper.vm.$nextTick()
    expect(errorMsg).toContain('Contain invalid characters.');
    expect(wrapper.contains('form')).toBe(true)
  })
})


