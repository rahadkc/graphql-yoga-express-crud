import uuidv4 from "uuid/v4";

export default {
    createUser(parent, args, { db: { users }}, info) {
        const emailTaken = users.some(user => user.email === args.input.email);

        if (emailTaken) {
            throw new Error("Email already exist!")
        }
        const user = {
            id: uuidv4(),
            ...args.input
        }
        users.push(user)
        return user;
    },
    deleteUser(parent, args, { db: { users, posts, comments }}, info) {
        const userIndex = users.findIndex(user => user.id === args.id)

        if(userIndex === -1) {
            throw new Error("User not exist!")
        }

        const deletedUser = users.splice(userIndex, 1)
        
        posts = posts.filter(post => post.author !== args.id)
        comments = comments.filter(comment => comment.author !== args.id)

        return deletedUser[0]
    },
    updateUser(parent, { id, input }, { db: { users } }, info) {
        const user = users.find(user => user.id === id)

        if(!user) {
            throw new Error("User not exist!")
        }

        if(typeof user.email === "string") {
            const emailTaken = users.some(user => user.email === input.email)

            if(emailTaken) {
                throw new Error("Email taken")
            }

            user.email = input.email
        }

        if(typeof user.name === "string") {
            user.name = input.name
        }

        if(typeof user.age !== "undefined") {
            user.age = input.age
        }

        return user
    },
    createPost(parent, args, { db: { users, posts }}, info) {
        const userExist = users.some(user => user.id === args.input.author)

        if(!userExist) {
            throw new Error("User not exist!")
        }
        const post = {
            id: uuidv4(),
            ...args.input
        }
        posts.push(post)
        return post;
    },
    updatePost(parent, { id, input }, { db: { posts } }, info) {
        const post = posts.find(post => post.id === id)

        if(!post) {
            throw new Error("Post not exist")
        }
        if(typeof post.title === "string") {
            post.title = input.title
        }
        if(typeof post.body === "string") {
            post.body = input.body
        }
        if(typeof post.published === "boolean") {
            post.published = input.published
        }
        return post
    },
    deletePost(parent, args, { db: { users, posts, comments } }, info) {
        const userExist = users.some(user => user.id === args.userId)
        if(!userExist) {
            throw new Error("Invalid user")
        }

        const postIndex = posts.findIndex(post => post.id === args.postId)
        if(postIndex === -1) {
            throw new Error("Post not exist")
        }
        comments = comments.filter(comment => comment.post !== args.postId)
        const deletedPost = posts.splice(postIndex, 1)
        return deletedPost[0]
    },
    createComment(parent, args, { db: { users, posts, comments }}, info) {
        const userExist = users.some(user => user.id === author)
        const postExist = posts.some(p => p.id === args.input.post && p.published)

        if(!userExist || !postExist) {
            throw new Error("Unable create comment")
        }

        const comment = {
            id: uuidv4(),
            ...args.input
        }
        comments.push(comment);

        return comment;
    },
    deleteComment(parent, args, { db: { comments }}, info) {
        const commentIndex = comments.findIndex(comment => comment.id === args.id)
        if(commentIndex === -1) {
            throw new Error ("Comment not found")
        }
        const deleteComments = comments.splice(commentIndex, 1)
        return deleteComments[0]
    },
    updateComment(parent, { id, input }, { db:  { comments } }, info) {
        const comment = comments.find(comment => comment.id === id)

        if(!comment) {
            throw new Error("No comment found")
        }

        if(typeof comment.text === "string") {
            comment.text = input.text
        }
        
        return comment
    }
}