// eslint-disable-next-line import/prefer-default-export
export function getServerUrl() {
  let serverUrl = '';

  // deploy frontend to gh-pages
  // server and database to heroku
  if (process.env.NODE_ENV === 'production') {
    // use heroku remote - in production
    serverUrl = 'https://desolate-taiga-56372.herokuapp.com/robots';
  } else {
    // use localhost - in development
    // serverUrl = 'http://localhost:3000';

    serverUrl = 'http://localhost:3000/robots';
  }
  return serverUrl;
}
