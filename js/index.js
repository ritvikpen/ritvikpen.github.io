function openNav() {
  $("#myNav").css("width","100%");
}

function closeNav(){
  $("#myNav").css("width","0%");
}

var about_loaded = true;

function showAbout(subject){
  if(about_loaded){
    $("#aboutHint").css("visibility", "hidden").css("padding",0).html(" ");
    
    $("#aboutContainer").css("padding-bottom", "5vh").html("<h1 class='title leftBorderBlue' id='aboutTitle'></h1><p class = 'paragraph' id='aboutBody'></p>");
    
    if(subject=="student"){
      $("#aboutTitle").html("Student");
      $("#aboutBody").html("I am a Junior at Dublin High School. I am currently enrolled in AP Biology, AP Calculus AB, AP Computer Science Applications, Honors English 11, Honors Medical Interventions, and U.S. History. My cummulative GPA is 4.0. I am a member of my school's Biomedical Academy due to my interest in pursuing a career in that field. Click on the other links to see the extracurricular and club activities I am involved in, both inside and outside of school.");
    } else if(subject == "writer"){
      $("#aboutTitle").html("Writer");
      $("#aboutBody").html("I write for a Science and Technology focused website called <a href='#' class='generallink'>Tech Archives</a>. I was also one of the developers that created the site. The website runs articles written by other students in my school throught the Tech Archives club. I am one of the Board Members who helps moderate content, update the site, and organize club meetings/members.");
    } else if(subject == "coder"){
      $("#aboutTitle").html("Coder");
      $("#aboutBody").html("I am a programmer that has worked on a number of projects. I first began coding in 4th grade, learning Java from online tutorials. I currently know a number of languages, including Java, Python, R, JavaScript, HTML & CSS, GDScript, and others. I've worked on projects ranging from websites to mobile apps. You can view them all <a href='projects.html' class='generallink'>here</a>.");
    } else if(subject == "more"){
      $("#aboutContainer").html("<h1 class='title leftBorderBlue' id='aboutTitle'>Other Occupations</h1><p class = 'paragraph' id='aboutBody'></p>");
    }
    
   $("#aboutContainer").css("visibility","visible").addClass("fadeIn");
   about_loaded = false;
   setTimeout(function(){ $("#aboutContainer").removeClass("fadeIn"); about_loaded = true;}, 500);
  }
 
}
