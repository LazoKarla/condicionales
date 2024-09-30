# condicionales

Este es un proyecto para aprender a usar condicionales.

Adicionalmente hemos aprendido a usar el CDN de p5.js incluyendo el siguiente código dentro del `<head>` del archivo index.html de la siguiente manera:

``hmtl

<script src="https://cdn.jsdelivr.net/npm/p5@1.11.0/lib/p5.min.js"></script>

```

# Notas de clases

Para lograr tener la animación de la elipse, primero se dtermina las variables posX, posY, velocidadX y velocidadY, antes de la función setup.

Las condiciones if comprueban si el círculo ha alcanzado los bordes del canvas (izquierda/derecha o arriba/abajo) y si es así, cambian la dirección de la velocidad correspondiente multiplicándola por -1.

La condición if (mouseIsPressed)  comprueba si se está presionando el ratón. Si es así, el círculo se llena de rojo; si no, de azul.

```
