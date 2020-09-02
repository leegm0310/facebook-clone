import React from 'react'
import "./StoryReel.css"
import Story from "./Story.js"

function StoryReel({image, profileSrc, title}) {
    return (
        <div className="storyReel">
            <Story
                image = "https://i.pinimg.com/originals/59/74/26/5974265da292664e423407be43c938e2.jpg"
                profileSrc = ""
                title = "Leonardo DiCaprio"
            />
            <Story
                image = "https://visla.kr/wp/wp-content/uploads/2019/07/20190723_00.jpg"
                profileSrc = ""
                title = "Tony Leung"
            />
            <Story
                image = "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/04/01/2dc8022c-6f2b-11ea-b0ed-5e14cf8eb9e1_image_hires_220636.JPG?itok=xaKLlCAB&v=1585750006"
                profileSrc = ""
                title = "Leslie Cheung"
            />
            <Story
                image = "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-11584-brando-624-1372448011.jpg?resize=1800,1200&w=1200"
                profileSrc = ""
                title = "Marlon Brando"
            />
            <Story
                image = "https://d2ycltig8jwwee.cloudfront.net/features/218/fullwidth.79ebed71.jpg"
                profileSrc = ""
                title = "Wong Faye"
            />
        </div>
    )
}

export default StoryReel
