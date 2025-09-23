// cambio forzado para redeploy en Netlify

function includeHTML(id, file) {
    fetch(file)
    .then(response => {
        if (!response.ok) throw new Error("Error al cargar " + file);
        return response.text();
    })
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("navbar")) includeHTML("navbar", "navbar.html");
    if (document.getElementById("footer")) includeHTML("footer", "footer.html");

    // ✅ Si venís de Formsubmit, redirigí a gracias.html
    if (document.referrer.includes("formsubmit.co")) {
        window.location.href = "gracias.html";
    }
});
