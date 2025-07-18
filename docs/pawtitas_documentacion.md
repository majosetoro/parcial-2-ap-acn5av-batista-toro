# Proyecto Pawtitas

## Historial de Versiones
**Versión 1.0 - (20/06/2025):** Versión inicial     
**Versión 2.0 - (20/06/2025):** Reorganización significativa del documento y centralización de la información. Eliminación de archivos redundantes   
**Versión 2.1 - (20/06/2025):** Agregar Análisis de Interesados (Skateholders)   
**Versión 2.2 - (20/06/2025):** Agregar Metodología Ágil   
**Versión 2.3 - (20/06/2025):** Agregar Análisis de requerimientos con historias de usuario   
**Versión 2.4 - (20/06/2025):** Agregar requerimientos técnicos en el apartado Análisis de Requerimientos   
**Versión 2.5 - (20/06/2025):** Agregar link del tablero de gestión   
**Versión 2.6 - (21/06/2025):** Creacción de sección 'Registro de Cambios' y agrego cambio menor en HU-03   
**Versión 2.7 - (21/06/2025):** Ajuste metodológico: implementación de etiquetas visuales para clasificación de cambios (`cambio menor`, `cambio funcional`, `cambio urgente`)   

## Objetivo SMART
Diseñar y desarrollar antes del 30 de julio de 2025 una aplicación móvil para conectar dueños de mascotas con prestadores de servicios (cuidadores, paseadores y veterinarios), validando usuarios por autenticación y roles diferenciados, bajo un entorno seguro y accesible.

- **S (Específico):** Conectar usuarios y prestadores de servicios con funcionalidades específicas como login y registro de mascotas
- **M (Medible):** Lograr al menos 5 registros de usuarios en la demo y 3 perfiles visibles de prestadores.
- **A (Alcanzable):** Utilizaremos herramientas como React Native, Firebase y Github.
- **R (Relevante):** La solución resuelve una necesidad real de conexión y confianza entre usuarios y prestadores.
- **T (Tiempo):** MVP funcional en 6 semanas.

## OKR
Diseñar y desarrollar una aplicación móvil que conecte de forma segura y eficiente a dueños de mascotas con prestadores de servicios como cuidadores, paseadores y veterinarios.

### Resultados Claves (KRs)
- **KR1:** Publicar una versión funcional del MVP con login, registro de mascotas y perfiles de usuario antes de la semana 6.
- **KR2:** Tener implementado el login con email y contraseña usando Firebase Authentication antes de la semana 2.
- **KR3:** Registrar al menos 5 usuarios y 3 prestadores con perfiles completos validados por un administrador.
- **KR4:** Implementar el panel de administrador con funciones básicas (validar y desactivar cuentas) en la semana 5.
- **KR5:** Tener el tablero de proyecto actualizado con al menos 3 milestones y 6 historias de usuario distribuidas.

## Análisis de Interesados

### Skateholders
**1. Cliente - Dueño de mascota:** Encontrar servicios confiables para sus mascotas   
**2. Prestador de Servicio:** Ser encontrado por clientes y ofrecer servicios   
**3. Administrador:** Acceso al panel de gestión, validación/rechazo de cuentas de usuarios   
**4. Equipo de Desarrollo:** Cumplir objetivos técnicos y planificación ágil 

## Metodología Ágil
Enfoques seleccionados: 
#### **SCRUM**
- Permite un desarrollo iteractivo e incremental
- Ideal para equipos pequeños que trabajan en un MVP
- Mejora continua

#### **KANBAN**
- Uso de **GitHub Projects** como tablero visual
- Cada historia de Usuario es presentado por tarjetas (issues)
- Permite flexibilidad adicional ante cambios menores sin necesidad de modificar todo el sprint

### Justificación de la Metodología Híbrida

Se optó por una metodología ágil híbrida combinando Scrum y elementos de Kanban debido a la necesidad de mantener una estructura de trabajo ordenada y con roles definidos, al mismo tiempo que requeríamos flexibilidad para adaptarnos a cambios frecuentes y tareas imprevistas propias del desarrollo de un MVP.

### Adaptación de Metodología Aplicada
**Fecha:** 21/06/2025   
**Situación detectada:** Durante el desarrollo del MVP se detectó la necesidad de mejorar la gestión de cambios menores (como ajustes de texto o formularios). Para evitar demoras, se incorporó un sistema de clasificación visual de cambios en el tablero Kanban, utilizando etiquetas:

**Ajuste aplicado:**   
Se implementó un sistema de clasificación y gestión de cambios con etiquetas visuales en el tablero, diferenciando:   
- Cambio menor: no requiere revisión formal, lo aprueba el desarrollador   
- Cambio funcional: requiere validación del equipo   
- Cambio urgente: se atiende con prioridad máxima   

Esto agiliza la gestión, reduce fricción en tareas simples y mantiene la trazabilidad.

## Análisis de Requerimientos
### Historias de Usuario (HU)
**HU-01:** Como usuario, quiero poder registrarme con email y contraseña para usar la app.   
**HU-02:** Como usuario, quiero iniciar sesión para navegar la app o brindar mis servicios.   
**HU-03:** Como cliente, quiero registrar mis mascotas con nombre, edad, especie, raza y peso, para que los prestadores de servicio conozcan su información   
**HU-04:** Como prestador de servicio, quiero editar mi perfil para ser visible en la app.   
**HU-05:** Como cliente, quiero buscar prestadores por disponibilidad para contratar un servicio.   
**HU-06:** Como administrador, quiero aprobar cuentas antes de que estén visibles para garantizar mayor seguridad en la app.   

### Requerimientos Técnicos
- Firebase Auth
- MySQL
- React Native (Expo)

## Tablero
A continuación, se adjunta el tablero de gestión realizado en **GitHub Projects** para llevar a cabo este proyecto.      
Link: https://github.com/users/majosetoro/projects/4/views/1

## Registro de cambios

**Fecha:** 21/06/2025  
**Versión afectada:** v2.6   
**Historia afectada:** HU-03  
**Cambio realizado:** Se agrega el campo 'peso' al formulario registro de mascotas.  
**Motivo:** Mejora la información disponible para los prestadores de servicio al momento de aceptar solicitudes.  
**Tipo de cambio:** Cambio menor (no afecta lógica funcional crítica)  
**Gestión:**  
- Documentado en el presente documento  
- Actualización de la historia HU-03 en el presente documento   
- Se crea una tarjeta en el tablero de GitHub Projects


**Fecha:** 21/06/2025   
**Versión afectada:** v2.7   
**Tipo de cambio:** Metodológico   
**Descripción:** Se propone implementar un sistema de clasificación para los tipos de cambio a través de etiquetas visuales (cambio menor, cambio funcional, cambio urgente).    
**Motivo:** Mejorar la eficiencia en la toma de decisiones respecto a ajustes no críticos.   
**Resolución:** Aprobado y aplicado en el tablero de GitHub Projects.   

