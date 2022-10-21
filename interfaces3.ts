{
  // 동일 이름의 interface의 속성이 합쳐진 예제
  interface User {
    readonly name: string;
  }
  interface User {
    lastName: string;
  }
  interface User {
    firstName: string;
  }

  interface Player extends User {}

  const nico: Player = {
    name: 'nico',
    firstName: 'nico',
    lastName: 'las',
  };
}
