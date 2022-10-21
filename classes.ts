{
  // JavaScript에 Type & 객체지향 을 한스푼 넣은 언어가 TypeScript
  abstract class User {
    constructor(
      private firstName: string,
      private lastName: string,
      public nickName: string
    ){}

    abstract getNickName(): string

    getFullName = () => {
      return `${this.firstName} ${this.lastName}`
    }
  }

  class Player extends User {
    getNickName(): string {
      return this.nickName
    }
  }

  const nico = new Player("nico", 'las', '니꼬');
  console.log(nico)
  console.log(nico.getNickName())

}

// 구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
// private 　 　　⭕　　　　　　　❌　　　　　❌
// protected 　　 ⭕　　　　　　　⭕　　　　　❌
// public　　　　　⭕　　　　　　　⭕　　　　　⭕

// 추상(abstract) 클래스
// 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 직접 새로운 인스턴스를 만들 수는 없다.

// 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야하는 메서드이다.

// public: 모든 클래스에서 접근 가능
// private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
// protected: 해당 클래스와 자식 클래스에서 접근 가능

// [Abstract Class]
// - 다른 클래스가 상속받을 수 있는 클래스
// - 직접 새로운 인스턴스 생성 X

// TIP)
// private를 사용하면 상속받은 클래스 안에서 마저도 this 사용해 접근 불가능
// 그래서 protected를 사용하면 상속받은 클래스 안에서 this 사용해 접근 가능
// 물론 protected로 지정된 것들은 외부에서 사용이 불가능
// 추상클래스 안에 메소드는 적어서는 안되고 call signature만 적어야 함
// 추상클래스 안의 메소드는 결국 구현이 되지 않는다고 나옴

// JS에 객체지향 한 스푼 넣은게 TS느낌