fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=avengers&limit=20`, {
        'method': 'GET',
        'headers': {
           'X-RapidAPI-Key': '6e97476c6cmsh07897574844bbdfp1c4dafjsn84d84a9f4ec8',
           'X-RapidAPI-Host': 'imdb8.p.rapidapi.coom'
       }
   })
   .then(response => response.json())
   .then(data => {
       createcard(data);
})
   .catch(err => {
       console.error(err);
})  


let createcard = (movie) => {
    const list = movie.d;
    list.map((item) => {
        const name = item.l;
        const image = item.i.imageUrl;
        const ul = document.querySelector('.cardlist')
        ul.innerHTML += `<li class="cards">
        <div class="rank"><i class='bx bx-play'></i></div>
        <img src="${image}" alt="movieimg">
        <div class="title">
            <h4>${name}</h4>
        </div>
    </li>` 
    });
};


let searchbtn = document.querySelector('.searchbtn');
searchbtn.addEventListener("click", function(){
    let input = document.querySelector('input').value;
    let ul  = document.querySelector('.cardlist').innerHTML = '';
    input.innerHTML = '';
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input}&limit=20`, {
        'method': 'GET',
        'headers': {
           'X-RapidAPI-Key': '6e97476c6cmsh07897574844bbdfp1c4dafjsn84d84a9f4ec8',
           'X-RapidAPI-Host': 'imdb8.p.rapidapi.coom'
       }
   })
   .then(response => response.json())
   .then(data => {
       createcard(data);
})
   .catch(err => {
       console.error(err);
})  

let createcard = (movie) => {
    const list = movie.d;
    list.map((item) => {
        const name = item.l;
        const image = item.i.imageUrl;
        const ul = document.querySelector('.cardlist')
        ul.innerHTML += `<li class="cards">
        <div class="rank"><i class='bx bx-play'></i></div>
        <img src="${image}" alt="movieimg">
        <div class="title">
            <h4>${name}</h4>
        </div>
    </li>` 
    });
};

})



let categories = document.querySelectorAll('a');
categories.forEach((anchortag) => {
   anchortag.dataset.movie = anchortag.innerText.trim();
   anchortag.addEventListener('click', function(){
    let ul  = document.querySelector('.cardlist').innerHTML = '';
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${this.dataset.movie}&limit=20`, {
        'method': 'GET',
        'headers': {
           'X-RapidAPI-Key': '6e97476c6cmsh07897574844bbdfp1c4dafjsn84d84a9f4ec8',
           'X-RapidAPI-Host': 'imdb8.p.rapidapi.coom'
       }
   })
   .then(response => response.json())
   .then(data => {
       createcard(data);
})
   .catch(err => {
       console.error(err);
})  

let createcard = (movie) => {
    const list = movie.d;
    list.map((item) => {
        const name = item.l;
        const image = item.i.imageUrl;
        const ul = document.querySelector('.cardlist')
        ul.innerHTML += `<li class="cards">
        <div class="rank"><i class='bx bx-play'></i></div>
        <img src="${image}" alt="movieimg">
        <div class="title">
            <h4>${name}</h4>
        </div>
    </li>` 

    });
  };
 })
})  


