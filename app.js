function setupPopup(showButton, popupContainer, closeButton) {
    const showPopup = document.querySelector(showButton);
    const container = document.querySelector(popupContainer);
    const closeBtn = document.querySelector(closeButton);

    if (showPopup && container && closeBtn) {
        showPopup.onclick = () => {
            container.classList.add('active');
        };

        closeBtn.onclick = () => {
            container.classList.remove('active');
        };
    } else {
        console.error('invalid');
    }
}

setupPopup('.aries-popup', '.aries-container', '.aries-cls');
setupPopup('.taurus-popup', '.taurus-container', '.taurus-cls');
setupPopup('.gemini-popup', '.gemini-container', '.gemini-cls');
setupPopup('.fpopup-container', '.fpopup-box', '.fclose-btn');










function findZodiac() {
    const dobInput = document.getElementById('dob');
    const dobValue = dobInput.value;

    if (dobValue) {
        const birthDate = new Date(dobValue);
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();

        let zodiacSign = '';

        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
            zodiacSign = 'Aries';
        } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
            zodiacSign = 'Taurus';
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            zodiacSign = 'Gemini';
        } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
            zodiacSign = 'Cancer';
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
            zodiacSign = 'Leo';
        } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
            zodiacSign = 'Virgo';
        } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
            zodiacSign = 'Libra';
        } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
            zodiacSign = 'Scorpio';
        } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
            zodiacSign = 'Sagittarius';
        } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
            zodiacSign = 'Capricorn';
        } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
            zodiacSign = 'Aquarius';
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            zodiacSign = 'Pisces';
        }

        if (zodiacSign) {
            const popupContainer = document.getElementById('fpopupContainer');
            const popupBox = popupContainer.querySelector('.fpopup-box');
            popupBox.innerHTML = `<h1>Zodiac Sign Result</h1><p>Your zodiac sign is ${zodiacSign}</p><button class="fclose-btn" onclick="closePopup()">Close</button>`;
            popupContainer.classList.add('active');
        } else {
            alert('Unable to determine your zodiac sign.');
        }
    } else {
        alert('Please enter your date of birth.');
    }
}
function closePopup() {
    const popupContainer = document.getElementById('fpopupContainer'); 
    popupContainer.classList.remove('active');
}