import React from 'react';

const postsPromise=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
}

const PostPage =async () => {
    // const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts=await res.json()
    // const posts=postsPromise();

    const posts=await postsPromise()
    return (
        <div>
            <h1>Hello Post:{posts.length}</h1>
        </div>
    );
};

export default PostPage;