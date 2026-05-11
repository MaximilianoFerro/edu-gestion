# 🏫 EduGestión – Plataforma Escolar

Plataforma de gestión institucional para colegios. Administración de alumnos, docentes, notas, asistencia, comunicación y agenda.

## Requisitos

- [Node.js](https://nodejs.org) v18 o superior
- npm (incluido con Node.js)

## Instalación y uso local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Luego abrir en el navegador: **http://localhost:5173**

## Build para producción

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
edu-gestion/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx        ← Plataforma completa (componente principal)
│   └── main.jsx       ← Punto de entrada React
├── index.html
├── vite.config.js
└── package.json
```

## Módulos disponibles (rol Admin)

| Módulo | Descripción |
|--------|-------------|
| Panel General | Métricas, alertas y próximos eventos |
| Alumnos | Legajos, notas por bimestre, asistencia con calendario |
| Docentes | Fichas, asignaciones de materias y cursos |
| Comunicación | Comunicados institucionales + mensajes directos a familias |
| Agenda | Eventos del ciclo lectivo |
| Reportes | Estadísticas de rendimiento y asistencia |
| Configuración | Datos institucionales, materias, roles |

## Próximas fases

- [ ] Vista Docente (carga de notas y asistencia)
- [ ] Portal Familia/Alumno (solo lectura)
- [ ] Autenticación con roles (Supabase / Firebase)
- [ ] Base de datos real
- [ ] Notificaciones por email

## Stack técnico

- **React 18** con hooks
- **Vite 5** como bundler
- Estilos en **inline styles** (sin CSS externo)
- **DM Sans** como tipografía (Google Fonts)
