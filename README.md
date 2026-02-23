# Destiny UI Kit 🌌

> **Sistema de Diseño — Conectando experiencias en tiempo real.**

Este repositorio contiene el **UI Kit (Kit de Interfaz de Usuario)** oficial para la aplicación **Destiny**. Es una colección modular de componentes, guías de estilo y patrones de interacción diseñados para una plataforma de descubrimiento de eventos, vida nocturna y conexión social basada en geolocalización.

## 🎯 Concepto del Proyecto

**Destiny** surge como respuesta a la necesidad de conectar organizadores de eventos con su audiencia ideal (jóvenes de 18-28 años) en tiempo real.

El sistema de diseño refleja estos valores:
*   **Inmediatez:** Interfaces limpias para decisiones rápidas.
*   **Vida Nocturna:** Estética "Dark Mode" con acentos neón (Púrpura/Azul).
*   **Geolocalización:** Elementos visuales que evocan mapas, radar y cercanía.

## 🛠 Tecnologías Utilizadas

Este proyecto ha sido construido utilizando herramientas modernas de desarrollo web para garantizar rendimiento y escalabilidad:

*   **[React](https://react.dev/):** Biblioteca principal para la construcción de interfaces.
*   **[Vite](https://vitejs.dev/):** Entorno de desarrollo de próxima generación (súper rápido).
*   **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades para un diseño rápido y consistente.
*   **[Lucide React](https://lucide.dev/):** Colección de iconos vectoriales ligeros y consistentes.

## 📂 Estructura del UI Kit

El proyecto cuenta con un **Selector de Componentes** tipo carrusel que permite navegar por las diferentes secciones del sistema:

1.  **Concepto de Branding:** Identidad visual, logotipos, sistema tipográfico (Onest) y psicología del color.
2.  **Gradientes y Acentos:** Galería de combinaciones de colores neón y oscuros.
3.  **Botones:** Variedad de estados (Primary, Ghost, Outline), tamaños y funciones.
4.  **Formularios:** Inputs estilizados, toggles animados, selectores y validaciones.
5.  **Tarjetas (Cards):** Componentes complejos para Eventos, Lugares (Nightlife) y Mapas de Calor.
6.  **Alertas y Etiquetas:** Sistema de notificaciones y badges para gamificación y estados.
7.  **Navegación y Estructura:** Barras de navegación (Bottom Nav), pestañas, modales y esqueletos de carga.
8.  **Plantillas (Templates):** Pantallas completas listas para usar (Login, Mapa, Feed, Evento, Ticket, Perfil).

## 🚀 Guía de Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu computadora local:

### Prerrequisitos
Asegúrate de tener instalado **Node.js** (versión 16 o superior) en tu sistema.

### Pasos

1.  **Clonar el repositorio**
    Abre tu terminal y ejecuta:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2.  **Navegar al directorio del proyecto**
    ```bash
    cd Destiny/UI\ Kit
    ```
    *(Nota: Asegúrate de estar en la carpeta donde se encuentra el archivo `package.json`)*

3.  **Instalar dependencias**
    Ejecuta el siguiente comando para descargar las librerías necesarias:
    ```bash
    npm install
    ```

4.  **Ejecutar el servidor de desarrollo**
    Inicia el proyecto localmente:
    ```bash
    npm run dev
    ```

5.  **Ver en el navegador**
    La terminal te mostrará una URL (usualmente `http://localhost:5173/`). Ábrela en tu navegador para ver el UI Kit en acción.

## 🎨 Personalización

Si deseas modificar los colores base o la configuración de Tailwind, puedes editar los siguientes archivos:

*   `tailwind.config.js`: Configuración de temas y extensiones de clases.
*   `config/themes.js`: Definición de las variables de color del tema "Destiny".
*   `index.css`: Estilos globales y fuentes.

---

Desarrollado para **Destiny App** © 2023.
*El Pulso de tu Ciudad.*