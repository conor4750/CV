document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill in all fields.';
            } else if (!validateEmail(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
            } else {
                formMessage.textContent = 'Message sent successfully!';
                form.reset();
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Populate experience list
    const experienceList = document.getElementById('experience-list');
    if (experienceList) {
        const experiences = [
            'Developed and maintained company website',
            'Collaborated with designers to create user-friendly interfaces',
            'Optimized website performance',
            'Implemented new features based on user feedback'
        ];

        experiences.forEach(exp => {
            const li = document.createElement('li');
            li.textContent = exp;
            experienceList.appendChild(li);
        });
    }

    // Highlight sections on hover
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#f0f0f0';
        });

        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = 'transparent';
        });
    });
});
