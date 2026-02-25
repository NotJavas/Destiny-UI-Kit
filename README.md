# Destiny UI Kit 🌌

> **Sistema de Diseño — Conectando experiencias en tiempo real.**

Este repositorio contiene el **UI Kit** oficial para la aplicación **Destiny**. Es una colección modular de componentes construida con React, Vite y Tailwind CSS, diseñada para una plataforma de descubrimiento de eventos y vida nocturna.

---

## 📂 Estructura del Código

Este diagrama muestra cómo está organizado el proyecto para facilitar la navegación y el desarrollo modular:

```mermaid
graph TD
    Root[Destiny UI Kit]
    Root --> Config[📂 config]
    Config --> Themes[themes.js (Variables de color)]
    
    Root --> Context[📂 context]
    Context --> ThemeCtx[ThemeContext.jsx (Estado global)]
    
    Root --> Components[📂 components]
    Components --> Atoms[Átomos & Moléculas]
    Atoms --> Btn[ButtonsSection]
    Atoms --> Inp[FormsSection]
    Atoms --> Ico[AssetsSection]
    
    Components --> Organisms[Organismos]
    Organisms --> Cards[CardsSection]
    Organisms --> Nav[StructureSection]
    Organisms --> Eff[EffectsSection]
    
    Components --> Templates[📂 TemplatesSection]
    Templates --> Login[Login Screen]
    Templates --> Map[Map Screen]
    Templates --> Event[Event Detail]
    
    Root --> Main[index.jsx (Carrusel Principal)]
```

### Descripción de Carpetas
*   **`components/`**: Contiene todos los bloques visuales (Botones, Tarjetas, Navegación).
*   **`context/`**: Maneja el estado global (el tema actual y la navegación del carrusel).
*   **`config/`**: Archivos de configuración estática (colores, constantes).
*   **`dist/`**: (Generada automáticamente) Contiene el código optimizado listo para producción.

---

## ☁️ Guía de Despliegue en Azure (CI/CD)

Utilizamos **GitHub Actions** para automatizar el despliegue. Esto significa que cada vez que hacemos un `push` a la rama `main`, el código se compila y se sube automáticamente a Azure.

### 1. Preparar el Recurso en Azure Portal
1.  Entra a [portal.azure.com](https://portal.azure.com).
2.  Busca **"App Services"** y crea uno nuevo.
3.  **Configuración Básica**:
    *   **Nombre**: `NotADestiny` (o el nombre único que elijas).
    *   **Publicar**: Código.
    *   **Runtime Stack**: Node 20 LTS.
    *   **Sistema Operativo**: Linux.
    *   **Plan**: Free (F1) para estudiantes.

### 2. Configurar las Credenciales (Secrets)
Para que GitHub tenga permiso de "tocar" tu Azure, necesitamos un secreto.

1.  En el Portal de Azure, abre la consola (icono `>_` arriba a la derecha) y selecciona **Bash**.
2.  Ejecuta este comando (reemplaza las variables con tus datos):
    ```bash
    az ad sp create-for-rbac --name "GitHub-Deploy" --role contributor --scopes /subscriptions/{TU-SUBSCRIPTION-ID}/resourceGroups/{TU-RESOURCE-GROUP}/providers/Microsoft.Web/sites/{TU-APP-NAME} --sdk-auth
    ```
3.  Copia todo el JSON que te devuelve el comando.
4.  Ve a tu repositorio en **GitHub** -> **Settings** -> **Secrets and variables** -> **Actions**.
5.  Crea un **New repository secret**:
    *   **Nombre**: `AZURE_CREDENTIALS`
    *   **Valor**: Pega el JSON que copiaste.

### 3. Comando de Inicio (Importante)
Como es una app de React (estática) corriendo en un servidor Node.js, necesitamos decirle a Azure cómo servirla.
1.  En tu App Service en Azure -> **Settings** -> **Configuration** -> **General settings**.
2.  En **Startup Command** pega:
    ```bash
    pm2 serve /home/site/wwwroot --no-daemon --spa
    ```

---

## 📜 Explicación del Workflow (YAML)

El archivo `.github/workflows/deploy.yml` es el cerebro del despliegue. Aquí explicamos qué hace cada parte para la exposición:

```yaml
name: Deploy Destiny-UI-Kit to Azure

# TRIGGER: ¿Cuándo se ejecuta esto?
on:
  push:
    branches:
      - main  # Se activa al hacer push a la rama 'main'

jobs:
  # TRABAJO 1: CONSTRUCCIÓN (BUILD)
  build:
    runs-on: ubuntu-latest # Usa una máquina virtual Linux temporal
    steps:
      - name: Checkout code
        uses: actions/checkout@v4 # Descarga tu código del repo a la máquina virtual

      - name: Setup Node.js
        uses: actions/setup-node@v4 # Instala Node.js versión 20
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci # Instala las librerías (más rápido y seguro que npm install)

      - name: Build project
        run: npm run build # Compila React -> Transforma todo a HTML/CSS/JS en la carpeta 'dist'

      - name: Upload artifact
        uses: actions/upload-artifact@v4 # Guarda la carpeta 'dist' para usarla en el siguiente trabajo
        with:
          name: node-app
          path: dist/

  # TRABAJO 2: DESPLIEGUE (DEPLOY)
  deploy:
    runs-on: ubuntu-latest
    needs: build # Espera a que termine el trabajo 'build' antes de empezar
    environment:
      name: 'Production'
    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4 # Descarga la carpeta 'dist' que guardamos antes
        with:
          name: node-app

      - name: Login to Azure
        uses: azure/login@v1 # Se conecta a Azure usando el secreto que configuramos
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: 'Deploy to Azure Web App'
        uses: azure/webapps-deploy@v2 # Sube los archivos a tu servidor 'NotADestiny'
        with:
          app-name: 'NotADestiny'
          package: .
```

---

## 🛠 Tecnologías Utilizadas

*   **[React](https://react.dev/):** Biblioteca principal.
*   **[Vite](https://vitejs.dev/):** Entorno de desarrollo y compilador.
*   **[Tailwind CSS](https://tailwindcss.com/):** Estilos y sistema de diseño.
*   **[Lucide React](https://lucide.dev/):** Iconografía estandarizada.
*   **[GitHub Actions](https://github.com/features/actions):** CI/CD Pipeline.
*   **[Azure App Service](https://azure.microsoft.com/):** Hosting e infraestructura.

---

Desarrollado para **Destiny App** © 2023.
*El Pulso de tu Ciudad.*