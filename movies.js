var movies = [

  {
    name: "Interstellar",

    category: "Sci-Fi",

    year: "2014",

    image:
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

    description:
    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
  },

  {
    name: "Batman",

    category: "Action",

    year: "2022",

    image:
    "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",

    description:
    "Batman fights crime in Gotham."
  },

  {
    name: "Joker",

    category: "Drama",

    year: "2019",

    image:
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",

    description:
    "Arthur Fleck becomes Joker."
  },

  {
    name: "Free Guy",

    category: "Comedy",

    year: "2021",

    image:
    "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",

    description:
    "A bank teller discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story. Now, in a world where there are no limits, he is determined to be the guy who saves his world his way before it's too late."
  },
  {
    name: "Fast & Furious 10",
	category: "Action",
	year: "2023",

    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/Am1mIWClibXSNcDudFRV9F9RdBm.jpg",

    description:
    "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path."
  },
  {
    name: "Star Wars I",
	category: "Sci-Fi",
	year: "1999",

    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/oHVjAucv1yMPIxwBX6WvEMNJvTj.jpg",

    description:
    "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi."
  },
  {
    name: "Star Wars II",
	category: "Sci-Fi",
	year: "2002",

    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/eT87Nx4Jw3ShjvROxGq8KC3bWTx.jpg",

    description:
    "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot into the heart of the Separatist movement and the beginning of the Clone Wars."
  },
  {
    name: "Micheal Jackson",
	category: "Drama",
	year: "2026",

    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/3Qud19bBUrrJAzy0Ilm8gRJlJXP.jpg",

    description:
    "he story of Michael Jackson, one of the most influential artists the world has ever known, and his life beyond the music."
  },
  {
    name: "Avengers: Infinity War",
	category: "Action",
	year: "2018",

    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",

    description:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos."
  },
  {
    name: "From",
	category: "Drama",
	year: "2022",

    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",

    description:
    "Unravel the mystery of a nightmarish town in middle America that traps all those who enter. "
  },

];


var moviesContainer =
document.getElementById("moviesContainer");

var category =
document.getElementById("category");

var search =
document.getElementById("search");

var modal =
document.getElementById("modal");

var closeBtn =
document.getElementById("close");

var modalImg =
document.getElementById("modalImg");

var modalTitle =
document.getElementById("modalTitle");

var modalDesc =
document.getElementById("modalDesc");

var actionSection =
document.querySelector(".action-section");

var dramaSection =
document.querySelector(".drama-section");

var scifiSection =
document.querySelector(".scifi-section");

var comedySection =
document.querySelector(".comedy-section");

function showMovies(){

  actionMovies.innerHTML = "";
  dramaMovies.innerHTML = "";
  scifiMovies.innerHTML = "";
  comedyMovies.innerHTML = "";

  for(var i = 0; i < movies.length; i++){

    var movieCard = `

      <div class="movie-card"
      onclick="openModal(${i})">

        <img src="${movies[i].image}">

        <div class="movie-info">

          <h3>${movies[i].name}</h3>

          <p>${movies[i].year}</p>

        </div>

      </div>

    `;

    if(movies[i].category == "Action"){

      actionMovies.innerHTML += movieCard;
    }

    else if(movies[i].category == "Drama"){

      dramaMovies.innerHTML += movieCard;
    }

    else if(movies[i].category == "Sci-Fi"){

      scifiMovies.innerHTML += movieCard;
    }

    else if(movies[i].category == "Comedy"){

      comedyMovies.innerHTML += movieCard;
    }

  }

}



function openModal(index){

  modal.style.display = "flex";

  modalImg.src = movies[index].image;

  modalTitle.innerText = movies[index].name;

  modalDesc.innerText = movies[index].description;
}

closeBtn.onclick = function(){

  modal.style.display = "none";
}


category.addEventListener("change", function(){

  var selected =
  category.value;

  if(selected == "all"){

    showMovies(movies);

    return;
  }

  var filteredMovies = [];

  for(var i = 0; i < movies.length; i++){

    if(movies[i].category == selected){

      filteredMovies.push(movies[i]);
    }

  }

  showMovies(filteredMovies);

});

category.addEventListener("change", function(){

  var selected = category.value;

  if(selected == "all"){

    actionSection.style.display = "block";

    dramaSection.style.display = "block";

    scifiSection.style.display = "block";

    comedySection.style.display = "block";
  }

  else if(selected == "Action"){

    actionSection.style.display = "block";

    dramaSection.style.display = "none";

    scifiSection.style.display = "none";

    comedySection.style.display = "none";
  }

  else if(selected == "Drama"){

    actionSection.style.display = "none";

    dramaSection.style.display = "block";

    scifiSection.style.display = "none";

    comedySection.style.display = "none";
  }

  else if(selected == "Sci-Fi"){

    actionSection.style.display = "none";

    dramaSection.style.display = "none";

    scifiSection.style.display = "block";

    comedySection.style.display = "none";
  }

  else if(selected == "Comedy"){

    actionSection.style.display = "none";

    dramaSection.style.display = "none";

    scifiSection.style.display = "none";

    comedySection.style.display = "block";
  }

});

search.addEventListener("keyup", function(){

  var text =
  search.value.toLowerCase();

  var filteredMovies = [];

  for(var i = 0; i < movies.length; i++){

    if(
      movies[i].name
      .toLowerCase()
      .includes(text)
    ){

      filteredMovies.push(movies[i]);
    }

  }

  showMovies(filteredMovies);

});
showMovies();