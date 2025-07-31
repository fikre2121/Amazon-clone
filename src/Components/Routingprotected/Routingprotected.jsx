import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Datacontext } from "../DataProvider/DataProvider";
function Routingprotected({ children, msg, redirect }) {
  const navigate = useNavigate();
  const { state , dispatch} = useContext(Datacontext);
  const { user } = state;
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);
return children
  
}

export default Routingprotected;
