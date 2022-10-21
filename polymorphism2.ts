{
  interface Storage<T> {
    [key: string]: T;
  }

  class LocalStorage<T> {
    private storage: Storage<T> = {};
    set(key: string, value: T) {
      this.storage[key] = value;
    }
    get(key: string): T {
      return this.storage[key];
    }
  }

  const stringStorage = new LocalStorage<string>();
  // generic을 이용해서, call signature 를 만들어 줍니다.
  stringStorage.set('hello', 'world');
  console.log(stringStorage.get('hello'));
}
