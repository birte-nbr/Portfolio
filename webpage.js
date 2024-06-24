
$(document).ready(function(){

// first the function to handle input data aka the name

  function testResults(form){
    let inputValue = form.name.value;
    alert("Hi there, " + inputValue);
  }
// on clicking the button the function is called

  $("input[name='button']").on("click", function() {
    testResults(this.form);
    window.location.href = "home.html";
  });

    
  

// show title for each page on hover 
// first element 
// all elements hide at first
$("#s-text1").css("visibility", "hidden");
$("#s-text2").css("visibility", "hidden");
$("#s-text3").css("visibility", "hidden");


$("#side-el1").on("mouseenter",function(){
  $("#s-text1").css("visibility", "visible");
});

$("#side-el1").on("mouseleave",function(){
  $("#s-text1").css("visibility", "hidden");	
});

  // second element
  $("#side-el2").on("mouseenter",function(){
    $("#s-text2").css("visibility", "visible");
  });
  
  $("#side-el2").on("mouseleave",function(){
    $("#s-text2").css("visibility", "hidden");	
  });

  // third element 

  $("#side-el3").on("mouseenter",function(){
    $("#s-text3").css("visibility", "visible");
  });
  
  $("#side-el3").on("mouseleave",function(){
    $("#s-text3").css("visibility", "hidden");	
  });



  

});
