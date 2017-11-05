/**
 * Created by Administrator on 2017/11/4 0004.
 */

import navConfig from './nav.json'

const registerRoute = (navConfig) => {
    let route = []
    let navs = navConfig

    navs.forEach(nav => {
        if (nav.groups) {
            nav.groups.forEach(group => {
                group.list.forEach(nav => {
                    addRoute(nav)
                })
            })
        } else if (nav.children) {
            nav.children.forEach(nav => {
                addRoute(nav)
            })
        } else {
            addRoute(nav)
        }
    })

    function addRoute (page) {
        const component = page.path === '/changelog'
            ? require('@/pages/changelog.vue')
            : require('../docs' + page.path + '.md')

        let child = {
            path: page.path, // page.path.slice(1),
            meta: {
                title: page.title || page.name,
                description: page.description
            },
            name: 'component-' + (page.title || page.name),
            component: component.default || component
        }

        // route[index].children.push(child)
        route.push(child)
    }

    return route
}

let route = registerRoute(navConfig)

route = route.concat([{
    path: '/',
    redirect: '/installation'
}, {
    path: '*',
    redirect: '/installation'
}])

export default route
