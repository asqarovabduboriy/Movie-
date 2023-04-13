const API_KEY = 'd8724ddf4015a78c623695f1a0c8c8f8';
const BASE_URL = 'https://api.themoviedb.org/3';
const BG__URL = "https://image.tmdb.org/t/p/original/";

let elTemplate =document.querySelector(".movies_template").content;
let elList =document.querySelector(".movies_item");

async function request(url, options) {
  let request = await fetch(url, options);

  let data = await request.json();

  return data;
}

let getMoviesList = async () => {
  let url = BASE_URL + "/list/1?api_key=" + API_KEY;
  let movies = await request(url, {
    method: "GET",
  });

  onRender(movies.items);
};
getMoviesList();

let onRender = (movies) => {
  movies.forEach((movie) => {
    let card = elTemplate.cloneNode(true);

    let elTitle = card.querySelector(".item-card-title");
    let elImg = card.querySelector(".item-card-image");

    elTitle.textContent = movie.original_title;
    elImg.src = BG__URL + movie.poster_path;

    elList.appendChild(card);
  });
};

