var series = [

  {
    name: "Breaking Bad",
    category: "Crime",
    year: "2008",
    image:
    "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    description:
    "A chemistry teacher enters a dangerous criminal world."
  },

  {
    name: "Stranger Things",
    category: "Sci-Fi",
    year: "2016",
    image:
    "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    description:
    "A group of kids uncover supernatural mysteries."
  },

  {
    name: "Dark",
    category: "Sci-Fi",
    year: "2017",
    image:
    "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg",
    description:
    "A mysterious time travel story in Germany."
  },

  {
    name: "Peaky Blinders",
    category: "Crime",
    year: "2013",
    image:
    "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    description:
    "A gangster family in Birmingham after World War I."
  },

  {
    name: "The Witcher",
    category: "Fantasy",
    year: "2019",
    image:
    "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    description:
    "A monster hunter struggles to find his place in a dangerous world."
  },

  {
    name: "The Crown",
    category: "Drama",
    year: "2016",
    image:
    "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    description:
    "The story of Queen Elizabeth II and the British royal family."
  },

  {
    name: "The Rookie",
    category: "Crime",
    year: "2018",
    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/70kTz0OmjjZe7zHvIDrq2iKW7PJ.jpg",
    description:
    "Starting over isn't easy, especially for small-town guy John Nolan who, after a life-altering incident, is pursuing his dream of being an LAPD officer."
  },

  {
    name: "Supernatural",
    category: "Drama",
    year: "2005",
    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/u40gJarLPlIkwouKlzGdobQOV9k.jpg",
    description:
    "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers."
  },

  {
    name: "The Boys",
    category: "Sci-Fi",
    year: "2019",
    image:
    "https://media.themoviedb.org/t/p/w300_and_h450_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
    description:
    "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty."
  }

];

var dramaSeries = document.getElementById("dramaSeries");
var scifiSeries = document.getElementById("scifiSeries");
var crimeSeries = document.getElementById("crimeSeries");
var fantasySeries = document.getElementById("fantasySeries");

var category = document.getElementById("category");
var search = document.getElementById("search");

var modal = document.getElementById("modal");
var closeBtn = document.getElementById("close");

var modalImg = document.getElementById("modalImg");
var modalTitle = document.getElementById("modalTitle");
var modalDesc = document.getElementById("modalDesc");

var dramaSection = document.querySelector(".drama-section");
var scifiSection = document.querySelector(".scifi-section");
var crimeSection = document.querySelector(".crime-section");
var fantasySection = document.querySelector(".fantasy-section");

function showSeries(){

  dramaSeries.innerHTML = "";
  scifiSeries.innerHTML = "";
  crimeSeries.innerHTML = "";
  fantasySeries.innerHTML = "";

  for(var i = 0; i < series.length; i++){

    var seriesCard = `

      <div class="series-card" onclick="openModal(${i})">

        <img src="${series[i].image}">

        <div class="series-info">

          <h3>${series[i].name}</h3>

          <p>${series[i].year}</p>

        </div>

      </div>

    `;

    if(series[i].category == "Drama"){
      dramaSeries.innerHTML += seriesCard;
    }

    else if(series[i].category == "Sci-Fi"){
      scifiSeries.innerHTML += seriesCard;
    }

    else if(series[i].category == "Crime"){
      crimeSeries.innerHTML += seriesCard;
    }

    else if(series[i].category == "Fantasy"){
      fantasySeries.innerHTML += seriesCard;
    }

  }

}

function openModal(index){

  modal.style.display = "flex";

  modalImg.src = series[index].image;
  modalTitle.innerText = series[index].name;
  modalDesc.innerText = series[index].description;
}

closeBtn.onclick = function(){
  modal.style.display = "none";
}

category.addEventListener("change", function(){

  var selected = category.value;

  if(selected == "all"){

    dramaSection.style.display = "block";
    scifiSection.style.display = "block";
    crimeSection.style.display = "block";
    fantasySection.style.display = "block";
  }

  else if(selected == "Drama"){

    dramaSection.style.display = "block";
    scifiSection.style.display = "none";
    crimeSection.style.display = "none";
    fantasySection.style.display = "none";
  }

  else if(selected == "Sci-Fi"){

    dramaSection.style.display = "none";
    scifiSection.style.display = "block";
    crimeSection.style.display = "none";
    fantasySection.style.display = "none";
  }

  else if(selected == "Crime"){

    dramaSection.style.display = "none";
    scifiSection.style.display = "none";
    crimeSection.style.display = "block";
    fantasySection.style.display = "none";
  }

  else if(selected == "Fantasy"){

    dramaSection.style.display = "none";
    scifiSection.style.display = "none";
    crimeSection.style.display = "none";
    fantasySection.style.display = "block";
  }

});

search.addEventListener("keyup", function(){

  var text = search.value.toLowerCase();

  var cards = document.querySelectorAll(".series-card");

  for(var i = 0; i < series.length; i++){

    if(series[i].name.toLowerCase().includes(text)){

      cards[i].style.display = "block";

    } else {

      cards[i].style.display = "none";

    }

  }

});

showSeries();