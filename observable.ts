export class Observable<T> {
  private observers: ((item: T) => void)[] = [];

constructor(private setTimeout?: boolean) {}

  subscribe(observer: (item: T) => void) {
    this.observers.push(observer);
  }

  publish(item: T) {
    this.observers.forEach(observer =>
      this.setTimeout ? setTimeout(() => observer(item)): observer(item)
    );
    console.log('published: ', item);
  }
}