const input = [
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
    [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
    [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
    [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
    [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
    [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
    [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
    [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
    [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
];

function search(value, data) {
    let y = 0;
    let x = 0;
    let left = -1;
    let right = data[0].length;
    let i = -1;

    if (data[y][x] > value) {
        return false
    } else if (data[y][data[y].length - 1] < value) {
        x = data[y].length - 1;
    }

    let stop = false;

    while (right - left > 0 && !stop) {
        i++;
        if (data[y][x] === value) {
            stop = true;
        } else {

            x = Math.floor((left + right) / 2);

            if (data[y][x] < value && data[y][x + 1] > value) {
                stop = true;
            } else if (data[y][x] < value) {
                left = x;
            } else {
                right = x;
            }
        }

    }

    left = -1;
    right = data.length;
    stop = false;

    while (right - left > 0 && !stop) {
        i++;
        y = Math.floor((left + right) / 2);
        if (data[y][x] === value) {
            stop = true;
        } else if (data[y][x] < value) {
            left = y;
        } else {
            right = y;
        }
    }

    return { y, x, i };

}

console.log(
    // search(-11, input),
    //search(0, input),
    // search(3, input),
    // search(10, input),
    // search(12, input),
    search(86, input),
    // search(25, input),
    // search(30, input),
    // search(75, input)
    // search(150, input)
);
// x=2, y=4