{ // overloading
    // 파라미터수 다른 overloading의 경우,
    // optional 이란걸 알려주기 위해 ? 를 사용해야 합니다.
    var add = function (a, b, c) {
        if (typeof b === 'string')
            return a;
        return a + b;
    };
    console.log(add(1, 'a'));
}
