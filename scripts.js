// Javascript for TP7


function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML += this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
 this.recipeName = recipeName; 
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  
  this.displayRecipe = function() {
    
    
    document.querySelector("#heroimage h1").innerHTML = this.recipeName;
     document.querySelector("#contributor h1").innerHTML = this.contributor;
    document.querySelector("#heroimage").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ol");
    loadFileInto(this.equipment, "#equipment ol");
    loadFileInto(this.directions, "#directions ol");
    
  }
  
  
}


TwistyCookies = new Recipe("Twisty Cookies",
                           "Mark Filip",
                           "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                           "ingredients.html",
                           "kitchenequipment.html",
                           "directions.html");

CreamyCaramelFlan = new Recipe("Creamy Caramel Flan",
                           "Bert Adams",
                           "https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                           "caramel-ingredients.html",
                           "caramel-equipment.html",
                           "caramel-directions.html");

TacoDip = new Recipe("Taco Dip",
                           "Camryn Moore",
                           "https://assets.st-note.com/production/uploads/images/8140069/magazine_cover_landscape_2f3d6a66e49fcf930b3f1641372bc58d.jpg",
                           "taco-ingredients.html",
                           "taco-equipment.html",
                           "taco-directions.html");




window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    TwistyCookies.displayRecipe();
  }
  
    document.querySelector("#secondRecipe").onclick = function() {
    CreamyCaramelFlan.displayRecipe();
  }
        document.querySelector("#thirdRecipe").onclick = function() {
    TacoDip.displayRecipe();
  }


  
  

} // end window function