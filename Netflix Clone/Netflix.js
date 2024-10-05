const api = "api_key=7a6d06111292b5966994d75313957471";

const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300"

const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_network=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`, // Action genre code
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`, // Comedy genre code
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`, // Horror genre code
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`, // Romance genre code
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`, // Documentaries genre code
};

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}




//banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        //every refresh movie will change
        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    });

fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        tittle.className="row__title";
        tittle.innerText = "NETFLIX ORIGINALS";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s = movie.name.replace(/\s+/g,"");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });



//Trending
fetch(requests.fetchTrending)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        tittle.className="row__title";
        tittle.innerText = "Trendings";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s2=movie.id;
            //May be it is not a array
            // var s2 = movie.name.replace(/\s+/g, "");
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//action
fetch(requests.fetchActionMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        tittle.className="row__title";
        tittle.innerText = "Action Movies";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s3 = movie.id;

            poster.id = s3;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

// //Comedy movies
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        tittle.className="row__title";
        tittle.innerText = "Comedy Movies";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            console.log(movie);
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s4 = movie.id;

            poster.id = s4;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });
// //Horror Movies
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        tittle.className="row__title";
        tittle.innerText = "Horror Movies";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s5 = movie.id;

            poster.id = s5;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });
//Romance Movies
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        tittle.className="row__title";
        tittle.innerText = "Romance Movies";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s6 = movie.id;

            poster.id = s6;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())

    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const tittle = document.createElement("h2");
        
        tittle.innerText = "Documentaries";
        row.appendChild(tittle);

        const row_poster = document.createElement("div");
        row_poster.className = "row__posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s6 = movie.id;

            poster.id = s6;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

    