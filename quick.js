async function quickSort() {
    updateAlgorithmDetails("quickSort");
    ///fdfsdfsdfsd
    let blocks = document.querySelectorAll(".bar");
    blocks = Array.from(blocks);
    await quickSortHelper(blocks, 0, blocks.length - 1);
    
    // Turn the entire array green after sorting
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "rgb(49, 226, 13)";
        await new Promise((resolve) => setTimeout(resolve, 20));
    }
}

async function quickSortHelper(blocks, low, high) {
    if (low < high) {
        const pivotIndex = await partition(blocks, low, high);
        await quickSortHelper(blocks, low, pivotIndex - 1);
        await quickSortHelper(blocks, pivotIndex + 1, high);
    }
}


async function partition(blocks, low, high) {
    const pivot = Number(blocks[high].childNodes[0].innerHTML);
    let i = low - 1;

    for (let j = low; j < high; j++) {
        blocks[j].style.backgroundColor = "rgb(255, 7, 115)";
        await new Promise((resolve) => setTimeout(resolve, 100));

        const currentValue = Number(blocks[j].childNodes[0].innerHTML);
        if (currentValue < pivot) {
            i++;
            await swap(blocks[i], blocks[j]);
        }
        blocks[j].style.backgroundColor = "rgb(122, 45, 176)";
    }

    await swap(blocks[i + 1], blocks[high]);

    for (let k = low; k <= high; k++) {
        blocks[k].style.backgroundColor = "rgb(49, 226, 13)";
    }

    return i + 1;
}

async function swap(bar1, bar2) {
    return new Promise((resolve) => {
        const tempHeight = bar1.style.height;
        const tempValue = bar1.childNodes[0].innerHTML;
        bar1.style.height = bar2.style.height;
        bar1.childNodes[0].innerHTML = bar2.childNodes[0].innerHTML;
        bar2.style.height = tempHeight;
        bar2.childNodes[0].innerHTML = tempValue;

        window.requestAnimationFrame(function () {
            setTimeout(() => {
                resolve();
            }, 100);
        });
    });
}
