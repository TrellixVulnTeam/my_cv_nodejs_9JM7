
navbarApi = `https://project-nodejs-mycv.herokuapp.com/api/navbar_menu`;

fetch(navbarApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        const htmls = posts.map(function(post) {
            return `
            <a href="/"><div class = "title_navbar">${post.vi.Home.name}</div></a>
            <a href="/introduction"><div class = "title_navbar">${post.vi.Introductions.name}</div></a>
            <a href="/projects"><div class = "title_navbar">${post.vi.Projects.name}</div></a>
            <a href="/contact"><div class = "title_navbar">${post.vi.Contact.name}</div></a>
            `;
        });
        const html = htmls.join('');
        document.getElementsByClassName("nav_wrapper")[0].innerHTML = html;
    })
    .catch(function (err) {
        console.log(`Có lỗi ${err}`);
    })