"use strict"

const coverContent = document.querySelector('.albumPic'),
    coverContentChild = coverContent.querySelectorAll('div'),
    previous = document.querySelector('#previous'),
    next = document.querySelector('#next');

let currentTrackIndex = 0;

/* Previous Button Click */

previous.addEventListener('click', () => {

    if (currentTrackIndex > 0) {

        let previousCover = coverContentChild[currentTrackIndex - 1],
            currentCover = coverContentChild[currentTrackIndex];

        previousCover.classList.remove('hideleft');
        previousCover.classList.add('showleft');
        currentCover.classList.add('hideright');

        --currentTrackIndex;

    } else {

        console.log('not have music before');
    }

    console.log(currentTrackIndex)
    return currentTrackIndex;

});

/* Next button Click */

next.addEventListener('click', () => {

    if (currentTrackIndex < coverContentChild.length - 1) {

        let nextCover = coverContentChild[currentTrackIndex + 1],
            currentCover = coverContentChild[currentTrackIndex];

        nextCover.classList.remove('hideright');
        nextCover.classList.add('showright');
        currentCover.classList.add('hideleft');

        ++currentTrackIndex;

    } else {

        console.log('not have music after');

    }

    console.log(currentTrackIndex)

    return currentTrackIndex;

});