# 🏫 EduGestión – Plataforma Escolar

## Uso local

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Subir a GitHub Pages (paso a paso)

### 1. Crear repo en GitHub y subir el código

```bash
git init
git add .
git commit -m "feat: plataforma escolar"
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git branch -M main
git push -u origin main
```

### 2. Activar GitHub Pages con Actions

En tu repo de GitHub:
- **Settings** → **Pages**
- En *Build and deployment > Source* → elegir **GitHub Actions**
- Guardar

### 3. Listo 🚀

Cada vez que hagas `git push`, el workflow buildea y despliega automáticamente.
La URL será: `https://TU_USUARIO.github.io/TU_REPO/`

> **Nota:** El `vite.config.js` detecta automáticamente el nombre del repo
> a través de la variable `VITE_BASE_PATH` que inyecta el workflow.
> No necesitás cambiarlo manualmente.

## Stack

- React 18 + Vite 5
- Sin dependencias adicionales
- DM Sans (Google Fonts)
