//Xây dựng hàm findItemMiss() có 1 tham số đầu vào là 1 mảng dãy số.
function findItemMiss(numbers) {
    //Tạo biến i gán cho già trị ban đầu bằng 1.
    var i = 1;
    //Tạo một mảng rỗng chứa các phần tử cần tìm
    var arr = [];
    /*Sử dụng vòng lặp while duyệt qua các phần tử trong mảng ban đầu.
     Mỗi lần lặp sẽ kiểm tra xem giá trị i có tồn tại trong mảng hay không.*/
    while (i <= 10) {
        if (numbers.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
var arr1 = [1, 2, 5, 6, 7, 10];
console.log(findItemMiss(arr1));
