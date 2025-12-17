function validarLogin() {
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensaje = document.getElementById("mensaje");
      

  // para validar un correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo || !contrasena) {
      mensaje.textContent = "Completa todos los campos.";
      mensaje.style.color = "red";
      return;
    }

    // validar correo
    if (!regexCorreo.test(correo)) {
      mensaje.textContent = "Ingresa un correo válido.";
      mensaje.style.color = "red";
      return;
    }

    // minimo de la contraseña
    if (contrasena.length < 7) {
      mensaje.textContent = "La contraseña debe tener mínimo 7 caracteres.";
      mensaje.style.color = "red";
      return;
    }


    mensaje.textContent = "Login exitoso.";
    mensaje.style.color = "green";
}








// crear db  DAVID
let db;
const request = indexedDB.open("UsuariosDB",1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  const store = db.createObjectStore("usuarios", { keyPath: "email"});
  store.createIndex("password","password",{ unique: false});

};

request.onsuccess = function(event){
  db = event.target.result;
};

request.onerror = function(event){
  console.error("error al abrir la base de datos", event);
};

document.getElementById("btnLogin").addEventListener("click", function () {
const correo = document.getElementById ("correo").value;
const contrasena = document.getElementById("contrasena").value;


const request = indexedDB.open("UsuariosDB",1);
const tx = db.transaction("usuarios", "readonly");
const store = tx.objectStore("usuarios");
const req = store.get(correo);



req.onsuccess = function(event){
  const usuario = event.target.result;
  if (usuario && usuario.password === contrasena) {
    document.getElementById("mensaje").textContent = "login exitoso"; 
    localStorage.setItem("usuarioActivo", correo); //fuarda la sesion duanrte la pagina
    window.location.href = "Pagina Principal.html";//lleva a la pagina de inicio
  
  }else{
    document.getElementById("mensaje").textContent = "correo o contraseña incorrecta";
  }
};
});
