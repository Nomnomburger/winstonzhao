const aboutRow = document.querySelector(".about-row");

const aboutOptions = {};

const aboutRowObserver = new IntersectionObserver(
    function(entries, titleObserver) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                console.log("About Intersected");
                const rowsAbout = document.querySelectorAll('.aboutlist-container .p-list-row');
                console.log(rowsAbout);
                rowsAbout.forEach((row, index) => {
                    setTimeout(() => {
                        row.classList.add('is-inview');
                        console.log("hello");
                    }, index * 50);
                })
            }


        })
    },
    aboutOptions);

aboutRowObserver.observe(aboutRow);