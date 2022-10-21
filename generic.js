{ // polymorphism(다형성)
    var superPrint_1 = function (arr) {
        arr.forEach(function (i) { return console.log(i); });
    };
    superPrint_1([1, 2, 3, 4]);
    superPrint_1([true, false]);
    superPrint_1(["1", "2"]);
    superPrint_1(["1", "2", false, 3]);
    console.log('=================');
    var superPrint2 = function (arr) { return arr[0]; };
    var a = superPrint2([1, "2", 3, 4]);
    console.log(a);
}
