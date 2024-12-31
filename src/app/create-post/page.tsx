"use client"
import React from 'react'
import CreatePostForm from '../components/CreatePostForm'

const CreatePost = () => {
    const handlePostCreated = () => {
        // Add your post creation logic here
        console.log('Post created!')
    }
  return (
    <div>
        <CreatePostForm onPostCreated={handlePostCreated}/>
    </div>
  )
}

export default CreatePost