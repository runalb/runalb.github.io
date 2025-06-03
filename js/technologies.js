// Technologies data
const technologies = [
    { icon: 'devicon-java-plain', name: 'Java' },
    { icon: 'devicon-spring-plain', name: 'Spring' },
    { icon: 'fa fa-hexagon-nodes', name: 'Microservices' },
    { icon: 'fa fa-code', name: 'REST APIs' },
    { icon: 'devicon-python-plain', name: 'Python' },
    { icon: 'devicon-angularjs-plain', name: 'Angular' },
    
    { icon: 'devicon-illustrator-plain', name: 'AI' },
    { icon: 'devicon-azure-plain', name: 'Azure' },
    { icon: 'devicon-amazonwebservices-plain', name: 'AWS' },
    { icon: 'devicon-googlecloud-plain', name: 'Google Cloud' },
    { icon: 'devicon-jenkins-plain', name: 'Jenkins' },
    { icon: 'devicon-git-plain', name: 'Git/GitHub' },
    
    { icon: 'devicon-oauth-plain', name: 'OAuth' },
    { icon: 'devicon-hibernate-plain', name: 'Hibernate' },
    { icon: 'devicon-maven-plain', name: 'Maven' },
    { icon: 'devicon-socketio-original', name: 'socket.io' },
    { icon: 'devicon-postman-plain', name: 'Postman' },
    { icon: 'devicon-django-plain', name: 'Django' },
    { icon: 'devicon-djangorest-plain', name: 'Django Rest' },
    
    { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
    { icon: 'devicon-azuresqldatabase-plain', name: 'SQL' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'fa fa-database', name: 'DBMS' },
   
    { icon: 'devicon-html5-plain', name: 'HTML' },
    { icon: 'devicon-css3-plain', name: 'CSS' },
    { icon: 'devicon-javascript-plain', name: 'JavaScript' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },




    

];

// Function to generate technology banners
function generateTechnologyBanners() {
    const container = document.getElementById('technologies-container');
    
    technologies.forEach(tech => {
        const column = document.createElement('div');
        column.className = 'large-2 medium-3 small-4 column';
        column.style = 'padding-bottom: 30px';
        
        column.innerHTML = `
            <div class="technology-banner" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <i class="${tech.icon} fa-3x"></i>
                <p style="color: #fff;">${tech.name}</p>
            </div>
        `;
        
        container.appendChild(column);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateTechnologyBanners); 