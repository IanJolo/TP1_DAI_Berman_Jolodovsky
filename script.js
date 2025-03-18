let contraseña2 = document.getElementById("contraseña2").value;
let nombreValidado = false;
let emailValidado = false;
let contraValidada = false;
let confiValidada = false;

document.getElementById("nombre").addEventListener("input", () => {
    let nombre = document.getElementById("nombre");
    let pNombre = document.getElementById("pNombre"); 
    const cantCharMinNombre = 3;

    if (nombre.value.length < cantCharMinNombre) {
        pNombre.innerHTML = "✖ El nombre debe tener al menos 3 caracteres."
        nombre.style.border="3px solid red"
        pNombre.className="rojo";
    } else {
        pNombre.innerHTML = "";
        nombre.style.border="3px solid green"
        nombreValidado=true;
    }
});


document.getElementById("email").addEventListener("input", () => {
    let email = document.getElementById("email");
    let pMail = document.getElementById("pMail"); 
    if (validarEmail(email.value)){
    pMail.innerHTML="";
    email.style.border="3px solid green"
    }else {
    pMail.innerHTML = "✖ El email debe contener un dominio y un '@'"
    email.style.border="3px solid red";
    emailValidado=true;  
    }
});

function validarEmail(email) {
    const lista = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return lista.test(email);
  }


document.getElementById("contraseña").addEventListener("input", () => {
    const cantCharMinContra = 8;
    let contra = document.getElementById("contraseña").value; 
    let pContra = document.getElementById("pContra");

    if (contra.length < cantCharMinContra) {
        pContra.innerHTML = "✖ La contraseña debe tener al menos 8 caracteres.";
        pContra.className = "rojo";
        document.getElementById("contraseña").style.border = "3px solid red";
    } else if (!contieneLetra(contra)) {
        pContra.innerHTML = "✖ La contraseña debe tener al menos 1 letra.";
        pContra.className = "rojo";
        document.getElementById("contraseña").style.border = "3px solid red";
    } else if (!contieneNumero(contra)) {
        pContra.innerHTML = "✖ La contraseña debe tener al menos 1 número.";
        pContra.className = "rojo";
        document.getElementById("contraseña").style.border = "3px solid red";
    } else {
        pContra.innerHTML = "";
        document.getElementById("contraseña").style.border = "3px solid green";
        contraValidada=true;
    }
});

function contieneLetra(contrasena) {
    return /[a-zA-Z]/.test(contrasena); 
}

function contieneNumero(contrasena) {
    return /\d/.test(contrasena); 
}

function validarContraConfi() {
    let contra = document.getElementById("contraseña").value;
    let confirmarContra = document.getElementById("contraseña2").value;
    let pConfirmar = document.getElementById("pConfirmarContra");
    let inputConfirmar = document.getElementById("contraseña2");

    if (confirmarContra === "") {
        pConfirmar.innerHTML = "";
        inputConfirmar.style.border = "3px solid gray";
    } else if (confirmarContra !== contra) {
        pConfirmar.innerHTML = "✖ Las contraseñas no coinciden.";
        inputConfirmar.style.border = "3px solid red";
    } else {
        pConfirmar.innerHTML = "";
        inputConfirmar.style.border = "3px solid green";
        confiValidada=true;
    }
}

document.getElementById("contraseña").addEventListener("input", () => {
    if (document.getElementById("contraseña2").value !== "") {
        validarContraConfi();
    }
});

document.getElementById("contraseña2").addEventListener("input", validarContraConfi);

document.querySelector("form").addEventListener("submit", (event) => {
    if (confiValidada==true && contraValidada==true && emailValidado==true && nombreValidado==true) {
        alert("Registro exitoso");
    } else {
        event.preventDefault(); 
        alert("Por favor, complete correctamente todos los campos.");
    }
});









// Obtener el botón y el body
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Función para alternar entre temas
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); // Alterna la clase dark-theme en el body
    const form = document.querySelector('form');
    form.classList.toggle('dark-theme'); // Alterna la clase dark-theme en el formulario
    themeToggleButton.classList.toggle('dark-theme'); // Alterna el estilo del botón para el tema oscuro
});
