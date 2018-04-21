"use strict"

const   coverContent = document.querySelector('.albumPic'),
        coverContentChild = coverContent.querySelectorAll('div'),
        previous = document.querySelector('#previous'),
        next = document.querySelector('#next');

let     count = 0;

/* Previous Button Click */
previous.addEventListener('click', () => {
    if(count > 0){
        count--;
    }else{
        console.log('not have music before');
    }
    console.log(count)
    return count;
});

/* next button Click */
next.addEventListener('click', () => {
    if(count < coverContentChild.length){
        count++
    }else{
        console.log('not have music after');
    }
    console.log(count)
    return count;
});