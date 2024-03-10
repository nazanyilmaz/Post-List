import CreateView from "./CreateView";
import { v4 } from "uuid";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  const model = new CreateModel();

  const navigate = useNavigate();

  //form gonderilince calisacak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries()); //yeni eklenen inputlardaki veriden post nesnesi olusturma
    newPost.id = v4();
    //console.log(newPost);
    model.createPost(newPost).then(() => navigate("/")); //yeni eklenne postu apiye ekle ve anasayfaya dpn
  };

  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
