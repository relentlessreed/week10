function getHtml(name, location, bio, gitHub, linkedIn) {
  const bioHtml = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${name}'s Portfolio</title>
          <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      </head>
      <body>
      <div class="jumbotron">
    <h1 class="display-4">${name}</h1>
    <p class="lead">${location}</p>
    <hr class="my-4">
    <p>${bio}</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
          <div id="links">
              <ul>
                  <li><a href="${gitHub}" target="_blank">GitHub</a></li>
                  <li><a href="${linkedIn}" target="_blank">LinkedIn</a></li>
              </ul>
          </div>
          <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        crossorigin="anonymous"
      ></script>
          <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"
      ></script>
      </body>
      </html>`;
  return bioHtml;
}
module.exports = {
  getHtml,
};
