// Function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to simulate fetching data from an API
function fetchData() {
    return delay(2000).then(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(`Fetched data: ${randomNumber}`);
        return randomNumber;
    });
}

// Function to process the data
function processData(data) {
    return delay(1000).then(() => {
        const processedData = data * 2;
        console.log(`Processed data: ${processedData}`);
        return processedData;
    });
}

// Chain the functions together
fetchData()
    .then(data => processData(data))
    .then(result => console.log(`Final result: ${result}`))
    .catch(error => console.error(`Error: ${error}`));

