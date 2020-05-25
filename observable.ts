export class Observable<T> {
  private observers: Map<
    Subscription<T>, (item: T) => void
  > = new Map();

  subscribe(
    observer: (item: T) => void,
  ): Subscription<T> {
    const subscription = new Subscription(this);
    this.observers.set(subscription, observer);
    return subscription;
  }

  publish(item: T) {
    this.observers.forEach(observer => setTimeout(() => observer(item)));
  }

  unsubscribe(subscription: Subscription<T>) {
    this.observers.delete(subscription);
  }
}

export class Subscription<T> {
  constructor(private observable: Observable<T>) {}

  unsubscribe() {
    this.observable.unsubscribe(this);
  }
}
