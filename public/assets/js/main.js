"use strict";
// const listUsers = document.querySelector(".js-listUsers");
// let usersData = [];

const getApiData = () => {
  fetch("http://localhost:8080/team3/clientes")
    .then((response) => response.json())
    .then((data) => {
      usersData = data;
      paintUsers();
    });
};
// const paintUsers = () => {
//   let userCode = "";

//   for (const user of usersData) {
//     userCode += getUsersHtmlCode(user);
//   }
//   listUsers.innerHTML = userCode;
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

"use strict";

$(function () {
  var textfield = $("input[name=user]");
  $('button[type="submit"]').click(function (e) {
    e.preventDefault();
    //little validation just to check username
    if (textfield.val() != "") {
      //$("body").scrollTo("#output");
      $("#output")
        .addClass("alert alert-success animated fadeInUp")
        .html(
          "Welcome back " +
            "<span style='text-transform:uppercase'>" +
            textfield.val() +
            "</span>"
        );
      $("#output").removeClass(" alert-danger");
      $("input").css({
        height: "0",
        padding: "0",
        margin: "0",
        opacity: "0",
      });
      //change button text
      $('button[type="submit"]').html("continue")
        // `<a href='./more-info.html'></a>`
          .removeClass("btn-info")
          .addClass("btn-default")
          .click(function () {
            $("input")
              .css({
                height: "auto",
                padding: "10px",
                opacity: "1",
              })
              .val("");
          });

      // //show avatar
      // $(".avatar").css({
      //     "background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
      // });
    } else {
      //remove success mesage replaced with error message
      $("#output").removeClass(" alert alert-success");
      $("#output")
        .addClass("alert alert-danger animated fadeInUp")
        .html("sorry enter a username ");
    }
    //console.log(textfield.val());
  });
});

//# sourceMappingURL=main.js.map
