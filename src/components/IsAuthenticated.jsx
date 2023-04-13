import React from 'react'
import {Navigate  } from "react-router-dom";

const IsAuthenticated = () => {
    const userName = localStorage.getItem("userName");
      return userName == null ? (
        <Navigate  to="/landing" replace />
      ) : (
        <Navigate  to="/home" replace />
      );
}

export default IsAuthenticated;