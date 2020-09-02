import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"

function Feed() {
    return (
        <div className="feed">
            {/* 스토리 피드 */}
            <StoryReel />
            {/* 담벼락 */}
            <MessageSender />
        </div>
    )
}

export default Feed
