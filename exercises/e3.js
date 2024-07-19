/**
 * PROMISES ARE ALWAYS ASYNCHRONOUS
 * Please, make sure to read the "03-Always-asynchronous.md" file in exercises-info folder before you start!
 */

/**
 * @task
 * * Create function that follows the steps:
 * * Has a name 'getPromise'
 * * Takes an argument of any type
 * * If the argument is a whole number
 * * * Returns a promise constructor that resolves with a number value passed as the argument
 * * else returns 0;
 * * getPromise(num) function must be exported
 * Example: export const getPromise(num) => return <Your code of promise>
 */
// Function to return a promise if the argument is a whole number, otherwise return 0
export const getPromise = (num) => {
  if (Number.isInteger(num)) {
    return new Promise((resolve) => {
      resolve(num);
    });
  } else {
    return 0;
  }
};

// Function to update the sum value as described
export const updateSumValue = () => {
  let sum = 2;

  getPromise(120).then((value) => {
    sum += value;
  });

  sum += 8;

  return sum;
};


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
