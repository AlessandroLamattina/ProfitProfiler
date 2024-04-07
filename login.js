function redirectToLoginPage() {
    window.location.href = "./login.html";
}

function handleLoginButtonClick() {
    fetch('./user.json')
        .then(response => response.json())
        .then(users => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                redirectToLoginPage();
            } else {
                console.log("Invalid username or password");
            }
        })
        .catch(error => {
            console.log("Error fetching user data:", error);
        });
}

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", handleLoginButtonClick);