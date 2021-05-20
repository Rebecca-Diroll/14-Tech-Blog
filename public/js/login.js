const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Username or password is incorrect.");
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (name && email && password) {
        const response = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "aplication/json" }
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert(response.statusText);
        }
    }
};

function createHideShow() {
    let x = document.querySelector("#signup");
    let y = document.querySelector(".createAccount");
    let z = document.querySelector("#login");
    let v = document.querySelector(".btn-login");

    x.style.display = "block";
    // y.style.display = "block";
    z.style.display = "none";
    // v.style.display = "none";
}

document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);

document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);