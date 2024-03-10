import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

//kullanici etkilesimi ile tetiklenecek fonksiyon
const ListController = () => {
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  //ListModel icinde tanimlanan getPosts fonsiyonuna new ile ornegini alarak ulasiriz
  const model = new ListModel();

  //useEffect ile kullanici etkilesimi izlendigi icin contriller dosyasinda yanimlariz.
  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
