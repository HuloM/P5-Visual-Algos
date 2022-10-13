let unsorted = [];
let width = 300;
let height = 400;

let i = 0;
let j = 1;

function setup() {
    createCanvas(width * 2, height);
    for (let i = 0; i < width; i++) {
        unsorted[i] = Math.random() * height;
    }
}

function draw() {
    background(0);

    if (unsorted[j] > unsorted[j + 1]) swap(unsorted, j, j + 1);
    if (i < unsorted.length) {
        if (j >= unsorted.length - i - 1) {
            i++;
            j = 0;
        }
        j++;
    } else {
        console.log("done");
        noLoop();
    }
    for (let i = 0; i < unsorted.length; i++) {
        stroke(255);
        line(i * 2, height, i * 2, height - unsorted[i]);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
