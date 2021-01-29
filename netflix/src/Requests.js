const API_KEY = "3d804ae3e21c83c2d10478ce1532b098";

const requests = {
    fetchNewMovies: /discover/movie?primary_release_date.gte:2014-09-15&primary_release_date.lte,2014:10,22:
    fetchPopularMovies: /discover/movie ? sort_by = popularity.desc : ,
get fetchPopularMovies() {
        return this._fetchPopularMovies;
    },
set fetchPopularMovies(value) {
        this._fetchPopularMovies = value;
    },
;
    fetchBestDramaMovies: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10;
    fetchHighestRatedMovies: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc;
    fetchPoplularKidMovies: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc;
    fetchBest2010Movies: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc;

}

export default requests;
