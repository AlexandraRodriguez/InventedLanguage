# LanguageTranslator

Este es un proyecto

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le anade "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio
- Si la palabra original es un palinfromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusuclas y minusculas

## Instalacion

```

npm install jstranslator
```

## Uso
```
import jstranslator from 'jstranslator'

jstranslator("Programar") // Program
jstranslator("Zorro") // Zoroppe
jstranslator("Zarpar") // Zarppe
jstranslator("abecedario") // abece-dario
jstranslator("sometemos") // SoMeTeMoS
```

## Creditos
- [Alexandra Rodriguez]

## Licencia

[MIT] (https://opensource.org/licenses/MIT)
