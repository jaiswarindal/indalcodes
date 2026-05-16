document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-question i');
                otherAnswer.style.display = 'none';
                if (otherIcon) {
                    if (otherIcon.dataset.lucide === 'minus') {
                        otherIcon.setAttribute('data-lucide', 'plus');
                    } else if (otherIcon.dataset.lucide === 'chevron-up') {
                        otherIcon.setAttribute('data-lucide', 'chevron-down');
                    }
                }
            });

            if (!isOpen) {
                answer.style.display = 'block';
                if (icon) {
                    if (icon.dataset.lucide === 'plus') {
                        icon.setAttribute('data-lucide', 'minus');
                    } else if (icon.dataset.lucide === 'chevron-down') {
                        icon.setAttribute('data-lucide', 'chevron-up');
                    }
                }
            } else {
                answer.style.display = 'none';
                if (icon) {
                    if (icon.dataset.lucide === 'minus') {
                        icon.setAttribute('data-lucide', 'plus');
                    } else if (icon.dataset.lucide === 'chevron-up') {
                        icon.setAttribute('data-lucide', 'chevron-down');
                    }
                }
            }
            lucide.createIcons();
        });
    });

    // Sticky TOC Active State on Scroll
    const sections = document.querySelectorAll('section[id]');
    const tocLinks = document.querySelectorAll('.toc a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const valuationForm = document.getElementById('valuation-form');
    if (valuationForm) {
        valuationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your valuation request has been sent. Our team will contact you shortly.');
            valuationForm.reset();
        });
    }
});
