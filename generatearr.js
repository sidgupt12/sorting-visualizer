let isSortingPaused = false;

function pauseSorting() {
    isSortingPaused = !isSortingPaused;
}

const container = document.querySelector(".data-container"); 

 
function generatebars(num = 30) { 
	

for (let i = 0; i < num; i += 1) { 

	
	const value = Math.floor(Math.random() * 100) + 1; 
	
	
	const bar = document.createElement("div"); 

	
	bar.classList.add("bar"); 

	 
	bar.style.height = `${(value+7) * 4}px`; 

	 
	bar.style.transform = `translateX(${i * 30}px)`; 
	
	
	const barLabel = document.createElement("label"); 

	
	barLabel.classList.add("bar_id"); 

	
	barLabel.innerHTML = value; 
	

	bar.appendChild(barLabel); 

	
	container.appendChild(bar); 
} 
} 
generatebars(); 

// Add a global variable to store algorithm details
let algorithmDetails = {
    quickSort: {
        description: "QuickSort is a divide-and-conquer algorithm that partitions the array and sorts each partition recursively.",
    },

    insertionSort: {
        description: "Insertion Sort builds the final sorted array one item at a time by repeatedly taking the next item and placing it in the correct position.",
    },

	bubbleSort: {
        description: "Bubble Sort is a simple sorting algorithm that compares and swaps adjacent elements until the entire list is sorted. While easy to grasp, it's less efficient compared to more advanced algorithms like Quick Sort or Merge Sort. Bubble Sort is commonly used for educational purposes and small datasets due to its simplicity. 	",
    },

	selectionSort: {
        description: " A basic sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted region, swapping it with the first unsorted element until the entire list is sorted. While easy to understand, it's less efficient for large datasets.",
    },
    
};

// Function to update algorithm details based on the selected algorithm
function updateAlgorithmDetails(algorithm) {
    const detailsContainer = document.getElementById("algorithmDetails");
    const descriptionElement = document.getElementById("algorithmDescription");

    if (algorithmDetails[algorithm]) {
        const { description } = algorithmDetails[algorithm];
        detailsContainer.style.display = "block";
        descriptionElement.textContent = description;
    } else {
        detailsContainer.style.display = "none";
    }
}

// Update your sorting functions to call updateAlgorithmDetails