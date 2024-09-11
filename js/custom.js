
let overlayMenu = document.querySelector('.overlay-menu'),
    linksMenu = document.querySelector('.btn-links'),
    mobileMenu = document.querySelector('.show-menu'),
    closeMenu =  document.querySelector('.hide-menu');

    mobileMenu.onclick = function (){
        overlayMenu.classList.add('open');
        setTimeout(function(){
            linksMenu.classList.add('open');
        },300)
        
    }
    closeMenu.onclick = function() {
        linksMenu.classList.remove('open');
        setTimeout(function(){
            overlayMenu.classList.remove('open');
        },300);
        
    }
    overlayMenu.onclick = function(){ 
            linksMenu.classList.remove('open');
            setTimeout(function(){
                overlayMenu.classList.remove('open');
            },300);
    }


    let prodDropMenu = document.querySelector('.prod-drop-menu'),
        dropMenu = document.querySelector('.drop-menu'),
        downTopIcon = document.querySelector('.down-icon');

        prodDropMenu.onclick = function(){
            dropMenu.classList.toggle('drop-block');
            downTopIcon.classList.toggle('top-icon');
            setTimeout(function(){
                dropMenu.classList.toggle('drop-anim');
            },100);
        }

// ------------------------------------

// ----------------------------- start banner section -----------------------------------

var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.banner'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.banner .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 5000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 5s linear 1 forwards'
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.banner .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

// ----------------------------- end banner section -----------------------------------



// ----------------------------- start production-slider section -----------------------

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed:700,
    nav:false,
    dots:false,
    responsive:{
        280:{
            items:1,
            margin:0
        },
        
        500:{
            items:2,
        },
        992:{
            items:3,
        },
        
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// ----------------------------- end production-slider section -------------------------


// ------------------------------------

const swiper = new Swiper('.swiper', {
    slidesPerView:3,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
});


// -------------------------------

// -----------------------------scroll top

let up = document.querySelector('.scroll-to-top');

window.onscroll = function() {
    if (this.scrollY >= 500) {
        up.classList.add('show');
    } else {
        up.classList.remove('show');
    }
};

up.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};


// ============================

