const checkbox = document.querySelector('.bb8-toggle__checkbox');
let nombreValidado = false;
let emailValidado = false;
let contraValidada = false;
let confiValidada = false;

document.getElementById("nombre").addEventListener("input", () => {
    let nombre = document.getElementById("nombre");
    let pNombre = document.getElementById("pNombre"); 
    const cantCharMinNombre = 3;
    if(nombre.value===""){
        pNombre.innerHTML="";
        nombre.style.border="3px solid gray"
    }else{
    if (nombre.value.length >= cantCharMinNombre) {
       
        pNombre.innerHTML = "";
        nombre.style.border="3px solid green"
        nombreValidado=true;
    } else {
        pNombre.innerHTML = "✖ El nombre debe tener al menos 3 caracteres."
        nombre.style.border="3px solid red"
        pNombre.className="rojo";
    }
}
});


document.getElementById("email").addEventListener("input", () => {
    let email = document.getElementById("email");
    let pMail = document.getElementById("pMail"); 
    if(email.value===""){
        pMail.innerHTML="";
    email.style.border="3px solid gray"
    }else{
    if (validarEmail(email.value)){
    pMail.innerHTML="";
    email.style.border="3px solid green"
    }else {
    pMail.innerHTML = "✖ El email debe contener un dominio y un '@'"
    email.style.border="3px solid red";
    emailValidado=true;  
    }
}
});

function validarEmail(email) {
    const lista = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return lista.test(email);
  }


document.getElementById("contraseña").addEventListener("input", () => {
    const cantCharMinContra = 8;
    let contra = document.getElementById("contraseña"); 
    let pContra = document.getElementById("pContra");
    if(contra.value===""){
        pContra.innerHTML =""
        contra.style.border = "3px solid gray";
    }else{
    if (contra.value.length < cantCharMinContra) {
        pContra.innerHTML = "✖ La contraseña debe tener al menos 8 caracteres.";
        pContra.className = "rojo";
        contra.style.border = "3px solid red";
    } else if (!contieneLetra(contra.value)) {
        pContra.innerHTML = "✖ La contraseña debe tener al menos 1 letra.";
        pContra.className = "rojo";
        contra.style.border = "3px solid red";
    } else if (!contieneNumero(contra.value)) {
        pContra.innerHTML = "✖ La contraseña debe tener al menos 1 número.";
        pContra.className = "rojo";
        contra.style.border = "3px solid red";
    } else {
        pContra.innerHTML = "";
        contra.style.border = "3px solid green";
        contraValidada=true;
    }
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
    let pConfirmar = document.getElementById("pConfirmarContra");
    let inputConfirmar = document.getElementById("contraseña2");

    if (inputConfirmar.value === "") {
        pConfirmar.innerHTML = "";
        inputConfirmar.style.border = "3px solid gray";
    } else if (inputConfirmar.value !== contra) {
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

const fondo =document.getElementById("fondo");
const form=document.getElementById("form");
const titulo=document.getElementById("titulo");
const labelnombre=document.getElementById("labelnombre");
const labelmail=document.getElementById("labelmail");
const labelcontra=document.getElementById("labelcontra");
const labelconficontra=document.getElementById("labelconficontra");
const boton=document. getElementById("boton");

checkbox.addEventListener('change', () => {
   if(checkbox.checked){
    fondo.style.background="#181818";
    form.style.background="#1f1f1f";
    form.style.border="3px solid #e0e0e0";
    titulo.style.color="#eaeaea";
    labelnombre.style.color="#e0e0e0";
    labelmail.style.color="#e0e0e0";
    labelcontra.style.color=" #e0e0e0";
    labelconficontra.style.color="#e0e0e0";
    boton.style.background="rgb(231, 231, 231)";
    boton.style.color="black";
    boton.addEventListener('mouseover', ()=> {
        boton.style.background="rgb(197, 196, 196)";
    })
    boton.addEventListener('mouseout', () => {
        boton.style.background = "rgb(231, 231, 231)"; 
    });
   }else {
    fondo.style.background="linear-gradient(#74b9ff, #0984e3)";
    form.style.background="white";
    form.style.border="3px solid black";
    titulo.style.color="black";
    labelnombre.style.color="black";
    labelmail.style.color="black";
    labelcontra.style.color="black";
    labelconficontra.style.color="black";
    boton.style.background="#0984e3";
    boton.style.color="white";
    boton.addEventListener('mouseover', ()=> {
        boton.style.background="#66a2df";
    })
    boton.addEventListener('mouseout', () => {
        boton.style.background=" #0984e3";
        ; 
    });
   }
});