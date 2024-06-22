import React from 'react'

export const Profile: React.FC = () => {
    return (
        <div className = "content">
            <div>
                <img
                    className = "content__img"
                    src = "https://assets-global.website-files.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt = ""
                />
            </div>
            <div>ava + description</div>
            <div>
                my posts
                <div>New posts</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    )
}