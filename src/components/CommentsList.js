import React, {Component} from 'react'
import Comment from './Comment.js'
import toggleOpen from '../decorators/toggleOpen.js'


function CommentsList({comments = [], isOpen, toggleOpen}) {
    const buttonText = isOpen ? 'Hide comments' : 'Show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{buttonText}</button>
            {showComment({comments, isOpen})}
        </div>
    )

function showComment({comments, isOpen}) {
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )

    }
}

export default toggleOpen(CommentsList)
