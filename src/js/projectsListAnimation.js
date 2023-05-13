const projectRow = document.querySelector(".project-row");

const projectOptions = {};

const projectRowObserver = new IntersectionObserver(
    function(entries, titleObserver) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                console.log("Contact Intersected");
                const rowsProject = document.querySelectorAll('.p-container .p-list-row');
                console.log(rowsProject);
                rowsProject.forEach((row, index) => {
                    setTimeout(() => {
                        row.classList.add('is-inview');
                        console.log("hello");
                    }, index * 50);
                })
            }


        })
    },
    projectOptions);

projectRowObserver.observe(projectRow);