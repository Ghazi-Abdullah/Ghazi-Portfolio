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

        //Date and Time
    
        // Update date and time
        function updateDateTime() {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            
            document.getElementById('datetime').textContent = 
                 //If i want i can add text befor the date Ex: Last Updated:
                `${now.toLocaleDateString('en-US', options)}`;
            
            document.getElementById('timestamp').textContent = 
                `Page loaded at: ${now.toLocaleTimeString()}`;
        }

        // Update time every second
        setInterval(updateDateTime, 1000);
        updateDateTime(); // Initial call

    