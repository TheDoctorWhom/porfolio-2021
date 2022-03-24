const nav = document.querySelectorAll('.nav');
    const pages = document.querySelectorAll('.page');
    const linkbox = document.querySelectorAll('.linkbox');
    const box = document.querySelectorAll('.box');

    const aboutMe = document.querySelector('.aboutme');
    const profile = document.querySelector('.portfolio');
    const resume = document.querySelector('.resume');
    const contacts = document.querySelector('.contact');

    const setPage = function(pages, page) {
        for (i = 0; i < pages.length; i++) {
            if (pages[i].classList.contains(page)) {
                pages[i].classList.add('activepage');
                pages[i].classList.remove('nonactivepage');
            } else {
                pages[i].classList.remove('activepage');
                pages[i].classList.add('nonactivepage');
            }
        }
    };

    const setActiveNav = function(nav, navActive){
        nav.forEach((x, i) => {i === navActive ?
            x.classList.add('activenav'):
            x.classList.remove('activenav');
        });
    };

    const openNewTab = function(url) {
        window.open(url);
    }

    // linkdIn link button
    linkbox[0].addEventListener('click', function() {
        openNewTab('https://www.linkedin.com/in/zachery-dutton-a61590156/');
    });

    //github link button
    linkbox[1].addEventListener('click', function() {
        openNewTab('https://github.com/TheDoctorWhom');
    });

    //telephone link button
    linkbox[2].addEventListener('click', function() {
        openNewTab('tel:720-277-2969');
    });

    //Email link button
    linkbox[3].addEventListener('click', function() {
        openNewTab('mailto:zak.dutton@gmail.com');
    });

    //Lego Collection search site link
    box[0].addEventListener('click', function() {
        openNewTab('https://dazzling-lalande-f9aab6.netlify.app/');
    });

    //YouTube Search Site link
    box[1].addEventListener('click', function() {
        openNewTab('https://elastic-blackwell-40a960.netlify.app/');
    });

    //intolerance site link
    box[2].addEventListener('click', function() {
        openNewTab('https://focused-easley-47a81a.netlify.app/');
    });

    //bank info site link
    box[3].addEventListener('click', function() {
        openNewTab('https://upbeat-bassi-332c34.netlify.app/');
    });


    //About Me Nav button
    nav[0].addEventListener('click', function() {
        setPage(pages, 'aboutme');
        setActiveNav(nav,0);
        // nav[0].classList.add('activenav');
        // nav[1].classList.remove('activenav');
        // nav[2].classList.remove('activenav');
        // nav[3].classList.remove('activenav');
    }); // end of aboutMe eventListener function

    //Portfolio Nav Button
    nav[1].addEventListener('click', function() {
        setPage(pages, 'portfolio');
        setActiveNav(nav,1);
    }); // end of portfolio eventListener function

    //resume Nav Button
    nav[2].addEventListener('click', function() {
        setPage(pages, 'resume');
        setActiveNav(nav,2);
    }); // end of resume eventListener function

    //Contact Nav Button
    nav[3].addEventListener('click', function() {
        setPage(pages, 'contact');
        setActiveNav(nav,3);
    }); // end of Contact eventListener function
