
/*
Create a simple page with a script that does the following:
1.	Ask the user for his/her name using prompt function, The user must provide a name (no empty strings)
2.	If the user did not type a name, the script should repeat asking for his/her name until a valid string is entered
3.	Ask for a password (123) to continue using prompt function, if the user type the password 3 times incorrectly an alert should appear that “you’ve entered wrong password 3 times”
4.	If the user entered (123) then the script should continue
5.	Ask for the birth month for user, check the month is a number and a correct month; if the user entered an incorrect month repeat till a valid month is entered
6.	Ask for the birth day (day only e.g. 30), check the day is a number and a correct day; if the user entered an incorrect day repeat till a valid day is entered
7.	Display an alert for the user with the correct horoscope
SRP
*/

const getName = function () {
  let name = prompt("Please type your name");
  //debugger;
  while (!validateName(name)) {
    name = prompt("Please type your name");
  }
  return name;
};
const validateName = function (name) {
    return !(name === "");
  };

const getPassword = function () {
  let password = prompt("Please enter you password");
  let i = 0;
  while (!validatePassword(password)) {
    if (i == 2) {
      alert("You've entered a wrong password");
      return null;
    }
    password = prompt("Please enter you password");
    i++;
  }
  return password;
};

const getMonth = function () {
  let month = prompt("Please type your birth month");
  while (!validateMonth(month)) {
    month = prompt("Please type your birth month");
  }
  return month;
};

const getDay = function (month) {
  let day = prompt("Please type your birth day");
  while (!validateDay(day, month)) {
    day = prompt("Please type your birth day");
  }
  return day;
};



const validatePassword = function (password) {
  return password === "123";
};

const validateMonth = function (month) {
  return Number(month) >= 1 && Number(month) <= 12;
};

const validateDay = function (day, month) {
  const DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  return day <= DAYS_IN_MONTHS[month - 1] && day >= 1;

  ///Note: These 3 lines of code are for days calc in a month but we need to put the year of birth
  //var days = function daysInMonth (month, year) {
//    return new Date(year, month, 0).getDate();
//}
//console.log(days);

};

const getHoroscope = function (day, month) {
  //return "Gemini";

  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    return "capricorn"
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return "aquarius"
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "pisces"
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return "aries"
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return "taurus"
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "gemini"
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return "cancer"
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return "leo"
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return "virgo"
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return "libra"
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return "scorpio"
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return "sagittarius"
  }


};

let name = getName();
if (name != null) {
  let password = getPassword();
  if (password != null) {
    let month = getMonth();
    let day = getDay(month);
    alert(`Your horoscope is ${getHoroscope(day, month)}`);
  }
}