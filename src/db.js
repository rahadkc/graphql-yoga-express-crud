let users = [
    {
        id: "1",
        email: "rahad@mail.com",
        name: "Rahad Rahman",
        age: 33
    },
    {
        id: "2",
        email: "rahad@mail.com",
        name: "Fahad Alam",
        age: 23
    },
    {
        id: "3",
        email: "rahad@mail.com",
        name: "Xxx Rahman",
        age: 33
    }
]

let posts = [
    {
        id: "21",
        title: "Everyday new technology",
        body: "Rise of technological varieties creating new tech almost everyday",
        published: true,
        author: "1"
    },
    {
        id: "22",
        title: "Old id gold",
        body: "Nothing to show her",
        published: true,
        author: "2"
    },
    {
        id: "23",
        title: "Title to attract viewers",
        body: "If you want to increase viewrs attention",
        published: true,
        author: "1"
    },
    {
        id: "24",
        title: "Title 4",
        body: "If you want to increase viewrs attention",
        published: true,
        author: "3"
    }
]
let comments = [
    {
        id: "1",
        text: "First comment",
        author: "2",
        post: "22"
    },
    {
        id: "2",
        text: "Second comment",
        author: "1",
        post: "22"
    },
    {
        id: "3",
        text: "Third comment",
        author: "2",
        post: "23"
    },
    {
        id: "4",
        text: "Fourth comment",
        author: "3",
        post: "24"
    }
]

const db = {
    users,
    posts,
    comments
}

export { db as default}