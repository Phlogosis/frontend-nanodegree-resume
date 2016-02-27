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
		"title" : "Page"
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
	}
	]

}

var data = "%data%";

if (bio.hasOwnProperty("skills")) {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace(data, bio.skills[skill]));
		}
	}
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var jobInQuestion = HTMLworkEmployer.replace(data, work.jobs[job].employer) + HTMLworkTitle.replace(data, work.jobs[job].title);
	$(".work-entry:last").append(jobInQuestion);
}
