async function insertionSort() {
    updateAlgorithmDetails("insertionSort");
    let blocks = document.querySelectorAll(".bar");
    blocks = Array.from(blocks);
    const n = blocks.length;

    for (let i = 1; i < n; i++) {
        const key = Number(blocks[i].childNodes[0].innerHTML);
        let j = i - 1;

        blocks[i].style.backgroundColor = "rgb(255, 7, 115)";

        while (j >= 0 && Number(blocks[j].childNodes[0].innerHTML) > key) {
            blocks[j].style.backgroundColor = "red";
            await new Promise((resolve) => setTimeout(resolve, 200));

            blocks[j + 1].style.height = blocks[j].style.height;
            blocks[j + 1].childNodes[0].innerHTML = blocks[j].childNodes[0].innerHTML;

            blocks[j].style.backgroundColor = "rgb(122, 45, 176)";
            j--;
        }

        blocks[j + 1].style.height = `${(key + 7) * 4}px`;
        blocks[j + 1].childNodes[0].innerHTML = key;

        blocks[i].style.backgroundColor = "rgb(122, 45, 176)";
    }śś

    // Turn the entire array green after sorting
    for (let i = 0; i < n; i++) {
        blocks[i].style.backgroundColor = "rgb(49, 226, 13)";
        await new Promise((resolve) => setTimeout(resolve, 50));
    }
}
