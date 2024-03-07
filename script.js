const form = document.getElementById('contactForm');
const validationMessages = document.getElementById('validationMessages');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate inputs
    let isValid = true;
    validationMessages.innerHTML = '';
    
    if (!name) {
        validationMessages.innerHTML += 'Please enter your name.<br>';
        isValid = false;
    }
    
    if (!email || !email.includes('@')) {
        validationMessages.innerHTML += 'Please enter a valid email address.<br>';
        isValid = false;
    }
    
    if (!message) {
        validationMessages.innerHTML += 'Please enter a message.<br>';
        isValid = false;
    }
    
    if (!isValid) {
        validationMessages.classList.remove('hidden');
        setTimeout(() => {
            validationMessages.innerHTML = '';
            validationMessages.classList.add('hidden');
        }, 3000);
        return;
    }
    
    // Upload data to GitHub
    const accessToken = 'YOUR_GITHUB_ACCESS_TOKEN';
    const repoOwner = 'YOUR_GITHUB_USERNAME';
    const repoName = 'YOUR_REPOSITORY_NAME';
    
    const data = Name: ${name}\nEmail: ${email}\nMessage: ${message};
    
    try {
        const response = await fetch(https://api.github.com/repos/${repoOwner}/${repoName}/contents/contactform.txt, {
            method: 'PUT',
            headers: {
                Authorization: token ${accessToken},
            },
            body: JSON.stringify({
                message: 'Update contact form data',
                content: btoa(data),
                sha: null,
            }),
        });
        
        if (response.ok) {
            alert('Form data uploaded successfully!');
            form.reset();
        } else {
            alert('Error uploading form data. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});