console.log('Before');
getUser(1, getRepositories);

// const user = getUser(1);
// console.log(user);          // undefined

getUser(1)
    .then(user =>  getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));


console.log('After');

// Synchronous
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');


// Simple solution to resolve callback hell 
// -> Replace anonymous function with a named func

// Callbacks
// Promises
// Async and Await

function displayCommits(commits) {
    console.log(commits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
}

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}   

function getUser(id, resolve) {
    return new Promise((resolve, reject) => {
        // Example of non-blocking function
    // Aynchronous : does not mean concurrent or multi-threaded
    // Scheduling a task to be performed in the future
    setTimeout(() => {
        console.log('Reading a use from a database...');
        resolve({ id: id, gitHubUsername: 'mosh'});
    }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}