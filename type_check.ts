{
  let a: string = 'hello'
  let b: number = 0
  let c: number[] = [ 1, 2, 3]

  const player:{ name: string, age?: number }= {
    name:'hello',
    age: 10
  }

  // Type Alias
  type Age = number;
  type Name = string;
  type Player = {
    name : Name,
    age?: Age
  }

  const nico: Player = {
    name: 'nico'
  }

  const lynn: Player = {
    name: 'lynn',
    age: 12
  }

  function playerMaker(name : string) : Player {
    return {
      name // key: value의 변수명이 같은 경우, key를 생략할 수 있다.
    }
  }
  const playMaker = (name:string, age:number) : Player => ({name, age})

  const nikco = playMaker('nico', 100);
  nikco.age = 12

  console.log(nikco)
}