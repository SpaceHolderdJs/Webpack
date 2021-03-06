class Card {
  constructor(data) {
    $(document.body).append(
      `<div class = "card-wrapper">
               <div class = "image" style = "background: url('./images/bg${Math.floor(
                 Math.random() * 3
               )}.jpg');"></div>
               <section>
                 <h2>Weather in ${data.name}</h2>
                 <p>t: ${Math.trunc(data.main.temp - 273)}</p>
                 <p>${data.weather[0].main}</p>
                 <p>feels like: ${Math.trunc(data.main.feels_like - 273)}</p>
                 <p>humidity: ${data.main.humidity}</p>
               </section>
            <div/>`
    );

    const button = document.createElement("button");

    button.addEventListener("click", () => {
      $(".card-wrapper").fadeOut(1000);
      setTimeout(() => {
        document.body.removeChild(document.querySelector(".card-wrapper"));
      }, 2000);
    });

    button.textContent = "Close";

    $("section").append(button);
    $("section").css(
      "background-image",
      `${document.body.style.backgroundImage}`
    );

    $(".card-wrapper").fadeOut(10).fadeIn(1000);
  }
}

$("#btn").click(() => {
  const city = $("#city").val();
  const country = $("#country").val();

  const settings = {
    async: true,
    crossDomain: true,
    url: `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}%2C${country}&lat=0&lon=0&id=2172797&lang=null&units=standard&mode=xml%2C%20html`,
    method: "GET",
    headers: {
      "x-rapidapi-key": "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    new Card(response);
  });
});
