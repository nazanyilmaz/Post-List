import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  const [userPost, setUserPost] = useState([]);
  const model = new PopupModel();
  //popup acildiginda kullanicinin gonderilerini almak
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPost(data));
  }, []);
  return <PopupView userPost={userPost} user={user} close={close} />;
};

export default PopupController;
