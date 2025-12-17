function validarLogin() {
// Obtener los valores de los campos
  const direccion = document.getElementById("direccion").value;
  const tarjeta = document.getElementById("tarjeta").value;
  const cvv = document.getElementById("cvv").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const mensaje = document.getElementById("mensaje");

  // Validar que todos los campos estén completos
  if (!direccion || !tarjeta || !cvv || !fechaNacimiento) {
    mensaje.textContent = "Completa todos los campos.";
    mensaje.style.color = "red";
    return;
  }

  // Validar longitud mínima de tarjeta
  if (tarjeta.length != 16) {
    mensaje.textContent = " La tarjeta debe tener 16 dígitos.";
    mensaje.style.color = "red";
    return;
  }
  // Validar longitud mínima de cvv
  if (cvv.length != 3) {
    mensaje.textContent = "El CVV debe tener 3 dígitos.";
    mensaje.style.color = "red";
    return;
  }

  // Validar fecha de nacimiento
  if (fechaNacimiento === "") {
    mensaje.textContent = " Ingresa tu fecha de nacimiento.";
    mensaje.style.color = "red";
    return;
  }

    mensaje.textContent = " Acceso concedido. ¡Bienvenido, Cosmonauta!";
    mensaje.style.color = "green";
}

// abrir db DAVID 

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

request.onerror = function(event) {
    console.error("Error al abrir la base de datos", event);
};

document.getElementById("btnPayment").addEventListener("click", function() {
    const direccion = document.getElementById("direccion").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const cvv = document.getElementById("cvv").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    if (!direccion || !tarjeta || !cvv || !fechaNacimiento) {
        document.getElementById("mensaje").textContent = "Todos los campos son obligatorios";
        return;
    }

    const correoUsuario = localStorage.getItem("usuarioActivo"); 
    if (!correoUsuario) {
        document.getElementById("mensaje").textContent = "Error no hay usuario activo";
        return;
    }

    const tx = db.transaction("usuarios", "readwrite");
    const store = tx.objectStore("usuarios");

    const req = store.get(correoUsuario);
    req.onsuccess = function(event) {
        const usuario = event.target.result;
        if (usuario) {
            usuario.direccion = direccion;
            usuario.tarjeta = tarjeta;
            usuario.cvv = cvv;
            usuario.fechaNacimiento = fechaNacimiento;

            store.put(usuario);

            document.getElementById("mensaje").textContent = "Datos de pago guardados ";
            window.location.href = "LOGIN.html";
        } else {
            document.getElementById("mensaje").textContent = "Usuario no encontrado";
        }
    };
});
