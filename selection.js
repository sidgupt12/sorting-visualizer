



async function SelectionSort(delay = 100) { 
    updateAlgorithmDetails("selectionSort");
    let bars = document.querySelectorAll(".bar"); 
    
    var min_idx ; 
    for (var i = 0; i < bars.length; i += 1) { 
        
        min_idx = i; 
        bars[i].style.backgroundColor = " rgb(255, 7, 115)"; 
        for (var j = i + 1; j < bars.length; j += 1) { 
     
        bars[j].style.backgroundColor = "red"; 
            

        await new Promise((resolve) => 
            setTimeout(() => {resolve(); }, 150) 
        ); 
        if (isSortingPaused) return;
        var val1 = parseInt(bars[j].childNodes[0].innerHTML);  
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 

        if (val1 < val2) { 
            if (min_idx !== i) { 
    

            bars[min_idx].style.backgroundColor =  "rgb(122, 45, 176)"; 
            } 
            min_idx = j; 
        } else { 
    
            bars[j].style.backgroundColor =  "rgb(122, 45, 176)"; 
        } 
        } 

        var temp1 = bars[min_idx].style.height; 
        var temp2 = bars[min_idx].childNodes[0].innerText; 
        bars[min_idx].style.height = bars[i].style.height; 
        bars[i].style.height = temp1; 
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
        bars[i].childNodes[0].innerText = temp2; 
         
        await new Promise((resolve) => 

        setTimeout(() => { 
            resolve(); 
    },150) 
    
        ); 

        bars[min_idx].style.backgroundColor =" rgb(122, 45, 176)";
    
        bars[i].style.backgroundColor = " rgb(49, 226, 13)"; 
    } 
    
}
    
    function generate() 
    { 
    window.location.reload(); 
    } 

 