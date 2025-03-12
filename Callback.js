/* A callback is a function that is passed as an argument to another function and is executed later, usually after an asynchronous operation completes. */
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        let data = "Sample Data";
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing data: " + data);
}

fetchData(processData);
