function openNav() {
  $("#myNav").css("width","100%");
}

function closeNav(){
  $("#myNav").css("width","0%");
}

function showAbout(subject){
  $("#aboutHint").css("visibility", "hidden").html(" ");
  
  if(subject=="student"){
    $("#aboutTitle").html("Student");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  } else if(subject == "writer"){
    $("#aboutTitle").html("Writer");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  } else if(subject == "coder"){
    $("#aboutTitle").html("Coder");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  } else if(subject == "more"){
    $("#aboutTitle").html("Other Occupations");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  }
  
  $("#aboutContainer").css("visibility","visible").addClass("fadeIn");

  
  /*
  if(subject=="student"){
    $("#aboutTitle").html("Student");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    $("#aboutContainer").css("visibility","visible").removeClass("fadeInRight fadeInUp fadeIn").addClass("fadeInLeft");
  } else if(subject == "writer"){
    $("#aboutTitle").html("Writer");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    $("#aboutContainer").css("visibility","visible").removeClass("fadeInLeft fadeIn fadeInUp").addClass("fadeInRight");
  } else if(subject == "coder"){
    $("#aboutTitle").html("Coder");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    $("#aboutContainer").css("visibility","visible").removeClass("fadeInLeft fadeIn fadeInRight").addClass("fadeInUp");
  } else if(subject == "more"){
    $("#aboutTitle").html("Other Occupations");
    $("#aboutBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    $("#aboutContainer").css("visibility","visible").removeClass("fadeInLeft fadeInUp fadeInRight").addClass("fadeIn");
  }
  */
}

/*
function showStudent(){
  
  alert("Student");
  
  $("#aboutHint").css("visibility","hidden").html(" ");
  $("#writerStuff").css("visibility", "hidden").html(" ");
  $("#coderStuff").css("visibility", "hidden").html(" ");
  $("#moreStuff").css("visibility", "hidden").html(" ");
  
  $("#studentTitle").html("Student");
  $("#studentBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  $("#studentStuff").css("visibility","visible").addClass("animated slideInLeft");
  
}

function showWriter(){
  
  alert("Writer");
  
  $("#aboutHint").css("visibility","hidden").html(" ");
  $("#studentStuff").css("visibility", "hidden").html(" ");
  $("#coderStuff").css("visibility", "hidden").html(" ");
  $("#moreStuff").css("visibility", "hidden").html(" ");
    
  $("#writerTitle").html("Writer");
  $("#writerBody").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  $("#writerStuff").css("visibility","visible").addClass("animated slideInLeft");
  
  alert("W done");
}
*/