# Alejok0.github.io
Pagina de contacto personal, este es el código de mi pagina de contacto, esta hecha de tal manera que la pagina principal no se recarga, no hay ningun motivo en especial para esto, lo hice solo para mostrar mis capasidades a la hora de trabajar con funciones ajax y el contenido dinamico, creo que puede quedar de mal gusto, sin embargo, me gusta y creo que le da identidad al proyecto.

## Tecnologías
- HTML
- CSS
- JQuery

## Diagrama de funcionamiento
```
┌───────┐   ┌────────────────┐┌───────────────────────┐┌───────────────────────┐                   ┌───────┐
│Usuario│   │Pagina_principal││Pagina_principal <head>││Pagina_principal <body>│                   │main.js│
└───┬───┘   └───────┬────────┘└───────────┬───────────┘└───────────┬───────────┘                   └───┬───┘
    │               │                     │                        │                                   │    
    │Carga la pagina│                     │                        │                                   │    
    │──────────────>│                     │                        │                                   │    
    │               │                     │                        │                                   │    
    │    Inicio, Proyectos, Acerca de     │                        │                                   │    
    │<────────────────────────────────────│                        │                                   │    
    │               │                     │                        │                                   │    
    │               │            Inicio   │                        │                                   │    
    │<─────────────────────────────────────────────────────────────│                                   │    
    │               │                     │                        │                                   │    
    │        *Click* en proyectos         │                        │                                   │    
    │────────────────────────────────────>│                        │                                   │    
    │               │                     │                        │                                   │    
    │               │                     │             $("#proyectos").click(function ()              │    
    │               │                     │───────────────────────────────────────────────────────────>│    
    │               │                     │                        │                                   │    
    │               │                     │                        │$(contenido).load("proyectos.html")│    
    │               │                     │                        │<──────────────────────────────────│    
    │               │                     │                        │                                   │    
    │               │          Proyectos  │                        │                                   │    
    │<─────────────────────────────────────────────────────────────│                                   │    
┌───┴───┐   ┌───────┴────────┐┌───────────┴───────────┐┌───────────┴───────────┐                   ┌───┴───┐
│Usuario│   │Pagina_principal││Pagina_principal <head>││Pagina_principal <body>│                   │main.js│
└───────┘   └────────────────┘└───────────────────────┘└───────────────────────┘                   └───────┘

```
> Diagrama hecho con: [Diagon](https://github.com/ArthurSonzogni/Diagon)

