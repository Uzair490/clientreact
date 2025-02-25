import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const Profile = () => {
  //context
 

  //get user data
  

  // form function
 
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <h1>profile page </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
