function validarLogin() {
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensaje");
    const telefono = document.getElementById("telefono").value;

  //para validar un correo
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!correo || !contrasena) {
    mensaje.textContent = "Completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  // Validar correo
  if (!regexCorreo.test(correo)) {
    mensaje.textContent = "Ingresa un correo válido.";
    mensaje.style.color = "red";
    return;
  }

  // Validar longitud mínima de contraseña
  if (contrasena.length < 7) {
    mensaje.textContent = "La contraseña debe tener mínimo 7 caracteres.";
    mensaje.style.color = "red";
    return;
  }

  if (!/^\d{3}\s\d{2}\s\d{2}\s\d{2}$/.test(telefono)) {
    mensaje.textContent = "El teléfono debe tener el formato xxx xx xx xx.";
    mensaje.style.color = "red";
    return;
  }
{
  mensaje.textContent = "Login exitoso.";
  mensaje.style.color = "green";
}


    mensaje.textContent = "Acceso concedido. Bienvenido, Cosmonauta";
    mensaje.style.color = "green";
}




// abrir db  DAVID
const request = indexedDB.open("UsuariosDB", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("usuarios")) {
        const store = db.createObjectStore("usuarios", { keyPath: "email" });
        store.createIndex("password", "password", { unique: false });
        store.createIndex("telefono", "telefono", { unique: false });
        store.createIndex("direccion", "direccion", { unique: false });
        store.createIndex("tarjeta", "tarjeta", { unique: false });
        store.createIndex("cvv", "cvv", { unique: false });
        store.createIndex("fechaNacimiento", "fechaNacimiento", { unique: false });
    }
};

request.onsuccess = function(event) {
    db = event.target.result;
};

// Guardar usuario
document.getElementById("btnRegister").addEventListener("click", function() {
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const telefono = document.getElementById("telefono").value;

    if (!correo || !contrasena) {
        document.getElementById("mensaje").textContent = "Correo y contraseña son obligatorios";
        return;
    }

    const tx = db.transaction("usuarios", "readwrite");
    const store = tx.objectStore("usuarios");
    const usuario = { email: correo, password: contrasena, telefono: telefono };

    const req = store.add(usuario);

    req.onsuccess = function() {
        document.getElementById("mensaje").textContent = "Cuenta creada exitosamente ";
        localStorage.setItem("usuarioActivo", correo); // Guardar sesión temporal
        window.location.href = "NEW ACCOUNT P2.html";
    };

    req.onerror = function() {
        document.getElementById("mensaje").textContent = "Error: el correo ya existe";
    };
});