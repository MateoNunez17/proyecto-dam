# Documentación de componentes

Actividad: Documentación de componentes · FP Lumara

---

# Parte 1: Componentes del proyecto

## Tarjeta

**Descripción**
Tarjeta de producto que muestra nombre, precio y cantidad. Al pasar el ratón por encima muestra información adicional, y tiene un botón para comprar.

**Props**

| Prop | Tipo | Obligatoria | Por defecto |
|---|---|---|---|
| producto | string | Sí | — |
| precio | number | Sí | — |
| cantidad | number | Sí | — |
| infoAdicional | string | Sí | — |

**Eventos**

**onMouseEnter**
Se ejecuta cuando el ratón entra en la tarjeta. Muestra `infoAdicional` debajo del contenido.

**onMouseLeave**
Se ejecuta cuando el ratón sale de la tarjeta. Oculta la información adicional.

**onClick** (botón "Comprar")
Se ejecuta cuando el usuario pulsa el botón. Muestra un aviso con el producto seleccionado.

**Ejemplo**

```jsx
<Tarjeta
  producto="Zapatillas"
  precio={59.99}
  cantidad={10}
  infoAdicional="Talla 42, color negro"
/>
```

> Nota: el `id` interno se genera con el nombre del producto, por eso cada `producto` debe ser único.

---

## BotonAccion

**Descripción**
Botón reutilizable con texto y color personalizables para ejecutar acciones dentro de la aplicación.

**Props**

| Prop | Tipo | Obligatoria | Por defecto |
|---|---|---|---|
| texto | string | Sí | — |
| color | string | Sí | — |
| onClick | () => void | No | — |

**Eventos**

**onClick**
Se ejecuta cuando el usuario pulsa el botón. Si no se pasa ninguna función, no ocurre nada.

**Ejemplo**

```jsx
<BotonAccion
  texto="Saludar"
  color="lightgreen"
  onClick={saludar}
/>
```

**Código**

```jsx
function BotonAccion({ texto, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: "black", width: "200px", height: "50px" }}
    >
      {texto}
    </button>
  );
}

export default BotonAccion;
```

---

## Lista

**Descripción**
Componente básico que muestra una lista de elementos a partir de un array de textos.

**Props**

| Prop | Tipo | Obligatoria | Por defecto |
|---|---|---|---|
| items | string[] | No | [] |

**Eventos**
Ninguno.

**Ejemplo**

```jsx
<Lista items={["Manzana", "Pera", "Plátano"]} />
```

**Código**

```jsx
function Lista({ items = [] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default Lista;
```

---

# Parte 2: Componentes de un proyecto ficticio

## Button

**Descripción**
Botón genérico con variante principal o secundaria, que se puede deshabilitar.

**Props**

| Prop | Tipo | Obligatoria | Por defecto |
|---|---|---|---|
| texto | string | Sí | — |
| variant | "primary" \| "secondary" | No | "primary" |
| disabled | boolean | No | false |
| onClick | () => void | No | — |

**Eventos**

**onClick**
Se ejecuta cuando el usuario pulsa el botón. No se ejecuta si `disabled` es `true`.

**Ejemplo**

```jsx
<Button
  texto="Guardar"
  variant="primary"
  onClick={guardar}
/>
```

---

## Card

**Descripción**
Tarjeta que presenta un título, una descripción y, opcionalmente, una imagen.

**Props**

| Prop | Tipo | Obligatoria | Por defecto |
|---|---|---|---|
| titulo | string | Sí | — |
| descripcion | string | Sí | — |
| imagen | string | No | — |

**Eventos**
Ninguno.

**Ejemplo**

```jsx
<Card
  titulo="Aquafitness"
  descripcion="Clase de ejercicio en el agua"
  imagen="/img/aquafitness.jpg"
/>
```

---

## Input

**Descripción**
Campo de texto con etiqueta, controlado desde el componente padre.

**Props**

| Prop | Tipo | Obligatoria | Por defecto |
|---|---|---|---|
| label | string | Sí | — |
| placeholder | string | Sí | — |
| value | string | Sí | — |
| onChange | (e: { value: string }) => void | Sí | — |

**Eventos**

**onChange**
Se ejecuta cada vez que el usuario escribe. Devuelve un objeto `{ value }` con el texto actual.

**Ejemplo**

```jsx
<Input
  label="Nombre"
  placeholder="Escribe tu nombre"
  value={nombre}
  onChange={(e) => setNombre(e.value)}
/>
```