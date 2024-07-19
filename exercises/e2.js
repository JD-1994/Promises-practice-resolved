/**
 * PROMISE CONSTRUCTOR (Reject with onRejected callback argument)
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 */

/**
 * @task
 * Create a function that returns a promise with a constructor that follows the requirements:
 * * Has a name of 'getPromise'
 * * Takes a boolean as an argument
 * * Returns a promise constructor that creates a promise that:
 * * * resolves with a value of 'The PROMISE was RESOLVED' if the argument is true
 * * * rejects with a reason of 'The PROMISE was REJECTED' if the argument is false
 * The getPromise function must be exported
 * Example: export const getPromise = (bool) = return <Your promise constructor code>
 */
// Function that returns a promise which resolves or rejects based on the input boolean
export const getPromise = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve('The PROMISE was RESOLVED');
    } else {
      reject('The PROMISE was REJECTED');
    }
  });
};

// Function to handle a promise, returning different values based on whether it resolves or rejects
export const handlePromise = (promise) => {
  return promise.then(
    (resolvedValue) => resolvedValue,
    () => "Uh Oh"
  );
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


