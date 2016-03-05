/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Karamar Joseph",
	"role" : "Front End Web Developer",
	"contact" :
	{
		"email" : "karamar.joseph@gmail.com"
	},
	"bioPic" : "images/goateeedit.jpg",
	"welcomeMsg" : "a new solution for a new day",
	"skills" : ["programming", "web development", "customer service"]
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


var data = "%data%";

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

function inName(firstandlast) {
	var newname = firstandlast.split(" ");
        var newnewname = [];
	newnewname[0] = newname[0].slice(0,1).toUpperCase() 
	+ newname[0].slice(1).toLowerCase();
	newnewname[1] = newname[1].toUpperCase();

	return newnewname[0] + " " + newnewname[1];
}


projects.display = function() {
    //$("#projects").append(HTMLprojectStart);
    //$(".project-entry:last").append(HTMLprojectTitle.replace(data,projects.projects[0].title));
    for (proj in projects.projects) {
	    $("#projects").append(HTMLprojectStart);
	    var projTitle = HTMLprojectTitle.replace(data,projects.projects[proj].title);
	    projDates = HTMLprojectDates.replace(data, projects.projects[proj].dates[0] + " - " + projects.projects[proj].dates[1]);
	    $(".project-entry:last").append(projTitle + projDates);
    }
};

projects.display();
