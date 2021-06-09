import Header from "./components/header/Header";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticleDetails from "./pages/articleDetails/ArticleDetails";

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
          <Route path="/aboutUs" component={AboutUs} />
          {/* <aboutUs /> */}
          {/* </Route> */}
          <Route path="/articleDetails" component={ArticleDetails} />
          {/* <articleDetails />
          </Route> */}
          {/* <Route path="./pages/articleList">
            <articleList />
          </Route>
          <Route path="./pages/contactUs">
            <contactUs />
          </Route>
          <Route path="./pages/FAQ">
            <FAQ />
          </Route>
          <Route path="./pages/home">
            <home />
          </Route>
          <Route path="./pages/login">
            <login />
          </Route>
          <Route path="./pages/myProfile">
            <myProfile />
          </Route>
          <Route path="./pages/portfolioDetails">
            <portfolioDetails />
          </Route>
          <Route path="./pages/portfolioList">
            <portfolioList />
          </Route>
          <Route path="./pages/404">
            <notFound />
          </Route> */}

        </Switch>

      </Router>


    </>

  );
}

export default App;
