const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
    localStorage.setItem(USERNAME_KEY, username);
} 

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit() {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSubmit);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
} else {
    paintGreetings();
}
