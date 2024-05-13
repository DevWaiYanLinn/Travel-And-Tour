const slider = document.querySelector('#slider');
const leftArrow = slider.querySelector('.left-arrow')
const rightArrow = slider.querySelector('.right-arrow')
const sliderItems = Array.from(slider.querySelectorAll('.slider-item'))
const mobileMenu = document.querySelector('.mobile-menu')
const navList = document.querySelector('.nav-list')

mobileMenu.onclick = () => {
    navList.classList.toggle('active')
}

let counter = 0;

sliderItems.forEach((sliderItem, i) => {
    sliderItem.style.left = `${i * 100}%`
})

slider.classList.add('ready')

function slide() {
    sliderItems.forEach((sliderItem) => {
        sliderItem.style.transform = `translateX(-${counter * 100}%)`
    })
    slider.querySelector('.index').classList.remove('index')
    sliderItems[counter].classList.add('index')
}

leftArrow.onclick = function () {
    if (!counter) return
    counter += -1
    slide()
}

rightArrow.onclick = function () {
    if (counter === sliderItems.length - 1) return
    counter += 1
    slide()
}


const skeletonContianer = document.querySelectorAll('.skeleton-container');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const image = entry.target.querySelector('img');
            const skeleton = entry.target.querySelector('.skeleton')
            image.src = image.dataset.src;
            image.onload = function () {
                setTimeout(() => {
                    image.removeAttribute('hidden')
                    skeleton.style.display = 'none';
                }, 500)
            };
            observer.unobserve(entry.target);
        }
    });
});
skeletonContianer.forEach((c) => {
    observer.observe(c);
})

