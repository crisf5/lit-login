# Login en Lit

Login basico utilizando la libreria Lit. Tambien se usa vaadin router y localstorage.

## Instrucciones de uso

- Usuario: cristian
- Password: lit

En caso de poner bien las credenciales saltara una alerta de "login correcto" y espera 1 segundo para redireccionar a la home. Si las crendeciales son incorrectas saldra una alerta indicandolo.

Si no se logueo previamente se redireccionara a la home, esta comprobacion se hace mediante un mixin que verifica un "token" en localstorage.
