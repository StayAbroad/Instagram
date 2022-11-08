function postTemplateHTML(i, author, author_image, location, date, image, description, likes, author_comment, comment) {
    return /*html*/ `
    <div class="post">
            <div class="post-header">
                <div class="profile-info">
                    <div class="post-profile-photo"><img src="${author_image}" alt=""></div>
                    <div class="post-info-container">
                        <div class="post-name-date"><span><b>${author}</b></span>
                            <div class="date-posted">&#8226; ${date} d</div>
                        </div>
                        <div class="location">${location}</div>
                    </div>
                </div>
                <img class="dots" src="img/icons/icons8-dots-loading-30.png" alt="Dots">
            </div>
            <img  onclick="openPost(${i}, '${author}', '${author_image}', '${location}', '${date}', '${image}', '${description}', '${likes}', '${author_comment}', '${comment}')" class="post-image" src="${image}" alt="Post Image">
            <div class="post-footer">
                <div><span onclick="like(${i}, ${likes})" id="like${i}" class="material-symbols-outlined heart">
                        favorite
                    </span>
                    <span class="material-symbols-outlined bubble">
                        mode_comment
                    </span>
                    <span class="material-symbols-outlined paper-plane">
                        send
                    </span>
                </div>
                <div onclick="bookmark(${i})">
                    <span id="bookmark${i}" class="material-symbols-outlined bookmark">
                        bookmark
                    </span>
                </div>
            </div>
            <div id="likeId${i}" class="likes"><b>${likes} likes</b></div>
            <div class="description"><b>${author}</b> ${description}</div>
            <div class="comment-section">
                <div id="comments${i}"></div>
                <div class="add-comment-section">
                    <form action="">
                        <input id="input-comment${i}" class="input-comment" type="text" placeholder="Add a comment...">
                        <button onclick="addComment(${i})" id="input-btn${i}" type="button">Send</button>
                </form>
                    <div class="emoji"><span class="material-symbols-outlined">
                            sentiment_satisfied
                        </span></div>
                </div>
            </div>
        </div>`
}

function popupTemplateHTML(i, author, author_image, location, date, image, description, likes, author_comment, comment) {
    return /*html*/ `
<div onclick="closePost()" class="close-btn"><span class="material-symbols-outlined">
                close
            </span>
        </div>
        <div class="popup-container">
            <div class="post">
                <div class="post-header">
                    <div class="profile-info">
                        <div class="post-profile-photo"><img src="${author_image}" alt=""></div>
                        <div class="post-info-container">
                            <div class="post-name-date"><span><b>${author}</b></span>
                                <div class="date-posted">&#8226; ${date} d</div>
                            </div>
                            <div class="location">${location}</div>
                        </div>
                    </div>
                    <img class="dots" src="img/icons/icons8-dots-loading-30.png" alt="Dots">
                </div>
                <img id="post-image"  class="post-image" src="${image}" alt="" style="cursor: default;">
                <div class="post-footer">
                    <div><span class="material-symbols-outlined heart">
                            favorite
                        </span>
                        <span class="material-symbols-outlined bubble">
                            mode_comment
                        </span>
                        <span class="material-symbols-outlined paper-plane">
                            send
                        </span>
                    </div>
                    <div>
                        <span class="material-symbols-outlined bookmark">
                            bookmark
                        </span>
                    </div>
                </div>
                <div class="likes"><b>${likes} likes</b></div>
                <div class="description"><b>${author}</b> ${description}</div>
                <div class="comment-section">
                <div id="comments${i}"></div>
                    <div class="add-comment-section">
                        <form action="">
                            <input id="input-comment${i}" class="input-comment" type="text" placeholder="Add a comment...">
                            <button onclick="addComment(${i})" type="button">Send</button>
                    </form>
                        <div class="emoji"><span class="material-symbols-outlined">
                                sentiment_satisfied
                            </span></div>
                    </div>
                </div>
            </div>
        </div>`
}


function storyTimelineHTML() {
    return /*html*/ `
    <div class="story-timeline">
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/gehlert-852762_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">Hans Peter</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/girl-2696947_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">Maria van der Garden</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/happy-1836445_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">Wilhelm Hauser</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/ma.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">Beardy Dean</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/man-930397_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">Dieter Belm</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/smile-2072907_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">travelogia</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/woman-1146038_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">fashionstyle</div>
                    </div>
                    <div class="story-profile">
                        <div class="story-photo"><img src="img/woman-2563491_640.jpg" alt="Story-Photo"></div>
                        <div class="profile-name">logia</div>
                    </div>
                </div>`
}


function recommendationsHTML() {
    return /*html*/ `
    <section class="side-container">
                <div class="profile-container">
                    <div class="my-profile"><img src="img/IMG_1220.JPG" alt="Profil Image">
                        <div>
                            <div><b>Stay_abroad</b></div>
                            <div style="color: gray;">Dennis Köster</div>
                        </div>
                    </div>
                    <div class="blue-and-pointer"><b>Change</b></div>
                </div>

                <div class="recommendations">
                    <div class="header-recommendations">
                        <span style="color: gray"><b>Recommendations for you</b></span>
                        <span><b>See all</b></span>
                    </div>
                    <div class="profile-container">
                        <div class="profile"><img src="img/woman-1146038_640.jpg" alt="Profil Image">
                            <div>
                                <div><b>luisarpunkt</b></div>
                                <div class="follow-text">follows you</div>
                            </div>
                        </div>
                        <div class="blue-and-pointer"><b>Follow</b></div>
                    </div>
                    <div class="profile-container">
                        <div class="profile"><img src="img/gehlert-852762_640.jpg" alt="Profil Image">
                            <div>
                                <div><b>andreaslobrecht</b></div>
                                <div class="follow-text">follows you</div>
                            </div>
                        </div>
                        <div class="blue-and-pointer"><b>Follow</b></div>
                    </div>
                    <div class="profile-container">
                        <div class="profile"><img src="img/man-930397_640.jpg" alt="Profil Image">
                            <div>
                                <div><b>karlheinz</b></div>
                                <div class="follow-text">follows you</div>
                            </div>
                        </div>
                        <div class="blue-and-pointer"><b>Follow</b></div>
                    </div>
                    <div class="profile-container">
                        <div class="profile"><img src="img/woman-2563491_640.jpg" alt="Profil Image">
                            <div>
                                <div><b>evalech</b></div>
                                <div class="follow-text">follows you</div>
                            </div>
                        </div>
                        <div class="blue-and-pointer"><b>Follow</b></div>
                    </div>
                    <div class="profile-container">
                        <div class="profile"><img src="img/smile-2072907_640.jpg" alt="Profil Image">
                            <div>
                                <div><b>marialoh</b></div>
                                <div class="follow-text">follows you</div>
                            </div>
                        </div>
                        <div class="blue-and-pointer"><b>Follow</b></div>
                    </div>
            </section>
        </div>`
}

