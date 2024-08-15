// script.js
document.addEventListener('DOMContentLoaded', function () {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                const value = this.dataset.value;
                const productId = rating.dataset.productId;

                // Handle the rating logic for the specific product
                console.log(`Product ID: ${productId}, Rating: ${value}`);

                // Update the UI based on rating (optional)
                stars.forEach(s => {
                    s.style.color = s.dataset.value <= value ? '#f5c518' : '#ccc';
                });
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.sidebar ul li');

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove the 'selected' class from all items
            listItems.forEach(li => li.classList.remove('selected'));

            // Add the 'selected' class to the clicked item
            this.classList.add('selected');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const glitchText = document.getElementById('glitchText');
    glitchText.setAttribute('data-text', glitchText.innerText);

    setInterval(() => {
        glitchText.style.animation = 'glitch 1s infinite';
    }, 1000);

    setInterval(() => {
        glitchText.querySelector('::before').style.animation = 'glitch-anim-1 1.5s infinite linear alternate-reverse';
        glitchText.querySelector('::after').style.animation = 'glitch-anim-2 1.5s infinite linear alternate-reverse';
    }, 1500);
});


/* Glitch Keyframes in JS */
const styles = document.createElement('style');
styles.innerHTML = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }

    @keyframes glitch-anim-1 {
        0% { clip: rect(44px, 9999px, 56px, 0); transform: skew(0.3deg); }
        5% { clip: rect(15px, 9999px, 56px, 0); transform: skew(0.9deg); }
        10% { clip: rect(85px, 9999px, 140px, 0); transform: skew(0.1deg); }
        15% { clip: rect(24px, 9999px, 96px, 0); transform: skew(0.7deg); }
        20% { clip: rect(10px, 9999px, 80px, 0); transform: skew(0.8deg); }
        25% { clip: rect(36px, 9999px, 62px, 0); transform: skew(0.2deg); }
        30% { clip: rect(54px, 9999px, 28px, 0); transform: skew(0.3deg); }
    }

    @keyframes glitch-anim-2 {
        0% { clip: rect(10px, 9999px, 50px, 0); transform: skew(0.2deg); }
        5% { clip: rect(32px, 9999px, 40px, 0); transform: skew(0.4deg); }
        10% { clip: rect(15px, 9999px, 30px, 0); transform: skew(0.6deg); }
        15% { clip: rect(50px, 9999px, 70px, 0); transform: skew(0.1deg); }
        20% { clip: rect(40px, 9999px, 80px, 0); transform: skew(0.7deg); }
        25% { clip: rect(25px, 9999px, 60px, 0); transform: skew(0.5deg); }
        30% { clip: rect(70px, 9999px, 90px, 0); transform: skew(0.9deg); }
    }

`;
document.head.appendChild(styles);

