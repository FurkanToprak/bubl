import React, { useContext } from "react";
import { AuthContext } from '../Auth';
import { firestore } from "../firebase/test_cred";
import "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

function ProfileHeader() {
    const { currentUser } = useContext(AuthContext);
    const name = currentUser.displayName;
    const [userData] = useDocumentData(
      firestore.collection("users").doc(currentUser.uid)
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
                }} alt={`${name}'s profile`} src={currentUser.photoURL}/>
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