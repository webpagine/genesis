let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

function toggleDarkMode() {
    darkMode = !darkMode
    setCookie("darkmode", darkMode)
    applyDarkMode()
}

function applyDarkMode() {
    let button = document.getElementById("button-dark-mode-toggle")
    if (darkMode) {
        button.innerText = "dark_mode"
        document.body.className = "theme-dark"
    } else {
        button.innerText = "light_mode"
        document.body.className = "theme-light"
    }
}

function initDarkMode() {
    if (getCookie("darkmode") === "") {
        setCookie("darkmode", true)
    } else {
        darkMode = getCookie("darkmode") === "true"
    }

    applyDarkMode()
}
