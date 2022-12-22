function findItemMiss(numbers: number[]): number[] {
    let i: number = 1;
    let arr: number[] = [];
    while (i <= 10) {
        if (numbers.indexOf(i) == -1) {
            arr.push(i)
        }
        i++;
    }
    return arr
}

let arr1 = [1, 2, 5, 6, 7, 10]
console.log(findItemMiss(arr1));