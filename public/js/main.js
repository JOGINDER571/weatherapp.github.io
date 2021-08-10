const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_value = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle-layer");
const getInfo = async (event) => {
  event.preventDefault();

  const cityVal = cityName.value.trim();
  if (cityVal == "") {
    city_name.innerText = "Please write the name before search";
    dataHide.classList.add("data-hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fb910b773cc51ded4bfef6a65977ad36`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_real_value.innerText = arrData[0].main.temp;

      //temp status
      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempMood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      }
      dataHide.classList.remove("data-hide");
    } catch {
      city_name.innerText = "Please enter city name properly";
      dataHide.classList.add("data-hide");
    }
  }
  //define day
  const date = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wednes";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Satur";

  let n = weekday[date.getDay()];
  document.getElementById("day").innerHTML = n;
  //define date and month
  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";
  let currDate = date.getDate();
  let currMonth = date.getMonth();
  document.getElementById("today-date").innerHTML = `${currDate} ${month[currMonth]}`;
};

submitBtn.addEventListener("click", getInfo);
