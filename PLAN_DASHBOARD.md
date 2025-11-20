# Plan de Implementación: Dashboard de Administración para "Lily's Grooming"

Este documento describe el plan para desarrollar un sistema de gestión de citas y servicios.

## 1. Objetivo Principal

Crear un sistema web que permita a los clientes ver servicios y reservar citas, y que le permita al administrador (dueño del negocio) gestionar la información del negocio (servicios, precios, horarios, citas) a través de un panel de control privado, sin necesidad de escribir código.

## 2. Funcionalidades Clave

El sistema se dividirá en dos grandes áreas:

### A. Panel de Administración (Tu área privada)

- **Login Seguro:** Acceso con usuario y contraseña solo para el administrador.
- **Gestión de Servicios:**
    - **Crear:** Añadir nuevos servicios (ej: "Baño Antipulgas").
    - **Editar:** Actualizar información de un servicio (ej: cambiar precio o descripción).
    - **Eliminar:** Quitar servicios que ya no se ofrecen.
    - **Ver:** Listar todos los servicios actuales con sus precios.
- **Gestión de Citas:**
    - **Calendario Visual:** Ver todas las citas (pendientes, confirmadas, canceladas) en una vista de calendario (diaria, semanal, mensual).
    - **Confirmar/Cancelar Citas:** Cambiar el estado de las citas solicitadas por los clientes.
- **Gestión de Horarios:**
    - Definir los días de la semana y las horas en que el negocio está abierto para recibir citas.

### B. Sitio Público (Lo que ven los clientes)

- **Página de Servicios:** Mostrar la lista de servicios y precios actualizada automáticamente desde la base de datos.
- **Sistema de Citas:**
    - El cliente podrá ver los días y horas disponibles (basado en el horario que definiste y las citas ya ocupadas).
    - El cliente podrá seleccionar un servicio y un horario para solicitar una cita.
- **Área de Cliente (Opcional, versión avanzada):**
    - Registro e inicio de sesión para clientes.
    - El cliente podrá ver un historial de "Mis Citas".

### C. Estructura del Menú Principal (Navegación)

La barra de navegación principal del sitio público tendrá la siguiente estructura:

- **Inicio**
- **Servicios** (Menú desplegable)
    - Peluquería
    - Artículos
    - Alimentos
- **Promociones**
- **Clientes**
- **Nosotros**
- **Contacto**

## 3. Modelo de Datos (El "Cerebro")

Para que todo esto funcione, necesitamos guardar la información en una base de datos. La información se organizará en "cajas" como:

- **Servicio:**
    - `nombre` (texto)
    - `descripcion` (texto)
    - `precio` (número)
    - `duracion_minutos` (número)
- **Cita:**
    - `id_servicio` (qué servicio se reservó)
    - `id_cliente` (quién lo reservó)
    - `fecha_hora` (cuándo es la cita)
    - `estado` (texto: 'pendiente', 'confirmada', 'cancelada')
- **Usuario:**
    - `nombre` (texto)
    - `email` (texto)
    - `password` (texto encriptado)
    - `rol` (texto: 'cliente' o 'admin')

## 4. Propuesta Tecnológica (Stack)

- **Frontend (Sitio Público y Panel):** React (el que ya estamos usando).
- **Backend (La lógica del servidor):** Node.js con Express.
- **Base de Datos:** SQLite (es un archivo, simple para empezar) o PostgreSQL (más robusto para el futuro).
