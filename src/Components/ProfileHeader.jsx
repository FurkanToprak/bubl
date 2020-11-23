import React from "react";
import { firestore } from "../firebase/test_cred";
import "firebase/firestore";
import {
  useDocumentData,
} from "react-firebase-hooks/firestore";

function ProfileHeader(props) {
    const name = props.currentUser.displayName;
    const [userData] = useDocumentData(
      firestore.collection("users").doc(props.currentUser.uid)
    );
    return (
      <div style={{
          backgroundColor: "#CAF1FE"
      }}>
          <div>
                <img style={{
                    height: 200,
                    width: "auto",
                    paddingTop: 20,
                    paddingBottom: 20,
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "50%"
                }} alt={`${name}'s profile`} src={props.currentUser.photoURL}/>
          </div>
          <div style={{
              textAlign: 'center',
              fontSize: "2em",
          }}>
              <div style={{ fontWeight: "bold"}}>{name}</div>
              {
                userData ? <div><i>{userData.bio}</i></div> :
                <div></div>
              }
          </div>
      </div>
    );
  }
  
  export default ProfileHeader;