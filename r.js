function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = { 1: "Fazal Karim", 2: "John Doe" };
            if (users[userId]) {
                resolve(`User found: ${users[userId]}`);
            } else {
                reject("User not found");
            }
        }, 2000);
    });
}

// Consuming the Promise
fetchUserData(1)
    .then((data) => console.log(data))  // Resolves: User found: Fazal Karim
    .catch((error) => console.log(error));  // In case of rejection
