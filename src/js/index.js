require("@babel/polyfill");
import Search from "./model/Search";

let search = new Search("pasta");

//промисоос ирсэн үр дүн авх
search.doSearch().then((r) => console.log(r));
