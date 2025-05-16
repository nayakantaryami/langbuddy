import React from "react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { axiosInstance } from "./lib/axios.js";
import PageLoader from "./components/PageLoader.jsx";
import { getAuthUser } from "./lib/api.js";
import useAuthUser from "./hooks/useAuthUser.js";
import Layout from "./components/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
import Footer from "./components/Footer.jsx";

const App = () => {
  //tan stack query
  //delete,create,update=>post put delete
  //get request=>useQuery

  const { isLoading, authUser } = useAuthUser();
  const {theme}=useThemeStore();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen " data-theme={theme}>
      {/* <button onClick={() => toast.success("Hello successful")}>
        Create a toast used for showing notifications popups
      </button> */}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <HomePage />
              </Layout>
              
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignupPage />
            ) : isOnboarded ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/onboarding" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage />
            ) : isOnboarded ? (
              <Navigate to="/" />
            ) : (
              <Navigate to="/onboarding" />
            )
          }
        />

        <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded?(
              <Layout showSidebar={true}>
                <NotificationsPage />
              </Layout>
            ):(
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} /> 
            )
          }
        />
        <Route
          path="/call/:id"
          element={isAuthenticated && isOnboarded?(<CallPage/>):(
            <Navigate to={!isAuthenticated?"/login":"/onboarding"}/>
          )}
        />
        <Route
          path="/chat/:id"
          element={
            isAuthenticated && isOnboarded?
            (
              <Layout showSidebar={false}>
              <ChatPage/>
              </Layout>
            ):(
             <Navigate to={!isAuthenticated?"/login":"/onboarding"}/>
            )
          }
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              isOnboarded ? (
                <Navigate to="/" />
              ) : (
                <OnboardingPage />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>


      <div data-theme={isAuthenticated?theme:"forest"} >
        <Footer/>
        </div>
      
      <Toaster />
    </div>
  );
};

export default App;
