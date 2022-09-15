let week_days = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function clock() {
  let today = new Date();
  let date = today.getDate();
  let mon = today.getMonth();
  let year = today.getFullYear();
  let day = today.getDay();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  // adding leading zeros to them
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let d_n = h < 11 ? "AM" : "PM"; // AM or PM

  // ok, let's write them into document
  document.getElementById("hrs").innerHTML = h;
  document.getElementById("mins").innerHTML = m;
  document.getElementById("secs").innerHTML = s;
  document.getElementById("d-n").innerHTML = d_n;

  document.getElementById("day").innerHTML = date;
  document.getElementById("month").innerHTML = month[mon];
  document.getElementById("year").innerHTML = year;

  document.getElementById(`${week_days[day]}`).style.color = "#fff";
}

// start the clock
let inter = setInterval(clock, 1000);




//////////////////////////////////////////////


    const deg = 6;
    const hr = document.querySelector(`#hr `);
    const mn = document.querySelector(`#mn`);
    const sc = document.querySelector(`#sc`);

    const hr1 = document.querySelector(`#hr1 `);
    const mn1 = document.querySelector(`#mn2`);

    setInterval(()=>{
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        let hh1 = day.getHours() * 30;
        let mm1 = day.getMinutes() * deg;

        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;


        hr1.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn2.style.transform = `rotateZ(${mm}deg)`;

        //marquee carlos



        // digital clock
        let hours = document.getElementById(`hours`);
        let minutes = document.getElementById(`minutes`);
        let seconds = document.getElementById(`seconds`);
        let ampm = document.getElementById(`pm`);

        let today = new Date();
        let date = today.getDate();
        let mon = today.getMonth();
        let year = today.getFullYear();
        let days = today.getDay();

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        let pm = h >= 12 ? "PM" : "AM";
        // convert 24hr clock to 12hr clock
        if (h < 12) {
            h = h - 12;
        }

        // add zero before single digital number
        h = (h < 10) ? "0" + h : h
        m = (m < 10) ? "0" + m : m
        s = (s < 10) ? "0" + s : s

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;

        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;

        document.getElementById("day").innerHTML = date;
        document.getElementById("month").innerHTML = month[mon];
        document.getElementById("year").innerHTML = year;

        document.getElementById(`${week_days[days]}`).style.color = "#fff";

    }
    );
