window.addEventListener('load', () => {
    const projectList = [
        {
            "title": "Compendi",
            "completed" : 'February, 2023', 
            "desc": "Compendi is aimed at authors and writers looking for a place to organize and store their notes which is accessible from any device. With Compendi users can create project files with unlimited nested folders and files within them and they can find and store images in a multitude of ways.",
            "time_frame": "2 weeks",
            "tech_stack": ["Python", "Flask", "Flask-SQLAlchemy", "HTML", "Jinja", "CSS", "Cloudinary API", "Werkzeug"],
            "demo_embed": `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PdNTFznkjA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            "repo_link": "https://github.com/Bissle141/Compendi"
        },
        
        {
            "title": "Dragon's Keep",
            "completed" : 'December, 2022', 
            "desc": "This project is a single-page full-stack application that I developed to showcase my learning during the first 8 weeks of my coding bootcamp at Devmountain. It encompasses a range of technical skills including front-end development using HTML, CSS, and JavaScript, as well as back-end development using Node.js and various databases. The application is designed to be dynamic and user-friendly, with a clean and modern interface. Overall, this project serves as a testament to my growing proficiency in full-stack development and my ability to apply newly acquired skills to real-world projects.",
            "time_frame": "1 weeks",
            "tech_stack": ["JavaScript", "HTML", "CSS", "NodeJS", "Express", "NPM", "JSON"],
            "demo_embed": `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oBbiBo4XeeU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            "repo_link": "https://github.com/Bissle141/DragonsKeep"
        }
    
    ]
    
    const demoVideo = document.getElementById('demo-video');
    const techStackUl = document.getElementById('project-tech-stack');
    const projectTitleText = document.getElementById('project-title');
    const timeFrame = document.getElementById('project-time-frame');
    const repoLink = document.getElementById('project-repo-link');
    const desc = document.getElementById('project-desc');
    const completed = document.getElementById('project-completed');

    const rightArrow = document.getElementById('project-right');
    const leftArrow = document.getElementById('project-left');
    
    function updateProject(projectIndex) {
        // Pop techstack
        var techStackLi = '';
        for (let index = 0; index < projectList[projectIndex].tech_stack.length; index++) {
            techStackLi += `<li style="padding-left:10px;">* ${projectList[projectIndex].tech_stack[index]}</li>`   
        }
        techStackUl.innerHTML = techStackLi

        // Pop demo-link
        demoVideo.innerHTML = projectList[projectIndex].demo_embed

        // Pop title
        projectTitleText.innerHTML = projectList[projectIndex].title

        // Set repo link
        repoLink.setAttribute('href', projectList[projectIndex].repo_link)

        // Pop Desc
        desc.innerHTML = projectList[projectIndex].desc

        // Pop timeFrame
        timeFrame.innerHTML = 'Time Frame: ' + projectList[projectIndex].time_frame

        // Pop completed
        completed.innerHTML = 'Completed: ' + projectList[projectIndex].completed

    }
    var projectIndex = 0;
    updateProject(projectIndex)
    
    rightArrow.addEventListener('click', function () {
        if (projectIndex + 1 >= projectList.length) {
            projectIndex = 0 
        }
        else {
            projectIndex += 1
        }
        updateProject(projectIndex)
    })

    leftArrow.addEventListener('click', function () {
        if (projectIndex == 0) {
            projectIndex = projectList.length - 1
        }
        else {
            projectIndex -= 1
        }
        updateProject(projectIndex)
    })
    


  });  