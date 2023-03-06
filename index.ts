import { interval } from 'rxjs';

const obs1 = interval(500);
const obs2 = interval(400);

// https://rxjs.dev/guide/subscription
const subscription = obs1.subscribe((x) => console.log('observable1: ' + x));

const childSubscription = obs2.subscribe((x) =>
  console.log('observable2: ' + x)
);

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);
