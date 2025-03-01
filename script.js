
    const passwordInput = document.getElementById('ReviewPassword');
    const viewPasswordIcon = document.getElementById('ViewPassword');


    passwordInput.addEventListener('input', function() {
        if (passwordInput.value.length > 0) {
            viewPasswordIcon.style.display = 'block';  
        } else {
            viewPasswordIcon.style.display = 'none';  
        }
    });

    viewPasswordIcon.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;

       
        if (passwordInput.type === 'password') {
            viewPasswordIcon.classList.remove('bi-eye-slash');
            viewPasswordIcon.classList.add('bi-eye');
        } else {
            viewPasswordIcon.classList.remove('bi-eye');
            viewPasswordIcon.classList.add('bi-eye-slash');
        }
    });

    

