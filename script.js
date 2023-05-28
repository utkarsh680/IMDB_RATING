const home = document.querySelector(".card-boxes");
const searchInput = document.getElementById("search-input");
const openBox = document.querySelector(".information");
const closeBox = document.querySelector(".remove-card");
const imgBlur = document.querySelector(".home-image");
const homeTextBlur = document.querySelector(".home-text");
const section2 = document.querySelector(".section2");
section2.style.marginTop = "-60px";


// for home page
const goHome = document.getElementById("go-home");
goHome.addEventListener("click", () => {
  favouriteBody.style.display = "none";
  spiderman1.style.display = "block";
  avengers2.style.display = "block";
  antman.style.display = "block";
  imgBlur.style.display = "block";
  homeTextBlur.style.display = "block";
  searchBox.style.filter = "none";
  input.style.pointerEvents = "auto";
});

// for favourite list
const favouriteListContainer = document.querySelector(".favourite-card-container");
const favouriteOpen = document.getElementById("favourite-open");
const favouriteBody = document.querySelector(".favourite-body");

// search box work
const inputBox = document.querySelector(".input-box");
const glass = document.querySelector(".glass");
const input = document.getElementById("search-input");
const crossButton = document.querySelector(".cross-button");
const searchBox = document.querySelector(".search-box");

// close search box
crossButton.addEventListener("click", () => {
  glass.style.zIndex = "-2";
  glass.style.transition = "all 0.2";
  inputBox.style.transition = "all 0.2s";
  inputBox.style.border = "1px solid #383636";
  crossButton.style.zIndex = "-2";
  inputBox.style.padding = "0px 0px 0px 30px";
});
searchInput.addEventListener("click", () => {
  inputBox.style.transition = "all 0.2s";
  glass.style.zIndex = "3";
  glass.style.transition = "all 0.2";
  inputBox.style.border = "1px solid #3ea6ff";
  crossButton.style.zIndex = "1";
  inputBox.style.padding = "0px 0px 0px 40px";
});

// for png img
const avengers = document.querySelector(".avengers");
const avengers2 = document.querySelector(".avengers2");
const antman = document.querySelector(".antman");
const spiderman1 = document.querySelector(".spiderman1");


// this is my url
const url = "https://www.omdbapi.com/?s=";
// this is my api key
const key = "&apikey=71868d6b";

// for finding movie through search box
function getMovie() {
  
  searchInput.addEventListener("input", () => {
    fetch(url + searchInput.value + key)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.Response === "False") {
          renderList([]);
        } else if (searchInput !== "") {
          renderList(data.Search);
        }
      });
  });
}
getMovie();

// function openInfoBox
function openInfoBox(imdbID) {
  // for png transition
  avengers2.style.transition = "all 1.2s ease-in-out";
  avengers2.style.left = "35.4%";
  antman.style.transition = "all 1.2s ease-in-out";
  antman.style.top = "15%";
  spiderman1.style.transition = "all 1.2s ease-in-out";
  spiderman1.style.top = "69%";
  openBox.style.display = "block";
  imgBlur.style.filter = "blur(3px)";
  imgBlur.style.background = "#0a0a0a86";
  homeTextBlur.style.filter = "blur(3px)";
  section2.style.filter = "blur(3px)";
  section2.style.marginTop = "-210px";
  section2.style.transition = "all 0.3s ease-in-out";

  section2.style.pointerEvents = "none";

  // for search box
  searchBox.style.filter = "blur(3px)";
  input.style.pointerEvents = "none";

  // for search box
  glass.style.zIndex = "-2";
  glass.style.transition = "all 0.2";
  inputBox.style.padding = "0px 0px 0px 30px";
  inputBox.style.transition = "all 0.2s";
  inputBox.style.border = "1px solid #383636";
  crossButton.style.zIndex = "-2";

  fetch("https://www.omdbapi.com/?i=" + imdbID + key)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const element = document.createElement("div");
      openBox.innerHTML = "";
      element.classList.add("box-info");
      cardClick(element, data);
    });
}

// cardClick for opening main box
function cardClick(element, data) {
  // movie genre
  if (data.Genre === "N/A") {
    data.Genre = "Unknown";
  } else {
    data.Genre = data.Genre;
  }

  // movie plot
  if (data.Plot === "N/A") {
    data.Plot = "";
  } else {
    data.Plot = data.Plot;
  }

  // imdbRating store
  let rating_num = data.imdbRating;

  // movie rating
  if (data.imdbRating === "N/A") {
    data.imdbRating = "none";
  } else if (data.imdbRating >= 9) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
  } else if (data.imdbRating >= 7) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
  } else if (data.imdbRating >= 5) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>`;
  } else if (data.imdbRating >= 3) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
  } else if (data.imdbRating >= 1) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i>`;
  } else {
    data.imdbRating = data.imdbRating;
  }
  // Rating
  if (data.Rated == "N/A") {
    movieRating = "No";
  } else {
    data.Rated = data.Rated;
  }

  // plot
  if (data.Plot == "N/A") {
    data.Plot = "Plot not available";
  } else {
    data.Plot = data.Plot;
  }

  // production
  if (data.Production == "N/A") {
    data.Production = "unknown";
  } else {
    data.Production = data.Production;
  }

  // actors
  if (data.Actors == "N/A") {
    data.Actors = "unknown";
  } else {
    data.Actors = data.Actors;
  }

  // director
  if (data.Director == "N/A") {
    data.Director = "unknown";
  } else {
    data.Director = data.Director;
  }

  // writer
  if (data.Writer == "N/A") {
    data.Writer = "unknown";
  } else {
    data.Writer = data.Writer;
  }

  // awards
  if (data.Awards == "N/A") {
    data.Awards = "unknown";
  } else {
    data.Awards = data.Awards;
  }

  // box office
  if (data.BoxOffice == "N/A") {
    data.BoxOffice = "unknown";
  } else {
    data.BoxOffice = data.BoxOffice;
  }

  // country
  if (data.Country == "N/A") {
    data.Country = "unknown";
  } else {
    data.Country = data.Country;
  }

  // metascore
  if (data.Metascore == "N/A") {
    data.Metascore = "unknown";
  } else {
    data.Metascore = data.Metascore;
  }

  // image
  if (data.Poster == "N/A") {
    data.Poster = "https://img.icons8.com/?size=512&id=gZjuzZtAaWv6&format=png";
  } else {
    data.Poster = data.Poster;
  }

  element.innerHTML = `
  <div class="remove-card" onclick ="closeInfoBox()" >
  <i class="fa-solid fa-square-xmark"></i>
</div>
<div class="full-box-info" >
  <div class="add-fav">
      <img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" id= favouriteList-${data.imdbID} alt="" class="favourite-logo" onclick = "favouriteMovie('${data.imdbID}')">
  </div>
  <div class="info-img">
      <img src="${data.Poster}" alt="IMG"  class = "main-box-img">
  </div>
  <div class="full-info" >
      <p class="Title">${data.Title}<span class="Year">${data.Year}</span></p>
      <div class="movie-type">
          <span class="Genre">${data.Genre}</span>
          <span class="Rated">${data.Rated}</span>
      </div> 
      <div class="Rating">
          ${data.imdbRating}
          -
          <span class="imdbRating"><span class="Rate">${rating_num}</span><span class="Rating-text">&nbspRating</span></span>
      </div>
      <div class = "scroll-box">
      <p class="plot">${data.Plot}</p>
      <div class="slot1">
          <p class="Type"><span>Type&nbsp:</span>&nbsp${data.Type}</p>
          <p class="Runtime"><span>Runtime&nbsp:</span>&nbsp${data.Runtime}</p>
          <p class="Language"><span>Language&nbsp:</span>&nbsp${data.Language}</p>
          <p class="Actors"><span>Actors&nbsp:</span>&nbsp${data.Actors}</p>
      </div>
      <div class="slot2">
          <p class="Released"><span>Released&nbsp:</span>&nbsp${data.Released}</p>
          <p class="Country"><span>Country&nbsp:</span>&nbsp${data.Country}</p>
          <p class="Director"><span>Director&nbsp:</span>&nbsp${data.Director}</p>
          <p class="Writer"><span>Writer&nbsp:</span>&nbsp${data.Writer}</p>
          <p class="Production"><span>Production&nbsp:</span>&nbsp${data.Production}</p>
          <p class="Awards"><span>Awards&nbsp:</span>&nbsp${data.Awards}</p>
      </div>
      <div class="slot3">
          <p class="BoxOffice"><span>BoxOffice&nbsp:</span><span class="Money">&nbsp${data.BoxOffice}</span></p>
          <p class="Metascore"><span>Metascore&nbsp:</span>&nbsp${data.Metascore}</p>
          <p class="imdbVotes"><span>imdbVotes&nbsp:</span>${data.imdbVotes}</p>

      </div>
  </div>
</div>
</div>     
`;
  openBox.appendChild(element);
}

// function closeInfoBox
function closeInfoBox() {
  openBox.style.display = "none";
  imgBlur.style.filter = "none";
  imgBlur.style.background = "none";
  homeTextBlur.style.filter = "none";
  section2.style.filter = "none";
  section2.style.marginTop = "-60px";
  section2.style.pointerEvents = "auto";

  // for search box
  searchBox.style.filter = "none";
  input.style.pointerEvents = "auto";

  // for png transition
  setTimeout(() => {
    spiderman1.style.top = 30 + "%";
    spiderman1.style.transition = "all 0.1s ease-in-out";
    avengers2.style.left = "-40%";
    antman.style.top = "-100%";
    antman.style.transition = "all 0.5s ease-in-out";
    avengers2.style.transition = "all 0.5s ease-in-out";
  }, 0);
}

// print movie
function addMovie(data, isFavourite) {
  const element = document.createElement("div");
  element.classList.add("div-box");
  addCard(element, data, isFavourite);
  home.appendChild(element);
}

function addCard(element, data, isFavourite) {
  console.log(data);
  // movie rating
  if (data.imdbRating === "N/A") {
    data.imdbRating = `<i class="fa-solid fa-face-sad-tear"></i>`;
    console.log(data.imdbRating);
  } else if (data.imdbRating >= 9) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
  } else if (data.imdbRating >= 7) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
  } else if (data.imdbRating >= 5) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>`;
  } else if (data.imdbRating >= 3) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
  } else if (data.imdbRating >= 1) {
    data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i>`;
  } else {
    data.imdbRating = data.imdbRating;
  }
  if (data.Poster === "N/A") {
    data.Poster = "https://img.icons8.com/?size=512&id=gZjuzZtAaWv6&format=png";
  } else {
    data.Poster = data.Poster;
  }

  element.innerHTML = `
    <div class="img-box">
    <div class="favourite">
       ${isFavourite ? `<img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" id= favourite-${data.imdbID} alt="" class="favourite-logo active" onclick = "favouriteMovie('${data.imdbID}')">`
    :
    `<img src="https://cdn-icons-png.flaticon.com/512/10037/10037207.png" id= favourite-${data.imdbID} alt="" class="favourite-logo" onclick = "favouriteMovie('${data.imdbID}')">`
    }
     </div>
    <img src="${data.Poster}" alt="">
    <div class="card-body" onclick ="openInfoBox('${data.imdbID}')">
        <div class="movie-name">
        ${data.Title}
        </div>
        <div class="star-year-genre">
                <div class="movie-star">${data.imdbRating}</div>
                <div class="movie-year">${data.Year}</div>
                <div class="movie-genre">${data.Rated}</div>
        </div>
        <p class="movie-action">
        ${data.Genre}
        </p>
        <p class="movie-language">
    
        ${data.Language}
        </p>
        </div>     
    </div>
    `;
}

// renderList();
function renderList(data) {
  home.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    fetch("https://www.omdbapi.com/?i=" + data[i].imdbID + key)
      .then((response) => response.json())
      .then((data) => {
       
        if(favouriteListStorage.includes(data.imdbID)){
         addMovie(data, true);
        }
        else{
            addMovie(data, false);
        }
      });
  }
}

// favorite list local storage
let favouriteListStorage = JSON.parse(localStorage.getItem("favouriteList"));

if (favouriteListStorage == null) {
  favouriteListStorage = [];
}

//favorite movie click function
function favouriteMovie(imdbID) {
  if (favouriteListStorage.includes(imdbID)) {
    warningNoty("Movie removed from favoritelist");
  } else {
    successNoty("Movie added to favoritelist");
  }
  let favouriteListIcon = document.getElementById(`favourite-${imdbID}`);
  let favouriteListIcon2 = document.getElementById(`favouriteList-${imdbID}`);

 
  console.log(favouriteListIcon)
  favouriteListIcon.classList.toggle("active");
  if (favouriteListIcon.classList.contains("active")) {
    favouriteListIcon.src =
      "https://cdn-icons-png.flaticon.com/512/210/210545.png";
  } else {
    favouriteListIcon.src =
      "https://cdn-icons-png.flaticon.com/512/10037/10037207.png";
  }
  console.log(favouriteListIcon)

  let index = favouriteListStorage.indexOf(imdbID);
  if (index !== -1) {
    favouriteListStorage.splice(index, 1);
    localStorage.setItem("favouriteList", JSON.stringify(favouriteListStorage));
    showFavouriteList();
    return;
  }
  favouriteListStorage.push(imdbID);
  localStorage.setItem("favouriteList", JSON.stringify(favouriteListStorage));
  showFavouriteList();
}

// show favourite list
function showFavouriteList() {
  favouriteListContainer.innerHTML = "";
  if (favouriteListStorage.length === 0) {
    favouriteListContainer.innerHTML = `<h1 class="no-favourite"  style="color: gainsboro;">No Favourite Movie</h1>`;
  } else {
    for (let i = 0; i < favouriteListStorage.length; i++) {
      fetch("https://www.omdbapi.com/?i=" + favouriteListStorage[i] + key)
        .then((response) => response.json())
        .then((data) => {
          // movie rating
          if (data.imdbRating === "N/A") {
            data.imdbRating = `<i class="fa-solid fa-face-sad-tear"></i>`;
            console.log(data.imdbRating);
          } else if (data.imdbRating >= 9) {
            data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
          } else if (data.imdbRating >= 7) {
            data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
          } else if (data.imdbRating >= 5) {
            data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>`;
          } else if (data.imdbRating >= 3) {
            data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i><i class="fa-solid fa-solid fa-star"></i>`;
          } else if (data.imdbRating >= 1) {
            data.imdbRating = `<i class="fa-solid fa-solid fa-star"></i>`;
          } else {
            data.imdbRating = data.imdbRating;
          }
          // for poster
          if (data.Poster === "N/A") {
            data.Poster =
              "https://img.icons8.com/?size=512&id=gZjuzZtAaWv6&format=png";
          } else {
            data.Poster = data.Poster;
          }
          const element = document.createElement("div");
          element.classList.add("favouite-card");
          renderfavouriteList(element, data);
          favouriteListContainer.appendChild(element);
        });
    }
  }
}
showFavouriteList();

// render favouriteList data
function renderfavouriteList(element, data) {
  if (favouriteListStorage.includes(data.imdbID)) {
    element.innerHTML = `
    <div class="fav-boxes">
    <div class="fav-logo">
    <img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" id= favourite-${data.imdbID} alt="" class="favourite-logo" onclick = "favouriteMovie('${data.imdbID}')">
    </div>
    <div class="fav-card-info">
      <div class="movie-name">
        ${data.Title}
        </div>
        <div class="star-year-genre">
                <div class="movie-star">${data.imdbRating}</div>
                <div class="movie-year">${data.Year}</div>
                <div class="movie-genre">${data.Rated}</div>
        </div>
        <p class="movie-action">
        ${data.Genre}
        </p>
        <p class="movie-language">
    
        ${data.Language}
        </p>
  
    </div>
    <img src="${data.Poster}" alt="" class="movies">
   </div>   
`;
  }
}

// favourite list open
favouriteOpen.addEventListener("click", () => {
  favouriteBody.style.display = "block";
  console.log("hello");
  spiderman1.style.display = "none";
  avengers2.style.display = "none";
  antman.style.display = "none";
  imgBlur.style.display = "none";
  searchBox.style.filter = "blur(3px)";
  input.style.pointerEvents = "none";
  homeTextBlur.style.display = "none";
  // for search box
  glass.style.zIndex = "-2";
  glass.style.transition = "all 0.2";
  inputBox.style.padding = "0px 0px 0px 30px";
  inputBox.style.transition = "all 0.2s";
  inputBox.style.border = "1px solid #383636";
  crossButton.style.zIndex = "-2";
  searchInput.value = "";
});

// izitoast
function successNoty(msg) {
  iziToast.success({
    title: msg,
    position: "topRight",
  });
}

function warningNoty(msg) {
  iziToast.warning({
    title: msg,
    position: "topRight",
  });
}

const slider = document.querySelector(".card-boxes");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
