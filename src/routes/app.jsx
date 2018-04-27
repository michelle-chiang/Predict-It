import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Notifications from 'views/Notifications/Notifications';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/table", name: "Table Data", icon: "pe-7s-menu", component: TableList },
    { path: "/tasks", name: "Today's To-Do List", icon: "pe-7s-note2", component: Notifications },
    { path: "/user", name: "Restaurant Profile", icon: "pe-7s-user", component: UserProfile },
	{ redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;