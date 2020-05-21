export class Observable<T> {
  private observers: Map<Subscription, (item: T) => void> = new Map();

  subscribe(observer: (item: T) => void): Subscription {
    const subscription = new Subscription(this);
    this.observers.set(subscription, observer);
    return subscription;
  }

  publish(item: T) {
    this.observers.forEach(observer => setTimeout(() => observer(item)));
  }

  unsubscribe(subscription: Subscription) {
    this.observers.delete(subscription);
  }
}

export class Subscription {
  constructor(private observable) {}

  unsubscribe() {
    this.observable.unsubscribe(this);
  }
}
