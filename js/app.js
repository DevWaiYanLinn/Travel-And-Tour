const slider = document.querySelector('#slider');
const leftArrow = slider.querySelector('.left-arrow')
const rightArrow = slider.querySelector('.right-arrow')
const sliderItems = Array.from(slider.querySelectorAll('.slider-item'))
const mobileMenu = document.querySelector('.mobile-menu')
const navList = document.querySelector('.nav-list')
// const jpMap = document.querySelector('.jp-map')
// const paths = Array.from(jpMap.querySelectorAll('path'))

const data = {
    "JP01": "Hokkaidō", 
    "JP02": "Aomori", 
    "JP03": "Iwate", 
    "JP04": "Miyagi", 
    "JP05": "Akita", 
    "JP06": "Yamagata", 
    "JP07": "Fukushima", 
    "JP08": "Ibaraki", 
    "JP09": "Tochigi", 
    "JP10": "Gunma", 
    "JP11": "Saitama", 
    "JP12": "Chiba", 
    "JP13": "Tokyo", 
    "JP14": "Kanagawa", 
    "JP15": "Niigata", 
    "JP16": "Toyama", 
    "JP17": "Ishikawa", 
    "JP18": "Fukui", 
    "JP19": "Yamanashi", 
    "JP20": "Nagano", 
    "JP21": "Gifu", 
    "JP22": "Shizuoka", 
    "JP23": "Aichi", 
    "JP24": "Mie", 
    "JP25": "Shiga", 
    "JP26": "Kyōto", 
    "JP27": "Ōsaka", 
    "JP28": "Hyōgo", 
    "JP29": "Nara", 
    "JP30": "Wakayama", 
    "JP31": "Tottori", 
    "JP32": "Shimane", 
    "JP33": "Okayama", 
    "JP34": "Hiroshima", 
    "JP35": "Yamaguchi", 
    "JP36": "Tokushima", 
    "JP37": "Kagawa", 
    "JP38": "Ehime", 
    "JP39": "Kōchi", 
    "JP40": "Fukuoka", 
    "JP41": "Saga", 
    "JP42": "Nagasaki", 
    "JP43": "Kumamoto", 
    "JP44": "Ōita", 
    "JP45": "Miyazaki", 
    "JP46": "Kagoshima", 
    "JP47": "Okinawa"
}

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
// paths.forEach((p) => {
//     p.onclick = function(e) {
//         const id = e.target.id
//         console.log(data[id])
//     }
// })
