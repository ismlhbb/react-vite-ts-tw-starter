/**
 * Code that involves connecting to external API
 * must be put inside a service class. You may also put complex business
 * logics here.
 */

export class CounterService {
  // A mock function to mimic making an async request for data
  static fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
}
