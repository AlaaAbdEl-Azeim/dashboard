# Dashboard-with-latest-news
Dashboard app with latest news and carousel

### Installing

Download the reprository
run npm install command on the app root to install the required dependencies.

```
npm install
```

run ng build command on the app root to build the app.

```
ng build
```

run ng serve -open command on the app root to serve and open the app on "http://localhost:4200/".

```
ng serve -open
```

## Getting Started

This app contain two components "carousel" and "latest-news"

### Carousel component

used ng-simple-slideshow pachage see "https://www.npmjs.com/package/ng-simple-slideshow" <br />
slider contain navigation buttons and caption title

### Latest news component

get latest news articles from newsapi see "https://newsapi.org/".<br />
each article have a read more link to navigate to the original news link.<br />
search box is expected to change the content of the news section after the user enters 2 letters at least.
