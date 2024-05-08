const slider = document.querySelector('#slider');
const leftArrow = slider.querySelector('.left-arrow')
const rightArrow = slider.querySelector('.right-arrow')
const images = Array.from(slider.querySelectorAll('.slider-item'))
let counter = 0;

images.forEach((img, i) => {
    img.style.left = `${i * 100}%`
})

function slide() {
    images.forEach((img) => {
        img.style.transform = `translateX(-${counter * 100}%)`
    })
}

leftArrow.onclick = function () {
    if (counter === 0) return
    counter += -1
    slide()
}

rightArrow.onclick = function () {
    if (counter === images.length - 1) return
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

