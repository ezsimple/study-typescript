{
    var a = 'hello';
    var b = 0;
    var c = [1, 2, 3];
    var player = {
        name: 'hello',
        age: 10
    };
    var nico = {
        name: 'nico'
    };
    var lynn = {
        name: 'lynn',
        age: 12
    };
    function playerMaker(name) {
        return {
            name: name // key: value의 변수명이 같은 경우, key를 생략할 수 있다.
        };
    }
    var playMaker = function (name, age) { return ({ name: name, age: age }); };
    var nikco = playMaker('nico', 100);
    nikco.age = 12;
    console.log(nikco);
}
