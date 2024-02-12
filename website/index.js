$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    var words = [
            'lifelong learner.',
            'obsessive executor.',
            'sky-high visionary.'
        ];
    // cycleThroughWords("typed2", words, 2000);
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}
function cycleThroughWords(elementId, wordsArray, interval) {
    const wordContainer = $('#' + elementId);
    let currentIndex = 0;

    function cycleWords() {
        wordContainer.fadeOut('slow', function () {
            $(this).text(wordsArray[currentIndex]).fadeIn('slow');
        });

        currentIndex = (currentIndex + 1) % wordsArray.length;
    }

    // Initial display
    cycleWords();

    // Set interval to cycle through words
    setInterval(cycleWords, interval);
}


var typed = new Typed('#typed', {
    strings: [
        'Software Engineer.',
        'Cloud Architect.',
        'Wildlife Enthusiast.',
        'Adventure Junkie.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
var typed = new Typed('#typed2', {
    strings: [
        'lifelong learner.',
        'obsessive executor.',
        'sky-high visionary.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelectorAll(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://nif5fzt5d72k74eb3u24hsekfu0nvwqy.lambda-url.ap-south-1.on.aws/"
    );
    let data = await response.json();
    for(var i =0; i < counter.length; i++) {
        counter[i].innerHTML =  ` ${data} Views`;
    }
}
updateCounter();