export class Observable<T> {
  private observers: ((item: T) => void)[] = [];

constructor()
  subscribe(observer: (item: T) => void) {
    this.observers.push(observer);
  }

  publish(item: T) {
    this.observers.forEach(observer =>
      setTimeout(() => observer(item))
    );
    console.log('published')
  }
}