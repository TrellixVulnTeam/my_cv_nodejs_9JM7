

class SiteController {
    index(request, response) {
        response.render('home');
    }
    contact(request, response) {
        response.render('contact');
    }
    introduction(request, response) {
        response.render('introductions');
    }
}

module.exports = new SiteController;