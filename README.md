### *Resolutor de Ecuaciones Diferenciales Homogéneas de 2do Orden*

## Presentación
**Ecuaciones Diferencials** 
Es una herramienta interactiva diseñada para estudiantes de la Escum. Su objetivo es prindarnos la oportunidad de pasar la materia XD
Este Programa desglosa el proceso paso a paso, brindandonos cada parte del proceso del Profesor Silva.
Creo que es todo lo que debo de explicar XD

### Características Principales
- **Resolución Integral**: Maneja todos los casos de raíces:
  - ✅ **Raíces Reales Distintas**: Genera soluciones exponenciales independientes.
  - ✅ **Raíces Reales Repetidas**: Aplica la corrección de linealidad mediante la multiplicación por $x$.
  - ✅ **Raíces Complejas**: Implementa la solución mediante funciones trigonométricas ($\sin$ y $\cos$) y exponenciales.
- **Soporte para Casos Degenerados**: Capacidad de resolver ecuaciones que caen a primer orden ($A=0$).
- **Renderizado Matemático Profesional**: Uso de **KaTeX** para mostrar fórmulas con calidad de libro de texto.
- **Interfaz Moderna**: Diseño responsivo creado con **Tailwind CSS**, optimizado para cualquier dispositivo.
- **Easter Eggs**: Detalles divertidos para aquellos que intentan "romper" la matemática del sistema.

---

## Stack Técnico
El proyecto ha sido desarrollado bajo una arquitectura ligera para garantizar un despliegue rápido y eficiente:

- **Frontend**: HTML5, CSS3.
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (Framework de utilidades).
- **Lógica**: JavaScript (ES6+).
- **Tipografía Matemática**: [KaTeX](https://katex.org/) (Motor de renderizado de LaTeX).
- **Despliegue**: GitHub Pages.

---

## ¿Cómo funciona?
El programa sigue la metodología estándar de resolución:

1. **Entrada**: El usuario ingresa los coeficientes $A, B$ y $C$ de la forma:
   $$Ay'' + By' + Cy = 0$$
2. **Ecuación Característica**: Se genera la ecuación algebraica asociada:
   $$Am^2 + Bm + C = 0$$
3. **Cálculo de Raíces**: Se utiliza la fórmula cuadrática para hallar $m_1$ y $m_2$.
4. **Soluciones Fundamentales**: Se determinan $y_1$ y $y_2$ basándose en el tipo de raíces.
5. **Solución General**: Se construye la combinación lineal final:
   $$y = C_1 y_1 + C_2 y_2$$

---

## Colaboradores
Este proyecto fue desarrollado por los 2 mas onichans:

- **Garza Roblez Gerardo**
- **Jimenez Zea Juan Pablo**

---

<p align="center">
  <i>Sin nadamas que decir, puess GG</i>
</p>
