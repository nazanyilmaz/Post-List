import axios from "axios";
import { toast } from "react-toastify";

export default class CreateModel {
  async createPost(newPost) {
    try {
      await axios.post("http://localhost:3000/post", newPost);
      toast.success("Post added successful");
    } catch (err) {
      toast.error("Error");
      console.log(err);
    }
  }
}
