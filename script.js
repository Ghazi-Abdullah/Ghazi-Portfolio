function toggleMenu() {
    const menu=document.querySelector(".menu-links")
    const icon=document.querySelector(".hamburger-icon")

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
        // Count-up Animation
        const counters = document.querySelectorAll('.animate-countup');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = +entry.target.getAttribute('data-target');
                    let count = 0;

                    const updateCount = () => {
                        if (count < target) {
                            count++;
                            entry.target.textContent = count;
                            setTimeout(updateCount, 200);
                        }
                    }

                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    