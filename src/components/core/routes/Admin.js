import DashboardContainer from '../../containers/views/DashboardContainer'
import AboutContainer from '../../containers/views/AboutContainer'
import RuleListContainer from '../../containers/views/RuleListContainer'

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-chart-pie-35",
        component: DashboardContainer,
        layout: "/admin",
    },
    {
        path: "/about",
        name: "About",
        icon: "nc-icon nc-circle-09",
        component: AboutContainer,
        layout: "/admin",
    },
    {
        path: "/rules",
        name: "Rules",
        icon: "nc-icon nc-circle-09",
        component: RuleListContainer,
        layout: "/admin",
    }
]
export default routes;