
let data = []
async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     let post = await res.json()
    
     post.forEach(element => {
        data.push(element)
     });
}
getPosts().then(e => {
    const list = document.getElementsByClassName("container")[0];

    data.forEach(element => {
        const ul1 = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");

        const title = document.createTextNode("title: "+element.title)
        const userId = document.createTextNode("userId: "+ element.userId)
        const id = document.createTextNode("Id: "+element.id)
        const body = document.createTextNode("Body: "+element.body)
        ul1.appendChild(li2)
        ul1.appendChild(li3)
        ul1.appendChild(li1)
        ul1.appendChild(li4)
        li1.appendChild(title)
        li2.appendChild(userId)
        li3.appendChild(id)
        li4.appendChild(body)
        console.log(element.title)
        list.insertBefore(ul1, list.children[0]);
    })
})

console.log(data)
