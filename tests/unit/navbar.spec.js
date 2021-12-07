import { mount } from '@vue/test-utils'
import MyNavBar from '@/components/MyNavBar.vue'
// import localvue
// import vuex
// create mock vuex store
// wrapper, get logout button
// test if logout.button.exists()

describe('MyNavBar.vue', () => {
	it('renders props.msg when passed', () => {
		const wrapper = mount(MyNavBar, {
			propsData: {
				msg: 'Hello World'
			}
		})
		expect(wrapper.text()).toMatch('Hello World')
	})
})
