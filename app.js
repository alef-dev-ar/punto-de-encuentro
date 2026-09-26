/* =========================================================
   PUNTO DE ENCUENTRO
   JAVASCRIPT V2.2
========================================================= */


/* =========================================================
   PANTALLAS
========================================================= */

const pantallaInicio =
    document.getElementById("pantallaInicio");

const pantallaRegistro =
    document.getElementById("pantallaRegistro");

const pantallaPerfil =
    document.getElementById("pantallaPerfil");

const pantallaExplorar =
    document.getElementById("pantallaExplorar");

const pantallaMiPerfil =
    document.getElementById("pantallaMiPerfil");


/* =========================================================
   BOTONES PRINCIPALES
========================================================= */

const comenzarRegistro =
    document.getElementById("comenzarRegistro");

const logoVolverInicio =
    document.getElementById("logoVolverInicio");

const logoMiPerfilInicio =
    document.getElementById("logoMiPerfilInicio");

const botonMiPerfil =
    document.getElementById("botonMiPerfil");

const botonExplorar =
    document.getElementById("botonExplorar");

const botonExplorarDesdeMiPerfil =
    document.getElementById(
        "botonExplorarDesdeMiPerfil"
    );

const botonMatches =
    document.getElementById("botonMatches");

const botonMatchesDesdeMiPerfil =
    document.getElementById(
        "botonMatchesDesdeMiPerfil"
    );

const volverAExplorar =
    document.getElementById("volverAExplorar");

const editarMiPerfil =
    document.getElementById("editarMiPerfil");

const volverDesdeFormularioPerfil =
    document.getElementById(
        "volverDesdeFormularioPerfil"
    );


/* =========================================================
   LOGIN
========================================================= */

const abrirLogin =
    document.getElementById("abrirLogin");

const cerrarLogin =
    document.getElementById("cerrarLogin");

const modalLogin =
    document.getElementById("modalLogin");

const formularioLogin =
    document.getElementById("formularioLogin");

const correoLogin =
    document.getElementById("correoLogin");

const claveLogin =
    document.getElementById("claveLogin");


/* =========================================================
   REGISTRO
========================================================= */

const formularioRegistro =
    document.getElementById("formularioRegistro");

const nombreRegistro =
    document.getElementById("nombreRegistro");

const edadRegistro =
    document.getElementById("edadRegistro");

const ciudadRegistro =
    document.getElementById("ciudadRegistro");

const correoRegistro =
    document.getElementById("correoRegistro");

const claveRegistro =
    document.getElementById("claveRegistro");


/* =========================================================
   CREAR / EDITAR PERFIL
========================================================= */

const formularioPerfil =
    document.getElementById("formularioPerfil");

const descripcionPerfil =
    document.getElementById("descripcionPerfil");

const contadorDescripcion =
    document.getElementById("contadorDescripcion");

const cantidadIntereses =
    document.getElementById("cantidadIntereses");

const botonesInteres =
    document.querySelectorAll(".interes");

const tituloFormularioPerfil =
    document.getElementById("tituloFormularioPerfil");

const textoFormularioPerfil =
    document.getElementById("textoFormularioPerfil");

const botonGuardarPerfil =
    document.getElementById("botonGuardarPerfil");


/* =========================================================
   DATOS VISIBLES DEL USUARIO
========================================================= */

const inicialUsuario =
    document.getElementById("inicialUsuario");

const nombreUsuario =
    document.getElementById("nombreUsuario");

const inicialUsuarioPerfil =
    document.getElementById("inicialUsuarioPerfil");

const nombreUsuarioPerfil =
    document.getElementById("nombreUsuarioPerfil");


/* =========================================================
   MI PERFIL
========================================================= */

const miPerfilNombre =
    document.getElementById("miPerfilNombre");

const miPerfilEdad =
    document.getElementById("miPerfilEdad");

const miPerfilDescripcion =
    document.getElementById("miPerfilDescripcion");

const miPerfilIntereses =
    document.getElementById("miPerfilIntereses");

const miPerfilCiudad =
    document.getElementById("miPerfilCiudad");


/* =========================================================
   OTROS
========================================================= */

const mensajeSistema =
    document.getElementById("mensajeSistema");

const volverArriba =
    document.getElementById("volverArriba");


/* =========================================================
   DATOS DEL USUARIO

   IMPORTANTE:
   "ciudad" es un dato privado.
   No se muestra en las tarjetas públicas.
========================================================= */

let usuario = {

    nombre: "",

    edad: null,

    ciudad: "",

    correo: "",

    descripcion: "",

    intereses: []

};


/*
   Esta variable nos permite saber
   si estamos creando el perfil
   o modificándolo.
*/

let modoEdicionPerfil = false;


/* =========================================================
   ICONOS DE INTERESES
========================================================= */

const iconosIntereses = {

    "Música":
        "icono-musica",

    "Cine":
        "icono-cine",

    "Lectura":
        "icono-libros",

    "Café":
        "icono-cafe",

    "Naturaleza":
        "icono-naturaleza",

    "Arte":
        "icono-arte",

    "Tecnología":
        "icono-tecnologia",

    "Viajes":
        "icono-viajes",

    "Gastronomía":
        "icono-gastronomia",

    "Deporte":
        "icono-deporte"

};


/* =========================================================
   OCULTAR TODAS LAS PANTALLAS
========================================================= */

function ocultarPantallas() {

    pantallaInicio.classList.add("oculto");

    pantallaRegistro.classList.add("oculto");

    pantallaPerfil.classList.add("oculto");

    pantallaExplorar.classList.add("oculto");

    pantallaMiPerfil.classList.add("oculto");

}


/* =========================================================
   MOSTRAR UNA PANTALLA
========================================================= */

function mostrarPantalla(pantalla) {

    ocultarPantallas();

    pantalla.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MENSAJES
========================================================= */

let temporizadorMensaje;


function mostrarMensaje(
    texto,
    tipo = "normal"
) {

    clearTimeout(temporizadorMensaje);

    mensajeSistema.textContent = texto;

    mensajeSistema.classList.remove(
        "oculto",
        "error"
    );


    if (tipo === "error") {

        mensajeSistema.classList.add("error");

    }


    temporizadorMensaje =
        setTimeout(function () {

            mensajeSistema.classList.add("oculto");

        }, 2800);

}


/* =========================================================
   PORTADA → REGISTRO
========================================================= */

comenzarRegistro.addEventListener(
    "click",
    function () {

        modoEdicionPerfil = false;

        mostrarPantalla(pantallaRegistro);

    }
);


/* =========================================================
   LOGOS → PORTADA
========================================================= */

logoVolverInicio.addEventListener(
    "click",
    function () {

        mostrarPantalla(pantallaInicio);

    }
);


logoMiPerfilInicio.addEventListener(
    "click",
    function () {

        mostrarPantalla(pantallaInicio);

    }
);


/* =========================================================
   ENLACES DEL LOGO EN PORTADA
========================================================= */

document
    .querySelectorAll(".enlace-inicio")
    .forEach(function (enlace) {

        enlace.addEventListener(
            "click",
            function () {

                mostrarPantalla(
                    pantallaInicio
                );

            }
        );

    });


/* =========================================================
   BOTONES "VOLVER A PORTADA"
========================================================= */

document
    .querySelectorAll(
        '.volver[data-volver="inicio"]'
    )
    .forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                mostrarPantalla(
                    pantallaInicio
                );

            }
        );

    });


/* =========================================================
   LOGIN
========================================================= */

abrirLogin.addEventListener(
    "click",
    function () {

        modalLogin.classList.remove("oculto");

    }
);


cerrarLogin.addEventListener(
    "click",
    function () {

        modalLogin.classList.add("oculto");

    }
);


modalLogin.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modalLogin) {

            modalLogin.classList.add("oculto");

        }

    }
);


/* =========================================================
   INICIAR SESIÓN DEMO
========================================================= */

formularioLogin.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const correo =
            correoLogin.value.trim();

        const clave =
            claveLogin.value.trim();


        if (
            correo === "" ||
            clave === ""
        ) {

            mostrarMensaje(
                "Completá correo y contraseña.",
                "error"
            );

            return;

        }


        /*
           Como todavía no tenemos servidor
           ni base de datos, cargamos
           un perfil ficticio de demostración.
        */

        usuario = {

            nombre: "Demo",

            edad: 30,

            ciudad: "Ciudad de demostración",

            correo: correo,

            descripcion:
                "Me gusta descubrir nuevas ideas, conversar y compartir intereses.",

            intereses: [
                "Música",
                "Cine",
                "Café"
            ]

        };


        modalLogin.classList.add("oculto");


        actualizarUsuario();

        calcularAfinidades();

        mostrarPantalla(
            pantallaExplorar
        );


        mostrarMensaje(
            "Sesión de demostración iniciada."
        );

    }
);


/* =========================================================
   REGISTRO
========================================================= */

formularioRegistro.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const nombre =
            nombreRegistro.value.trim();

        const edad =
            Number(edadRegistro.value);

        const ciudad =
            ciudadRegistro.value.trim();

        const correo =
            correoRegistro.value.trim();

        const clave =
            claveRegistro.value.trim();


        /* NOMBRE */

        if (nombre.length < 2) {

            mostrarMensaje(
                "Escribí un nombre o alias.",
                "error"
            );

            return;

        }


        /* EDAD */

        if (
            !edad ||
            edad < 18
        ) {

            mostrarMensaje(
                "Este prototipo está planteado para perfiles adultos.",
                "error"
            );

            return;

        }


        if (edad > 99) {

            mostrarMensaje(
                "Revisá la edad ingresada.",
                "error"
            );

            return;

        }


        /* CIUDAD */

        if (ciudad.length < 2) {

            mostrarMensaje(
                "Indicá solamente tu ciudad.",
                "error"
            );

            return;

        }


        /* CORREO */

        if (
            correo === "" ||
            !correo.includes("@")
        ) {

            mostrarMensaje(
                "Ingresá un correo válido.",
                "error"
            );

            return;

        }


        /* CONTRASEÑA DEMO */

        if (clave.length < 6) {

            mostrarMensaje(
                "La contraseña de la demo necesita al menos 6 caracteres.",
                "error"
            );

            return;

        }


        /*
           Guardamos los datos.

           La ciudad queda en usuario.ciudad,
           pero NO se muestra públicamente.
        */

        usuario.nombre = nombre;

        usuario.edad = edad;

        usuario.ciudad = ciudad;

        usuario.correo = correo;


        /*
           Preparamos el formulario
           para crear el perfil.
        */

        modoEdicionPerfil = false;

        prepararFormularioCreacion();


        mostrarPantalla(
            pantallaPerfil
        );

    }
);


/* =========================================================
   PREPARAR FORMULARIO PARA CREAR PERFIL
========================================================= */

function prepararFormularioCreacion() {

    tituloFormularioPerfil.textContent =
        "Contá un poco sobre vos.";

    textoFormularioPerfil.textContent =
        "No necesitás una fotografía. Tus palabras son la primera impresión.";

    botonGuardarPerfil.textContent =
        "Crear mi perfil";


    descripcionPerfil.value = "";

    usuario.descripcion = "";

    usuario.intereses = [];


    botonesInteres.forEach(
        function (boton) {

            boton.classList.remove(
                "seleccionado"
            );

        }
    );


    actualizarContadoresPerfil();

}


/* =========================================================
   CONTADOR DE DESCRIPCIÓN
========================================================= */

descripcionPerfil.addEventListener(
    "input",
    function () {

        contadorDescripcion.textContent =
            descripcionPerfil.value.length;

    }
);


/* =========================================================
   SELECCIONAR INTERESES
========================================================= */

botonesInteres.forEach(
    function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const interes =
                    boton.dataset.interes;


                const posicion =
                    usuario.intereses.indexOf(
                        interes
                    );


                if (posicion === -1) {

                    usuario.intereses.push(
                        interes
                    );

                    boton.classList.add(
                        "seleccionado"
                    );

                }

                else {

                    usuario.intereses.splice(
                        posicion,
                        1
                    );

                    boton.classList.remove(
                        "seleccionado"
                    );

                }


                actualizarContadoresPerfil();

            }
        );

    }
);


/* =========================================================
   ACTUALIZAR CONTADORES DEL PERFIL
========================================================= */

function actualizarContadoresPerfil() {

    contadorDescripcion.textContent =
        descripcionPerfil.value.length;


    cantidadIntereses.textContent =
        usuario.intereses.length;

}


/* =========================================================
   GUARDAR PERFIL
========================================================= */

formularioPerfil.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const descripcion =
            descripcionPerfil.value.trim();


        if (descripcion.length < 20) {

            mostrarMensaje(
                "Contanos un poquito más sobre vos.",
                "error"
            );

            return;

        }


        if (usuario.intereses.length < 3) {

            mostrarMensaje(
                "Elegí al menos 3 intereses.",
                "error"
            );

            return;

        }


        usuario.descripcion =
            descripcion;


        actualizarUsuario();

        calcularAfinidades();


        /*
           SI ESTÁBAMOS EDITANDO:
           volvemos a Mi perfil.
        */

        if (modoEdicionPerfil) {

            modoEdicionPerfil = false;

            mostrarMiPerfil();

            mostrarMensaje(
                "Cambios guardados."
            );

            return;

        }


        /*
           SI ERA UN PERFIL NUEVO:
           vamos a explorar.
        */

        mostrarPantalla(
            pantallaExplorar
        );


        mostrarMensaje(
            "Tu perfil está listo."
        );

    }
);


/* =========================================================
   ACTUALIZAR NOMBRE E INICIAL
========================================================= */

function actualizarUsuario() {

    const nombre =
        usuario.nombre || "Usuario";


    const inicial =
        nombre
            .charAt(0)
            .toUpperCase();


    nombreUsuario.textContent =
        nombre;


    inicialUsuario.textContent =
        inicial;


    nombreUsuarioPerfil.textContent =
        nombre;


    inicialUsuarioPerfil.textContent =
        inicial;

}


/* =========================================================
   MOSTRAR MI PERFIL
========================================================= */

function mostrarMiPerfil() {

    /*
       PARTE PÚBLICA
    */

    miPerfilNombre.textContent =
        usuario.nombre || "Usuario";


    miPerfilEdad.textContent =
        usuario.edad || "--";


    miPerfilDescripcion.textContent =
        usuario.descripcion ||
        "Todavía no agregaste una presentación.";


    /*
       CIUDAD:
       solamente aparece dentro
       de la sección PRIVADA.
    */

    miPerfilCiudad.textContent =
        usuario.ciudad ||
        "Sin configurar";


    /*
       Limpiamos los intereses
       anteriores antes de dibujarlos.
    */

    miPerfilIntereses.innerHTML = "";


    if (usuario.intereses.length === 0) {

        const mensaje =
            document.createElement("span");


        mensaje.textContent =
            "Todavía no seleccionaste intereses.";


        miPerfilIntereses.appendChild(
            mensaje
        );

    }

    else {

        usuario.intereses.forEach(
            function (interes) {

                const etiqueta =
                    document.createElement("span");


                const icono =
                    iconosIntereses[interes];


                etiqueta.innerHTML =
                    `
                    <svg>
                        <use href="#${icono}"></use>
                    </svg>

                    ${interes}
                    `;


                miPerfilIntereses.appendChild(
                    etiqueta
                );

            }
        );

    }


    actualizarUsuario();


    mostrarPantalla(
        pantallaMiPerfil
    );

}


/* =========================================================
   BOTÓN MI PERFIL
========================================================= */

botonMiPerfil.addEventListener(
    "click",
    function () {

        mostrarMiPerfil();

    }
);


/* =========================================================
   MI PERFIL → EXPLORAR
========================================================= */

botonExplorarDesdeMiPerfil.addEventListener(
    "click",
    function () {

        calcularAfinidades();

        mostrarPantalla(
            pantallaExplorar
        );

    }
);


volverAExplorar.addEventListener(
    "click",
    function () {

        calcularAfinidades();

        mostrarPantalla(
            pantallaExplorar
        );

    }
);


/* =========================================================
   BOTÓN EXPLORAR
========================================================= */

botonExplorar.addEventListener(
    "click",
    function () {

        mostrarPantalla(
            pantallaExplorar
        );

    }
);


/* =========================================================
   EDITAR MI PERFIL
========================================================= */

editarMiPerfil.addEventListener(
    "click",
    function () {

        modoEdicionPerfil = true;


        /*
           Cambiamos los textos
           del formulario.
        */

        tituloFormularioPerfil.textContent =
            "Actualizá tu perfil.";


        textoFormularioPerfil.textContent =
            "Podés modificar tu presentación y tus intereses.";


        botonGuardarPerfil.textContent =
            "Guardar cambios";


        /*
           Recuperamos la descripción.
        */

        descripcionPerfil.value =
            usuario.descripcion;


        /*
           Marcamos nuevamente
           los intereses del usuario.
        */

        botonesInteres.forEach(
            function (boton) {

                const interes =
                    boton.dataset.interes;


                if (
                    usuario.intereses.includes(
                        interes
                    )
                ) {

                    boton.classList.add(
                        "seleccionado"
                    );

                }

                else {

                    boton.classList.remove(
                        "seleccionado"
                    );

                }

            }
        );


        actualizarContadoresPerfil();


        mostrarPantalla(
            pantallaPerfil
        );

    }
);


/* =========================================================
   VOLVER DESDE EDITAR PERFIL
========================================================= */

volverDesdeFormularioPerfil.addEventListener(
    "click",
    function () {

        /*
           Si estábamos editando,
           regresamos a Mi perfil.
        */

        if (modoEdicionPerfil) {

            modoEdicionPerfil = false;

            mostrarMiPerfil();

            return;

        }


        /*
           Si todavía se estaba creando,
           regresamos al registro.
        */

        mostrarPantalla(
            pantallaRegistro
        );

    }
);


/* =========================================================
   CALCULAR AFINIDADES
========================================================= */

function calcularAfinidades() {

    const tarjetas =
        document.querySelectorAll(
            ".tarjeta-perfil"
        );


    tarjetas.forEach(
        function (tarjeta) {

            const interesesPerfil =
                [];


            tarjeta
                .querySelectorAll(
                    "[data-tipo]"
                )
                .forEach(
                    function (elemento) {

                        interesesPerfil.push(
                            elemento.dataset.tipo
                        );

                    }
                );


            let coincidencias = 0;


            usuario.intereses.forEach(
                function (interes) {

                    if (
                        interesesPerfil.includes(
                            interes
                        )
                    ) {

                        coincidencias++;

                    }

                }
            );


            const textoAfinidad =
                tarjeta.querySelector(
                    ".texto-afinidad"
                );


            if (coincidencias === 0) {

                textoAfinidad.textContent =
                    "Explorá sus intereses";

            }

            else if (coincidencias === 1) {

                textoAfinidad.textContent =
                    "1 interés en común";

            }

            else {

                textoAfinidad.textContent =
                    coincidencias +
                    " intereses en común";

            }

        }
    );

}


/* =========================================================
   ME INTERESA
========================================================= */

document
    .querySelectorAll(".me-interesa")
    .forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const nombre =
                    boton.dataset.nombre;


                const estaMarcado =
                    boton.classList.contains(
                        "marcado"
                    );


                if (estaMarcado) {

                    boton.classList.remove(
                        "marcado"
                    );


                    boton.innerHTML =
                        `
                        <svg>
                            <use href="#icono-corazon"></use>
                        </svg>

                        Me interesa
                        `;


                    mostrarMensaje(
                        "Quitaste el interés en " +
                        nombre +
                        "."
                    );

                }

                else {

                    boton.classList.add(
                        "marcado"
                    );


                    boton.innerHTML =
                        `
                        <svg>
                            <use href="#icono-corazon"></use>
                        </svg>

                        Interés enviado
                        `;


                    mostrarMensaje(
                        "Interés enviado a " +
                        nombre +
                        "."
                    );

                }

            }
        );

    });


/* =========================================================
   VER PERFIL
========================================================= */

document
    .querySelectorAll(".ver-perfil")
    .forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const nombre =
                    boton.dataset.nombre;


                mostrarMensaje(
                    "Próximamente veremos el perfil completo de " +
                    nombre +
                    "."
                );

            }
        );

    });


/* =========================================================
   COINCIDENCIAS
========================================================= */

function mostrarMensajeCoincidencias() {

    mostrarMensaje(
        "Las coincidencias serán la próxima etapa del prototipo."
    );

}


botonMatches.addEventListener(
    "click",
    mostrarMensajeCoincidencias
);


botonMatchesDesdeMiPerfil.addEventListener(
    "click",
    mostrarMensajeCoincidencias
);


/* =========================================================
   BOTÓN FLOTANTE VOLVER ARRIBA
========================================================= */

window.addEventListener(
    "scroll",
    function () {

        const portadaVisible =
            !pantallaInicio.classList.contains(
                "oculto"
            );


        if (
            portadaVisible &&
            window.scrollY > 450
        ) {

            volverArriba.classList.remove(
                "oculto"
            );

        }

        else {

            volverArriba.classList.add(
                "oculto"
            );

        }

    }
);


volverArriba.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   ESTADO INICIAL
========================================================= */

actualizarUsuario();