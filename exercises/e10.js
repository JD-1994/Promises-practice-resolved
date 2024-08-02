export const getFirstResolvedPromise = (promises) => {
  //*  write code to pass test ⬇
  return Promise.any(promises);
};

// Input: array of promises 
// Output: 

export const getFirstPromiseOrFail = (promises) => {
  //*  write code to pass test ⬇ ️

  return Promise.race(promises);
};
  
  // return new Promise((resolve, reject) => {
  //   // Wrap each promise to handle rejection first
  //   const wrappedPromises = promises.map(promise => 
  //     promise.then(
  //       value => ({ status: 'fulfilled', value }),
  //       error => ({ status: 'rejected', reason: error })
  //     )
  //   );

  
    // Promise.race(wrappedPromises)
    //   .then(result => {
    //     if (result.status === 'fulfilled') {
    //       resolve(result.value);
    //     } else {
    //       reject(result.reason);
    //     }
    //   });

    
    // Promise.allSettled(promises).then(results => {
    //   if (!results.some(result => result.status === 'fulfilled')) {
    //     const firstRejected = results.find(result => result.status === 'rejected');
    //     if (firstRejected) {
    //       reject(firstRejected.reason);
    //     }
    //   }
  //   // });
  // });
  // };
  


export const getQuantityOfRejectedPromises = async (promises) => {
  //*  write code to pass test ⬇ ️
  const results = await Promise.allSettled(promises);
  return results.filter((result) => result.status === 'rejected').length;

};

export const getQuantityOfFulfilledPromises = async (promises) => {
  //*  write code to pass test ⬇ ️
  const results = await Promise.allSettled(promises);
  return results.filter((result) => result.status === 'fulfilled').length;

};

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  // To solve this you must fetch all characters passed in the array at the same time
  // use the `fetchCharacterById` function above to make this work
  //*  write code to pass test ⬇ ️
  const promises = ids.map(id => fetchCharacterById(id));
  const results = await Promise.allSettled(promises);

  const hasRejected = results.some(result => result.status === 'rejected');
  if (hasRejected) {
    return [];
  }

  return results.map(result => result.value);
};

