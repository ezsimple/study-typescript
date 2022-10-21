{ // overloading
  type Add = {
    (a: number, b:number) : number // overload case
    (a: number, b:string) : number // overload case
    (a: number, b:string, c: number) : number // optional case
  }

  // 파라미터수 다른 overloading의 경우,
  // optional 이란걸 알려주기 위해 ? 를 사용해야 합니다.
  const add:Add = (a, b, c?:number) => {
    if (typeof b === 'string') return a
    return a + b
  }

  console.log(add(1,'a'))
}