{ // polymorphism(다형성)
  // generic은 type의 placeholder와 같은 것

  // polymorphism
  // 인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 갖을 수 있다.

  // any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다.
  // any는 any로서 밖에 알 수 없지만, generics는 타입 정보를 잃지 않는다.

  // 'any'를 사용하는 것은 어떤 타입이든 받을 수 있다는 점에서 'generics'과 같지만
  // 함수를 반환하는데 있어 'any'는 받았던 인수들의 타입을 활용하지 못한다

  // 즉, 'generics'은 어떤 타입이든 받을 수 있다는 점에서 'any'와 같지만
  // 해당 정보를 잃지 않고 타입에 대한 정보를 다른 쪽으로 전달할 수 있다는 점이 다르다

  type SuperPrint = {
    // (arr: number[]): void
    // (arr: boolean[]): void
    // (arr: string[]): void
    // (arr: (number|string|boolean)[]):void
    <T>(arr: T[]):void // T가 generic으로 위의 타입정의를 모두 포함
  }
  const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
  }
  superPrint([1,2,3,4])
  superPrint([true, false])
  superPrint(["1", "2"])
  superPrint(["1", "2", false, 3])


  console.log('=================')
  // 참고 : https://stackoverflow.com/questions/32043487/difference-between-call-signature-and-function-type
  type SuperPrint2 = {
    <T>(arr: T[]):T
  }
  const superPrint2: SuperPrint2 = (arr) => arr[0]
  const a = superPrint2([1,"2",3,4])
  console.log(a)

}