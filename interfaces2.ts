{
  // type 키워드는 원하는 걸 다할수 있다.
  type Nickname = string;
  type Health = 1 | 5 | 10;
  type Friends = Array<string>;
  type Team = 'red' | 'blue' | 'yellow'; // 특정값을 가지도록 제한한 Type

  // interface object의 모양을 갖춰주기 위해서만 사용한다
  // 과 같은 기능을 합니다.
  // type Player = {
  //   nickname: Nickname;
  //   healthBar: Health;
  //   team: Team;
  // }

  interface Player {
    nickname: Nickname;
    healthBar: Health;
    team: Team;
  }

  const nico: Player = {
    nickname: 'nico',
    healthBar: 10,
    team: 'blue',
  };
}
