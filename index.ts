import { from } from 'rxjs';

// The 'from' creation function or creation operator is used to convert other types into an Observable.
// For example, it can convert an array into an Observable. It works the same way as the 'of' creation function, however, in the case of 'from', you provide an array with the values instead of providing multiple arguments.
// Another popular usage of 'from' is to create an Observable from Promise. Once we subscribe to such Observable, the Promise's resolve value will be emitted as a next notification and then it will complete. If the Promise gets rejected, the Observable will emit an error notification.
// 'from' can also create Observables from other sources, like iterables (generator functions) and other Observable-like objects.
// from creation function Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object
// Note: more on 'from' creation function: https://rxjs.dev/api/index/function/from

// Example 1: 'from' creation function - convert an array into an observable
//  This works the same as the 'of' creation function. It immediately emits all values provided in the array as separate next notifications and then completes.
// Summarizing, using the 'from' with an array passed to it creates a Cold Observable, which emits the values and completes every time we subscribe to it.

// Output
// Chenchu Lakshmi
// Mahathi
// Mahi Chenchith
// Completed!

// from(['Chenchu Lakshmi', 'Mahathi', 'Mahi Chenchith']).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed!'),
// });

// Example 2: 'from' creation function - convert a promise into an observable
// Now, why would we even want to do something like this?
// It is useful when we already have some code or API exposed as a Promise and we'd like to use this Promise in the Observable world to be able to use all of the tools provided by RxJS as a part of more complex asynchronous code or to combine it with other Observables.
// Summarizing, the Observable created using the 'from' function with a Promise passed to it uses the 'then' and 'catch' methods on the Promise, and then passes the resolved value or rejection error as a next or error notification.

// Sample 1: Next and complete notication handler i.e., resolve scenario of promise logic
// The newly created Observable's logic will use the 'then' method on the Promise once we subscribe to it and emit its resolve value, once it's available, as a next notification and then complete.

// Output:
// resolved
// Completed!

// const somePromise = new Promise((resolve, reject) => {
//   resolve('resolved');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed!'),
// });

// Sample 2: Error notification handler i.e., rejection of promise logic
// err --> This will be the Promise's rejection value.

// Output:
// Error: Rejected!
const somePromise = new Promise((resolve, reject) => {
  reject('Rejected!');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error:', err),
  complete: () => console.log('Completed!'),
});
