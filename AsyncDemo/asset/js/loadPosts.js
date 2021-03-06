// UI Vars 
const postDiv2 = document.getElementById('myPosts');



//load multiple posts function 
function loadPosts() {

    //create the xhr object
    const xhr = new XMLHttpRequest();

    //open the connection [URL can be local or remote]
    xhr.open('GET', '/asset/jsonData/posts.json',true);

    //on ready state is 4 when it reaches this method
    xhr.onload = function() {
        //Check the status is OK

        if (this.status === 200) {

            //the data will be parsed as an array object from the responseText object
            const posts = JSON.parse(this.responseText);

            let output = '';

            posts.forEach(post => {
                //Creating the UI by concatenation
                output += `
                    <div class= "item">
                        <div class="image">
                            <img src="${post.image}">
                        </div>
                        <div class="content">
                            <a class="header" href="#" id="bTitle">
                                ${post.postTitle}
                            </a>
                            <div class="meta">
                                <span id="bDate">${post.date}</span>
                                <span>By: <a href="#" id="bAuthor">${post.name}</a></span>
                            </div>
                            <div class="description">
                                <p id="bDesc">
                                    ${post.postText}
                                </p>
                            </div>
                            <div class="extra">
                                <a class="ui floated basic violet button" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                `;
            });

            //Assign it to the Div
            postDiv2.innerHTML = output;
        }
    }

    //Send the request
    xhr.send();
}