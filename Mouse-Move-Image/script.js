

const container = document.querySelector('.parent');
const image = document.querySelector('.directional-image');

container.addEventListener('mousemove', (e) => {
    console.log('moue move');
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 4;
    const centerY = rect.top + rect.height / 4;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / centerY) * 50; // Adjust sensitivity and range of rotation
    const rotateY = -(mouseX / centerX) * 50; // Adjust sensitivity and range of rotation

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
