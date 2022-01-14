let apiUrl
const apiUrls = {
  production: '<replace-with-heroku-url>',
  // does this need to be your localhost? Currently you are calling the library api to save your user information. I recommend getting an express backend going. The template should have the user ready to go. 
  development: 'https://library-express-api.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
