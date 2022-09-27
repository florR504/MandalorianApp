import LastMovieInDB from "./LastMovieInDB";
import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
function ContentRowTop() {
  return (
    <div>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        <ContentRowMovies />
        <div class="row">
          <LastMovieInDB />
          <GenresInDb />
        </div>
      </div>
    </div>
  );
}
export default ContentRowTop;
