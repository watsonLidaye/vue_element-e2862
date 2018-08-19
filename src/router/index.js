import index from '@/components/pages/index/index'
import login from '@/components/pages/login/login'


const routes = [{
	path: '/',
	name: 'index',
	component: index
}, {
	path: '/login',
	name: 'login',
	component: login
}]

export default routes