
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting (for demo purposes)

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Firebase authentication
    app.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // Redirect to the tutorship page upon successful login
            window.location.href = 'Tutorship.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle authentication errors (display an error message or perform any other action)
            alert('Invalid credentials. Please try again.');
        });
});
