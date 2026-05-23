[README (1).md](https://github.com/user-attachments/files/28168134/README.1.md)
# Calculadora de Magnitudes Físicas ⚡

> Proyecto del Ejercicio Momento Evaluativo 3  
> Materia: **Construcción de Algoritmos** · Ingeniería de Software  
> Profesor: Jose Javier Zapata Polo · 2025

---

## 👤 Estudiante

**Tu Nombre Completo**  
Programa: Ingeniería de Software

---

## 📋 Descripción del Proyecto

Aplicación web desarrollada con **HTML, CSS y JavaScript** que implementa una calculadora de 10 magnitudes físicas fundamentales. La interfaz permite ingresar los parámetros de cada fórmula, validar los datos ingresados y obtener el resultado de forma instantánea.

---

## ⚙️ Magnitudes Físicas Incluidas

| # | Magnitud | Fórmula | Unidad |
|---|----------|---------|--------|
| 1 | Velocidad | v = d / t | m/s |
| 2 | Aceleración | a = Δv / Δt | m/s² |
| 3 | Fuerza | F = m · a | N |
| 4 | Trabajo | W = F · d · cos(θ) | J |
| 5 | Energía Cinética | K = ½ · m · v² | J |
| 6 | Energía Potencial | U = m · g · h | J |
| 7 | Densidad | ρ = m / V | kg/m³ |
| 8 | Presión | P = F / A | Pa |
| 9 | Carga Eléctrica | q = I · t | C |
| 10 | Ley de Ohm | V = I · R | V |

---

## 🚀 Instrucciones para Ejecutar

### Opción 1 — Abrir directamente en el navegador (más simple)

1. Descarga o clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/calculadora-fisica-nombre-apellido.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd calculadora-fisica-nombre-apellido
   ```
3. Abre el archivo `index.html` directamente en tu navegador  
   (doble clic sobre el archivo, o arrástralo al navegador).

### Opción 2 — Servidor local con VS Code

1. Instala la extensión **Live Server** en Visual Studio Code.
2. Abre la carpeta del proyecto en VS Code.
3. Clic derecho sobre `index.html` → **Open with Live Server**.

### Opción 3 — Servidor local con Python

```bash
# Python 3
python -m http.server 8000
# Luego abre: http://localhost:8000
```

---

## 📁 Estructura del Proyecto

```
calculadora-fisica-nombre-apellido/
├── index.html    # Estructura HTML con los 10 formularios
├── style.css     # Estilos y diseño responsivo
├── script.js     # Lógica de cálculo y validaciones
└── README.md     # Este archivo
```

---

## ✅ Validaciones Implementadas

- Campos vacíos: muestra un mensaje de error si algún campo no tiene valor.
- División por cero: detecta tiempos, áreas y volúmenes igual a 0.
- Valores negativos: verifica masa, volumen, área y gravedad donde aplique.
- Tecla Enter: permite calcular presionando Enter desde cualquier campo de entrada.

---

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (variables CSS, Grid, animaciones, diseño responsivo)
- JavaScript ES6 (funciones puras, eventos DOM, `Math.cos`)
- Google Fonts: Syne + Space Mono

---

## 📄 Licencia

Proyecto académico · Uso educativo · 2025
