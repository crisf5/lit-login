# Login en Lit

Login basico utilizando la libreria Lit. Tambien se usa vaadin router y localstorage.

## Instrucciones de uso

- Usuario: cristian
- Password: lit

En caso de poner bien las credenciales saltara una alerta de "login correcto" y la app espera 1 segundo para redireccionar a la home. Si las crendeciales son incorrectas saldra una alerta indicandolo.

Si se intenta ingresar a la home sin haberse logueado previamente se redireccionara al login, esta comprobacion se hace mediante una verificacion de "token" en localstorage.
