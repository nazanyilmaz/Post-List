//veri ile alakali her turlu yapi modelde tanimlanir
//model olustururken class tercih edilir

import axios from "axios";

export default class ListModel {
  //apiden post verilerini alip donduren getPosts adinda fonksiyon olusturup bunu controllerda calistirmak gerek
  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/post");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
