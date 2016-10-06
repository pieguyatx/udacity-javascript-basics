/*
This has JavaScript to build the resume.
 */

 //Create object: bio
var bio = {
  "name": "Jonesy Jackrabbit",
  "role": "Master of the Universe",
  "contacts": {
    "mobile": "999-999-9999",
    "email": "jonesy@mastersoftheuniverse.com",
    "twitter": "@PBNJSammiches",
    "location": "Mt. Etna, Spain"
  },
  "pictureURL": "images/fry.jpg",
  "welcomeMessage": "Howdy, folks! Welcome to this swanky pad!",
  "skills": ["peacekeeping", "shoe-tying", "varmint-huntin'","yoga","sewin'","listlessness"]
};

// Add name and title
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

// Add other bio info
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#header").append([formattedEmail]);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").append([formattedLocation]);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append([formattedWelcome]);

// Add photo
var formattedBiopic = HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append([formattedBiopic]);

// Add work & education
var work = {
  "workplaces": [
      {
        "position": "Hacker",
        "employer": "Motorola",
        "years": "2 years",
        "city": "Sheboygen, WI",
        "description": "Fought clams weekly for sport."
      },
      {
        "position": "Fullback",
        "employer": "The University of Notre Dame",
        "years": "11 years",
        "city": "Notre Dame, WI",
        "description": "Taught elderly couples how to enjoy the Chinese language."
      },
      {
        "position": "Life Coach",
        "employer": "Tyson Foods",
        "years": "Too long",
        "city": "London, WI",
        "description": "Spammed spammers in retaliation for jaywalking."
      }
  ]
};

//$("#header").append([work["position"]]);


// Add more school information with JSON
var education = {
  "schools": [
    {
      "name": "The University of Fenix",
      "city": "Antwerp, Belgie",
      "degree": "BS",
      "major": "Fishing",
      "minor": "Basket Weaving",
      "year": 2003
    },
    {
      "name": "The School of Hard Knocks",
      "city": "Toronto, Canada",
      "degree": "MS",
      "major": "Environmental Engineering",
      "year": 2004
    }
  ],
  "onlinecourses": [
    {
      "title": "git",
      "school": "Udacity",
      "year": 2016
    },
    {
      "title": "JavaScript",
      "school": "Youdacity",
      "year": 2016
    }
  ]
};
//$("#header").append([education.schools[0].minor]);

// Create project object
var projects = {
  "robotics": [
    {
      "organization": "masters",
      "title": "Taking over small countries with robotic armies"
    },
    {
      "organization": "bachelors",
      "title": "Taking over small villages with robot bugs"
    }
  ],
  "improv": [
    {
      "organization": "Higgledy Pigleddy Labs",
      "title": "Improv and Engineering"
    },
    {
      "organization": "Higgledy Pigleddy Labs",
      "title": "Musical Improv Singing and Dancing"
    },
    {
      "organization": "Berklee School of Music",
      "title": "Improvisational Oboe"
    }
  ]
};

// Add skills
if(bio.skills.length > 0){
  $("#header").append([HTMLskillsStart]);
  for (let i=0; i<bio.skills.length; i++){
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append([formattedSkill]);
  }
}

// Add jobs (using for..in, to avoid counting elements)
for(var job in work.workplaces){
  //console.log(work.workplaces[job])
  $("#workExperience").append([HTMLworkStart]);
  var formattedJob = HTMLworkEmployer.replace("%data%",work.workplaces[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%",work.workplaces[job].position);
  var input = formattedJob + formattedTitle;
  $(".work-entry:last").append(input);
  var formattedDate = HTMLworkDates.replace("%data%",work.workplaces[job].years);
  $(".work-entry:last").append(formattedDate);
  var formattedCity = HTMLworkLocation.replace("%data%",work.workplaces[job].city);
  $(".work-entry:last").append(formattedCity);
  var formattedDescription = HTMLworkDescription.replace("%data%",work.workplaces[job].description);
  $(".work-entry:last").append(formattedDescription);
}
