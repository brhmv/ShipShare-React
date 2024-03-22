import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*------ Pages-----*/
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import ServiceDetails from "./Pages/ServiceDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/404";
import SendingProcess from "./Pages/SendingProcces";
import TravelingProcess from "./Pages/TravelingProcess";
import Privacy from "./Pages/Privacy";
import Stats from "./Pages/Stats";
import TravelerPosts from "./Pages/TravelersPosts";
import SenderPosts from "./Pages/SenderPosts";
import Post from "./Pages/Traveler-Post";
import CreateTravelerPost from "./Pages/CreateTravelerPost.jsx";
import CreateSenderPost from "./Pages/CreateSenderPost.jsx";
import Profile from "./Pages/Profile.jsx";
import Chat from "./Pages/Chat.jsx";
import User from "./Pages/UserView.jsx";
import SenderPost from "./Pages/Sender-Post.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import Notification from "./components/Notification.jsx";

class App extends Component {

  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/SendingProcess" element={<SendingProcess />} />
          <Route path="/TravelingProcess" element={<TravelingProcess />} />

          <Route path="/About" element={<About />} />
          <Route path="/Privacy" element={<Privacy />} />

          <Route path="/Team" element={<Team />} />
          <Route path="/Stats" element={<Stats />} />

          <Route path='/post/:postId' element={<Post />} />
          <Route path='/SenderPost/:postId' element={<SenderPost />} />

          <Route path='/profile/:userId' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/user/:userId' element={<User />} />
          <Route path="/chat/:userId?" element={<Chat />} />


          <Route path="/Contact" element={<Contact />} />
          <Route path="/Notification" element={<Notification />} />

          <Route path="/TravelersPosts" element={<TravelerPosts />} />
          <Route path="/SendersPosts" element={<SenderPosts />} />


          <Route path="/CreateTravelerPost" element={<CreateTravelerPost />} />
          <Route path="/ctp" element={<CreateTravelerPost />} />

          <Route path="/CreateSenderPost" element={<CreateSenderPost />} />
          <Route path="/csp" element={<CreateSenderPost />} />

          <Route path="resetPassword/:token?" element={<ResetPassword/>}/>
          <Route path="forgotPassword" element={<ForgotPassword/>}/>

          <Route path="/Faq" element={<Faq />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/ServiceDetails" element={<ServiceDetails />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

export default App;