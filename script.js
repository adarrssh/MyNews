// html elements
const home = document.querySelector('.home');
const about = document.querySelector('.sports');
const main = document.getElementById('main')
const sports = document.querySelector('.sports')
const entertainment = document.querySelector('.entertainment')
const technology = document.querySelector('.technology')
const science = document.querySelector('.science')
const general = document.querySelector('.general')
const form = document.getElementById("form");
const search = document.getElementById("search");
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const rightnav = document.querySelector('.rightNav');
const burger = document.querySelector('.burger');

// api urls
const api_key = 'a9fef14665c84227a2c932aa86e7a14e'
const headline_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + api_key;
const sports_url = 'https://newsapi.org/v2/everything?q=sports&from=2022-03-25&sortBy=popularity&apiKey=' + api_key;
const general_url = 'https://newsapi.org/v2/everything?q=general&from=2022-03-25&sortBy=popularity&apiKey=' + api_key;
const entertainment_url = 'https://newsapi.org/v2/everything?q=entertainment&from=2022-03-25&sortBy=popularity&apiKey=' + api_key;
const science_url = 'https://newsapi.org/v2/everything?q=science&from=2022-03-25&sortBy=popularity&apiKey=' + api_key;
const technology_url = 'https://newsapi.org/v2/everything?q=technology&from=2022-03-25&sortBy=popularity&apiKey=' + api_key;


// compressed navar
burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-res')
    navlist.classList.toggle('v-class-res');
    rightnav.classList.toggle('v-class-res');
})

//search box
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    const search_url = 'https://newsapi.org/v2/everything?q=' + searchTerm + '&from=2022-03-25&sortBy=popularity&apiKey=' + api_key;

    if (searchTerm) {
        getNews(search_url)
    }
});



//default news
getNews(headline_url)

//recent news
home.addEventListener('click', () => {
    getNews(headline_url)
})

// general news
general.addEventListener('click', () => {
    getNews(general_url)
})

//entertainment news
entertainment.addEventListener('click', () => {
    getNews(entertainment_url);
})

//sports news
sports.addEventListener('click', () => {
    getNews(sports_url)
})

//science news

science.addEventListener('click', () => {
    getNews(science_url);
})



//technology news

technology.addEventListener('click', () => {
    getNews(technology_url)
})



// get newsfunction
async function getNews(headline_url) {
    const resp = await fetch(headline_url);
    const respData = await resp.json();
    showNews(respData.articles);
}


function showNews(news_articles) {
    main.innerHTML = "";


    news_articles.forEach((element) => {
        const newEl = document.createElement('div');
        newEl.classList.add('news');

        newEl.innerHTML = `
        <img
        class="red"
          src="${element.urlToImage}"
          alt="Image not available for this article"
        />

        <div class="news-info">
          <h3>${element.title}</h3>
        </div>

        <div class="overview">
         ${element.description}
         <a href=${element.url} target ='_blank'>Read More Here</a>
        </div>
        `

        main.appendChild(newEl)
    });
}


