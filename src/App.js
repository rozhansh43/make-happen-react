import Header from "./components/header1/Header";

import AboutUs from "./pages/aboutUs/AboutUs";
import ArticleDetails from "./pages/articleDetails/ArticleDetails";
import ArticleList from "./pages/articleList/ArticleList";
import NotFound from "./pages/404/NotFound";
import ContactUs from "./pages/contactUs/ContactUs";
import FAQ from "./pages/FAQ/FAQ";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import MyProfile from "./pages/myProfile/MyProfile";
import PortfolioDetails from "./pages/portfolioDetails/PortfolioDetails";
import PortfolioList from "./pages/portfolioList/PortfolioList";
import Pricing from "./pages/pricing/Pricing";
import SignUp from "./pages/signUp/SignUp";


import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Header />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ArticleList" component={ArticleList} />
          <Route path="/ArticleDetails" component={ArticleDetails} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/MyProfile" component={MyProfile} />
          <Route path="/PortfolioDetails" component={PortfolioDetails} />
          <Route path="/PortfolioList" component={PortfolioList} />
          <Route path="/Pricing" component={Pricing} />
          <Route path="/Register" component={SignUp} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>

      </Router>


    </>

  );
}

export default App;
