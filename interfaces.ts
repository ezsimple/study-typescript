{
  // Hash
  type Words = {
    [key: string]: string; // []객체의 property 에 대해 모르지만, 타입만을 알 때 유용하다
  };

  class Dict {
    private words: Words;
    constructor() {
      this.words = {}; // private 변수를 생성자에서 초기화
    }
    static hello() {
      return 'hello';
    }
    add(word: Word) {
      if (this.words[word.term] === undefined) {
        this.words[word.term] = word.def;
      }
    }
    def(term: string) {
      return this.words[term];
    }
    update(word: Word) {
      if (this.words[word.term] === undefined) {
        console.error(`${word.term} not exist`);
        return;
      }
      this.words[word.term] = word.def;
    }
    del(term: string) {
      if (this.words[term] === undefined) {
        console.error(`${term} not exist`);
        return;
      }
      delete this.words[term];
    }
  }

  class Word {
    // readonly를 추가해서 변경불가능 하도록 함
    // - 읽기 전용 속성이므로 'xxx'에 할당할 수 없습니다.
    //   kimchi.def = 'aaa';
    constructor(public readonly term: string, public readonly def: string) {}
  }

  const kimchi = new Word('kimchi', 'super cool food');
  const pizza = new Word('pizza', 'super nice piazza');
  const dict = new Dict();
  Dict.hello();

  dict.add(kimchi);
  dict.add(pizza);
  console.log('KIMCHI:', dict.def('kimchi'));
  console.log('PIZZA:', dict.def('pizza'));

  dict.update(new Word('kimchi', 'very incredible super food'));
  console.log('UPDATE KIMCHI:', dict.def('kimchi'));
  console.log('NOT UPDATE PIZZA:', dict.def('pizza'));

  dict.del('pizza');
  console.log('DELETE PIZZA', dict.def('pizza'));
  console.log('NOT DELETE KIMCHI:', dict.def('kimchi'));
}
