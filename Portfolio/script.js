var $headerButtonAboutMe =$(".header__button_about-me")

$headerButtonAboutMe.on("click", function(){
	$("html, body").animate({scrollTop: 0}, 800)
})


var $headerButtonEducation =$(".header__button_education")

$headerButtonEducation.on("click", function(){
	$("html, body").animate({scrollTop: $("#about-me").height()+34}, 400)
})


var $headerButtonSkills =$(".header__button_skills")

$headerButtonSkills.on("click", function(){
	$("html, body").animate({scrollTop: $("#about-me").height()+
		$("#education").height()+60}, 400)
})


var $headerButtonExperience =$(".header__button_experience")

$headerButtonExperience.on("click", function(){
	$("html, body").animate({scrollTop: $("#about-me").height()+
		$("#education").height()+
		$("#skills").height()+86}, 400)
})


var $headerButtonProjects =$(".header__button_projects")

$headerButtonProjects.on("click", function(){
	$("html, body").animate({scrollTop: $("#about-me").height()+
		$("#education").height()+
		$("#skills").height()+
		$("#experience").height()+112}, 400)
})


var $headerButtonContacts =$(".header__button_contacts")

$headerButtonContacts.on("click", function(){
	$("html, body").animate({scrollTop: $("#about-me").height()+
		$("#education").height()+
		$("#skills").height()+
		$("#experience").height()+
		$("#projects").height()+138}, 400)
})
