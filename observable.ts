export class Observable<T> {
  private observers: ((item: T) => void)[] = [];

  subscribe(observer: (item: T) => void) {
    this.observers.push(observer);
  }

  publish(item: T) {
    this.observers.forEach(observer =>
      setTimeout(() => observer(item))
    );
  }
}