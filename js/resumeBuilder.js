var data = "%data%";

var bio = {
    "name" : "Karamar Joseph",
    "role" : "Front End Web Developer",
    "contacts" : {
        "mobile" : "XXX-YYY-ZZZZ",
        "email" : "karamar.joseph@gmail.com",
        "github" : "http://github.com/phlogosis",
        "twitter" : "no",
        "location" : "Waltham, MA"
    },
    "welcomeMessage" : "a new solution for a new day",
    "skills" : [
        "programming", "web development", "customer service"
    ],
    "biopic" : "images/goateeedit.jpg",
    "display" : function() {
        var bioName = HTMLheaderName.replace(data, bio.name);
        var bioRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(bioName + bioRole); // It -is- okay to concatenate.
    }
}

var work = {
    "jobs" :
    [
        {
        "employer" : "Panera Bread",
        "title" : "Associate Trainer",
        "location" : "Watertown, MA",
        "dates" : ["June 2013", "Present"],
        "description" : "Customer service, food prep, recieving and filling orders"
        },

        {
        "employer" : "Waltham Public Library",
        "title" : "Page",
        "location" : "Waltham, MA",
        "dates" : ["Sept 2010", "Apr 2011"],
        "description" : "Recieving imports, reshelving entire rooms"
        }
    ]
}

var education = {
    "schools" :
    [
        {
        "name" : "Massachussets Bay Community College",
        "location" : "Wellesley, MA",
        "degree" : "TBD",
        "majors" : ["Information Sciences and Technology"],
        "dates" : ["Sept 2011", "May 2013"],
        "url" : "http://www.massbay.edu"
        }
    ],
    "onlineCourses" :
    [
        {
        "title" : "Front-End Web Development",
        "school" : "Udacity",
        "dates" : ["Jan 2016", "TBD"]
        }
    ]
}

var projects = {
    "projects" : [
    {
        "title" : "Project title",
        "dates" : ["Beginning", "End"],
        "description" : "Something came in the mail today.",
        "images" : ["images/these.jpg"]
    },
    {
        "title" : "Other Project",
        "dates" : ["Starting", "Finishing"],
        "description" : "Would you like a pizza?",
        "images" : ["images/pizzathis.jpg"]
    }
    ]

}



if (bio.hasOwnProperty("skills")) {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            $("#skills").append(HTMLskills.replace(data,
                        bio.skills[skill]));
        }
    }
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var jobEmployerAndTitle =
        HTMLworkEmployer.replace(data, work.jobs[job].employer)
            + HTMLworkTitle.replace(data, work.jobs[job].title);
    var jobDates =
        HTMLworkDates.replace(data,
            work.jobs[job].dates[0]
            + " - "
            + work.jobs[job].dates[1]);
    var jobLocation =
        HTMLworkLocation.replace(data, work.jobs[job].location);
    var jobDescription =
    HTMLworkDescription.replace(data, work.jobs[job].description);
    $(".work-entry:last").append(jobEmployerAndTitle + jobDates
            + jobLocation + jobDescription);
}

$("#main").append(internationalizeButton);

projects.display = function() {
    for (proj in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var projTitle = HTMLprojectTitle.replace(data,projects.projects[proj].title);
        var projDates = HTMLprojectDates.replace(data, projects.projects[proj].dates[0] + " - " + projects.projects[proj].dates[1]);
        var projDescription = HTMLprojectDescription.replace(data, projects.projects[proj].description);
        var projImage = HTMLprojectImage.replace(data, projects.projects[proj].image);
        $(".project-entry:last").append(projTitle + projDates + projDescription + projImage);
    }
};

bio.display();
projects.display();
