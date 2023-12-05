
function swap(bar1, bar2) {
    return new Promise((resolve) => {
        var temp = bar1.style.transform;
        bar1.style.transform = bar2.style.transform;
        bar2.style.transform = temp;
        window.requestAnimationFrame(function () {
            setTimeout(( delay=150) => {
                container.insertBefore(bar2, bar1);
                resolve();
            }, 0);
        });
    });
}

async function bubbleSort(delay = 100) {
    updateAlgorithmDetails("bubbleSort");
    let blocks = document.querySelectorAll(".bar");

    for (var i = 0; i < blocks.length; i += 1) {
       
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
            blocks[j].style.backgroundColor = " rgb(255, 7, 115)";
            blocks[j + 1].style.backgroundColor = "red";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay = 300)
            );
            if (isSortingPaused) return;
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".bar");
            }

            blocks[j].style.backgroundColor = "rgb(122, 45, 176)";
            blocks[j + 1].style.backgroundColor = "rgb(122, 45, 176)";
        }

        blocks[blocks.length - i - 1].style.backgroundColor = " rgb(49, 226, 13)";
    }
}
    
function generate() 
{ 
window.location.reload(); 
} 