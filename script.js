
const home = document.querySelector('.swiper-wrapper');
const searchInput = document.getElementById('search-input');
const openBox = document.querySelector('.information');
const closeBox = document.querySelector('.remove-card');
const imgBlur = document.querySelector('.home-image');
const homeTextBlur = document.querySelector('.home-text');
const section2 = document.querySelector('.section2');
section2.style.marginTop = '-60px';


// this is my url
const url = 'https://www.omdbapi.com/?s=';
// this is my api key
const key = '&apikey=71868d6b';

function getMovie(){
    searchInput.addEventListener('input' , (e) => {
        const searchValue = e.target.value;
        fetch(url + searchValue + key)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.Search ){
            renderList(data.Search);
            }
        }
        )
    })
}
getMovie();

// function openInfoBox
function openInfoBox(imdbID){
    openBox.style.display = 'block';
    imgBlur.style.filter = 'blur(3px)';
    imgBlur.style.background= '#0a0a0a86';
    homeTextBlur.style.filter = 'blur(3px)';
    section2.style.filter = 'blur(3px)';
    section2.style.marginTop = '-210px';
    section2.style.transition = 'all 0.3s ease-in-out';
    console.log(imdbID)

    fetch('https://www.omdbapi.com/?i=' + imdbID + key)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const element = document.createElement('div');
        openBox.innerHTML = "";

        element.classList.add('box-info');
        element.innerHTML = `
        <div class="remove-card" onclick ="closeInfoBox()" >
            <i class="fa-solid fa-square-xmark"></i>
        </div>
        <div class="info-img">
        <img src="${data.Poster}" alt="" style="height: 200px; width: 300px; padding: 20px; border-radius: 20%; ">
        <div>
        `;
        openBox.appendChild(element);

        
    });
    
}

function closeInfoBox(){
        openBox.style.display = 'none';
        imgBlur.style.filter = 'none';
        imgBlur.style.background= 'none';
        homeTextBlur.style.filter = 'none';
        section2.style.filter = 'none';
        section2.style.marginTop = '-60px';
        
  
}




// print movie

function addMovie(data){
    const element = document.createElement('div');

    element.classList.add('swiper-slide');
    addCard(element,data);
    home.appendChild(element);
}

function addCard(element,data){
    if(data.Poster === 'N/A'){
        data.Poster = 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg';
    }
    element.innerHTML = `
    <div class="img-box">
        <img src="${data.Poster}" alt="">
        <div class="card-body" onclick ="openInfoBox('${data.imdbID}')">
            <h1 class="card-title">
                ${data.Title}
            </h1>
            <p class="card-sub-title">
                ${data.Year}
            </p>
            <p class="card-description">
                ${data.Type}
            </p>

        </div>
        
    </div>
    `;
}

function renderList(data){
    home.innerHTML = "";
    for(let i = 0; i < data.length; i++){
        addMovie(data[i]);
        
       
    }
}
// renderList();


