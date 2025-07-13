// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch(`key${inputKeyword.value}`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       const movies = data.Search;
//       let cards = "";
//       movies.forEach((el) => {
//         cards += showCards(el);
//       });
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // Button Clicked
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((el) => {
//         el.addEventListener("click", function () {
//           const imdbID = this.dataset.imdbid;
//           fetch(`key${imdbID}`)
//             .then((resp) => resp.json())
//             .then((data) => {
//               const movieDetail = showMovieDetail(data);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// =============================================================
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   const movies = getMovies(inputKeyword.value).then((movieArr) => {
//     console.log(movieArr);
//   });
// });

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

// Event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetails(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetails(imdbid) {
  return fetch(`key${imdbid}`).then((resp) => resp.json());
}

function updateUIDetail(resp) {
  const movieDetail = showMovieDetail(resp);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
  return fetch(`key${keyword}`)
    .then((resp) => resp.json())
    .then((resp) => resp.Search);
  // Returned as an array IF resolved
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((el) => (cards += showCards(el)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function showCards(el) {
  return `<div class="col-md-4 my-5">
            <div class="card">
                <img src="${el.Poster}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${el.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${el.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                    data-target="#movieDetailModal" data-imdbid="${el.imdbID}">Movie Details</a>
                </div>
            </div>
        </div>`;
}

function showMovieDetail(res) {
  return `<div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <img src="${res.Poster}" class="img-fluid" alt="" />
                </div>
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${res.Title} (${res.Year})</h4></li>
                    <li class="list-group-item">
                      <strong>Director: </strong> ${res.Director}
                    </li>
                    <li class="list-group-item"><strong>Actors: </strong>${res.Actors}</li>
                    <li class="list-group-item"><strong>Writer: </strong>${res.Writer}</li>
                    <li class="list-group-item">
                      <strong>Plot: </strong><br />${res.Plot}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
}
