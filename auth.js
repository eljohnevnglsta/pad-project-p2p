let storedEmail = '';                                       // Variables to temporarily store user credentials
let storedPassword = '';

function createAccount() 
{
    const email = document.querySelector('.sign-up-form input[type="email"]').value;
    const password = document.querySelector('.sign-up-form input[type="password"]').value;

    if (email && password) 
    {
        storedEmail = email;
        storedPassword = password;
        alert('Account created successfully! You can now sign in.');
        showLogin();                                                    // Switch to the sign-in form after successful sign-up
    } 
    else 
    {
        alert('Please fill out all fields to create an account.');
    }
}

function signIn() 
{
    const email = document.querySelector('.sign-in-form input[type="text"]').value.trim();
    const password = document.querySelector('.sign-in-form input[type="password"]').value.trim();

    if (!email || !password) 
    {
        alert('Please enter your email and password.');
        return;
    }

    if (email == "admin@up.edu.ph" && password == "hello"){
        window.location.href = 'homepage.html';
        return;
    }

    if (email === storedEmail && password === storedPassword) 
    {
        alert('Sign-in successful!');

        document.body.classList.add('slide-out');       // Apply slide-out effect

        setTimeout(() =>                                // Redirect after the animation ends
        {
            window.location.href = 'verification.html'; // Redirect to verification page
        }, 700);
    } 
    else 
    {
        alert('Invalid email or password. Please try again.');
    }
}


function showSignup() 
{
    document.querySelector('.sign-in-form input[type="text"]').value = '';          // Clear the input fields in the Sign In form
    document.querySelector('.sign-in-form input[type="password"]').value = '';

    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');                     // Hide the Sign In form and show the Sign Up form with transition
    const rightText = document.querySelector('.right-text');

    signInForm.classList.remove('active');
    signInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
    signUpForm.classList.add('active');

    rightText.querySelector('h2').textContent = 'Sign Up';                          // Update text for sign-up
    rightText.querySelector('p').textContent = 'Create your account now.';

    setTimeout(() => 
    {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'grid';
    }, 500);
}

function showLogin() 
{
    document.querySelector('.sign-up-form input[type="email"]').value = '';
    document.querySelector('.sign-up-form input[type="password"]').value = '';      // Clear the input fields in the Sign Up form
    document.querySelector('.sign-up-form input[type="text"]').value = '';

    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');                     // Hide the Sign Up form and show the Sign In form with transition
    const rightText = document.querySelector('.right-text');

    signUpForm.classList.remove('active');
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
    signInForm.classList.add('active');

    rightText.querySelector('h2').textContent = 'Sign In';
    rightText.querySelector('p').textContent = 'Jump right back in to your account.';   // Update text for sign-in

    setTimeout(() => 
    {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'grid';
    }, 500);
}


document.addEventListener('DOMContentLoaded', function()                    // Attach event listeners to the sign-up and sign-in buttons
{
    document.querySelector('.sign-up-form .create-account').addEventListener('click', createAccount);
    document.querySelector('.sign-in-button').addEventListener('click', signIn);

    document.querySelector('.sign-in-form').classList.add('active');        // Initialize by showing the sign-in form 
    document.querySelector('.sign-in-form').style.display = 'grid';

    const rightText = document.querySelector('.right-text');                // Set the sign-in text at the right by default
    rightText.querySelector('h2').textContent = 'Sign In';
    rightText.querySelector('p').textContent = 'Jump right back in to your account.';
});
