{
  // <T> generic은 call signature를 자동으로 생성해 준다.
  // generic은 타입을 잃어버리지 않는다. (any와 차이점)
  // 함수가 호출될 때, call signature 가 추론 된다.

  // 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여
  // 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.

  // 재사용성을 위해 Generic 사용

  type SuperPrint = {
    <T>(arr: T[]):T // T가 generic으로 위의 타입정의를 모두 포함
  }
  const superPrint: SuperPrint = (arr) => arr[1]

  // 위와 같은 뜻의 제네릭 정의
  function superPrint<T>(a: T[]) {
    return a[0]
  }
  const a = superPrint<boolean>([true, false])
  console.log(a)

  type Player<E> = {
    name : string
    extraInfo : E
  }
  type NicoExtra = {
    favFood: string
  }
  type NicoPlayer = Player<NicoExtra>

  const nico: NicoPlayer = {
    name: 'nico',
    extraInfo: { favFood : '불고기'}
  }

  const lynn: Player<null> = {
    name: 'lynn',
    extraInfo: null
  }


}