export default {
    user() {
       return {
           id: "1",
           email: "rahad@mail.com",
           name: "Rahad Rahman",
           age: 33
       }
    },
    users(parent, args, { db: { users } }, info) {
        if(!args.query) {
            return users;
        }
        return users.filter(user => user.name.toLowerCase().includes(args.query.toLowerCase()));
    },
    post() {
        return {
            id: "123",
            title: "Everyday new technology",
            body: "Rise of technological varieties creating new tech almost everyday",
            published: true
        }
    },
    posts(parent, args, { db: { posts }}, info) {
        if(!args.query) {
            return posts;
        }

        return posts.filter(post => post.title.toLowerCase().includes(args.query.toLowerCase()) || post.body.toLowerCase().includes(args.query.toLowerCase()))
    },
    comments(parent, args, { db: { comments }}, info) {
        if(!args.query){
            return comments;
        }
        return comments.filter(comment => comment.id === args.query)
    }
}