

class ProjectsController {
    index(request, response) {
        response.render('projects');
    }

    project1(request, response) {
        response.render('project_1', { layout: 'projects' });
    }
    project2(request, response) {
        response.render('project_2');
    }
    project3(request, response) {
        response.render('project_3');
    }
    project4(request, response) {
        response.render('project_4');
    }
    project5(request, response) {
        response.render('project_5');
    }
    project6(request, response) {
        response.send('Hiện tại cho có project nào để thêm')
    }
    error(request, response) {
        response.status('404').send('Project not found');
    }
}

module.exports = new ProjectsController;