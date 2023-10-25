let isSortingPaused = false;

function pauseSorting() {
    isSortingPaused = !isSortingPaused;
}

const container = document.querySelector(".data-container"); 

// function to generate bars 
function generatebars(num = 30) { 
	
//for loop to generate 20 bars 
for (let i = 0; i < num; i += 1) { 

	// To generate random values from 1 to 100 
	const value = Math.floor(Math.random() * 100) + 1; 
	
	// To create element "div" 
	const bar = document.createElement("div"); 

	// To add class "bar" to "div" 
	bar.classList.add("bar"); 

	// Provide height to the bar 
	bar.style.height = `${(value+7) * 4}px`; 

	// Translate the bar towards positive X axis 
	bar.style.transform = `translateX(${i * 30}px)`; 
	
	// To create element "label" 
	const barLabel = document.createElement("label"); 

	// To add class "bar_id" to "label" 
	barLabel.classList.add("bar_id"); 

	// Assign value to "label" 
	barLabel.innerHTML = value; 
	
	// Append "Label" to "div" 
	bar.appendChild(barLabel); 

	// Append "div" to "data-container div" 
	container.appendChild(bar); 
} 
} 
generatebars(); 

