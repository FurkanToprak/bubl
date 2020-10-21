import React from "react";

function ProfileHeader() {
    const name = "FirstName LastName";
    return (
      <div style={{
          height: "30%",
          backgroundColor: "#CAF1FE"
      }}>
          <div>
                <img style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "50%"
                }} alt={`${name}'s profile`} src={require("../Media/placeholder.png")}/>
          </div>
          <div style={{
              textAlign: 'center'
          }}>
              {name}
          </div>
      </div>
    );
  }
  
  export default ProfileHeader;