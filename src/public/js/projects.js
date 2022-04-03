

navbarApi = `https://project-nodejs-mycv.herokuapp.com/api/projects`;

fetch(navbarApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        const htmls = posts.map(function(post) {
            return `
            <a href="${post.link}">
                <div class="project_wrapper">
                    <div class="project_img">
                        <img src="${post.img}" width="160px" height="120px">
                    </div>
                    <div class="project_title">
                        <span>${post.title}</span>
                    </div>
                    <div class="project_description">
                        <span>${post.description}</span>
                    </div>
                </div>
            </a>
            `;
        });
        const html = htmls.join('');
        document.getElementsByClassName("projects_container")[0].innerHTML = html;
    })
    .catch(function (err) {
        console.log(`Có lỗi ${err}`);
    })