function randomDelayed(max = 10, expected = 5, delay = 1000) {
    return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * max)
    setTimeout(
    () => number > expected
    ? resolve(number)
    : reject(new Error('lower than expected number')), 1000
    );
    });
    }
    randomDelayed(100, 75, 2500)
    .then(number => console.log(number))
    .catch(error => console.error(error.toString()));