function login(event) {
    event.preventDefault(); // biar nggak reload form

    let user = document.querySelector('input[type="text"]').value;
    let pass = document.querySelector('input[type="password"]').value;

    // ganti sesuai kebutuhan
    let validUser = "adminhayo";
    let validPass = "22 november jam 7 56";

    if (user === validUser && pass === validPass) {
        // masuk ke halaman tebak
        window.location.href = "tebak.html";
    } else {
        alert("Username atau password salah!");
    }
}