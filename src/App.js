import AppHeader from "./components/AppHeader/AppHeader";
import Hero from "./components/Hero/Hero";
import HeaderHeroWraper from "./components/HeaderHeroWraper/HeaderHeroWraper";
import Functionalities from "./components/Functionalities/Functionalities";
import Cards from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Organization from "./components/Organization/Organization";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import HomeFirstCase from "./components/HomeCases/HomeFirstCase";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import RestorePassword from "./components/RestorePassword/RestorePassword";
import Profile from "./components/Profile/Profile";
import SideNav from "./components/SideNav/SideNav";
import TableComponent from "./components/Table/Table";
import CaseDetail from "./components/caseDetail/CaseDetail";
import EvaluationProfile from "./components/evaluationProfile/EvaluationProfile";
import CheckingEmail from "./components/CheckingEmail/CheckingEmail";
import ForwardActivationEmail from "./components/ForwardActivation/ForwardActivationEmail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HeaderHeroWraper />
                            <Functionalities />
                            <Cards />
                            <Testimonials />
                            <Organization />
                            <Contact />
                            <Footer />
                        </>
                    }
                />

                <Route path="table">
                    <Route
                        path="/table"
                        element={
                            <>
                                <SideNav />
                                <TableComponent />
                            </>
                        }
                    />
                    <Route
                        path=":slug"
                        element={
                            <>
                                <SideNav />
                                <CaseDetail />
                            </>
                        }
                    />
                </Route>

                <Route
                    path="login"
                    element={
                        <>
                            <Login />
                        </>
                    }
                />
                <Route
                    path="register"
                    element={
                        <>
                            <Register />
                        </>
                    }
                />
                <Route
                    path="evaluationProfile"
                    element={
                        <>
                            <EvaluationProfile />
                        </>
                    }
                />
                <Route
                    path="checkingEmail"
                    element={
                        <>
                            <CheckingEmail />
                        </>
                    }
                />
                <Route
                    path="forwardAction"
                    element={
                        <>
                            <ForwardActivationEmail />
                        </>
                    }
                />

                <Route
                    path="caseRegister"
                    element={
                        <>
                            <SideNav />
                            <HomeFirstCase />
                        </>
                    }
                />
                <Route
                    path="forgotPassword"
                    element={
                        <>
                            <RestorePassword />
                        </>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <>
                            <SideNav />
                            <Profile />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
