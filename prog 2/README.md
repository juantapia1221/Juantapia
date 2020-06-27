1. Explicar y ejemplificar composición y agregación.
2. Explicar que es polimorfismo.
3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.
4. Codificar el ejemplo del punto 3 con Javascript.


Respuestas


1. composición
La composición significa utlizar objetos dentro de otros objetos. Por ejemplo, un applet es un objeto que contiene en su interior otros objetos como botones, etiquetas, etc. Cada uno de los controles está descrito por una clase.
agregación
La agregación es un tipo de asociación que indica que una clase es parte de otra clase.Los componentes pueden ser compartidos por varios compuestos y la destrucción del compuesto no conlleva la destrucción de los componentes.
2. En programación orientada a objetos, el polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía.

3. Este ejemplo es para mostrar que cada instrumentos se tocan de diferentes maneras. Hay una clase padre que es instrumentos y sus clases hijas que son guitarra, bateria y bajo(polimorfismo)