const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    // console.log(err);
    alert(err);
  }
});

function getMovies(keyword) {
  return fetch(`${keyword}`)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then((resp) => {
      if (resp.Response == "False") {
        throw new Error(resp.Error);
      }
      return resp.Search;
    });
}

function updateUI(movies) {
  let cards = "";
  movies.forEach((el) => (cards += showCards(el)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// Event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetails(imdbid);
      updateUIDetail(movieDetail);
    } catch (err) {
      alert(err);
    }
  }
});

function getMovieDetails(imdbid) {
  return fetch(`${imdbid}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function updateUIDetail(resp) {
  const movieDetail = showMovieDetail(resp);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
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
