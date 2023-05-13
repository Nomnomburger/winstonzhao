const contactRow = document.querySelector(".contact-row");

const contactOptions = {};

const contactRowObserver = new IntersectionObserver(
    function(entries, titleObserver) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                console.log("Contact Intersected");
                const rowsContact = document.querySelectorAll('.a-container .p-list-row');
                console.log(rowsContact);
                rowsContact.forEach((row, index) => {
                    setTimeout(() => {
                        row.classList.add('p-inview');
                        console.log("hello");
                    }, index * 50);
                })
            }


        })
    },
    contactOptions);

contactRowObserver.observe(contactRow);