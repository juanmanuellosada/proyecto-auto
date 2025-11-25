const questions = [
  {
    "id": 0,
    "type": "text",
    "question": "Si estás en una pendiente, ¿quién tiene prioridad de paso: el que asciende o el que desciende?",
    "options": [
      "Tiene prioridad el que desciende.",
      "Tiene prioridad el que asciende.",
      "No existe una regla, es indistinto."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 1,
    "type": "text",
    "question": "¿Qué significa un cordón pintado de rojo?",
    "options": [
      "Se puede estacionar libremente.",
      "No se puede estacionar ni detenerse.",
      "Sólo se permite detenerse para ascenso y descenso."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 2,
    "type": "text",
    "question": "¿Qué significa un cordón pintado de azul?",
    "options": [
      "Prohibido estacionar.",
      "Estacionamiento libre todo el día.",
      "Estacionamiento medido o reservado para vehículos autorizados."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 3,
    "type": "text",
    "question": "¿Qué significa un cordón pintado de verde?",
    "options": [
      "Prohibido estacionar 24 h.",
      "Estacionamiento permitido solo en horarios específicos.",
      "Uso exclusivo de motos."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 4,
    "type": "text",
    "question": "¿Qué se entiende por siniestro vial?",
    "options": [
      "Una infracción cometida por un conductor.",
      "Cualquier desperfecto mecánico del vehículo.",
      "Todo hecho de tránsito que produzca daños, lesiones o fallecimientos."
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 5,
    "type": "text",
    "question": "¿Cuántos metros antes de llegar a una intersección deberá anunciar la maniobra si se propone girar?",
    "options": [
      "5 metros.",
      "30 metros.",
      "60 metros."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 6,
    "type": "text",
    "question": "¿En qué momento se deben encender las luces exteriores del vehículo?",
    "options": [
      "Desde el crepúsculo hasta el alba.",
      "En todo momento del día.",
      "Cuando la falta de luz natural sea insuficiente."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 7,
    "type": "text",
    "question": "¿Quién tiene prioridad de paso en las carreteras fuera de zonas urbanas?",
    "options": [
      "Los vehículos.",
      "Los Peatones.",
      "Es indistinto."
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 8,
    "type": "text",
    "question": "La calzada es la parte de la vía pública por la que circulan...",
    "options": [
      "Los Peatones.",
      "Los vehículos.",
      "Los Peatones y los vehículos."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 9,
    "type": "text",
    "question": "¿Cuáles son los factores que intervienen en el tránsito?",
    "options": [
      "El factor humano.",
      "El factor vehicular.",
      "El factor humano, ambiental y vehicular."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 10,
    "type": "text",
    "question": "¿Por qué lugar de la calzada se debe adelantar a otros vehículos?",
    "options": [
      "Por la derecha.",
      "Por cualquier lado.",
      "Siempre por la izquierda."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 11,
    "type": "text",
    "question": "¿Qué debe hacer el conductor si su mano está obstruida y viene otro vehículo por la mano contraria?",
    "options": [
      "Ceder el paso al otro vehículo.",
      "Pasar primero.",
      "No existe preferencia."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 12,
    "type": "text",
    "question": "Al llegar a un cruce de calle, ¿a qué velocidad se debe circular?",
    "options": [
      "10 Km/h.",
      "40 Km/h.",
      "20 Km/h."
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 13,
    "type": "text",
    "question": "¿Qué se entiende por detener un vehículo?",
    "options": [
      "Inmovilizarlo por un tiempo no mayor al necesario para ascenso/descenso de personas o carga/descarga.",
      "Inmovilizarlo por un tiempo mayor."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 14,
    "type": "text",
    "question": "¿Quién tiene prioridad al girar en una bocacalle con luz verde?",
    "options": [
      "El conductor que gira.",
      "El peatón que cruza.",
      "Es indistinto."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 15,
    "type": "text",
    "question": "¿Cuál es el límite máximo de velocidad en zona urbana?",
    "options": [
      "15 Km/h.",
      "60 Km/h.",
      "40 Km/h."
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 16,
    "type": "text",
    "question": "En una rotonda, ¿quién tiene prioridad?",
    "options": [
      "El que quiere ingresar.",
      "El que ya circula.",
      "El que llega primero."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 17,
    "type": "text",
    "question": "En una intersección, ¿quién tiene prioridad?",
    "options": [
      "El que ingresa por la izquierda.",
      "El que ingresa por la derecha.",
      "El de mayor porte."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 18,
    "type": "text",
    "question": "En una rotonda, ¿puede adelantarse?",
    "options": [
      "Siempre por la izquierda.",
      "Nunca.",
      "Solo por la derecha."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 19,
    "type": "text",
    "question": "¿Qué debe hacer cuando el vehículo delantero espera doblar a la izquierda?",
    "options": [
      "Pasar con cuidado por la derecha.",
      "Pasar por la izquierda.",
      "Tocar bocina para que siga."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 20,
    "type": "text",
    "question": "¿Qué hacer si otro vehículo lo encandila con luces altas?",
    "options": [
      "Encender luces altas.",
      "Mantener luces bajas.",
      "Mantener luces bajas y mirar hacia la derecha."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 21,
    "type": "text",
    "question": "¿Dónde no se debe adelantar por seguridad?",
    "options": [
      "En rectas.",
      "Donde hay visibilidad suficiente.",
      "Túneles, vías férreas, bocacalles, puentes, curvas y pendientes."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 22,
    "type": "text",
    "question": "¿Qué hacer si un policía indica avanzar pese a tener semáforo rojo?",
    "options": [
      "Esperar luz verde.",
      "Obedecer al policía.",
      "Avisarle que la luz está roja."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 23,
    "type": "text",
    "question": "¿Cada cuánto revisar completamente el sistema de frenos?",
    "options": [
      "Una vez al año o cada 20.000 km.",
      "Cada 4 años.",
      "Es indiferente."
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 24,
    "type": "text",
    "question": "¿Cómo circular al atravesar una acera hacia estacionamientos o garajes?",
    "options": [
      "Igual que en la calzada.",
      "Evitando molestar al peatón.",
      "A paso de hombre y sin alarmar al peatón."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 25,
    "type": "text",
    "question": "¿Cuándo cesan los efectos del alcohol para conducir?",
    "options": [
      "Tomando café.",
      "Ducha fría.",
      "Con el tiempo que necesita el organismo para eliminarlo."
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 26,
    "type": "text",
    "question": "¿Profundidad mínima del dibujo del neumático?",
    "options": [
      "1.6mm",
      "0.5mm",
      "3.0mm"
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 27,
    "type": "text",
    "question": "¿La distancia detrás de otro vehículo depende de...?",
    "options": [
      "El estado del tránsito y la vía.",
      "El límite de velocidad.",
      "El estado de los vehículos."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 28,
    "type": "text",
    "question": "¿Dónde está permitido usar luz de largo alcance?",
    "options": [
      "En zona rural.",
      "En zona urbana.",
      "En cualquier lugar."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 29,
    "type": "text",
    "question": "¿Qué se entiende por estacionar?",
    "options": [
      "Detenerse brevemente para ascenso/descenso.",
      "Detener 4 días o más.",
      "Detener en posición de parada y ocupar un lugar autorizado."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 30,
    "type": "text",
    "question": "¿Qué transmiten las señales reglamentarias?",
    "options": [
      "Sugerencias.",
      "Órdenes impuestas por leyes y ordenanzas.",
      "Información general."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 31,
    "type": "text",
    "question": "¿Qué transmiten las señales de prevención?",
    "options": [
      "Advierten sobre un cambio de normalidad en la vía.",
      "Ordenan comportamiento.",
      "Informan servicios disponibles."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 32,
    "type": "text",
    "question": "¿Qué transmiten las señales informativas?",
    "options": [
      "Transmiten órdenes.",
      "Advierten cambio en la vía.",
      "Informan distancias, destinos y orientación."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 33,
    "type": "text",
    "question": "¿Qué significa la doble línea continua?",
    "options": [
      "No circular sobre ella.",
      "No adelantar.",
      "Separa carriles del mismo sentido."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 34,
    "type": "text",
    "question": "¿Qué significa el cordón rojo?",
    "options": [
      "Se puede estacionar.",
      "No se puede estacionar ni detener.",
      "Detención breve permitida."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 35,
    "type": "text",
    "question": "¿Qué valores representan sus cinco puntas?",
    "options": [
      "Memoria, Prevención, Ley, Justicia y Educación.",
      "Memoria, Estado, Paciencia, Justicia y Educación.",
      "Memoria, Respeto, Consecuencias, Prevención, Cultura."
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 36,
    "type": "text",
    "question": "¿Qué mensaje quiere transmitir la estrella amarilla?",
    "options": [
      "Recuerdo permanente a la persona fallecida.",
      "Llamado de atención en la vía pública.",
      "Ambas."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 37,
    "type": "text",
    "question": "¿Qué documentación es obligatoria para circular?",
    "options": [
      "Tarjeta verde, DNI, título, seguro.",
      "Título, licencia, grupo sanguíneo, patente.",
      "Cédula verde, último recibo de patente, licencia y seguro vigente."
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 38,
    "type": "text",
    "question": "¿El seguro contra terceros es...?",
    "options": [
      "Obligatorio según transporte.",
      "Obligatorio sin excepción.",
      "Según tamaño del vehículo."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 39,
    "type": "text",
    "question": "En una autopista, ¿cuál carril es para velocidad máxima?",
    "options": [
      "Derecha.",
      "Izquierda.",
      "Cualquier carril."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 40,
    "type": "text",
    "question": "¿Qué espacio dejar al estacionar entre autos?",
    "options": [
      "10 cm.",
      "50 cm.",
      "Más de 1 metro."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 41,
    "type": "text",
    "question": "¿Qué hacer si se revienta un neumático en marcha?",
    "options": [
      "Marcha atrás.",
      "Sujetar volante, dejar frenar el motor y luego frenar suavemente.",
      "Frenar fuerte."
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 42,
    "type": "text",
    "question": "¿Cómo estacionar en una calle con pendiente?",
    "options": [
      "Solo freno de mano.",
      "Solo ruedas hacia el cordón.",
      "Freno de mano y ruedas hacia el cordón."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 43,
    "type": "text",
    "question": "En caminos de montaña, ¿quién tiene prioridad?",
    "options": [
      "El que asciende.",
      "El que desciende.",
      "Cualquiera."
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 44,
    "type": "text",
    "question": "Niños menores de 10 años deben viajar...",
    "options": [
      "Con cinturón en asiento delantero.",
      "En brazos en asiento trasero.",
      "En silla especial o cinturón en asiento trasero."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 45,
    "type": "text",
    "question": "¿Un vehículo sin paragolpes puede circular?",
    "options": [
      "Sí.",
      "No.",
      "Es indistinto."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 46,
    "type": "text",
    "question": "En vehículos encolumnados, ¿quién adelanta primero?",
    "options": [
      "El del medio.",
      "El inmediatamente detrás del primero.",
      "El último."
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 47,
    "type": "text",
    "question": "Límite máximo tolerado de alcohol para particulares:",
    "options": [
      "0,2 g/l",
      "0,5 g/l",
      "0,8 g/l"
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 48,
    "type": "text",
    "question": "¿Dónde detenerse en un semáforo?",
    "options": [
      "En cualquier lado.",
      "Sobre la senda peatonal.",
      "Detrás de la senda peatonal."
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 49,
    "type": "image",
    "image": "docs/senales/altura-limitada.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de altura máxima",
      "Rotonda",
      "Limitación de altura máxima permitida"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 50,
    "type": "image",
    "image": "docs/senales/ancho-limitado.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Velocidad mínima permitida",
      "Limitación de ancho máximo permitido",
      "Circulación exclusiva para jinetes"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 51,
    "type": "image",
    "image": "docs/senales/animales-sueltos-1.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Comienzo de autopista",
      "Comienzo de calzada dividida",
      "Precaución: Animales sueltos en la vía"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 52,
    "type": "image",
    "image": "docs/senales/animales-sueltos-2.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Giro obligatorio a la derecha",
      "Precaución: Animales sueltos (ganado)",
      "Paneles de prevención en curva"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 53,
    "type": "image",
    "image": "docs/senales/atencion.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Permitido seguir recto o girar a la izquierda",
      "Permitido girar a la izquierda",
      "Atención: Peligro no especificado"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 54,
    "type": "image",
    "image": "docs/senales/banderillero.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Presencia de banderillero",
      "Peatones deben circular por la izquierda",
      "Limitación de altura máxima"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 55,
    "type": "image",
    "image": "docs/senales/bifurcacion-alternativa.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paso obligado por la izquierda",
      "Bifurcación con opción alternativa",
      "Direcciones permitidas (ambos lados)"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 56,
    "type": "image",
    "image": "docs/senales/bifurcacion.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Bifurcación de caminos",
      "Comienzo de calzada dividida",
      "Presencia de jinetes"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 57,
    "type": "image",
    "image": "docs/senales/calle-sin-salida.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Vientos fuertes laterales",
      "Limitación de altura máxima permitida",
      "Calle sin salida"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 58,
    "type": "image",
    "image": "docs/senales/calzada-dividida.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Comienzo de calzada dividida",
      "Circulación exclusiva para jinetes",
      "Prohibido circular con acoplado"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 59,
    "type": "image",
    "image": "docs/senales/calzada-resbaladiza.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Calzada resbaladiza",
      "Fin de la prescripción (Restricción)",
      "Cruce de caminos (Bocacalle)"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 60,
    "type": "image",
    "image": "docs/senales/camino-sinuoso.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Cruce de peatones",
      "Cruce de tranvía",
      "Camino sinuoso (curvas sucesivas)"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 61,
    "type": "image",
    "image": "docs/senales/ceda-el-paso.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "No avanzar",
      "Ceda el paso",
      "Pendiente ascendente pronunciada"
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 62,
    "type": "image",
    "image": "docs/senales/ciclistas.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Permitido girar a la izquierda",
      "Cruce o circulación de ciclistas",
      "Rotonda"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 63,
    "type": "image",
    "image": "docs/senales/circulacion-exclusiva-bicicleta.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Sentido de circulación (Derecha)",
      "Circulación exclusiva para bicicletas",
      "Inicio de doble circulación"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 64,
    "type": "image",
    "image": "docs/senales/circulacion-exclusiva-jinetes.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Puesto de control",
      "Pendiente descendente pronunciada",
      "Circulación exclusiva para jinetes"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 65,
    "type": "image",
    "image": "docs/senales/circulacion-exclusiva-motos.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Tránsito pesado debe circular por la derecha",
      "Atención: Peligro no especificado",
      "Circulación exclusiva para motocicletas"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 66,
    "type": "image",
    "image": "docs/senales/circulacion-exclusiva-peatones.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Circulación exclusiva para peatones",
      "Limitación de largo máximo",
      "Calzada resbaladiza"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 67,
    "type": "image",
    "image": "docs/senales/circulacion-exclusiva-transporte-publico.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Presencia de banderillero",
      "Carril exclusivo para transporte público",
      "Peatones deben circular por la izquierda"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 68,
    "type": "image",
    "image": "docs/senales/comienzo-autopista.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Comienzo de autopista",
      "Atención: Peligro no especificado",
      "Circulación de maquinaria agrícola"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 69,
    "type": "image",
    "image": "docs/senales/comienzo-doble-mano.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Comienzo de circulación en doble mano",
      "Circulación de maquinaria agrícola",
      "Precaución: Animales sueltos (ganado)"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 70,
    "type": "image",
    "image": "docs/senales/contramano.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Bifurcación de caminos",
      "Perfil irregular (Baches o lomas)",
      "Contramano (Prohibido avanzar)"
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 71,
    "type": "image",
    "image": "docs/senales/corredor-aereo.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Corredor aéreo (aviones a baja altura)",
      "Paso obligado por la derecha",
      "Calzada resbaladiza"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 72,
    "type": "image",
    "image": "docs/senales/cruce-ferroviario.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Cruce ferroviario a nivel",
      "Permitido seguir recto o girar a la derecha",
      "Vientos fuertes laterales"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 73,
    "type": "image",
    "image": "docs/senales/cruce-peatones.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Contramano (Prohibido avanzar)",
      "Cruce de peatones",
      "Fin de la prescripción (Restricción)"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 74,
    "type": "image",
    "image": "docs/senales/cruce.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Calle sin salida",
      "Cruz de San Andrés (Ferrocarril)",
      "Cruce de caminos (Bocacalle)"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 75,
    "type": "image",
    "image": "docs/senales/cruz-san-andres-2.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Permitido seguir recto o girar a la derecha",
      "Cruz de San Andrés (Ferrocarril)",
      "Limitación de peso máximo total"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 76,
    "type": "image",
    "image": "docs/senales/cruz-san-andres.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido estacionar",
      "Cruz de San Andrés",
      "Puente móvil"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 77,
    "type": "image",
    "image": "docs/senales/curva-cerrada.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Uso obligatorio de cadenas para nieve",
      "Curva cerrada",
      "Tránsito pesado debe circular por la derecha"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 78,
    "type": "image",
    "image": "docs/senales/curva-contracurva.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Uso obligatorio de luces bajas",
      "Cruz de San Andrés (Ferrocarril)",
      "Curva y contracurva"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 79,
    "type": "image",
    "image": "docs/senales/curva-en-s.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Curva en S",
      "Zona de derrumbes",
      "Velocidad mínima permitida"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 80,
    "type": "image",
    "image": "docs/senales/curva.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Corredor aéreo (aviones a baja altura)",
      "Curva peligrosa",
      "Zona de derrumbes"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 81,
    "type": "image",
    "image": "docs/senales/derrumbes.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Puente angosto",
      "Zona de derrumbes",
      "Peatones deben circular por la izquierda"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 82,
    "type": "image",
    "image": "docs/senales/direccion-permitida-ambas.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido girar a la derecha",
      "Prohibido estacionar",
      "Direcciones permitidas (ambos lados)"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 83,
    "type": "image",
    "image": "docs/senales/direccion-permitida-bifurcacion.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Dirección permitida en bifurcación",
      "Niños jugando (Zona residencial)",
      "Limitación de altura máxima permitida"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 84,
    "type": "image",
    "image": "docs/senales/direccion-permitida-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Inicio de doble circulación",
      "Fin de autopista",
      "Dirección obligatoria a la derecha"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 85,
    "type": "image",
    "image": "docs/senales/direccion-permitida-igual-sentido-o-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Permitido seguir recto o girar a la derecha",
      "Ruta Nacional",
      "Zona de escolares"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 86,
    "type": "image",
    "image": "docs/senales/direccion-permitida-igual-sentido-o-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Permitido seguir recto o girar a la izquierda",
      "Velocidad mínima permitida",
      "Incorporación de tránsito lateral"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 87,
    "type": "image",
    "image": "docs/senales/direccion-permitida-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Sentido de circulación único",
      "Dirección obligatoria a la izquierda",
      "No avanzar"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 88,
    "type": "image",
    "image": "docs/senales/empalme.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Empalme de vías",
      "Cruce de peatones",
      "Uso obligatorio de luces bajas"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 89,
    "type": "image",
    "image": "docs/senales/equipo-pesado-en-la-via.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Tránsito pesado debe circular por la derecha",
      "Equipo pesado operando en la vía",
      "Comienzo de calzada dividida"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 90,
    "type": "image",
    "image": "docs/senales/escolares.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Zona de escolares",
      "Circulación de maquinaria agrícola",
      "Direcciones permitidas (ambos lados)"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 91,
    "type": "image",
    "image": "docs/senales/estacionamiento-exclusivo.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Precaución: Animales sueltos (ganado)",
      "Paneles de prevención en curva",
      "Estacionamiento exclusivo"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 92,
    "type": "image",
    "image": "docs/senales/estacionamiento-permitido.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Estacionamiento permitido",
      "Hombres trabajando",
      "Sentido de circulación (Derecha)"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 93,
    "type": "image",
    "image": "docs/senales/estrechamiento-de-calzada.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Uso obligatorio de cadenas para nieve",
      "Presencia de banderillero",
      "Estrechamiento de calzada"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 94,
    "type": "image",
    "image": "docs/senales/estrechamiento-en-las-dos-manos.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido circular camiones",
      "Estrechamiento de calzada en ambas manos",
      "Circulación exclusiva para jinetes"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 95,
    "type": "image",
    "image": "docs/senales/estrechamiento-en-una-sola-mano.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Estrechamiento de calzada en una mano",
      "Precaución: Animales sueltos (ganado)",
      "Bifurcación con opción alternativa"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 96,
    "type": "image",
    "image": "docs/senales/fin-de-autopista.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de altura máxima",
      "Fin de autopista",
      "Estrechamiento de calzada en una mano"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 97,
    "type": "image",
    "image": "docs/senales/fin-de-la-prescipcion-2.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Vientos fuertes laterales",
      "Fin de la prescripción (Restricción)",
      "Limitación de peso máximo total"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 98,
    "type": "image",
    "image": "docs/senales/fin-de-la-prescipcion.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Fin de la prescripción",
      "Puente angosto",
      "Circulación de maquinaria agrícola"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 99,
    "type": "image",
    "image": "docs/senales/giro-obligatorio-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Giro obligatorio a la derecha",
      "Velocidad máxima permitida",
      "Cruce ferroviario a nivel"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 100,
    "type": "image",
    "image": "docs/senales/giro-obligatorio-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Perfil irregular: Lomada",
      "Giro obligatorio a la izquierda",
      "Fin de autopista"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 101,
    "type": "image",
    "image": "docs/senales/hombres-trabajando.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Hombres trabajando",
      "Presencia de jinetes",
      "Comienzo de calzada dividida"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 102,
    "type": "image",
    "image": "docs/senales/incorporacion-de-transito-lateral.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Circulación exclusiva para motocicletas",
      "Velocidad mínima permitida",
      "Incorporación de tránsito lateral"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 103,
    "type": "image",
    "image": "docs/senales/inicio-de-doble-circulacion.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Niños jugando (Zona residencial)",
      "Inicio de doble circulación",
      "Cruce ferroviario a nivel"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 104,
    "type": "image",
    "image": "docs/senales/jinetes.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Presencia de jinetes",
      "Puente angosto",
      "Calzada resbaladiza"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 105,
    "type": "image",
    "image": "docs/senales/limitacion-de-altura.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido girar a la derecha",
      "Limitación de altura máxima",
      "Rotonda"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 106,
    "type": "image",
    "image": "docs/senales/limitacion-de-ancho.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de ancho máximo",
      "Prohibido girar a la derecha",
      "Túnel"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 107,
    "type": "image",
    "image": "docs/senales/limitacion-de-largo.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de largo máximo",
      "Bifurcación de caminos",
      "Paso obligado por la izquierda"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 108,
    "type": "image",
    "image": "docs/senales/limitacion-de-peso-por-eje.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de peso máximo por eje",
      "Tránsito pesado debe circular por la derecha",
      "Prohibido girar a la derecha"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 109,
    "type": "image",
    "image": "docs/senales/limitacion-de-peso.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Proyección de piedras",
      "Permitido girar a la derecha",
      "Limitación de peso máximo total"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 110,
    "type": "image",
    "image": "docs/senales/limitacion-de-velocidad-maxima.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paneles de prevención en curva",
      "Velocidad máxima permitida",
      "Perfil irregular: Lomada"
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 111,
    "type": "image",
    "image": "docs/senales/limitacion-de-velocidad-minima.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Velocidad mínima permitida",
      "Cruz de San Andrés",
      "Corredor aéreo (aviones a baja altura)"
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 112,
    "type": "image",
    "image": "docs/senales/niños.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Niños jugando (Zona residencial)",
      "Prohibido circular bicicletas",
      "Prohibido circular camiones"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 113,
    "type": "image",
    "image": "docs/senales/no-avanzar.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "No avanzar",
      "Bifurcación de caminos",
      "Estrechamiento de calzada en ambas manos"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 114,
    "type": "image",
    "image": "docs/senales/no-ruidos-molestos.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido ruidos molestos",
      "Corredor aéreo (aviones a baja altura)",
      "Calzada resbaladiza"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 115,
    "type": "image",
    "image": "docs/senales/paneles-de-prevencion-aproximacion.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Preferencia de avance",
      "Paneles de prevención (Aproximación)",
      "Prohibido cambiar de carril"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 116,
    "type": "image",
    "image": "docs/senales/paneles-de-prevencion-curva-2.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Presencia de banderillero",
      "Paneles de prevención en curva",
      "Ruta Nacional"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 117,
    "type": "image",
    "image": "docs/senales/paneles-de-prevencion-curva.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Cruce o circulación de ciclistas",
      "Paneles de prevención en curva",
      "Curva en S"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 118,
    "type": "image",
    "image": "docs/senales/paneles-de-prevencion-obstaculo-rigido.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Giro obligatorio a la derecha",
      "Prevención de obstáculo rígido",
      "Contramano (Prohibido avanzar)"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 119,
    "type": "image",
    "image": "docs/senales/pare.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Estrechamiento de calzada en una mano",
      "Pare (Detención obligatoria)",
      "Paneles de prevención en curva"
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 120,
    "type": "image",
    "image": "docs/senales/paso-obligado-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paso obligado por la derecha",
      "Prohibido circular con animales",
      "Cruce de caminos (Bocacalle)"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 121,
    "type": "image",
    "image": "docs/senales/paso-obligado-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paso obligado por la izquierda",
      "Circulación exclusiva para jinetes",
      "Zona de escolares"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 122,
    "type": "image",
    "image": "docs/senales/peatones-por-la-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Puente angosto",
      "Limitación de peso máximo total",
      "Peatones deben circular por la izquierda"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 123,
    "type": "image",
    "image": "docs/senales/pendiente-ascendente.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de peso máximo total",
      "Pendiente ascendente pronunciada",
      "Circulación exclusiva para motocicletas"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 124,
    "type": "image",
    "image": "docs/senales/pendiente-descendente.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paso obligado por la derecha",
      "Pendiente descendente pronunciada",
      "Prohibido estacionar"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 125,
    "type": "image",
    "image": "docs/senales/perfil-irregular-baden.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Perfil irregular: Badén",
      "Permitido seguir recto o girar a la izquierda",
      "Prohibido ruidos molestos"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 126,
    "type": "image",
    "image": "docs/senales/perfil-irregular-lomada.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Sentido de circulación (Derecha)",
      "Zona de escolares",
      "Perfil irregular: Lomada"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 127,
    "type": "image",
    "image": "docs/senales/perfil-irregular.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Ruta Nacional",
      "Perfil irregular (Baches o lomas)",
      "Estacionamiento permitido"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 128,
    "type": "image",
    "image": "docs/senales/permitido-girar-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Túnel",
      "Prohibido circular tracción a sangre",
      "Permitido girar a la derecha"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 129,
    "type": "image",
    "image": "docs/senales/permitido-girar-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Niños jugando (Zona residencial)",
      "Permitido girar a la izquierda",
      "Comienzo de calzada dividida"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 130,
    "type": "image",
    "image": "docs/senales/preferencia-de-avance.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paneles de prevención en curva",
      "Cruz de San Andrés",
      "Preferencia de avance"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 131,
    "type": "image",
    "image": "docs/senales/presencia-de-vehiculo-extraño-ambulancia.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Salida de vehículos de emergencia",
      "Limitación de ancho máximo",
      "Puente angosto"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 132,
    "type": "image",
    "image": "docs/senales/presencia-de-vehiculo-extraño-tractor.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Circulación de maquinaria agrícola",
      "Paneles de prevención en curva",
      "Presencia de banderillero"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 133,
    "type": "image",
    "image": "docs/senales/presencia-de-vehiculo-extraño-tranvia.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de altura máxima",
      "Limitación de altura máxima permitida",
      "Cruce de tranvía"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 134,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-acoplado.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de largo máximo",
      "Prohibido circular con acoplado",
      "Precaución: Animales sueltos (ganado)"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 135,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-animal.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Pendiente descendente pronunciada",
      "Prohibido circular con animales",
      "Circulación exclusiva para bicicletas"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 136,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-autos.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Estacionamiento exclusivo",
      "Prohibido circular automotores",
      "Comienzo de circulación en doble mano"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 137,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-bicicletas.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido girar a la izquierda",
      "Prohibido circular bicicletas",
      "Bifurcación de caminos"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 138,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-camiones.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Curva y contracurva",
      "No avanzar",
      "Prohibido circular camiones"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 139,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-caro-de-mano.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paso obligado por la derecha",
      "Prohibido circular carros de mano",
      "Cruce de tranvía"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 140,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-motos.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido circular motos",
      "Prohibido estacionar",
      "Circulación exclusiva para motocicletas"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 141,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-peaton.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido circular peatones",
      "Sentido de circulación alternativo",
      "No avanzar"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 142,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-traccion-animal.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Cruce de tranvía",
      "Prohibido circular tracción a sangre",
      "Corredor aéreo (aviones a baja altura)"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 143,
    "type": "image",
    "image": "docs/senales/prohibicion-de-circular-tractor.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Direcciones permitidas (ambos lados)",
      "Prohibido circular tractores",
      "Prohibido ruidos molestos"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 144,
    "type": "image",
    "image": "docs/senales/prohibido-adelantar.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Limitación de ancho máximo",
      "Dirección permitida en bifurcación",
      "Prohibido adelantar"
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 145,
    "type": "image",
    "image": "docs/senales/prohibido-cambiar-de-carril.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Cruz de San Andrés (Ferrocarril)",
      "Prohibido cambiar de carril",
      "Comienzo de autopista"
    ],
    "correct": 1,
    "weight": 2
  },
  {
    "id": 146,
    "type": "image",
    "image": "docs/senales/prohibido-estacionar-y-detenerse.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido estacionar y detenerse",
      "Pendiente ascendente pronunciada",
      "Prohibido ruidos molestos"
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 147,
    "type": "image",
    "image": "docs/senales/prohibido-estacionar.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido estacionar",
      "Prohibido circular automotores",
      "Comienzo de calzada dividida"
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 148,
    "type": "image",
    "image": "docs/senales/prohibido-girar-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido girar a la derecha",
      "Permitido girar a la derecha",
      "Zona de escolares"
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 149,
    "type": "image",
    "image": "docs/senales/prohibido-girar-en-u.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido girar en U",
      "Estrechamiento de calzada en una mano",
      "Estrechamiento de calzada"
    ],
    "correct": 0,
    "weight": 2
  },
  {
    "id": 150,
    "type": "image",
    "image": "docs/senales/prohibido-girar-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Atención: Peligro no especificado",
      "Contramano (Prohibido avanzar)",
      "Prohibido girar a la izquierda"
    ],
    "correct": 2,
    "weight": 2
  },
  {
    "id": 151,
    "type": "image",
    "image": "docs/senales/proyecion-de-piedras.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Circulación exclusiva para bicicletas",
      "Permitido seguir recto o girar a la izquierda",
      "Proyección de piedras"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 152,
    "type": "image",
    "image": "docs/senales/puente-angosto.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Puente angosto",
      "Giro obligatorio a la izquierda",
      "Limitación de peso máximo total"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 153,
    "type": "image",
    "image": "docs/senales/puente-movil.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Puente móvil",
      "Cruce de tranvía",
      "Ceda el paso"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 154,
    "type": "image",
    "image": "docs/senales/puesto-de-control.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Paneles de prevención (Aproximación)",
      "Puente móvil",
      "Puesto de control"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 155,
    "type": "image",
    "image": "docs/senales/rotonda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Perfil irregular: Lomada",
      "Rotonda",
      "Puente móvil"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 156,
    "type": "image",
    "image": "docs/senales/ruta-nacional.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Bifurcación de caminos",
      "Limitación de peso máximo por eje",
      "Ruta Nacional"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 157,
    "type": "image",
    "image": "docs/senales/ruta-provincial.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido adelantar",
      "Sentido de circulación alternativo",
      "Ruta Provincial"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 158,
    "type": "image",
    "image": "docs/senales/sentido-de-circulacion-alternativa.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Sentido de circulación alternativo",
      "Sentido de circulación único",
      "Prohibido circular peatones"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 159,
    "type": "image",
    "image": "docs/senales/sentido-de-circulacion-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Perfil irregular: Badén",
      "Sentido de circulación (Derecha)",
      "Prohibido cambiar de carril"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 160,
    "type": "image",
    "image": "docs/senales/sentido-de-circulacion-izquierda.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Tránsito pesado debe circular por la derecha",
      "Sentido de circulación (Izquierda)",
      "Limitación de ancho máximo permitido"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 161,
    "type": "image",
    "image": "docs/senales/sentido-de-circulacion-unico.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido circular con acoplado",
      "Sentido de circulación único",
      "Estrechamiento de calzada"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 162,
    "type": "image",
    "image": "docs/senales/transitar-con-luces-bajas-encendidas.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Sentido de circulación único",
      "Salida de vehículos de emergencia",
      "Uso obligatorio de luces bajas"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 163,
    "type": "image",
    "image": "docs/senales/transito-pesado-a-la-derecha.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Cruz de San Andrés",
      "Tránsito pesado debe circular por la derecha",
      "Fin de autopista"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "id": 164,
    "type": "image",
    "image": "docs/senales/tunel.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Preferencia de avance",
      "Perfil irregular: Badén",
      "Túnel"
    ],
    "correct": 2,
    "weight": 1
  },
  {
    "id": 165,
    "type": "image",
    "image": "docs/senales/uso-de-cadenas-para-nieve.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Uso obligatorio de cadenas para nieve",
      "Prohibido circular con animales",
      "Prohibido estacionar"
    ],
    "correct": 0,
    "weight": 1
  },
  {
    "id": 166,
    "type": "image",
    "image": "docs/senales/vientos-fuertes-laterales.png",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibido circular peatones",
      "Vientos fuertes laterales",
      "Direcciones permitidas (ambos lados)"
    ],
    "correct": 1,
    "weight": 1
  },
  {
    "type": "text",
    "question": "¿Cuál es la restricción para conductores principiantes durante los primeros 6 meses?",
    "options": [
      "No pueden circular por el centro de la ciudad.",
      "No pueden llevar pasajeros.",
      "No pueden circular por arterias donde se permitan velocidades superiores a 70 km/h."
    ],
    "correct": 2,
    "weight": 2,
    "id": 167
  },
  {
    "type": "text",
    "question": "Al estacionar en paralelo, ¿a qué distancia aproximada del cordón o vehículo de referencia debe detenerse inicialmente?",
    "options": [
      "Pegado al vehículo.",
      "A 1 metro.",
      "A unos 40 cm (aprox. dos espejos retrovisores)."
    ],
    "correct": 2,
    "weight": 1,
    "id": 168
  },
  {
    "type": "text",
    "question": "¿Qué es el 'efecto túnel' en la conducción?",
    "options": [
      "La sensación de oscuridad al entrar en un túnel.",
      "La reducción del campo de visión periférica al aumentar la velocidad.",
      "El efecto de las luces largas en la niebla."
    ],
    "correct": 1,
    "weight": 2,
    "id": 169
  },
  {
    "type": "text",
    "question": "¿Cómo debe colocarse el cinturón de seguridad una mujer embarazada?",
    "options": [
      "La banda diagonal entre los senos y la horizontal bajo el abdomen.",
      "La banda diagonal sobre el vientre y la horizontal sobre las piernas.",
      "No debe usar cinturón de seguridad."
    ],
    "correct": 0,
    "weight": 2,
    "id": 170
  },
  {
    "type": "text",
    "question": "¿Qué sucede con los objetos sueltos en el vehículo ante un impacto a 50 km/h?",
    "options": [
      "Se mantienen en su lugar por la inercia.",
      "Golpean con una fuerza equivalente a 40 veces su peso.",
      "Caen al suelo del vehículo sin causar daño."
    ],
    "correct": 1,
    "weight": 2,
    "id": 171
  },
  {
    "type": "text",
    "question": "En una frenada de emergencia, ¿qué se debe presionar primero?",
    "options": [
      "El embrague y luego el freno.",
      "El freno a fondo y antes de detenerse por completo, el embrague.",
      "El freno de mano y el embrague."
    ],
    "correct": 1,
    "weight": 2,
    "id": 172
  },
  {
    "type": "text",
    "question": "¿Cuál es la posición recomendada de las manos en el volante (imaginando un reloj)?",
    "options": [
      "12:30",
      "10:10 o 9:15",
      "8:20"
    ],
    "correct": 1,
    "weight": 1,
    "id": 173
  },
  {
    "type": "text",
    "question": "¿Qué indica la 'Onda Verde' en una avenida?",
    "options": [
      "Que se puede circular a máxima velocidad.",
      "Que los semáforos están coordinados; si ves varios en verde, prepárate para desacelerar si estás lejos.",
      "Que es una zona ecológica."
    ],
    "correct": 1,
    "weight": 1,
    "id": 174
  },
  {
    "type": "text",
    "question": "¿Para qué sirve el carril de aceleración en una autopista?",
    "options": [
      "Para sobrepasar a otros vehículos.",
      "Para alcanzar la velocidad del flujo vehicular antes de incorporarse.",
      "Para estacionar en caso de emergencia."
    ],
    "correct": 1,
    "weight": 2,
    "id": 175
  },
  {
    "type": "text",
    "question": "¿Es obligatorio el uso de luces bajas en rutas durante el día?",
    "options": [
      "No, solo de noche.",
      "Sí, es obligatorio circular con luces bajas encendidas las 24 horas.",
      "Solo si hay niebla o lluvia."
    ],
    "correct": 1,
    "weight": 2,
    "id": 176
  },
  {
    "type": "text",
    "question": "¿Qué es la regla de los dos segundos?",
    "options": [
      "El tiempo máximo para mirar los espejos.",
      "El tiempo que se debe esperar en un semáforo.",
      "Un método para calcular la distancia de seguimiento mínima segura con el vehículo de adelante."
    ],
    "correct": 2,
    "weight": 2,
    "id": 177
  },
  {
    "type": "text",
    "question": "Si al llegar a una bocacalle sin semáforo la visión está obstruida por un vehículo detenido, ¿qué debe hacer?",
    "options": [
      "Tocar bocina y avanzar.",
      "Adelantarse despacio para ver.",
      "Detenerse por completo, ya que podría haber peatones cruzando delante de ese vehículo."
    ],
    "correct": 2,
    "weight": 2,
    "id": 178
  },
  {
    "type": "text",
    "question": "¿Qué son los puntos ciegos?",
    "options": [
      "Las áreas que no cubren los limpiaparabrisas.",
      "Las áreas de visión del entorno a las que el conductor no tiene acceso directo ni por espejos.",
      "Los lugares sin iluminación en la ruta."
    ],
    "correct": 1,
    "weight": 1,
    "id": 179
  },
  {
    "type": "text",
    "question": "En caso de lluvia, ¿cuándo existe riesgo de perder el control?",
    "options": [
      "Solo a altas velocidades.",
      "Incluso a baja velocidad y con poca lluvia, la adherencia disminuye drásticamente.",
      "Solo si los neumáticos están lisos."
    ],
    "correct": 1,
    "weight": 2,
    "id": 180
  },
  {
    "type": "text",
    "question": "¿Cuál es la velocidad máxima en avenidas de la Ciudad de Buenos Aires (salvo señalización contraria)?",
    "options": [
      "40 km/h",
      "60 km/h",
      "70 km/h"
    ],
    "correct": 1,
    "weight": 2,
    "id": 181
  }
];
