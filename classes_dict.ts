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
    constructor(public term: string, public def: string) {}
  }

  const kimchi = new Word('kimchi', 'super cool food');
  const pizza = new Word('pizza', 'super nice piazza');
  const dict = new Dict();

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
