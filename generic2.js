{
    var superPrint_1 = function (arr) { return arr[1]; };
    // 위와 같은 뜻의 제네릭 정의
    function superPrint(a) {
        return a[0];
    }
    var a = superPrint_1([true, false]);
    console.log(a);
    var nico = {
        name: 'nico',
        extraInfo: { favFood: '불고기' }
    };
    var lynn = {
        name: 'lynn',
        extraInfo: null
    };
}
