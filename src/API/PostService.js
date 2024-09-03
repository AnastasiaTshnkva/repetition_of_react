import axios from "axios";

export default class postService {
  static async getAll () {
    try {
      const respond = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return respond.data;
    } catch (e) {
      console.log(e);
    }
  }
}