let api = `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`;

let aboutToday = document.querySelector("#todays-date");
let newsImage = document.querySelector("#img");
let newsHeading = document.querySelector("#news-heading");
let authorName = document.querySelector("#author");
let news = document.querySelector("#news");
let readMore = document.querySelector("#read-more");
let nextBtn = document.querySelector("#next-news");
let PrevBtn = document.querySelector("#prev-news");

let i = 0;

nextBtn.addEventListener("click", () => {
  let promise = fetch(api);
  promise
    .then((rawdata) => {
      return rawdata.json();
    })
    .then((data) => {
      console.log(data.articles[i]);
      let str = Date(Date.now());
      let a = str.substring(0, 16);
      aboutToday.innerText = a;
      newsImage.src = data.articles[i].urlToImage;
      newsHeading.innerText = data.articles[i].title;
      authorName.innerText = data.articles[i].author;
      news.innerText = data.articles[i].description;
      readMore.href = data.articles[i].url;
    });

  if (i <= 60) {
    i++;
  } else {
    i = 0;
  }
});

PrevBtn.addEventListener("click", () => {
  let promise = fetch(api);

  promise
    .then((rawdata) => {
      return rawdata.json();
    })
    .then((data) => {
      console.log(data.articles[i]);
      let str = Date(Date.now());
      let a = str.substring(0, 16);
      aboutToday.innerText = a;
      newsImage.src = data.articles[i].urlToImage;
      newsHeading.innerText = data.articles[i].title;
      authorName.innerText = data.articles[i].author;
      news.innerText = data.articles[i].description;
      readMore.href = data.articles[i].url;
    });
  if (i <= 0) {
    i = 60;
  } else {
    i--;
  }
});

window.onload = () => {
  nextBtn.click();
};
