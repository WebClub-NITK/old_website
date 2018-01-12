var events, selectedEvent = 0,
    currentPage = 0,
    loadedEvents = false;
var SCROLL_DELTA = 0;
const colors = ['#FF1744', '#76FF03', '#64FFDA'];

$(function () {
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    if (!isChrome) {
        SCROLL_DELTA = 2;
    }

    if ($(window).width() > 600) {
        animateHead();
        enableScrollAnimation();
    } else {
        animateEvents();
    }

    if (selectedEvent === 0) {
        $('#bt-prev').css({
            opacity: 0.2
        });
    }

    $('#bt-next').on('click', handleNext);
    $('#bt-prev').on('click', handlePrev);
});

function animateHead() {
    $('.hero-image').css({
        width: '100vw'
    });

    setTimeout(function () {
        $('.hero-image').css({
            width: '45%'
        });
        $('.hero-intro').css({
            display: 'flex',
            width: 'calc(65% - 18em)',
            paddingLeft: '6em',
            paddingRight: '12em'
        }, 400);
        $('.hero-intro p').css({
            display: 'block'
        });
        $('.hero-intro h1').css({
            display: 'block'
        });
    }, 1000);

}

function handleNext() {
    if (selectedEvent === 0) {
        $('#bt-prev').css({
            opacity: 1.0
        });
    }
    if (selectedEvent < 2) {
        animatePastEvents();
        selectedEvent++;
    }
    if (selectedEvent == 2) {
        $('#bt-next').css({
            opacity: 0.2
        });
    }
}

function handlePrev() {
    if (selectedEvent === 2) {
        $('#bt-next').css({
            opacity: 1.0
        });
    }
    if (selectedEvent > 0) {
        animatePastEvents();
        selectedEvent--;
    }
    if (selectedEvent == 0) {
        $('#bt-prev').css({
            opacity: 0.2
        });
    }
}

function enableScrollAnimation() {
    $('body').on('wheel', scrollFunc);
}

var timeout;

function scrollFunc(e) {
    e.preventDefault();
    e.stopPropagation();
    if (timeout !== undefined)
        clearTimeout(timeout);
    else
        handleScroll(e);
    timeout = setTimeout(() => {
        timeout = undefined;
    }, 100);
}

function handleScroll(e) {
    var ids = ['sec0', 'sec1', 'sec2'];

    if (e.originalEvent.deltaY < -SCROLL_DELTA) {
        // scroll down
        currentPage--;
        if (currentPage < 0) {
            currentPage = 0;
            return;
        }
        console.log('Hey')
        switch (currentPage) {
            case 0:
                $('.upcoming-events-list').css({
                    transform: 'translateX(-100%)'
                });
                $('.events-title h1, .events-title div, .events-title a').css({
                    opacity: '0'
                });
                $('.events-title').css({
                    width: '32%',
                    background: '#444'
                });
                $('.hero-intro p').css({
                    opacity: '0'
                });
                $('.hero-intro h1').css({
                    opacity: '0'
                });
                setTimeout(function () {
                    document.getElementById(ids[currentPage]).scrollIntoView(true);
                    $('.hero-intro p').css({
                        opacity: '1'
                    });
                    $('.hero-intro h1').css({
                        opacity: '1'
                    });
                    $('.upcoming-events-list').css({
                        transform: 'translateX(0%)'
                    });
                    $('.events-title h1, .events-title div, .events-title a').css({
                        opacity: '1'
                    });
                    $('.events-title').css({
                        width: '50%',
                        background: '#2a2a2a'
                    });
                }, 400);
                break;
            case 1:
                $('.event-details').css({
                    transform: 'translateX(-100%)'
                });
                setTimeout(function () {
                    document.getElementById(ids[currentPage]).scrollIntoView(true);
                }, 500);
        }
    } else if (e.originalEvent.deltaY > SCROLL_DELTA) {
        // scroll up
        currentPage++;
        if (currentPage > 2) {
            currentPage = 2;
            return;
        }
        switch (currentPage) {
            case 1:
                $('.hero-image').css({
                    width: '100%',
                    background: '#2a2a2a'
                });
                $('.title-contents').css({
                    opacity: 0
                });
                $('.hero-intro').css({
                    width: '45%'
                });
                $('.hero-intro p').css({
                    opacity: '0'
                });
                $('.hero-intro h1').css({
                    opacity: '0'
                });
                if (loadedEvents) {
                    $('.upcoming-events-list').css({
                        transform: 'translateX(-100%)'
                    })
                }
                setTimeout(function () {
                    document.getElementById(ids[currentPage]).scrollIntoView(true);
                    if (!loadedEvents) {
                        animateEvents();
                        loadedEvents = true;
                    } else {
                        $('.upcoming-events-list').css({
                            transform: 'translateX(0%)'
                        });
                    }
                    $('.hero-image').css({
                        width: '45%',
                        background: 'url("/images/coding-back.jpg") no-repeat center center, #444',
                        backgroundSize: 'cover',

                    });
                    $('.title-contents').css({
                        opacity: 1
                    });
                    $('.hero-intro').css({
                        width: 'calc(65% - 18em)'
                    });
                    $('.hero-intro p').css({
                        opacity: '1'
                    });
                    $('.hero-intro h1').css({
                        opacity: '1'
                    });
                }, 400);
                break;
            case 2:
                $('.upcoming-events').css({
                    transform: 'translateX(100%)'
                });
                $('.event-details').css({
                    transform: 'translateX(-100%)'
                });

                setTimeout(function () {
                    document.getElementById(ids[currentPage]).scrollIntoView(true);
                    animatePastEvents();
                    $('.upcoming-events').css({
                        transform: 'translateX(0)'
                    });
                }, 400);

                break;
        }
    }
}

function animatePastEvents() {
    $('.desc').text(events[events.length - 1 - selectedEvent].description);
    $('.title').text(events[events.length - 1 - selectedEvent].name);
    $('.event-details .image').attr('src', events[events.length - 1 - selectedEvent].image);
    $('.event-details').css({
        transform: 'translateX(-100%)'
    });
    $('.event-details .image').css({
        transform: 'translateX(-100%)'
    });
    setTimeout(function () {
        $('.event-details .content').css({
            background: colors[selectedEvent]
        })
        $('.event-details').css({
            transform: 'translateX(0%)'
        });
    }, 500);
    setTimeout(function () {
        $('.event-details .image').css({
            transform: 'translateX(0%)'
        });
    }, 1000);
}

function animateEvents() {
    loadJSON('data/events-test.json', function (response) {
        events = JSON.parse(response);

        for (var i = 0; i < 3; i++) {
            event = createEventCard(events[i], i);
            $('.upcoming-events-list').append(event);
        }

        var items = document.querySelectorAll('.event');

        for (var i = 0; i < 3; i++) {
            var enterAnimation = getEnterAnimation(items[i], i);
            setTimeout(enterAnimation, (i + 1) * 300);
        }
        animatePastEvents();
    });
}

function getEnterAnimation(item, i) {
    return function () {
        item.style = "transform: translateX(0%); background: " + colors[i] + ";";
    }
}

function createEventCard(event, number) {
    const card = document.createElement('div');
    card.style = "transform: translateX(-100%)"
    card.className = "event";

    var title = document.createElement('div');
    title.className = "title";
    title.innerText = event.title;
    card.appendChild(title);

    var venue = document.createElement('div');
    venue.className = "venue";
    venue.innerText = "Venue: " + event.venue;
    card.appendChild(venue);

    var time = document.createElement('div');
    time.className = "time";
    time.innerText = "Time: " + event.start_date;

    card.appendChild(time);

    return card;
}

function loadJSON(url, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}