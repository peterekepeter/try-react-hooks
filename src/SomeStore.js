
// not sure why i made this a class
export const store = new class SomeStore {
    constructor() {
      this.subcribers = [];
      setInterval(() => {
        console.log(this.subcribers);
        for (let i = 0; i < this.subcribers.length; i++) {
          this.subcribers[i]();
        }
      }, 1000);
    }
    subscribe(fn) {
      console.log("subbed!");
      this.subcribers.push(fn);
    }
    unsubscribe(fn) {
      console.log("unsub!");
      this.subcribers = this.subcribers.filter(sub => sub !== fn);
    }
}();