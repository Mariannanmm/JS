let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5, modules: ['es6', 'react', 'node.js']},
    {title: 'Java Complex', monthDuration: 6, modules: ['oop', 'spring', 'hibernate']},
    {title: 'Python Complex', monthDuration: 6, modules: ['django', 'flask', 'data science']},
    {title: 'QA Complex', monthDuration: 4, modules: ['manual testing', 'automation', 'selenium']},
    {title: 'FullStack', monthDuration: 7, modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']},
    {title: 'Frontend', monthDuration: 4, modules: ['html', 'css', 'js', 'react', 'angular', 'webpack']}
];

const container = document.createElement('div');
document.body.appendChild(container);

coursesAndDurationArray.forEach(course => {
    const courseBlock = document.createElement('div');
    courseBlock.className = 'course-block';

    const titleBlock = document.createElement('div');
    titleBlock.className = 'detail-item';
    titleBlock.textContent = `Title: ${course.title}`;

    const durationBlock = document.createElement('div');
    durationBlock.className = 'detail-item';
    durationBlock.textContent = `Duration: ${course.monthDuration} months`;

    courseBlock.appendChild(titleBlock);
    courseBlock.appendChild(durationBlock);

    if (course.modules) {
        const modulesList = document.createElement('ul');
        modulesList.className = 'modules-list';

        course.modules.forEach(module => {
            const moduleItem = document.createElement('li');
            moduleItem.textContent = module;
            modulesList.appendChild(moduleItem);
        });

        const modulesBlock = document.createElement('div');
        modulesBlock.className = 'detail-item';
        modulesBlock.appendChild(modulesList);
        courseBlock.appendChild(modulesBlock);
    }

    container.appendChild(courseBlock);
});