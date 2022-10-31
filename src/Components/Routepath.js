import React from "react";
import ProfileForm from "./ManageProfile/ProfileForm";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function Routepath() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="inbox" exact element={<ProfileForm />} />
    </Routes>
  );
}

export default Routepath;
