"use strict";
// const userName = document.querySelector(".js-userName").value;
// const password = document.querySelector(".js-password").value;
// const user = document.querySelector(".js-user");
// let userData = {
//   userName,
//   password,
// };
// let url = "https://example.com/profile";
// //var data = { username: "example" };

// fetch(url, {
//   method: "POST", // or 'PUT'
//   body: JSON.stringify(userData), // data can be `string` or {object}!
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     if (response.ok) return response.text();
//     else throw new Error(response.status);
//   })
//   .catch((error) => console.error("Error:", error))
//   .then((response) => console.log("Success:", response));

// fetch(url, {
//   method: "GET", // or 'PUT'
//   body: JSON.stringify(userData), // data can be `string` or {object}!
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     url = data;
//   });
//ejemplo
// fetch('flores.jpg').then(function(response) {
//     if(response.ok) {
//       response.blob().then(function(miBlob) {
//         var objectURL = URL.createObjectURL(miBlob);
//         miImagen.src = objectURL;
//       });
//     } else {
//       console.log('Respuesta de red OK pero respuesta HTTP no OK');
//     }
//   })
//   .catch(function(error) {
//     console.log('Hubo un problema con la petición Fetch:' + error.message);
//   });

// const getApiData = () => {
//   fetch("http://localhost:8080/team3/clientes", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       userData = data;
//       // paintUsers();
//     });
// };
// const paintUsers = () => {
//   let userCode = "";
//     userCode += getUsersHtmlCode(userData);
//   user.innerHTML = userCode;
//   //listenUser();
// };
// const getUsersHtmlCode = (user) => {
//   let htmlCode = "";
//   htmlCode += `<tbody>`;
//   htmlCode += `<th class="js-user">${user.nombre}</th>`;
//   htmlCode += `<th>${user.apellido}</th>`;
//   htmlCode += `<th>${user.dni}</th>`;
//   htmlCode += `<th>${user.telefono}</th>`;
//   htmlCode += `<th>${user.email}</th>`;
//   htmlCode += `<th>${user.direccion}</th>`;
//   htmlCode += `<th>${user.codigoP}</th>`;
//   htmlCode += `<th>${user.imagen}</th>`;
//   htmlCode += `<th><button type="button" id=${user.id} class="btn js-borrar btn-danger">Borrar</button></th>`;
//   htmlCode += `</tbody>`;
//   return htmlCode;
// };

// const listenUser = () => {
//   const clickedUser = document.querySelectorAll(".js-borrar");
//   for (const clickUser of clickedUser) {
//     clickUser.addEventListener("click", deleteUser);
//   }
// };

// const deleteUser = (ev) => {
//   const userId = parseInt(ev.currentTarget.id);
//   fetch(`http://localhost:8080/team3/clientes/${userId}`, { method: "DELETE" })
//     .then((response) => response.json())
//     .then((data) => {
//       usersData = data;
//       console.log(data.mensaje);
//       getApiData();
//     });
// };

// getApiData();

// const btnSubmitCrear = document.querySelector(".js-formCreate");

// const crearAlumno = (ev) => {
//   ev.preventDefault();
//   const nombre = document.querySelector(".js-nombreC").value;
//   const apellidos = document.querySelector(".js-apellidosC").value;
//   const email = document.querySelector(".js-emailC").value;
//   const telefono = document.querySelector(".js-telefonoC").value;
//   const direccion = document.querySelector(".js-direccionC").value;
//   const codigoP = document.querySelector(".js-cpC").value;
//   const imagen = document.querySelector(".js-imagenC").value;
//   const dni = document.querySelector(".js-dniC").value;

//   const alumno = {
//     nombre: nombre,
//     apellido: apellidos,
//     email: email,
//     telefono: telefono,
//     direccion: direccion,
//     codigoP: codigoP,
//     imagen: imagen,
//     dni: dni,
//   };

//   fetch("http://localhost:8080/team3/clientes", {
//     method: "POST",
//     body: JSON.stringify(alumno),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       data = data;
//       console.log(data.mensaje);
//     });
// };
// btnSubmitCrear.addEventListener("submit", crearAlumno);

// const btnSubmitActualizar = document.querySelector(".js-formActualizar");

// const actualizarAlumno = (ev) => {
//   ev.preventDefault();
//   const nombre = document.querySelector(".js-nombreA").value;
//   const apellidos = document.querySelector(".js-apellidosA").value;
//   const email = document.querySelector(".js-emailA").value;
//   const telefono = document.querySelector(".js-telefonoA").value;
//   const direccion = document.querySelector(".js-direccionA").value;
//   const codigoP = document.querySelector(".js-cpA").value;
//   const imagen = document.querySelector(".js-imagenA").value;
//   const dni = document.querySelector(".js-dniA").value;

//   const alumno = {
//     nombre: nombre,
//     apellido: apellidos,
//     email: email,
//     telefono: telefono,
//     direccion: direccion,
//     codigoP: codigoP,
//     imagen: imagen,
//     dni: dni,
//   };

//   fetch("http://localhost:8080/team3/clientes/${id}", {
//     method: "POST",
//     body: JSON.stringify(alumno),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       data = data;
//       console.log(data.mensaje);
//     });
// };
// btnSubmitActualizar.addEventListener("submit", actualizarAlumno);
