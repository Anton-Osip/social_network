import React from 'react';
import './App.css';

function App() {
    return (
        <div className = "app-wrapper">
            <header className = "header">
                <img className = "header__img"
                     src = "https://raw.githubusercontent.com/Anton-Osip/Portfolio/388d3b58e59aebdff6485fe86e1c17eb0f44aa7d/src/assets/image/logo.svg"
                     alt = "Logo"/>
            </header>
            <nav className = "nav">
                <div>
                    <a href = "#aaa">Profile</a>{' '}
                </div>
                <div>
                    <a href = "#aaa">Messages</a>
                </div>
                <div>
                    <a href = "#aaa">News</a>
                </div>
                <div>
                    <a href = "#aaa">Music</a>
                </div>
            </nav>
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
        </div>
    );
}

export default App;
