import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
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
                <Routes>
                    <Route end path="/mens" element={<MensScreen/>} />
                    <Route end path="/womens" element={<WomensScreen/>} />
                    <Route end path="/search" element={<SearchScreen/>} />
                    <Route
                        end
                        path="/character/:id"
                        element={<CharacterScreen/>}
                    />
                    <Route path="*" element={ <Navigate to="/mens" />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
};

export default AppRouter;
