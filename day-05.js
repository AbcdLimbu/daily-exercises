// Task - 1

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    console.log("Total users:", data.length)
})

// rewrite it using async/await

async function totalUsers(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        console.log("Total users:", data.length)
    }
    catch(error){
        console.log("Something went wrong:", error)
    }
}
totalUsers()

// Task - 2
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    let firstPost = data[0]
    console.log("First post title:", firstPost.title)
})

//Rewrite it using async/await
async function firstPost(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await res.json()

        let firstPost = data[0]
        console.log("First post title:", firstPost.title)
    }
    catch(error){
        console.log("Something went wrong: " , error)
    }
}
firstPost()
