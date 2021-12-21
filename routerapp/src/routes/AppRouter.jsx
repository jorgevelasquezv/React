import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";

const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MensScreen = lazy(() => import("../pages/MensScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const WomensScreen = lazy(() => import("../pages/WomensScreen"));

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<h1 className="text-center">Loading ...</h1>}>
                <Switch>
                    <Route exact path="/mens" component={MensScreen} />
                    <Route exact path="/womens" component={WomensScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route
                        exact
                        path="/character/:id"
                        component={CharacterScreen}
                    />

                    <Redirect to="/mens" />
                </Switch>
            </Suspense>
        </>
    );
};

export default AppRouter;
