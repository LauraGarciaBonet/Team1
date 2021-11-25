"use strict";

const user = document.querySelector(".js-user");

const paintUsers = () => {
  let userCode = "";
  userCode += getUsersHtmlCode(userData);
  user.innerHTML = userCode;
  //listenUser();
};
const getUsersHtmlCode = (user) => {
  let htmlCode = "";
  htmlCode += `<h2>${user.nombre}${user.apellido}</h2>`;
  //   htmlCode += `<h2>${user.apellido}</h2>`;
  htmlCode += `<p>${user.dni}</p>`;
  htmlCode += `<p>${user.telefono}</p>`;
  htmlCode += `<p>${user.email}</p>`;
  htmlCode += `<p>${user.direccion}</p>`;
  htmlCode += `<p>${user.cargo}</p>`;
  htmlCode += `<p>${user.area}</p>`;
  htmlCode += `<button type="button" id=${user.id} class="btn js-borrar btn-danger">Actualizar</button>`;
  return htmlCode;
};
