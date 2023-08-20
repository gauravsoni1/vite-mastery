const actionMoviesContainer = document.getElementById("action-movies-container");
const animatedMoviesContainer = document.getElementById("animated-movies-container");
const signoutBtn = document.getElementById("signout");

const actionMoviesList = [
    { img: "avengers.jpg", name: "Avengers" },
    { img: "batman.webp", name: "Batman" },
    { img: "extraction.jpeg", name: "Extraction" },
    { img: "flash.jpeg", name: "Flash" },
    { img: "mission-impossible.jpeg", name: "Mission Impossible" },
    { img: "thor.jpeg", name: "Thor" },
];

const animatedMoviesList = [
    { img: "bugs-life.jpeg", name: "Bugs Life" },
    { img: "coco.jpeg", name: "Coco" },
    { img: "inside-out.jpeg", name: "Inside Out" },
    { img: "kungfu-panda.jpg", name: "Kungfu Panda" },
    { img: "moana.jpeg", name: "Moana" },
    { img: "ratatouille.jpeg", name: "Ratatouille" },
    { img: "the-incredibles.jpeg", name: "The Incredibles" },
];

signoutBtn.addEventListener("click", function(){
    window.location.replace('/');
})

function renderTitles(movieList, containerElement) {
    movieList.forEach((movie) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const movieTitle = document.createElement("p");

        div.classList.add("d-flex", "flex-column");
        img.src = `../assets/${movie.img}`;
        movieTitle.innerText = movie.name;
        movieTitle.classList.add(
            "align-self-center",
            "m-2",
            "font-monospace",
            "fw-bolder",
            "text-light"
        );

        div.appendChild(img);
        div.appendChild(movieTitle);

        containerElement.appendChild(div);
    });
}

renderTitles(actionMoviesList, actionMoviesContainer);
renderTitles(animatedMoviesList, animatedMoviesContainer);
