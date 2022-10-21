{
    var a1 = void 0;
    if (typeof a1 === 'number') {
        var b1 = a1 + 1;
    }
    if (typeof a1 === 'string') {
        var b1 = a1.toUpperCase();
    }
    // : void 는 생략가능
    function hello() {
        console.log('hello');
    }
    // :never 은 return 하지 않고, throw 에러를 할 경우 사용
    function hello2(name) {
        if (typeof name !== 'string' || typeof name === 'number') {
            throw new Error('name only suport string|number');
        }
        throw new Error('name type is string|number');
    }
    hello2(2);
}
