import Home from "../pages/Home"
import Header from "../components/Layout/DefaultLayout/Header"
import Login from "../pages/Login"
import SignUp from "../pages/Signup"
import ForgotPassword from "../pages/Forgotpassword"
import Dashboard from "../pages/Admin/Dashboard"
import FormContribute from "../pages/FormContribute"

const publicRoutes =  [
    { path: '/', component: Home },
    { path: '/header', component: Header },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/forgotpassword', component: ForgotPassword },
    { path: '/formcontribute', component: FormContribute },

]

const privateRoutes =  [
    { path: '/admin', component: Dashboard },
]

export { privateRoutes, publicRoutes }