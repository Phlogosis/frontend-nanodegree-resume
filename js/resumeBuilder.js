var data = "%data%";

var bio = {
    "name": "Karamar Joseph",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "XXX-YYY-ZZZZ",
        "email": "karamar.joseph@gmail.com",
        "github": "http://github.com/phlogosis",
        "twitter": "no",
        "location": "58 School St, Waltham, MA 02452"
    },
    "welcomeMessage": "a new solution for a new day",
    "skills": ["programming", "web development", "customer service"],
    "biopic": "images/goateeedit.jpg"
};

bio.display = function() {
    "use strict";
    var bioName = HTMLheaderName.replace(data, bio.name);
    var bioRole = HTMLheaderRole.replace(data, bio.role);
    var bioWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").prepend(bioName + bioRole + bioWelcomeMessage); // It -is- okay to concatenate.

    var bioContactsMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var bioContactsEmail = HTMLemail.replace(data, bio.contacts.email);
    var bioContactsGithub = HTMLgithub.replace(data, bio.contacts.github);
    var bioContactsTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var bioContactsLocation = HTMLlocation.replace(data, bio.contacts.location);
    var bioContacts = bioContactsMobile + bioContactsEmail + bioContactsGithub + bioContactsTwitter + bioContactsLocation;

    $("#topContacts").append(bioContacts);
    $("#footerContacts").append(bioContacts);


    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(currentValue) {
        $("#skills").append(
        HTMLskills.replace(data, currentValue));
    });

    $("#header").prepend(HTMLbioPic.replace(data, bio.biopic));
q

};

var work = {
    "jobs": [{
        "employer": "Panera Bread",
        "title": "Associate Trainer",
        "location": "321 Arsenal St, Watertown, MA 02472",
        "dates": "June 2013 - Present",
        "description": "Customer service, food prep, recieving and filling orders"
    },

    {
        "employer": "Waltham Public Library",
        "title": "Page",
        "location": "735 Main St, Waltham, MA 02451",
        "dates": "Sept 2010 - Apr 2011",
        "description": "Recieving imports, reshelving entire rooms"
    }]
};

work.display = function() {
    work.jobs.forEach(function(currentValue) {
        $("#workExperience").append(HTMLworkStart);

        var jobEmployerAndTitle = HTMLworkEmployer.replace(data, currentValue.employer) + HTMLworkTitle.replace(data, currentValue.title);
        var jobDates = HTMLworkDates.replace(data, currentValue.dates);
        var jobLocation = HTMLworkLocation.replace(data, currentValue.location);
        var jobDescription = HTMLworkDescription.replace(data, currentValue.description);

        $(".work-entry:last").append(jobEmployerAndTitle + jobDates + jobLocation + jobDescription);
    });
};

var education = {
    "schools": [{
        "name": "Massachussets Bay Community College",
        "location": "50 Oakland St, Wellesley, MA 02481",
        "degree": "TBD",
        "majors": ["Information Sciences and Technology (Ongoing)"],
        "dates": "Sept 2011 - May 2013",
        "url": "http://www.massbay.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "date": "Jan 2016 - TBD",
        "url": "http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
};

education.display = function() {
    education.schools.forEach(function(currentValue) {
        $("#education").append(HTMLschoolStart);
        var educationName = HTMLschoolName.replace(data, currentValue.name).replace("#", currentValue.url);
        var educationDegree = HTMLschoolDegree.replace(data, currentValue.degree);
        var educationDates = HTMLschoolDates.replace(data, currentValue.dates);
        var educationLocation = HTMLschoolLocation.replace(data, currentValue.location);
        var educationMajor = HTMLschoolMajor.replace(data, currentValue.majors[0]);

        var fullSchoolString = educationName + educationDegree + educationDates + educationLocation + educationMajor;

        $(".education-entry:last").append(fullSchoolString);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(currentValue) {
        $("#education").append(HTMLschoolStart);
        var educationOnlineTitle = HTMLonlineTitle.replace(data, currentValue.title);
        var educationOnlineSchool = HTMLonlineSchool.replace(data, currentValue.school);
        var educationOnlineDates = HTMLonlineDates.replace(data, currentValue.date);
        var educationOnlineURL = HTMLonlineURL.replace("#", currentValue.url).replace(data, currentValue.url.slice(7, 22));

        var onlineClass = educationOnlineTitle + educationOnlineSchool + educationOnlineDates + educationOnlineURL;

        $(".education-entry:last").append(onlineClass);
    });
};

var projects = {
    "projects": [{
        "title": "Project title",
        "dates": "Beginning - End",
        "description": "Something came in the mail today.",
        "images": ["https://placehold.it/150x150"]
    }, {
        "title": "Other Project",
        "dates": "Starting - Finishing",
        "description": "Would you like a pizza?",
        "images": ["https://placehold.it/150x150"]
    }],
};

projects.display = function() {
    projects.projects.forEach(function(currentValue) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace(data, currentValue.title);
        var projectDates = HTMLprojectDates.replace(data, currentValue.dates);
        var projectDescription = HTMLprojectDescription.replace(data, currentValue.description);
        var projectImage = HTMLprojectImage.replace(data, currentValue.images[0]);
        $(".project-entry:last").append(projectTitle + projectDates + projectDescription + projectImage);
    });
};

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();