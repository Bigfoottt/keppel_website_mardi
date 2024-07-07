document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!/^[a-zA-Z0-9]{6,15}$/.test(username)) {
        alert('Username must be 6-15 alphanumeric characters.');
        e.preventDefault();
    } else if (password.length < 8 || password.length > 16) {
        alert('Password must be 8-16 characters.');
        e.preventDefault();
    }
});

document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    const teamName = document.getElementById('teamName').value;
    const captainName = document.getElementById('captainName').value;
    const captainPhone = document.getElementById('captainPhone').value;
    const memberName = document.getElementById('memberName').value;
    const memberPhone = document.getElementById('memberPhone').value;

    if (!/^[a-zA-Z0-9]{4,15}$/.test(teamName)) {
        alert('Team Name must be 4-15 alphanumeric characters.');
        e.preventDefault();
    } else if (!/^[a-zA-Z ]+$/.test(captainName) || !/^[a-zA-Z ]+$/.test(memberName)) {
        alert('Names must be only alphabet and spaces.');
        e.preventDefault();
    } else if (!/^\d{7,14}$/.test(captainPhone) || !/^\d{7,14}$/.test(memberPhone)) {
        alert('Phone numbers must be 7-14 numeric characters.');
        e.preventDefault();
    }
});

document.getElementById('rulesPopup')?.style.display = 'block';
document.getElementById('closePopup')?.addEventListener('click', function() {
    document.getElementById('rulesPopup').style.display = 'none';
});
