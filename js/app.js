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
