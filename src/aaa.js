//разбор на функции

let arr = [];
console.log(arr);

for (i = 0; i <= 50000; i++) {
    arr.push(i);
}

console.log(arr);

search = (place, numb) => {
    let min = place[0];
    let max = place[place.length - 1];
    let mid;
    while (numb !== mid) {
        mid = Math.round((min + max) / 2);
        if (numb === mid) {
            console.log(mid);
            return mid;
        } else if (numb > mid) {
            min = mid
        } else {
            max = mid
        }

    }
}

search(arr, 1055);