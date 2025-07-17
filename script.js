document.addEventListener('DOMContentLoaded', () => {
    const orbits = document.querySelectorAll('.orbit');

    orbits.forEach(orbit => {
        const planet = orbit.querySelector('.planet');
        const duration = parseFloat(orbit.style.animationDuration) * 1000;

        let angle = Math.random() * 360;

        function animatePlanet() {
            angle = (angle + 360 / duration) % 360;
            const x = Math.cos(angle * Math.PI / 180) * (orbit.offsetWidth / 2 - planet.offsetWidth / 2);
            const y = Math.sin(angle * Math.PI / 180) * (orbit.offsetHeight / 2 - planet.offsetHeight / 2);

            planet.style.transform = `translate(${x}px, ${y}px)`;

            requestAnimationFrame(animatePlanet);
        }

    });
});
