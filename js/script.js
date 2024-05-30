document.addEventListener('DOMContentLoaded', () => {
    const faqContent = document.querySelector('.faq-content');

    faqContent.addEventListener('click', (e) => {
        const faqQuestion = e.target.closest('.faq-question');

        if (!faqQuestion) return;

        const segment = faqQuestion.parentElement;
        const answer = segment.querySelector('.faq-answer');
        const icon = faqQuestion.querySelector('i');

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-xmark');

        answer.classList.toggle('show');

        const otherSegments = faqContent.querySelectorAll('.faq-segment');

        otherSegments.forEach((otherSegment) => {
            if (otherSegment !== segment) {
                const otherAnswer = otherSegment.querySelector('.faq-answer');
                const otherIcon = otherSegment.querySelector('.faq-question i ');
                console.log(otherAnswer);
                otherAnswer.classList.remove('show');
                otherIcon.classList.remove('fa-xmark');
                otherIcon.classList.add('fa-plus');
            }
        });
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')
    );
});