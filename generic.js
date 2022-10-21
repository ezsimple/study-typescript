{
  // polymorphism(다형성)
  const superPrint1 = function (arr) {
    arr.forEach(function (i) {
      return console.log(i);
    });
  };
  superPrint1([1, 2, 3, 4]);
  superPrint1([true, false]);
  superPrint1(['1', '2']);
  superPrint1(['1', '2', false, 3]);
  console.log('=================');
  const superPrint2 = function (arr) {
    return arr[0];
  };
  const a = superPrint2([1, '2', 3, 4]);
  console.log(a);
}
