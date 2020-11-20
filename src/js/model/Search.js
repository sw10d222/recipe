require("@babel/polyfill");
import axios from "axios";

export default class Search {
  //байгуулагч функц
  constructor(query) {
    this.query = query;
  }
  //class dotor function түлхүүр үг ашиглдаггүй
  //async дандаа промис буцаалт хийдэг

  async doSearch(search) {
    try {
      // хэрвээ  await ашиглаж байгаа бол function async bn
      let result = await axios(
        "https://forkify-api.herokuapp.com/api/search?q=" + this.query
      );
      this.result = result.data.recipes;
      return this.result;
    } catch (error) {
      alert("Promlem garlaa" + error);
    }
  }
}
