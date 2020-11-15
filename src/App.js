const api_info = {
  key: "d6311a70a2ccc2353bc5d14456aa0597",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const dateBuilder = (date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let today_date = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    return `${day} ${today_date} ${month} ${year}`;
  };
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div>
          <div className="location-box">
            <div className="location">Colombo,SL</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15 c
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
      <div className="footer">
        <h3>
          <b>Copyright © 2020 RanugaD</b>
        </h3>
      </div>
    </div>
  );
}

export default App;
