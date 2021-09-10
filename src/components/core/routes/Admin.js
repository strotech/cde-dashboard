import DashboardContainer from '../../containers/views/DashboardContainer'
import AboutContainer from '../../containers/views/AboutContainer'
import RulesContainer from '../../containers/views/RulesContainer'
import TweetFeedContainer from '../../containers/views/TweetFeedContainer'

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
        component: RulesContainer,
        layout: "/admin",
    },
    {
        path: "/tweets",
        name: "Tweets",
        icon: "nc-icon nc-circle-09",
        component: TweetFeedContainer,
        layout: "/admin",
    }
]
export default routes;