//UI Vars
const imageDiv = document.querySelector('.carousel-inner');

document.addEventListener("DOMContentLoaded",() => {
    loadPictures();
});

function loadPictures() {
    fetch('https://picsum.photos/v2/list')
    .then(function(res) {
        return res.json(); //return JSON Promise
    })
    .then(function(posts) {
        let output = '';
    
        posts.forEach(function(post,index) {

            if (index == 0) {
                output += `
                <div class="carousel-item active">
                    <img class="d-block w-100 rounded" src="${post.download_url}">
                </div>
                `;
            }

            else {
                output += `
                <div class="carousel-item">
                    <img class="d-block w-100 rounded" src="${post.download_url}">
                </div>  
                `;  
            }
              
        });

        //Assign it to the DIV  
        imageDiv.innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    }); 
}