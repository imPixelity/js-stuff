$(`.search-button`).on("click", function () {
  $.ajax({
    url: "key" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((el) => {
        cards += showCards(el);
      });
      $(`.movie-container`).html(cards);

      // Button clicked
      $(`.modal-detail-button`).on("click", function () {
        $.ajax({
          url: "key" + $(this).data("imdbid"),
          success: (res) => {
            const movieDetail = showMovieDetail(res);
            $(`.modal-body`).html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },

    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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
