import React from 'react';

const Post = ({post}) => {
    const {userId,id,title,body}=post;
    return (
        <div>
            <div>UserID:{userId}</div>
            <div>ID:{id}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Post;