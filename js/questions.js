const questions = [
  {
    "id": 0,
    "type": "image",
    "question": "¿Qué indica esta seña?",
    "options": [
      "Adelantamiento por la derecha.",
      "Giro a la derecha.",
      "Detenerse."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b13.jpg",
    "category": "senales"
  },
  {
    "id": 1,
    "type": "image",
    "question": "¿Son válidas este tipo de señas?",
    "options": [
      "Como acompañamiento al uso de balizas y/o en caso de emergencia.",
      "Nunca.",
      "Sólo cuando se utilicen en calles."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b173.jpg",
    "category": "senales"
  },
  {
    "id": 2,
    "type": "text",
    "question": "En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?",
    "options": [
      "Detenerse inmediatamente y permanecer en el lugar del hecho.",
      "Conducir hasta la comisaría más cercana.",
      "Llamar al 911 y continuar el viaje."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 3,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Cruce de jinetes.",
      "Prohibición de circular con animales.",
      "Camino peligroso por presencia de animales sueltos."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b225.jpg",
    "category": "senales"
  },
  {
    "id": 4,
    "type": "image",
    "question": "¿Cuál es la “distancia mínima de seguridad” a la que debe circular el vehículo A con respecto al B?",
    "options": [
      "A una diferencia de dos segundos.",
      "A una distancia de 2 metros.",
      "No existe una determinada. Sólo está prohibido circular inmediatamente detrás, sin dejar distancia."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b144.jpg",
    "category": "teorica"
  },
  {
    "id": 5,
    "type": "image",
    "question": "Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...",
    "options": [
      "Igual que cuando la calzada se encuentra seca.",
      "Menor que cuando la calzada se encuentra seca.",
      "Mayor que cuando la calzada se encuentra seca."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b185.jpg",
    "category": "teorica"
  },
  {
    "id": 6,
    "type": "text",
    "question": "Según la Ley N° 2148, ¿es obligatorio llevar un chaleco de material reflectivo?",
    "options": [
      "No es obligatorio pero es recomendable llevarlo por sí se necesita utilizarlo frente a algún desperfecto mecánico.",
      "Sí, es obligatorio y puede ser llevado en cualquier parte del vehículo.",
      "Sí, es obligatorio y debe ser llevado dentro del habitáculo para poder utilizarlo en caso de necesitar descender a la calzada, frente a alguna causa de fuerza mayor."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 7,
    "type": "image",
    "question": "¿Qué indica el siguiente cruce verde en las intersecciones?",
    "options": [
      "Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda.",
      "Advierte a los conductores sobre la existencia de un establecimiento escolar cercano.",
      "Advierte a los conductores sobre un cruce peligroso por tener poca iluminación."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b39.jpg",
    "category": "teorica"
  },
  {
    "id": 8,
    "type": "text",
    "question": "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin semáforos?",
    "options": [
      "Los vehículos de transporte de pasajero.",
      "El vehículo de menor tamaño.",
      "El vehículo que se presenta por el lado derecho."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 9,
    "type": "image",
    "question": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos…",
    "options": [
      "Junto a la acera izquierda los días hábiles durante las 24 horas.",
      "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
      "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b157.jpg",
    "category": "teorica"
  },
  {
    "id": 10,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "Prohibido estacionar por la existencia de un aeropuerto cercano.",
      "Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto.",
      "Prohibido estacionar y detenerse por la existencia de un aeropuerto cercano."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b223.jpg",
    "category": "senales"
  },
  {
    "id": 11,
    "type": "text",
    "question": "El vehículo, que circula por el carril destinado al tránsito lento, no puede abandonarlo para sobrepasar a otro vehículo que transita más lento.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 12,
    "type": "image",
    "question": "Según la Ley Nº 2148, ¿es correcto que un niño de 11 años utilice un Sistema de Retención Infantil, en este asiento central?",
    "options": [
      "Sí, ya que por su edad debe utilizarlo y las características del cinturón de seguridad (3 puntos) permite ajustarlo correctamente.",
      "No, sólo puede utilizar el sistema de Retención Infantil en asientos laterales.",
      "Es indistinto, ya que al tener más de 10 años no es obligatorio que utilice el Sistema de Retención Infantil."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b210.jpg",
    "category": "teorica"
  },
  {
    "id": 13,
    "type": "image",
    "question": "Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de circulación?",
    "options": [
      "Que está circulando en mí mismo sentido.",
      "Que está circulando en el sentido contrario al mío.",
      "No indican sentido de circulación sino que está descompuesto."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b175.jpg",
    "category": "senales"
  },
  {
    "id": 14,
    "type": "text",
    "question": "Encender las balizas permite detenerse en doble fila por un lapso de tiempo, entre 2 y 5 minutos.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 15,
    "type": "image",
    "question": "Según la Ley Nº 24.449, en el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?",
    "options": [
      "5 metros respecto de los rieles.",
      "2 metros respecto de los rieles.",
      "No existe una distancia mínima."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b164.jpg",
    "category": "teorica"
  },
  {
    "id": 16,
    "type": "image",
    "question": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
    "options": [
      "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
      "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
      "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b93.jpg",
    "category": "teorica"
  },
  {
    "id": 17,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Túnel.",
      "Puente angosto.",
      "Altura mínima."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b230.jpg",
    "category": "senales"
  },
  {
    "id": 18,
    "type": "image",
    "question": "¿El vehículo de la imagen se encuentra en infracción?",
    "options": [
      "Sí, salvo que el propietario del vehículo sea el mismo que el de la vivienda.",
      "No, ya que hay espacio suficiente para el paso del peatón.",
      "Ambas respuestas, A y B, son incorrectas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b148.jpg",
    "category": "teorica"
  },
  {
    "id": 19,
    "type": "image",
    "question": "En la imagen se muestra un cruce exclusivo para ciclistas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b38.jpg",
    "category": "teorica"
  },
  {
    "id": 20,
    "type": "text",
    "question": "¿Qué indican las señales reglamentarias?",
    "options": [
      "Advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
      "Identifican, orientan y hacen referencia a servicios, lugares, etc.",
      "Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 21,
    "type": "text",
    "question": "Si los espejos retrovisores de su vehículo están bien orientados, igualmente es posible que se produzcan puntos ciegos cuando observe por los mismos.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 22,
    "type": "text",
    "question": "Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño del mismo?",
    "options": [
      "No, porque la responsabilidad penal es intransferible.",
      "Sí. Además, del dueño también puede transferirse a la Compañía de Seguros.",
      "Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 23,
    "type": "text",
    "question": "¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
    "options": [
      "Siempre y cuando se encuentre vigente.",
      "Sólo si es un familiar directo o tiene una relación laboral.",
      "En ningún caso."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 24,
    "type": "text",
    "question": "Consumir cerveza influye en la conducción de un vehículo, haciendo que el conductor reduzca su capacidad de reacción y aumentando el tiempo necesario para responder ante un estímulo.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 25,
    "type": "text",
    "question": "Según las normas generales, ¿cuál es la velocidad máxima que puede alcanzar un vehículo, al circular por ruta cuando atraviesa una zona urbana?",
    "options": [
      "60 km/h.",
      "80 km/h.",
      "90 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 26,
    "type": "text",
    "question": "La ubicación y posición de las placas de dominio del vehículo, ¿puede sufrir algún tipo de modificación?",
    "options": [
      "Sólo pueden, eventualmente, ampliarse para mejorar su visibilidad.",
      "No, deben estar colocadas en el lugar y de forma reglamentaria.",
      "Sólo está prohibido modificar la placa de dominio trasera, no así la delantera."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 27,
    "type": "image",
    "question": "Como norma general, ¿qué distancia debe dejarse libre cuando se va a estacionar frente a este tipo de instituciones?",
    "options": [
      "Todo el frente del edificio.",
      "10 metros de cada lado de la entrada.",
      "5 metros de cada lado de la entrada."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b152.jpg",
    "category": "teorica"
  },
  {
    "id": 28,
    "type": "image",
    "question": "¿Qué indica esta señal reglamentaria?",
    "options": [
      "Que no se puede circular a una velocidad inferior a 35 km/h en esa vía.",
      "Que la velocidad máxima es de 35 km/h en esa vía.",
      "Que la velocidad precautoria es de 35 km/h en esa vía."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b258.jpg",
    "category": "senales"
  },
  {
    "id": 29,
    "type": "text",
    "question": "Según Ley N° 2148, ¿en qué plazas deben viajar los mayores de 12 años y con altura igual o superior a 1.50 mts.?",
    "options": [
      "En cualquier asiento pero siempre con el cinturón de seguridad debidamente sujeto.",
      "Sólo en las plazas traseras con cinturón de seguridad debidamente sujeto.",
      "Sólo en dispositivo de retención infantil correspondiente a peso y talla, debidamente homologado."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 30,
    "type": "text",
    "question": "¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde el lugar donde estaban estacionados o desde un garaje?",
    "options": [
      "Siempre, independientemente de cómo se encuentre el tránsito vehicular.",
      "Cuando el tránsito se encuentra interrumpido por cualquier razón.",
      "Nunca, independientemente de cómo se encuentre el tránsito vehicular."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 31,
    "type": "image",
    "question": "¿Cuál es la velocidad máxima permitida para un automóvil particular en este tramo de la avenida?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b133.jpg",
    "category": "teorica"
  },
  {
    "id": 32,
    "type": "text",
    "question": "El estrés no necesariamente puede alterar las capacidades para conducir de manera segura.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 33,
    "type": "image",
    "question": "¿Cuál de la tres señales indica que la ruta es provincial?",
    "options": [
      "La señal A.",
      "La señal B.",
      "La señal C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b273.jpg",
    "category": "senales"
  },
  {
    "id": 34,
    "type": "text",
    "question": "¿A qué se denomina conducción preventiva?",
    "options": [
      "A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e inflado de neumáticos.",
      "A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás.",
      "A realizar cursos viales cada seis meses."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 35,
    "type": "image",
    "question": "Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?",
    "options": [
      "Hacia la derecha.",
      "Hacia la izquierda.",
      "Hacia ambos lados."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b15.jpg",
    "category": "teorica"
  },
  {
    "id": 36,
    "type": "text",
    "question": "¿Cuál es la principal diferencia entre bicisendas y ciclovías?",
    "options": [
      "La bicisenda es de uso exclusivo de bicicletas y la ciclovía de uso preferencial.",
      "La bicisenda se encuentra sobre la calzada y la ciclovía sobre la vereda.",
      "La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 37,
    "type": "image",
    "question": "Si ud. es el conductor del vehículo, ¿qué conducta debe adoptar en la siguiente situación?",
    "options": [
      "Priorizar la circulación del peatón, indefectiblemente.",
      "Realizar una guiñada para advertir su preferencia de avance.",
      "Completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b22.jpg",
    "category": "teorica"
  },
  {
    "id": 38,
    "type": "image",
    "question": "¿Está permitida la acción que se presenta en la siguiente imagen?",
    "options": [
      "Sí, porque tiene las balizas encendidas y no necesita permanecer más de 5 minutos para que descienda un pasajero.",
      "Sí, porque la doble fila está permitida cuando se trata de ascenso y descenso de pasajeros.",
      "No, ya que la doble fila está permitida sólo como detención previa a la maniobra de estacionamiento."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b162.jpg",
    "category": "teorica"
  },
  {
    "id": 39,
    "type": "text",
    "question": "Al transportar cualquier elemento, éste debe ubicarse de modo que no perturbe la visibilidad, afecte peligrosamente las condiciones aerodinámicas del vehículo, oculte luces o sobresalga de los límites permitidos.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 40,
    "type": "text",
    "question": "¿Qué relación existe entre la velocidad y el campo visual del conductor?",
    "options": [
      "A mayor velocidad, menor campo visual.",
      "A menor velocidad, menor campo visual.",
      "A mayor velocidad, mayor campo visual."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 41,
    "type": "image",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Prohibición de estacionar en la entrada de terminal de ómnibus.",
      "Existencia de terminal de ómnibus, en las inmediaciones.",
      "Prohibición de detenerse en la entrada de terminal de ómnibus."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b270.jpg",
    "category": "senales"
  },
  {
    "id": 42,
    "type": "text",
    "question": "¿Está permitido circular marcha atrás en la Ciudad de Buenos Aires?",
    "options": [
      "No, salvo que se realice para estacionar, entrar o salir de un garaje (cuando no exista otra posibilidad) o salvar algún obstáculo.",
      "Sí, se puede realizar en cualquier ocasión pero el trayecto para circular debe ser de pocos metros.",
      "Sí, siempre que se realice antes de llegar a la mitad de la cuadra y asegurándose de no poner en riesgo al resto de los vehículos."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 43,
    "type": "image",
    "question": "Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?",
    "options": [
      "Sólo si se ha participado de un siniestro vial.",
      "No. Sólo la prueba positiva, efectivamente realizada, se considera una falta.",
      "Sí, la misma se toma como una presunción de alcoholemia positiva."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b53.jpg",
    "category": "teorica"
  },
  {
    "id": 44,
    "type": "image",
    "question": "Como norma general, frente a esta señal, ¿está permitido detenerse para el ascenso o descenso de pasajeros?",
    "options": [
      "No. Está prohibido estacionar y detenerse.",
      "Sí. Sólo está prohibido estacionar pero no detenerse.",
      "Según la hora en que quiera realizarse la detención."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b154.jpg",
    "category": "senales"
  },
  {
    "id": 45,
    "type": "text",
    "question": "Luego de un largo viaje en ruta, realizó una parada y le faltan muy pocos kilómetros para llegar a destino, ¿es necesario que todos los ocupantes vuelvan a ponerse el cinturón de seguridad?",
    "options": [
      "No, sólo es obligatorio para los que se ubiquen en los asientos delanteros.",
      "No, porque se está por llegar a destino.",
      "Sí, porque su uso es obligatorio para todos los ocupantes."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 46,
    "type": "text",
    "question": "¿A qué se denomina incidente de tránsito o incidente vial?",
    "options": [
      "Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.",
      "Hecho impredecible e inevitable en ocasión de circulación en la vía pública.",
      "Hecho, evitable o no, que involucra daños a terceros."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 47,
    "type": "text",
    "question": "¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
    "options": [
      "Velocidad y confort.",
      "Fluidez y seguridad.",
      "Comodidad y Agilidad."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 48,
    "type": "text",
    "question": "Según Ley N° 2148, ¿cuál es la velocidad máxima permitida para automóviles particulares en los carriles centrales de la Av. Gral. Paz, en el tramo entre Autopista Ingeniero Pascual Palazzo y Av. 27 de Febrero?",
    "options": [
      "60 km/h.",
      "80 km/h.",
      "100 km/h."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 49,
    "type": "image",
    "question": "Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?",
    "options": [
      "Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.",
      "Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no tiene la autoridad legal para realizar dicha indicación.",
      "Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea realizada por un agente de tránsito ya que es la única autoridad competente."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b70.jpg",
    "category": "teorica"
  },
  {
    "id": 50,
    "type": "image",
    "question": "La Ley N° 2148 establece como norma general la prohibición de detenerse de la siguiente forma, excepto:",
    "options": [
      "Que se trate de una detención para el ascenso o descenso de pasajeros.",
      "Que se trate de una detención previa a la maniobra de estacionamiento.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b161.jpg",
    "category": "teorica"
  },
  {
    "id": 51,
    "type": "image",
    "question": "¿Qué significa la demarcación horizontal que se visualiza en la imagen?",
    "options": [
      "Cruce peligroso por tener poca iluminación.",
      "Senda peatonal próxima a centros de salud.",
      "Senda peatonal próxima a zona escolar."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b31.jpg",
    "category": "senales"
  },
  {
    "id": 52,
    "type": "image",
    "question": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
    "options": [
      "Los vehículos que circulan por la calle A.",
      "Los vehículos que circulan por la calle B."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b98.jpg",
    "category": "teorica"
  },
  {
    "id": 53,
    "type": "image",
    "question": "¿Es obligatoria la utilización de este elemento en todos los asientos del automóvil?",
    "options": [
      "Sí. Lo establece la normativa para evitar lesiones graves en la zona cervical.",
      "No en todos, para los asientos traseros no cumplen ninguna función.",
      "No, ya que no forma parte de la seguridad activa ni pasiva de los vehículos."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b215.jpg",
    "category": "teorica"
  },
  {
    "id": 54,
    "type": "image",
    "question": "Indique cuál de estas imágenes muestra la manera correcta de colocar el espejo retrovisor:",
    "options": [
      "Imagen A.",
      "Imagen B.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b202.jpg",
    "category": "teorica"
  },
  {
    "id": 55,
    "type": "text",
    "question": "Conducir de noche aumenta el riesgo de sufrir un incidente.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 56,
    "type": "text",
    "question": "¿Cómo se pueden reducir los puntos ciegos al conducir un vehículo?",
    "options": [
      "Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras se circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando vistazos por encima de los hombros cuando sea necesario.",
      "Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar la luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia adelante para ampliar el ángulo de visión.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 57,
    "type": "text",
    "question": "El ciclista, ¿tiene permitido llevar un pasajero?",
    "options": [
      "Sí, únicamente si no compromete la visibilidad.",
      "Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.",
      "Ambas respuestas, A y B, son incorrectas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 58,
    "type": "image",
    "question": "En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?",
    "options": [
      "La opción A, ya que al tener ropa clara es más visible.",
      "Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores.",
      "Ambas opciones presentan el mismo riesgo por igual."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b7.jpg",
    "category": "teorica"
  },
  {
    "id": 59,
    "type": "image",
    "question": "La señal que se muestra es una señal preventiva, de máximo peligro, que anuncia la existencia de un tramo de vía con fuerte pendiente descendente.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b246.jpg",
    "category": "senales"
  },
  {
    "id": 60,
    "type": "text",
    "question": "¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
    "options": [
      "Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.",
      "Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.",
      "Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 61,
    "type": "text",
    "question": "En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias (107), indique con claridad:",
    "options": [
      "Lugar del hecho, características del incidente, cantidad y estado de las víctimas.",
      "Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas.",
      "Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 62,
    "type": "image",
    "question": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
    "options": [
      "Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.",
      "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
      "Extremar precauciones al cruzar sin la necesidad de detenerme."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b74.jpg",
    "category": "senales"
  },
  {
    "id": 63,
    "type": "text",
    "question": "Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de los espejos retrovisores?",
    "options": [
      "Antes de iniciar la marcha.",
      "Durante la conducción, para poder hacer una prueba real.",
      "Con el vehículo inmovilizado y el conductor fuera del mismo."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 64,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Camino resbaladizo.",
      "Camino sinuoso.",
      "Camino cuesta arriba."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b226.jpg",
    "category": "senales"
  },
  {
    "id": 65,
    "type": "image",
    "question": "¿Qué indica esta señal vertical de información?",
    "options": [
      "Una encrucijada peligrosa.",
      "La existencia de un puesto sanitario o de socorro.",
      "La existencia de un templo religioso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b267.jpg",
    "category": "senales"
  },
  {
    "id": 66,
    "type": "text",
    "question": "Por los efectos que provoca, el consumo de drogas ilegales no está permitido al momento de conducir; mientras que las drogas legales nunca afectan negativamente la capacidad de conducir.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 67,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Inicio de doble mano.",
      "Estrechamiento (en una sola mano).",
      "Encrucijada (bifurcación)."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b228.jpg",
    "category": "senales"
  },
  {
    "id": 68,
    "type": "image",
    "question": "¿Es aconsejable circular en bicicleta de esta manera?",
    "options": [
      "Sí, porque está conduciendo correctamente.",
      "No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.",
      "Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b6.jpg",
    "category": "teorica"
  },
  {
    "id": 69,
    "type": "image",
    "question": "Frente a esta situación de obstrucción de vía, ¿qué debe hacer el conductor del vehículo señalado?",
    "options": [
      "Debe ceder el paso al vehículo que circula en el sentido contrario.",
      "Tiene prioridad de paso sobre el otro vehículo.",
      "La normativa no establece prioridad de paso ante esta situación."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b105.jpg",
    "category": "senales"
  },
  {
    "id": 70,
    "type": "image",
    "question": "El siguiente elemento de seguridad, está correctamente ubicado.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b206.jpg",
    "category": "teorica"
  },
  {
    "id": 71,
    "type": "text",
    "question": "En el caso de tener que realizar una reverificación de la VTV, por motivos de una desaprobación original, ¿cuál es el plazo de tiempo para que ésta sea gratuita?",
    "options": [
      "No hay plazo. Si llegase a desaprobar se deberá volver a abonar el arancel correspondiente, aunque se realice al otro día.",
      "Si se realiza dentro de los 60 días corridos a partir de efectuada la verificación.",
      "Si se realiza dentro de los 60 días hábiles de efectuada la verificación."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 72,
    "type": "text",
    "question": "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
    "options": [
      "Escuche música a alto volúmen.",
      "Mantenga el interior del vehículo a una temperatura superior a 25 °C.",
      "Mantenga bien ventilado el interior del vehículo."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 73,
    "type": "image",
    "question": "La Ley Nº 2148 establece como norma general que en este tipo de calles está prohibido estacionar vehículos...",
    "options": [
      "Junto a la acera derecha los días hábiles durante las 24 horas.",
      "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
      "Junto a la acera izquierda todos los días durante las 24 horas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b158.jpg",
    "category": "teorica"
  },
  {
    "id": 74,
    "type": "text",
    "question": "Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
    "options": [
      "Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo.",
      "Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 75,
    "type": "image",
    "question": "Estas señales son las únicas que indican que se pierde la prioridad de paso en una bocacalle sin semáforo.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b103.jpg",
    "category": "senales"
  },
  {
    "id": 76,
    "type": "image",
    "question": "¿Para qué sirven estas luces intermitentes?",
    "options": [
      "Para advertir a los demás conductores, frente a malas condiciones climáticas, que el vehículo circula a baja velocidad.",
      "Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b176.jpg",
    "category": "senales"
  },
  {
    "id": 77,
    "type": "image",
    "question": "¿Cuál de las siguientes opciones está directamente vinculada a la prevención y reducción de siniestros viales?",
    "options": [
      "Opción A.",
      "Opción B.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b48.jpg",
    "category": "teorica"
  },
  {
    "id": 78,
    "type": "image",
    "question": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos...",
    "options": [
      "Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.",
      "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
      "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b156.jpg",
    "category": "teorica"
  },
  {
    "id": 79,
    "type": "image",
    "question": "¿Cuál de estas señales es Reglamentaria?",
    "options": [
      "La señal A.",
      "La señal B.",
      "La señal C."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b83.jpg",
    "category": "senales"
  },
  {
    "id": 80,
    "type": "image",
    "question": "Este elemento de seguridad...",
    "options": [
      "Permite prescindir del uso del cinturón de seguridad.",
      "Complementa el uso del cinturón de seguridad.",
      "Es incompatible con el uso del cinturón de seguridad."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b209.jpg",
    "category": "teorica"
  },
  {
    "id": 81,
    "type": "text",
    "question": "Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?",
    "options": [
      "Es indistinto, siempre que miren a ambos lados antes de hacerlo.",
      "En coincidencia con las paradas de transporte.",
      "Por la esquina, por la prolongación longitudinal de la vereda sobre la calle."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 82,
    "type": "text",
    "question": "¿A qué factor se deben la mayoría de los siniestros viales?",
    "options": [
      "Al humano.",
      "Al vehicular.",
      "Al ambiental."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 83,
    "type": "text",
    "question": "Para realizar correctamente un giro en una intersección se debe indicar...",
    "options": [
      "Tocando bocina.",
      "Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.",
      "Utilizando ambos giros, metros antes de llegar a la intersección."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 84,
    "type": "image",
    "question": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
    "options": [
      "El vehículo A.",
      "El vehículo B."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b97.jpg",
    "category": "senales"
  },
  {
    "id": 85,
    "type": "text",
    "question": "Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...",
    "options": [
      "Aproximadamente 8 horas.",
      "Al menos 4 horas.",
      "Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 86,
    "type": "image",
    "question": "En el siguiente espacio, se encuentra permitido detenerse pero no estacionar.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b159.jpg",
    "category": "teorica"
  },
  {
    "id": 87,
    "type": "image",
    "question": "En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?",
    "options": [
      "El vehículo A.",
      "El vehículo B.",
      "Es indistinto."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b107.jpg",
    "category": "teorica"
  },
  {
    "id": 88,
    "type": "image",
    "question": "Si va a detenerse o estacionar en las cercanías de esta esquina, ¿dónde sería correcto hacerlo?",
    "options": [
      "Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores.",
      "Es indistinto siempre que quede la senda peatonal libre, para no obstaculizar el cruce del peatón.",
      "Dentro de la intersección."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b163.jpg",
    "category": "teorica"
  },
  {
    "id": 89,
    "type": "image",
    "question": "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
    "options": [
      "Que no comience a cruzar la calzada.",
      "Si inició el cruce, que lo finalice con mucha precaución.",
      "Ambas respuestas, la A y la B son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b24.jpg",
    "category": "senales"
  },
  {
    "id": 90,
    "type": "image",
    "question": "La señal que se muestra indica un camino sin salida:",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b260.jpg",
    "category": "senales"
  },
  {
    "id": 91,
    "type": "image",
    "question": "¿La autoridad de tránsito puede retener la licencia de conducir al conductor de un vehículo, que no sea colectivo o de emergencia, por encontrarse circulando por este carril?",
    "options": [
      "Sí, ya que constituye una falta de tránsito que amerita esa sanción.",
      "Sólo si perjudica la circulación de los colectivos.",
      "Nunca, ya que la licencia de conducir es un documento personal. Sólo puede labrar un acta de infracción."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b27.jpg",
    "category": "teorica"
  },
  {
    "id": 92,
    "type": "image",
    "question": "Ud. se encuentra frente a la siguiente situación donde el conductor toca repetidamente la bocina, ¿qué debe hacer si se encuentra conduciendo en su proximidad?",
    "options": [
      "Cederle el paso, ya que está indicando que se encuentra en emergencia.",
      "Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico.",
      "Alertar a otros conductores, tocando repetidamente la bocina, que ese vehículo cruzará un semáforo en rojo."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b94.jpg",
    "category": "teorica"
  },
  {
    "id": 93,
    "type": "image",
    "question": "¿Este ciclorodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?",
    "options": [
      "No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida.",
      "Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.",
      "No, sólo pueden circular por vías donde no haya ciclovías."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b16.jpg",
    "category": "teorica"
  },
  {
    "id": 94,
    "type": "text",
    "question": "Circular a mayor velocidad de la precautoria implica que aumenten las posibilidades de que un siniestro vial sea más grave.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 95,
    "type": "text",
    "question": "Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?",
    "options": [
      "Daños materiales, costos sanitarios y administrativos.",
      "Daños materiales y costos sanitarios.",
      "Sólo daños materiales."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 96,
    "type": "image",
    "question": "En la presente situación, el vehículo señalado no se encuentra en infracción si...",
    "options": [
      "Permanece de ese modo, de 2 a 5 minutos.",
      "Permanece de ese modo alrededor de 2 minutos, no abandona el vehículo y además, indica su detención con las balizas.",
      "Es una detención previa a la maniobra de estacionamiento."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b160.jpg",
    "category": "senales"
  },
  {
    "id": 97,
    "type": "text",
    "question": "¿A qué se denomina Movilidad Sustentable?",
    "options": [
      "Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular.",
      "Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida.",
      "Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 98,
    "type": "text",
    "question": "¿En qué ocasiones se permite el uso de la bocina?",
    "options": [
      "Sólo para advertir una situación potencialmente de peligro.",
      "Sólo para advertir de un sobrepaso.",
      "Ambas respuestas, la A y la B, son incorrectas."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 99,
    "type": "text",
    "question": "Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no obstante ello, ¿qué precauciones se deben adoptar?",
    "options": [
      "No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la circulación transversal.",
      "Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya iniciado.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 100,
    "type": "text",
    "question": "Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado, ¿puede afectar esta anomalía la conducción?",
    "options": [
      "No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en la conducción.",
      "Sí, puede afectar al correcto control del vehículo.",
      "No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el contacto adecuado de las ruedas con la calzada."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 101,
    "type": "image",
    "question": "¿Cuál de estas imágenes muestra el uso adecuado del cinturón de seguridad durante el embarazo?",
    "options": [
      "Imagen A.",
      "Imagen B."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b218.jpg",
    "category": "teorica"
  },
  {
    "id": 102,
    "type": "image",
    "question": "¿Para qué sirve esta varilla metálica?",
    "options": [
      "Para comprobar la temperatura del aceite.",
      "Para comprobar el nivel del aceite.",
      "Para comprobar la presión del aceite y del líquido de frenos."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b199.jpg",
    "category": "teorica"
  },
  {
    "id": 103,
    "type": "text",
    "question": "¿En qué parte del vehículo es conveniente poner el equipaje?",
    "options": [
      "Lo más pesado en el fondo del baúl, cerca del centro del auto. Eso ayuda a la estabilidad direccional y al comportamiento en las curvas.",
      "Lo más pesado en el techo del vehículo, sujeto con sogas. Eso ayuda al centro de gravedad.",
      "Lo más pesado en los asientos traseros (si es que se viaja sin ocupantes en esa zona). Eso ayuda a la estabilidad direccional."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 104,
    "type": "text",
    "question": "Los Agentes de Tránsito pueden proceder a la detención de un vehículo únicamente con la presencia de personal policial.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 105,
    "type": "image",
    "question": "Determine qué indica la señal vertical que a continuación se presenta:",
    "options": [
      "Cruce de peatones (Peligro máximo).",
      "Peatones a la izquierda.",
      "Prohibición de circular. Zona exclusiva peatonal."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b238.jpg",
    "category": "senales"
  },
  {
    "id": 106,
    "type": "image",
    "question": "¿Qué vehículos pueden circular por el carril señalizado en la imagen?",
    "options": [
      "Todos los transportes de pasajeros.",
      "Sólo colectivos entre las 07 h y las 21 h.",
      "Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b25.jpg",
    "category": "senales"
  },
  {
    "id": 107,
    "type": "text",
    "question": "En caso de participar de un siniestro vial en una avenida, es recomendable señalizar la zona para que no se produzcan más incidentes viales.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 108,
    "type": "text",
    "question": "Un vehículo con emblema internacional para personas con discapacidad puede ser remitido en algunos casos.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 109,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Proximidad de bosques.",
      "Zonas de palmeras.",
      "Vientos fuertes laterales."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b224.jpg",
    "category": "senales"
  },
  {
    "id": 110,
    "type": "image",
    "question": "¿Qué indica esta demarcación amarilla en la calzada?",
    "options": [
      "Indica que se puede traspasar.",
      "Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.",
      "Que es una zona que se puede circular sobre ella."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b123.jpg",
    "category": "senales"
  },
  {
    "id": 111,
    "type": "text",
    "question": "Una conducción preventiva o anticipada prevé que todos podemos cometer errores, a pesar de conocer la normativa y la concientización gubernamental.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 112,
    "type": "text",
    "question": "Según Ley N° 2148, ¿cuál es la edad mínima permitida para viajar en el asiento delantero de acompañante en un auto?",
    "options": [
      "10 años.",
      "11 años.",
      "12 años."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 113,
    "type": "image",
    "question": "¿Cuál dígito de la siguiente placa de dominio indica el mes en que se debe realizar la Verificación Técnica Vehicular?",
    "options": [
      "El número 1.",
      "La letra D.",
      "El número 3."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b49.jpg",
    "category": "teorica"
  },
  {
    "id": 114,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "Que existe la opción de doblar hacia la derecha.",
      "Que hay un giro obligatorio hacia la derecha.",
      "Que se aproxima una curva peligrosa con inclinación hacia la derecha."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b249.jpg",
    "category": "senales"
  },
  {
    "id": 115,
    "type": "image",
    "question": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
    "options": [
      "Al automóvil.",
      "Al colectivo.",
      "Es indistinto."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b104.jpg",
    "category": "teorica"
  },
  {
    "id": 116,
    "type": "image",
    "question": "De acuerdo al siguiente símbolo, ¿por cuánto tiempo tiene prohibido conducir con más de 0,0 gramos de alcohol por litro de sangre el conductor de este vehículo?",
    "options": [
      "2 años.",
      "1 año.",
      "6 meses."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b54.jpg",
    "category": "senales"
  },
  {
    "id": 117,
    "type": "text",
    "question": "Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?",
    "options": [
      "Donde la delimitación de carriles es de trazo continuo.",
      "En curvas, encrucijadas, pasos a nivel o puentes.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 118,
    "type": "text",
    "question": "La señalización transitoria se encuentra como prioridad normativa sobre los semáforos, si es que modifica el régimen normal de uso de la vía.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 119,
    "type": "text",
    "question": "Durante un siniestro, si el conductor del vehículo no lleva puesto el cinturón de seguridad, el airbag...",
    "options": [
      "Le salvará la vida ya que puede sustituir al cinturón de seguridad.",
      "Evitará que sufra lesiones, siempre y cuando el siniestro se produzca a menos de 80 km/h.",
      "Puede provocar lesiones graves."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 120,
    "type": "image",
    "question": "En estas zonas, está permitido estacionar a partir de los 20 metros para cada lado.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b155.jpg",
    "category": "teorica"
  },
  {
    "id": 121,
    "type": "text",
    "question": "El cansancio puede verse inducido por ingerir:",
    "options": [
      "Bebidas alcohólicas.",
      "Comidas abundantes.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 122,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Cruce ferroviario.",
      "Estación ferroviaria.",
      "Circulación exclusiva (ferrocarril)."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b240.jpg",
    "category": "senales"
  },
  {
    "id": 123,
    "type": "image",
    "question": "Al visualizar esta señal de prevención, usted sabe que:",
    "options": [
      "Se advierte la aproximación de una curva con pendiente ascendente.",
      "Se aproxima una curva cerrada.",
      "Se aproxima un camino sinuoso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b241.jpg",
    "category": "senales"
  },
  {
    "id": 124,
    "type": "image",
    "question": "¿Cuál es la velocidad máxima permitida para automóviles particulares en este tramo de la Av. Costanera Rafael Obligado?",
    "options": [
      "60 km/h.",
      "70 km/h.",
      "40 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b135.jpg",
    "category": "teorica"
  },
  {
    "id": 125,
    "type": "image",
    "question": "¿Con qué se lubrica un motor?",
    "options": [
      "Opción A.",
      "Opción B.",
      "Opción C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b201.jpg",
    "category": "teorica"
  },
  {
    "id": 126,
    "type": "image",
    "question": "¿Qué indica esta señal reglamentaria?",
    "options": [
      "Que el vehículo no puede continuar su marcha sin detenerse.",
      "Presencia de reductor de velocidad.",
      "Comienzo de sentido opuesto de circulación."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b255.jpg",
    "category": "senales"
  },
  {
    "id": 127,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Desvío por cambio de sentido de circulación.",
      "Calzada dividida.",
      "Cruce Peligroso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b262.jpg",
    "category": "senales"
  },
  {
    "id": 128,
    "type": "image",
    "question": "¿Cuál de las siguientes imágenes , por forma y color, corresponde a la señal indicativa de una rotonda o pendiente pronunciada?",
    "options": [
      "Figura A.",
      "Figura B.",
      "Figura C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b87.jpg",
    "category": "senales"
  },
  {
    "id": 129,
    "type": "image",
    "question": "¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?",
    "options": [
      "Al menos, un metro y medio.",
      "Al menos, medio metro.",
      "Lo suficiente para no tocarlo."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b10.jpg",
    "category": "teorica"
  },
  {
    "id": 130,
    "type": "text",
    "question": "De acuerdo a la Ley N° 2148, en encrucijadas sin semáforos, ¿cuál es el orden de prioridad de paso según el tipo de arteria?",
    "options": [
      "1° Pasaje - 2° Calle - 3° Avenida.",
      "1° Avenida - 2° Calle - 3° Pasaje.",
      "Es indistinto, ya que el vehículo que circula por la derecha siempre tiene prioridad."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 131,
    "type": "image",
    "question": "Además de colectivos, ¿quiénes pueden circular por este carril?",
    "options": [
      "Taxis con pasajeros.",
      "Motos.",
      "Ambas respuestas, la A y la B, son incorrectas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b26.jpg",
    "category": "teorica"
  },
  {
    "id": 132,
    "type": "image",
    "question": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
    "options": [
      "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
      "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
      "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b89.jpg",
    "category": "teorica"
  },
  {
    "id": 133,
    "type": "text",
    "question": "Según la Ley N° 2148, un vehículo que no está destinado al servicio de emergencia, en caso de extrema necesidad, ¿puede realizar un servicio similar al que efectúan éstos?",
    "options": [
      "Sí, debiendo advertirlo encendiendo las balizas, empleando la bocina en forma intermitente y agitando un paño.",
      "Sí. El conductor de dicho vehículo deberá sacar un brazo por la ventanilla y agitarlo reiteradamente para indicarle al resto de los usuarios de la vía la situación en la que se encuentra.",
      "No, los servicios de emergencia sólo pueden ser efectuados por los vehículos habilitados para este fin."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 134,
    "type": "text",
    "question": "Según Ley N°2265, ¿Cuándo debe realizar la primer VTV un automóvil 0km radicado en CABA?",
    "options": [
      "Pasados los 3 años de antigüedad, en el mes que le corresponda, o superados los 60.000 km.",
      "Inmediatamente al retirarlo de la agencia.",
      "En el mes que le corresponda, inmediatamente seguido al año transcurrido."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 135,
    "type": "image",
    "question": "¿Por dónde deben circular los ciclistas en esta calle?",
    "options": [
      "No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda.",
      "Cerca del borde derecho de la calzada.",
      "Cerca del borde izquierdo de la calzada."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b11.jpg",
    "category": "teorica"
  },
  {
    "id": 136,
    "type": "image",
    "question": "¿Es seguro conducir con este tipo de calzado?",
    "options": [
      "Es indistinto mientras que no resbalen.",
      "Sólo puede verse afectada la conducción en viajes largos.",
      "No, sólo un calzado sujeto al pie brinda seguridad en la conducción."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b194.jpg",
    "category": "teorica"
  },
  {
    "id": 137,
    "type": "image",
    "question": "¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?",
    "options": [
      "Cruce de Metrobús.",
      "Cruce exclusivo de vehículos de emergencia.",
      "Cruce de bicicletas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b28.jpg",
    "category": "senales"
  },
  {
    "id": 138,
    "type": "text",
    "question": "Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante suyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea continuar en línea recta?",
    "options": [
      "Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores.",
      "Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos retrovisores.",
      "Tocarle bocina para indicarle que debe seguir."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 139,
    "type": "image",
    "question": "¿Qué indica esta señal reglamentaria?",
    "options": [
      "Que sólo está permitido circular en bicicleta a partir de donde se encuentra la señal.",
      "Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal.",
      "Que comienza una ciclovía."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b254.jpg",
    "category": "senales"
  },
  {
    "id": 140,
    "type": "text",
    "question": "La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?",
    "options": [
      "Vehicular y Ambiental.",
      "Humano y Vehicular.",
      "Humano, Vehicular y Ambiental."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 141,
    "type": "text",
    "question": "¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?",
    "options": [
      "Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes.",
      "En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida su circulación.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 142,
    "type": "text",
    "question": "¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
    "options": [
      "Reducir la contaminación y mejorar la calidad del medio ambiente.",
      "Garantizar el cumplimiento de las normas de seguridad de los vehículos.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 143,
    "type": "text",
    "question": "Según la Ley Nacional N° 24.449, ¿cuál es la velocidad máxima permitida para automóviles particulares en semiautopistas?",
    "options": [
      "130 km/h.",
      "120 km/h.",
      "110 km/h."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 144,
    "type": "text",
    "question": "¿Cuánto dura en su totalidad la condición de principiante?",
    "options": [
      "2 años, sólo en el caso de los menores de 21 años de edad.",
      "6 meses, sólo para quien la tramita por primera vez.",
      "2 años, independientemente a la edad."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 145,
    "type": "text",
    "question": "En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
    "options": [
      "Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción.",
      "Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
      "Que ha actuado no conforme a las exigencias de la Ley."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 146,
    "type": "text",
    "question": "En un cruce sin semáforos, un vehículo que se encuentra circulando por una avenida doble mano, tiene permitido girar a su izquierda para tomar una calle de único sentido.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 147,
    "type": "image",
    "question": "En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de carril?",
    "options": [
      "El vehículo que circula por el carril que se pretende ocupar.",
      "El vehículo que realiza el cambio de carril.",
      "El vehículo del carril más lento."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b114.jpg",
    "category": "teorica"
  },
  {
    "id": 148,
    "type": "image",
    "question": "¿Cuál es la correcta posición del uso de la banda inferior del cinturón de seguridad de tres puntas?",
    "options": [
      "Opción A.",
      "Opción B.",
      "Ambas opciones, A y B, son correctas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b220.jpg",
    "category": "teorica"
  },
  {
    "id": 149,
    "type": "image",
    "question": "En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?",
    "options": [
      "El vehículo A.",
      "El vehículo B.",
      "El vehículo C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b119.jpg",
    "category": "teorica"
  },
  {
    "id": 150,
    "type": "image",
    "question": "En caso de un siniestro vial o desperfecto mecánico, ¿qué es recomendable hacer cuando el vehículo queda inmovilizado en el sector señalado?",
    "options": [
      "Encender las luces intermitentes, colocar las balizas portátiles y llamar al número de emergencia de la Autopista.",
      "Descender del vehículo usando un chaleco reflectante y ponerse a resguardo detrás de una defensa si las hubiere.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b45.jpg",
    "category": "senales"
  },
  {
    "id": 151,
    "type": "text",
    "question": "¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
    "options": [
      "Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).",
      "Sólo las drogas ilegales.",
      "Todo tipo de drogas (las legales e ilegales)."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 152,
    "type": "image",
    "question": "¿Cuál de estas señales indica “Cruce de Peatones (máximo peligro)”?",
    "options": [
      "La señal A.",
      "La señal B.",
      "La señal C."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b239.jpg",
    "category": "senales"
  },
  {
    "id": 153,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Estrechamiento (en una mano).",
      "Calzada dividida.",
      "Estrechamiento (en las dos manos)."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b237.jpg",
    "category": "senales"
  },
  {
    "id": 154,
    "type": "text",
    "question": "¿A qué se denomina conducción eficiente?",
    "options": [
      "A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible.",
      "A una conducción que logre llegar a destino en el menor tiempo posible.",
      "A una conducción que mantenga durante todo el trayecto la misma velocidad."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 155,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "Prohibición de detenerse en las inmediaciones a la plaza.",
      "Prohibición de estacionar en las inmediaciones a la plaza.",
      "Existencia de una plaza, en las inmediaciones."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b271.jpg",
    "category": "senales"
  },
  {
    "id": 156,
    "type": "text",
    "question": "En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?",
    "options": [
      "No, porque es un documento personal.",
      "Sólo en los casos que la normativa vigente así lo indique.",
      "Sólo en casos de incidentes que involucren a terceros."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 157,
    "type": "text",
    "question": "Según la Ley N° 2148, ¿cuál es el límite superior de la velocidad precautoria en un paso nivel?",
    "options": [
      "20 kilómetros por hora.",
      "40 kilómetros por hora.",
      "30 kilómetros por hora."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 158,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Niños jugando.",
      "Zona escolar.",
      "Calle peatonal."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b235.jpg",
    "category": "senales"
  },
  {
    "id": 159,
    "type": "text",
    "question": "El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 160,
    "type": "text",
    "question": "¿Cuáles son las señales preventivas?",
    "options": [
      "Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
      "Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la vía. Identifican, orientan y hacen referencia a servicios, lugares, etc.",
      "Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 161,
    "type": "image",
    "question": "¿Qué indica esta señal reglamentaria?",
    "options": [
      "Indica que el carril sobre el que se encuentra la señal, no puede ser utilizado por motocicletas y ciclomotores.",
      "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores.",
      "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para bicicletas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b257.jpg",
    "category": "senales"
  },
  {
    "id": 162,
    "type": "image",
    "question": "Esta señal vertical reglamentaria indica…",
    "options": [
      "Que es un carril preferencial para ciclistas.",
      "Que es un carril de uso exclusivo para ciclistas.",
      "Que los ciclistas no pueden circular por este carril."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b253.jpg",
    "category": "senales"
  },
  {
    "id": 163,
    "type": "image",
    "question": "La señal representada precede a una intersección con la OBLIGACIÓN de girar a la derecha.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b250.jpg",
    "category": "senales"
  },
  {
    "id": 164,
    "type": "image",
    "question": "El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene prioridad?",
    "options": [
      "El vehículo A.",
      "El vehículo B."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b113.jpg",
    "category": "teorica"
  },
  {
    "id": 165,
    "type": "image",
    "question": "En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede producir encandilamiento?",
    "options": [
      "Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.",
      "No, porque este efecto se produce sólo por el uso de la luz alta.",
      "No, porque este efecto se produce en rutas con poca iluminación."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b186.jpg",
    "category": "senales"
  },
  {
    "id": 166,
    "type": "image",
    "question": "La siguiente imagen corresponde a:",
    "options": [
      "Calle Prioridad Peatón.",
      "Calle con Intervención Peatonal.",
      "Calle con Bicisenda."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b33.jpg",
    "category": "teorica"
  },
  {
    "id": 167,
    "type": "image",
    "question": "¿Cuál de las siguientes imágenes muestra una ciclovía?",
    "options": [
      "Opción A.",
      "Opción B.",
      "Opción C."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b42.jpg",
    "category": "teorica"
  },
  {
    "id": 168,
    "type": "image",
    "question": "¿Cuál de estas señales comunica “Prevención”?",
    "options": [
      "La señal A.",
      "La señal B.",
      "La señal C."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b82.jpg",
    "category": "senales"
  },
  {
    "id": 169,
    "type": "image",
    "question": "En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?",
    "options": [
      "Sí, salvo que se acerque un vehículo en el sentido contrario.",
      "No, ya que está prohibido por la demarcación horizontal.",
      "Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido contrario está lejos."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b111.jpg",
    "category": "teorica"
  },
  {
    "id": 170,
    "type": "text",
    "question": "Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar el sobrepaso?",
    "options": [
      "El que lo intente primero.",
      "El último de la fila.",
      "El que circula más próximo al vehículo que se desea sobrepasar."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 171,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Senda peatonal.",
      "Personas trabajando.",
      "Cruce peatonal de máximo peligro."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b222.jpg",
    "category": "senales"
  },
  {
    "id": 172,
    "type": "text",
    "question": "Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?",
    "options": [
      "Eventuales daños causados a terceros transportados únicamente.",
      "Eventuales daños causados a terceros transportados o no.",
      "Daños causados a los vehículos únicamente."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 173,
    "type": "image",
    "question": "¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
    "options": [
      "Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.",
      "Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b18.jpg",
    "category": "teorica"
  },
  {
    "id": 174,
    "type": "image",
    "question": "Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?",
    "options": [
      "No, ya que no hay otros vehículos junto a él.",
      "Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto.",
      "No, ya que el vehículo no está en movimiento."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b57.jpg",
    "category": "teorica"
  },
  {
    "id": 175,
    "type": "text",
    "question": "Según la Ley N°2148, ¿qué significa el término sobrepaso?",
    "options": [
      "Sobrepasar la línea de otro vehículo en circulación, sin necesidad de cambiar de carril.",
      "Sobrepasar la línea de otro vehículo en circulación, cambiando de carril.",
      "Exceder el límite de velocidad máxima."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 176,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "Permitido girar hacia la izquierda.",
      "Dirección obligatoria hacia la izquierda.",
      "Dirección permitida hacia la izquierda."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b265.jpg",
    "category": "senales"
  },
  {
    "id": 177,
    "type": "text",
    "question": "¿Quién tiene prioridad de paso en una rotonda?",
    "options": [
      "El vehículo que circule por la derecha.",
      "El vehículo que pretende acceder a la rotonda.",
      "El vehículo que se encuentra dentro de la calzada circular."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 178,
    "type": "text",
    "question": "Es obligatorio al finalizar un adelantamiento...",
    "options": [
      "Permanecer en el carril ocupado, independientemente de la fluidez del tránsito.",
      "Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito.",
      "Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar su velocidad."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 179,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Encrucijada.",
      "Cruce de caminos.",
      "Incorporación de tránsito lateral."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b231.jpg",
    "category": "senales"
  },
  {
    "id": 180,
    "type": "image",
    "question": "¿Qué indica el uso de este tipo de luces?",
    "options": [
      "Cuando se utilizan por separado sirven para preanunciar maniobras.",
      "Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se está por detener.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b170.jpg",
    "category": "senales"
  },
  {
    "id": 181,
    "type": "text",
    "question": "Por lo general, las fallas mecánicas se deben a conductas negligentes por parte de los propietarios de los vehículos, que no se ocupan de la verificación del estado de su automóvil",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 182,
    "type": "text",
    "question": "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?",
    "options": [
      "Que el vehículo tiene un desperfecto.",
      "Que se encuentra en emergencia, transportando a una persona en grave estado de salud.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 183,
    "type": "text",
    "question": "“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?",
    "options": [
      "No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo.",
      "No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.",
      "Sí, porque se está obligado a no causar peligro ni entorpecer la circulación."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 184,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Cruce Ferroviario (por la derecha).",
      "Prohibición de Girar.",
      "Panel de Prevención (Curva)."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b245.jpg",
    "category": "senales"
  },
  {
    "id": 185,
    "type": "image",
    "question": "En esta intersección sin semáforos, donde el conductor del vehículo realiza un giro a la derecha, ¿quién tiene prioridad de paso?",
    "options": [
      "El automóvil, porque circula por la mano derecha.",
      "El ciclista, porque el automóvil pierde la prioridad al querer girar.",
      "El ciclista, porque al circular por la ciclovía siempre tiene prioridad."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b95.jpg",
    "category": "senales"
  },
  {
    "id": 186,
    "type": "text",
    "question": "Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su maniobra utilizando la luz de giro correspondiente por lo menos...",
    "options": [
      "20 metros antes de realizar la maniobra.",
      "10 metros antes de realizar la maniobra.",
      "30 metros antes de realizar la maniobra."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 187,
    "type": "image",
    "question": "¿Qué indica esta demarcación amarilla en la calzada?",
    "options": [
      "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
      "Que se debe circular lentamente por su sector central.",
      "Que no se debe circular sobre ella."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b76.jpg",
    "category": "senales"
  },
  {
    "id": 188,
    "type": "image",
    "question": "En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?",
    "options": [
      "Debería circular a la mitad de la velocidad máxima establecida por Ley.",
      "Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación.",
      "Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que circula."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b179.jpg",
    "category": "teorica"
  },
  {
    "id": 189,
    "type": "image",
    "question": "Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?",
    "options": [
      "Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.",
      "Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren.",
      "Se indica al resto de los conductores, la precaución sobre la aproximación de trenes, colocando balizas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b147.jpg",
    "category": "senales"
  },
  {
    "id": 190,
    "type": "image",
    "question": "De acuerdo a la Ley N° 2148, ¿está permitido realizar este giro?",
    "options": [
      "No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra.",
      "Sí, ya que el semáforo está en verde.",
      "No, ya que es una vía de doble sentido de circulación."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b128.jpg",
    "category": "teorica"
  },
  {
    "id": 191,
    "type": "image",
    "question": "Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría estar indicando el conductor?",
    "options": [
      "Que el vehículo circula lentamente.",
      "Que el vehículo próximamente ingresará a un garage o se detendrá.",
      "Que el vehículo realizará un giro en la próxima intersección."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b169.jpg",
    "category": "senales"
  },
  {
    "id": 192,
    "type": "image",
    "question": "¿Todos los ocupantes del vehículo viajan de manera correcta?",
    "options": [
      "Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo al conductor.",
      "Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo a las personas que se trasladen en los asientos delanteros.",
      "No, porque la obligación del uso del cinturón de seguridad es para todas las personas transportadas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b217.jpg",
    "category": "teorica"
  },
  {
    "id": 193,
    "type": "image",
    "question": "Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es detenerse en la banquina?",
    "options": [
      "Sí, cuando el banco de niebla es muy denso.",
      "Sí, siempre y cuando se coloquen las luces altas para ser más visibles.",
      "No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b191.jpg",
    "category": "teorica"
  },
  {
    "id": 194,
    "type": "image",
    "question": "Con respecto al consumo de combustible, ¿qué consecuencias trae circular de la siguiente forma?",
    "options": [
      "Aumenta el consumo de combustible porque el vehículo se vuelve más ligero.",
      "Incrementa la resistencia del viento y con ello, aumenta el consumo de combustible.",
      "Es indistinto donde se ubique la carga, no afecta al consumo de combustible."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b200.jpg",
    "category": "teorica"
  },
  {
    "id": 195,
    "type": "text",
    "question": "Los excesos de velocidad...",
    "options": [
      "En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los vehículos.",
      "Son responsables de la mayoría de los incidentes solamente en vías de doble sentido.",
      "Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 196,
    "type": "image",
    "question": "El vehículo señalado con un círculo rojo, ¿circula correctamente?",
    "options": [
      "Sí, porque en esta vía las luces deben estar encendidas.",
      "Sí, ya que mantiene una distancia prudencial respecto del resto de los vehículos.",
      "No, dado que está circulando por la banquina."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b124.jpg",
    "category": "senales"
  },
  {
    "id": 197,
    "type": "text",
    "question": "¿Qué se entiende por habitáculo?",
    "options": [
      "Al espacio a ser ocupado por el conductor y los pasajeros.",
      "Al lugar en el cual se transporta el equipaje (Baúl).",
      "Comprende a todo el vehículo en general."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 198,
    "type": "text",
    "question": "¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?",
    "options": [
      "El que firmó la autorización para obtener la licencia.",
      "El que lo acompaña.",
      "El que le autorizó el uso del vehículo."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 199,
    "type": "text",
    "question": "¿De qué se trata el “Programa Visión Cero” creado en 1997 en Suecia?",
    "options": [
      "Principio ético que establece que no debería existir ningún vehículo particular circulando por calles, ni avenidas urbanas; ya que son los causantes de las víctimas fatales en siniestros de tránsito.",
      "Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.",
      "Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 200,
    "type": "text",
    "question": "Frente a un control de tránsito en CABA, si la autoridad realiza una infracción ante una falta cometida por un conductor, ¿dónde puede efectuarse el pago de la multa por dicha infracción",
    "options": [
      "En ese mismo momento y ante la Autoridad de Control si ésta lo requiere.",
      "Ante la oficina de la Dirección General de Administración de Infracciones que corresponda.",
      "Ambas respuestas, la A y B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 201,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Cruce Ferroviario (Más de dos vías).",
      "Estación Ferroviaria.",
      "Atención a Ferrocarril."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b242.jpg",
    "category": "senales"
  },
  {
    "id": 202,
    "type": "image",
    "question": "¿Cuál es el nivel máximo de alcoholemia admitido para el conductor del vehículo que se visualiza en la imagen?",
    "options": [
      "0,5 gramos de alcohol por litro de sangre.",
      "0,0 gramos de alcohol por litro de sangre.",
      "0,2 gramos de alcohol por litro de sangre."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b56.jpg",
    "category": "teorica"
  },
  {
    "id": 203,
    "type": "text",
    "question": "¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
    "options": [
      "La sensación de euforia.",
      "La visión borrosa y el aumento del número y duración de parpadeos.",
      "No realizar movimientos en el asiento, ni cambios de postura."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 204,
    "type": "image",
    "question": "Esta señal advierte que en el lugar ocurrió un siniestro vial que produjo una víctima fatal.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b266.jpg",
    "category": "senales"
  },
  {
    "id": 205,
    "type": "text",
    "question": "Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?",
    "options": [
      "No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
      "Sí, porque al mojarse pueden no funcionar eficazmente.",
      "No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada resbaladiza."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 206,
    "type": "text",
    "question": "En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?",
    "options": [
      "Sí, cuando no haya señal que lo prohíba.",
      "No, ya que está prohibido por normativa.",
      "Sí, si hay suficiente visibilidad."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 207,
    "type": "text",
    "question": "¿Qué se conoce como velocidad precautoria?",
    "options": [
      "A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo.",
      "La circulación a la velocidad mínima establecida para una vía.",
      "La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 208,
    "type": "text",
    "question": "¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión con el conductor o con otra persona de la vía pública?",
    "options": [
      "Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya que la tensión evita la somnolencia.",
      "Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.",
      "No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 209,
    "type": "image",
    "question": "¿Es correcta la manera en que utiliza el Sistema de Retención Infantil (SRI) esta niña?",
    "options": [
      "Sí, ya que se encuentra sentada en un SRI, en el asiento trasero.",
      "No, ya que la niña debería ubicarse “a contra marcha” para reducir el efecto “latigazo”.",
      "No, ya que la niña no utiliza el cinturón de seguridad del SRI."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b213.jpg",
    "category": "teorica"
  },
  {
    "id": 210,
    "type": "image",
    "question": "¿Se está habilitado a detener un vehículo en este lugar?",
    "options": [
      "Sí, siempre y cuando no entorpezca la circulación.",
      "No, está prohibido estacionar y detenerse por normativa.",
      "Si, a menos que haya una señal que lo prohíba expresamente."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b168.jpg",
    "category": "teorica"
  },
  {
    "id": 211,
    "type": "image",
    "question": "Los ocupantes de este vehículo ¿viajan de manera segura?",
    "options": [
      "Sí, ya que las personas se encuentran con cinturón de seguridad.",
      "No, ya que por normativa no está permitido trasladar mascotas en un automóvil particular.",
      "No, ya que las mascotas deben ser transportadas en los asientos traseros sujetos con arnés o sistema de retención correspondiente."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b221.jpg",
    "category": "teorica"
  },
  {
    "id": 212,
    "type": "text",
    "question": "Como norma general, en una arteria de doble circulación, con pendiente pronunciada y con un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la prioridad de paso?",
    "options": [
      "El vehículo que desciende.",
      "El vehículo que asciende.",
      "No hay prioridad, cualquiera de ellos."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 213,
    "type": "image",
    "question": "¿En qué mes del año debe realizar la Verificación Técnica Vehicular el vehículo que porte esta placa de dominio?",
    "options": [
      "Enero.",
      "Julio.",
      "Diciembre."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b51.jpg",
    "category": "teorica"
  },
  {
    "id": 214,
    "type": "text",
    "question": "Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
    "options": [
      "Comienza a disminuir de forma inmediata.",
      "Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.",
      "Se mantiene en el mismo valor durante 1 hora y luego comienza a descender."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 215,
    "type": "image",
    "question": "El siguiente símbolo indica que se trata de un carril que debe ser liberado cuando se aproxima un vehículo en emergencia.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b90.jpg",
    "category": "senales"
  },
  {
    "id": 216,
    "type": "image",
    "question": "¿Se encuentra prohibida la acción de la persona señalada con el círculo rojo?",
    "options": [
      "Sí, porque se encuentra en el asiento delantero.",
      "No, porque la prohibición del uso de telefonía celular alcanza sólo al conductor del vehículo.",
      "Sí, su uso se encuentra prohibido para todos los ocupantes del vehículo."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b61.jpg",
    "category": "senales"
  },
  {
    "id": 217,
    "type": "text",
    "question": "Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
    "options": [
      "30 días corridos desde su vencimiento.",
      "Hasta las 00 horas del día de cumpleaños.",
      "No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 218,
    "type": "text",
    "question": "El carril de sobrepaso en una autopista sirve para...",
    "options": [
      "Circular por él cuando a la derecha existe otro carril disponible.",
      "Circular por él siempre que se conduzca a la mayor velocidad permitida.",
      "Realizar maniobras de sobrepaso."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 219,
    "type": "image",
    "question": "¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de estar próximo a una zona afectada por obras?",
    "options": [
      "Figura A.",
      "Figura B.",
      "Figura C."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b88.jpg",
    "category": "senales"
  },
  {
    "id": 220,
    "type": "text",
    "question": "¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de una esquina?",
    "options": [
      "La línea peatonal.",
      "La línea imaginaria de prolongación de ochava.",
      "La línea de edificación transversal."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 221,
    "type": "image",
    "question": "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
    "options": [
      "Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.",
      "Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo.",
      "No debe traspasarse ninguna de ellas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b122.jpg",
    "category": "senales"
  },
  {
    "id": 222,
    "type": "image",
    "question": "El auto señalizado con un círculo rojo, ¿tiene permitido girar a la derecha en el próximo cruce?",
    "options": [
      "Sí, siempre que señalice la maniobra con anticipación.",
      "No, ya que para realizarlo debería invadir los carriles exclusivos.",
      "Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b30.jpg",
    "category": "senales"
  },
  {
    "id": 223,
    "type": "text",
    "question": "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
    "options": [
      "Todos los medicamentos, de venta libre, que no necesitan receta.",
      "Todos los medicamentos con efectos sedantes.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 224,
    "type": "image",
    "question": "¿Cuál de estas señales es una señal reglamentaria?",
    "options": [
      "La señal A.",
      "La señal B.",
      "La señal C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b84.jpg",
    "category": "senales"
  },
  {
    "id": 225,
    "type": "text",
    "question": "Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
    "options": [
      "Se la puede solicitar en cualquier establecimiento comercial que la realice.",
      "Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 226,
    "type": "image",
    "question": "¿Se puede traspasar la siguiente señal horizontal?",
    "options": [
      "Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.",
      "Sólo cuando la vía tiene dos carriles por sentido de circulación.",
      "No, porque indica prohibición de sobrepaso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b120.jpg",
    "category": "senales"
  },
  {
    "id": 227,
    "type": "image",
    "question": "¿Está permitido estacionar una bicicleta en este lugar?",
    "options": [
      "No, los estacionamientos son exclusivos para usuarios de autos y motos.",
      "Sólo en algunos estacionamientos está permitido.",
      "Sí, los estacionamientos están obligados a destinar un espacio para bicicletas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b9.jpg",
    "category": "teorica"
  },
  {
    "id": 228,
    "type": "image",
    "question": "¿Cuáles de las siguientes acciones son consideradas factores de distracción cuando se conduce un vehículo?",
    "options": [
      "Las opciones A, B y C.",
      "Las opciones A y C.",
      "Las opciones B y C."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b65.jpg",
    "category": "teorica"
  },
  {
    "id": 229,
    "type": "image",
    "question": "¿Qué indica la demarcación horizontal que se visualiza en la imagen?",
    "options": [
      "Estacionamiento para micros escolares.",
      "Carril de detención para el ascenso y descenso de escolares.",
      "Zona de ascenso y descenso de pasajeros de transporte público."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b32.jpg",
    "category": "senales"
  },
  {
    "id": 230,
    "type": "text",
    "question": "Los objetos sueltos como lentes, celular, llaves o similares resultan muy peligrosos en caso de incidentes o maniobras bruscas, porque pueden ocasionar una lesión grave producto de la energía cinética que poseen.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 231,
    "type": "text",
    "question": "El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?",
    "options": [
      "Con la luz de giro hacia el lado donde se irá a ingresar.",
      "Con la luz de giro hacia el lado opuesto donde se irá a ingresar.",
      "Con las luces intermitentes (balizas)."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 232,
    "type": "text",
    "question": "Según la Ley N° 2148, ¿cuál es la velocidad precautoria frente a establecimientos escolares durante los horarios de ingreso y egreso?",
    "options": [
      "Es de 20 km/h para todas las arterias.",
      "No más de 30 km/h en calles y de 45 km/h en avenidas.",
      "Es igual a la mínima establecida para el tipo de arteria correspondiente."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 233,
    "type": "image",
    "question": "Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?",
    "options": [
      "Esquivar a la peatona y tocarle bocina para que no se distraiga.",
      "Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b19.jpg",
    "category": "teorica"
  },
  {
    "id": 234,
    "type": "text",
    "question": "En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
    "options": [
      "24 horas.",
      "48 horas.",
      "72 horas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 235,
    "type": "image",
    "question": "Según las normas generales, ¿cuál es la velocidad máxima permitida para un automóvil particular en esta avenida?",
    "options": [
      "40 km/h.",
      "70 km/h.",
      "60 km/h."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b132.jpg",
    "category": "teorica"
  },
  {
    "id": 236,
    "type": "image",
    "question": "La acción que realiza el conductor en la imagen es riesgosa para la conducción.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b64.jpg",
    "category": "teorica"
  },
  {
    "id": 237,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Aproximación a un puente levadizo, rotatorio o flotante.",
      "Presencia de un puente de menor ancho que el resto de la vía.",
      "Proximidad de un paso a nivel."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b227.jpg",
    "category": "senales"
  },
  {
    "id": 238,
    "type": "image",
    "question": "¿Qué indica esta señal preventiva?",
    "options": [
      "Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada.",
      "Indica que circulamos por una zona selvática.",
      "Indica que por la vía en la que se circula, la calzada presenta irregularidades."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b234.jpg",
    "category": "senales"
  },
  {
    "id": 239,
    "type": "text",
    "question": "La niebla, como factor de riesgo, produce modificaciones en…",
    "options": [
      "El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas.",
      "El campo visual del conductor y la capacidad lumínica del vehículo.",
      "Sólo afecta la capacidad lumínica del vehículo."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 240,
    "type": "image",
    "question": "Si al circular se presenta la siguiente situación, ¿cuál es la acción que se recomienda realizar?",
    "options": [
      "Frenar inmediatamente.",
      "Desacelerar rápidamente y frenar.",
      "Desacelerar lentamente y sujetar el volante."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b204.jpg",
    "category": "teorica"
  },
  {
    "id": 241,
    "type": "text",
    "question": "Circular con la luz alta encendida está prohibido en zonas urbanas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 242,
    "type": "text",
    "question": "Según el Sistema de Evaluación Permanente de Conductores (Scoring), ¿cuántos puntos se otorgan al conductor que obtiene la licencia de conducir por primera vez?",
    "options": [
      "10 puntos.",
      "20 puntos.",
      "5 puntos."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 243,
    "type": "image",
    "question": "El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en línea recta, de modo que:",
    "options": [
      "Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y efectuar el giro.",
      "Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado.",
      "Ambas respuestas, A y B, son incorrectas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b129.jpg",
    "category": "teorica"
  },
  {
    "id": 244,
    "type": "text",
    "question": "¿Qué consecuencias tiene conducir habiendo dormido pocas horas previamente?",
    "options": [
      "Reduce la capacidad de reacción y el estado de alerta.",
      "Predispone a tomar malas decisiones, poniendo en riesgo la vida.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 245,
    "type": "image",
    "question": "Como conductor, ¿qué debe realizar frente a la siguiente situación?",
    "options": [
      "Avanzar porque la luz verde del semáforo lo habilita.",
      "Detenerse y esperar a la indicación del agente de tránsito para avanzar.",
      "Avanzar sólo si no pasan vehículos en la intersección."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b67.jpg",
    "category": "teorica"
  },
  {
    "id": 246,
    "type": "text",
    "question": "El sistema de luces que posee un vehículo, además de iluminar, brinda información que permite la comunicación entre vehículos y también peatones.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 247,
    "type": "image",
    "question": "¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?",
    "options": [
      "Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en posición de estacionamiento en el caso de tener caja automática.",
      "Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática.",
      "Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento en el caso de tener caja automática."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b167.jpg",
    "category": "teorica"
  },
  {
    "id": 248,
    "type": "image",
    "question": "¿Este vehículo se encuentra bien estacionado?",
    "options": [
      "Sí. Al no estar el cordón pintado de amarillo, está habilitado a estacionarse y detenerse.",
      "Sí. Al no estar el cordón pintado de rojo, está habilitado a estacionarse pero no a detenerse.",
      "No, porque debería estar más alejado del cordón (a 20 cm de él)."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b165.jpg",
    "category": "teorica"
  },
  {
    "id": 249,
    "type": "text",
    "question": "Es obligatoria la circulación con luces bajas encendidas las 24 horas en...",
    "options": [
      "Todas las autopistas.",
      "Avenida Gral. Paz, Lugones e Intendente Cantilo.",
      "Ambas respuestas, la A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 250,
    "type": "image",
    "question": "¿Cómo se define el efecto que ocurre en la siguiente imagen?",
    "options": [
      "Aquaplaning.",
      "Off tracking."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b180.jpg",
    "category": "teorica"
  },
  {
    "id": 251,
    "type": "image",
    "question": "¿Cuál es la velocidad máxima permitida para automóviles particulares en este tramo de la Av. Gral Roca, por encontrarse cerca de un establecimiento escolar?",
    "options": [
      "30 km/h.",
      "40 km/h.",
      "60 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b140.jpg",
    "category": "teorica"
  },
  {
    "id": 252,
    "type": "text",
    "question": "¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?",
    "options": [
      "Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y brindar su colaboración para evitar mayores daños para la circulación.",
      "Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro obligatorio a los demás siniestrados y a la autoridad interviniente.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 253,
    "type": "text",
    "question": "Según la Ley Nacional N º 24.449, en carácter general, ¿cuál es la velocidad mínima permitida en las semiautopistas?",
    "options": [
      "40 km/h.",
      "50 km/h.",
      "60 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 254,
    "type": "image",
    "question": "Cuando conduce bajo esta condición climática, ¿a cuánto se debe incrementar la regla de 2 segundos en la distancia de seguridad?",
    "options": [
      "A 4 segundos.",
      "A 3 segundos.",
      "A 5 segundos."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b184.jpg",
    "category": "teorica"
  },
  {
    "id": 255,
    "type": "image",
    "question": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:",
    "options": [
      "Opción A.",
      "Opción B.",
      "Opción C."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b2.jpg",
    "category": "teorica"
  },
  {
    "id": 256,
    "type": "text",
    "question": "Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?",
    "options": [
      "Sí.",
      "No, solamente afecta a la capacidad motora.",
      "Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 257,
    "type": "image",
    "question": "La acción que se presenta en la imagen es considerada riesgosa para la conducción de un vehículo.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b63.jpg",
    "category": "teorica"
  },
  {
    "id": 258,
    "type": "image",
    "question": "¿En qué mes del año debe realizar la Verificación Técnica Vehicular el vehículo que porte esta placa de dominio?",
    "options": [
      "Enero.",
      "Febrero.",
      "Marzo."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b50.jpg",
    "category": "teorica"
  },
  {
    "id": 259,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "Existencia de un teatro, en las inmediaciones.",
      "Prohibición de estacionar en la puerta de un teatro.",
      "Prohibición de detenerse en la puerta de un teatro."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b269.jpg",
    "category": "senales"
  },
  {
    "id": 260,
    "type": "text",
    "question": "Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?",
    "options": [
      "Circular por la banquina.",
      "Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 261,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Inicio de doble mano.",
      "Encrucijada (bifurcación).",
      "Estrechamiento (en una sola mano)."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b229.jpg",
    "category": "senales"
  },
  {
    "id": 262,
    "type": "image",
    "question": "En el caso de que un vehículo quede inmovilizado por un siniestro vial o desperfecto mecánico en los carriles marcados de esta vía, ¿qué es recomendable hacer?",
    "options": [
      "Colocar las balizas portátiles, ponerse a resguardo detrás de una defensa si las hubiere y llamar al número de emergencia de la Autopista.",
      "Descender del vehículo usando un chaleco reflectante para hacer señas al resto de los vehículos y llamar al número de emergencia de la Autopista.",
      "Permanecer dentro del vehículo con el cinturón de seguridad abrochado, encender las balizas y llamar al número de emergencia de la Autopista."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b44.jpg",
    "category": "teorica"
  },
  {
    "id": 263,
    "type": "image",
    "question": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
    "options": [
      "El vehículo A.",
      "El vehículo B."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b99.jpg",
    "category": "teorica"
  },
  {
    "id": 264,
    "type": "image",
    "question": "Indique qué representa la siguiente señal:",
    "options": [
      "Dirección obligatoria en ambos sentidos.",
      "Dirección permitida en ambos sentidos.",
      "Giros permitidos."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b261.jpg",
    "category": "senales"
  },
  {
    "id": 265,
    "type": "text",
    "question": "Circular por debajo del límite mínimo de velocidad puede causar incidentes.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 266,
    "type": "image",
    "question": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
    "options": [
      "40 km/h.",
      "20 km/h.",
      "30 km/h."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b138.jpg",
    "category": "teorica"
  },
  {
    "id": 267,
    "type": "image",
    "question": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
    "options": [
      "Ambos hacia su derecha.",
      "El único que debería apartarse es el auto 2 hacia su derecha.",
      "El auto 1 hacia su izquierda y el 2 hacia su derecha."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b91.jpg",
    "category": "teorica"
  },
  {
    "id": 268,
    "type": "text",
    "question": "¿Cuál es la correcta presión de los neumáticos de un automóvil particular?",
    "options": [
      "28 lbs.",
      "La que indique el manual del usuario de ese automóvil.",
      "30 lbs."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 269,
    "type": "text",
    "question": "Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?",
    "options": [
      "Sí, ya que se presume el estado de alcoholemia positiva.",
      "Sí, deberá ordenar la remoción del vehículo.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 270,
    "type": "text",
    "question": "Cuando un conductor realiza marcha atrás, ¿qué distancia puede recorrer?",
    "options": [
      "No debe superar la mitad de una cuadra.\\t",
      "No más de 20 metros.",
      "El recorrido mínimo e indispensable, siempre que se trate de una maniobra de estacionamiento."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 271,
    "type": "image",
    "question": "En esta situación, ¿es correcto que el vehículo avance?",
    "options": [
      "Sí, porque por allí no circulan peatones y no hay peligro.",
      "No, porque aún hay peatones cruzando de un lado al otro de la arteria.",
      "Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b17.jpg",
    "category": "teorica"
  },
  {
    "id": 272,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Estrechamiento (en las dos manos).",
      "Calzada dividida.",
      "Inicio doble mano."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b236.jpg",
    "category": "senales"
  },
  {
    "id": 273,
    "type": "image",
    "question": "La señal que está presente en la imagen corresponde a las informativas que orientan al peatón.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b37.jpg",
    "category": "senales"
  },
  {
    "id": 274,
    "type": "text",
    "question": "A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?",
    "options": [
      "Al estado del pavimento y al clima, en especial.",
      "A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.",
      "Ninguna de las anteriores."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 275,
    "type": "text",
    "question": "¿Qué debe hacer usted si su vehículo queda inmovilizado en un túnel?",
    "options": [
      "Dejar el vehículo cerrado y salir del túnel cuanto antes.",
      "Apagar todas las luces si el túnel está iluminado y solicitar auxilio a través del teléfono móvil.",
      "Apagar el motor, colocar las balizas portátiles, mantener encendidas las luces de posición e intermitentes y llamar al número de asistencia."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 276,
    "type": "text",
    "question": "La circulación de un vehículo de dos ruedas suele ser más riesgosa porque...",
    "options": [
      "Puede circular a más velocidad que los automóviles.",
      "La posición del conductor es más elevada que en un automóvil.",
      "Por su tamaño, es menos visible."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 277,
    "type": "text",
    "question": "¿A qué se denomina “tiempo de reacción”?",
    "options": [
      "Al tiempo que pasa desde que se empieza una maniobra hasta que se termina.",
      "Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular.",
      "Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 278,
    "type": "image",
    "question": "Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor?",
    "options": [
      "Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.",
      "Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha.",
      "Ambas respuestas, la A y la B, son incorrectas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b21.jpg",
    "category": "teorica"
  },
  {
    "id": 279,
    "type": "image",
    "question": "Según la Ley N° 2148, ¿qué indica un cordón pintado de este color?",
    "options": [
      "Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos.",
      "Lugar reservado para ascenso y descenso de pasajeros.",
      "Zona exclusiva para carga y descarga de mercaderías."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b80.jpg",
    "category": "teorica"
  },
  {
    "id": 280,
    "type": "image",
    "question": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
    "options": [
      "Al vehículo A, ya que circula por la derecha.",
      "Al vehículo B, ya que circula por una avenida.",
      "Es indistinto."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b106.jpg",
    "category": "teorica"
  },
  {
    "id": 281,
    "type": "image",
    "question": "Este elemento de seguridad pasiva sirve para reducir el daño producido a los ocupantes de un vehículo al momento de un siniestro.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b208.jpg",
    "category": "teorica"
  },
  {
    "id": 282,
    "type": "image",
    "question": "Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?",
    "options": [
      "Las luces altas, durante todo el recorrido mientras continúe la niebla.",
      "Las luces bajas y las rompeniebla (en el caso de tenerlas).",
      "Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b189.jpg",
    "category": "senales"
  },
  {
    "id": 283,
    "type": "image",
    "question": "¿Se puede circular en bicicleta por esta vía?",
    "options": [
      "Sí, siempre que se mantenga en el carril derecho.",
      "No, está prohibido.",
      "Sí, mientras se respete la velocidad mínima de la arteria."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b8.jpg",
    "category": "teorica"
  },
  {
    "id": 284,
    "type": "image",
    "question": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
    "options": [
      "Opción A.",
      "Opción B.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b3.jpg",
    "category": "teorica"
  },
  {
    "id": 285,
    "type": "text",
    "question": "¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con un nivel de alcohol en sangre mayor al permitido por Ley?",
    "options": [
      "Sí, ya que ambas condiciones aumentan el tiempo de reacción.",
      "No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción.",
      "No, el descanso no tiene nada que ver con el consumo de alcohol."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 286,
    "type": "image",
    "question": "¿A qué punto de referencia hace alusión la señal que a continuación se presenta?",
    "options": [
      "Servicio mecánico.",
      "Gomería.",
      "Estación de servicio."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b268.jpg",
    "category": "senales"
  },
  {
    "id": 287,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "No avanzar.",
      "Comienzo de doble mano.",
      "Comienzo de sentido único."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b251.jpg",
    "category": "senales"
  },
  {
    "id": 288,
    "type": "image",
    "question": "¿Cuál es la velocidad máxima permitida para automóviles particulares en la Avenida Costanera Rafael Obligado que se visualiza en la imagen?",
    "options": [
      "60 km/h.",
      "70 km/h.",
      "50 km/h."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b134.jpg",
    "category": "teorica"
  },
  {
    "id": 289,
    "type": "image",
    "question": "En este tipo de vía, ¿está permitido remolcar con su automóvil particular a otro que se encuentra descompuesto?",
    "options": [
      "Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más próximo donde pueda quedar inmovilizado.",
      "Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque.",
      "No, sólo pueden hacerlo los vehículos autorizados a tal fin."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b196.jpg",
    "category": "teorica"
  },
  {
    "id": 290,
    "type": "image",
    "question": "¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?",
    "options": [
      "Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa.",
      "Nada, no son señales de circulación y es ilegal su colocación.",
      "La prohibición de sobrepasar la línea imaginaria que las une."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b71.jpg",
    "category": "senales"
  },
  {
    "id": 291,
    "type": "image",
    "question": "Si al circular por la siguiente arteria, se ve obligado a detener en la banquina, ¿qué luces debe colocar?",
    "options": [
      "Luces altas y giro.",
      "Luces reglamentarias y balizas.",
      "Luces antinieblas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b177.jpg",
    "category": "senales"
  },
  {
    "id": 292,
    "type": "image",
    "question": "Según la Ley 2148, ¿este vehículo está cargando combustible de manera correcta?",
    "options": [
      "Sí, ya que no se observa al conductor utilizar el celular que es la única prohibición al respecto.",
      "No, ya que por normativa no debe cargarse combustible con luces y motor encendido.",
      "La Ley no se expresa sobre esta situación."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b198.jpg",
    "category": "teorica"
  },
  {
    "id": 293,
    "type": "image",
    "question": "¿Qué indica esta demarcación horizontal verde?",
    "options": [
      "Que en esa intersección hay una ciclovía o bicisenda.",
      "Que se aproxima a un cruce ferroviario.",
      "Que es un cruce exclusivo de peatones."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b40.jpg",
    "category": "senales"
  },
  {
    "id": 294,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Inicio de doble circulación.",
      "Calzada dividida.",
      "Camino sinuoso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b232.jpg",
    "category": "senales"
  },
  {
    "id": 295,
    "type": "image",
    "question": "Indique qué significa esta señal:",
    "options": [
      "Ruta Nacional N°3.",
      "Ruta Provincial N°3.",
      "Ruta Panamericana N°3."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b275.jpg",
    "category": "senales"
  },
  {
    "id": 296,
    "type": "image",
    "question": "En la siguiente imagen, ¿es correcta la colocación del dispositivo de retención infantil para un niño de 7 años?",
    "options": [
      "Sí, ya que se encuentra bien ajustado y en el asiento trasero.",
      "No, ya que la orientación “a contra marcha” de los SRI es sólo para los grupos 0 y 0+ y 1 de SRI según indique su fabricante y este niño supera la edad para esos grupos.",
      "Sí, ya que la orientación “a contra marcha” reduce el efecto “latigazo” en caso de un siniestro."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b212.jpg",
    "category": "teorica"
  },
  {
    "id": 297,
    "type": "image",
    "question": "¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?",
    "options": [
      "Carril exclusivo de colectivo de pasajeros.",
      "Cruce exclusivo de vehículos de emergencia.",
      "Ceda el paso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b29.jpg",
    "category": "senales"
  },
  {
    "id": 298,
    "type": "image",
    "question": "¿En qué momento es necesario renovar el siguiente elemento de seguridad? Cuando la profundidad del dibujo es menor de…",
    "options": [
      "1,6 mm.",
      "2 mm.",
      "3 mm."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b203.jpg",
    "category": "teorica"
  },
  {
    "id": 299,
    "type": "text",
    "question": "¿Quién es el responsable frente a la autoridad de control, si uno de los pasajeros del automóvil no lleva puesto el cinturón de seguridad?",
    "options": [
      "El tomador del seguro.",
      "El pasajero, si es mayor de edad.",
      "El conductor."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 300,
    "type": "image",
    "question": "Si ud. circula por la ruta y observa esta situación, debe…",
    "options": [
      "Aumentar la velocidad para sobrepasar al animal rápidamente.",
      "Usar la bocina para ahuyentar al animal y mantener su velocidad.",
      "Reducir la velocidad y si es necesario detenerse."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b193.jpg",
    "category": "teorica"
  },
  {
    "id": 301,
    "type": "text",
    "question": "¿Qué son los carriles exclusivos?",
    "options": [
      "Vías con un único sentido de circulación.",
      "Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.",
      "Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 302,
    "type": "image",
    "question": "“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?",
    "options": [
      "Sí, independientemente del tipo de movilidad elegido.",
      "No, los peatones son usuarios de la vía pública y no están obligados.",
      "Sí pero sólo si estamos conduciendo un vehículo."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b2.jpg",
    "category": "teorica"
  },
  {
    "id": 303,
    "type": "image",
    "question": "¿Qué significado tiene el color de las luces encendidas que se indican en la imagen?",
    "options": [
      "Al estar ubicada en la parte posterior del vehículo, el color blanco es para diferenciarla de las luces de freno, posición y giro.",
      "Al ser de color blanco se obtiene mejor visión cuando la maniobra de retroceso se debe realizar de noche o en condiciones de poca visibilidad.",
      "Indica el sentido de circulación. La luz blanca significa que el vehículo circula en sentido contrario al del vehículo rojo que está detrás de él."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b178.jpg",
    "category": "senales"
  },
  {
    "id": 304,
    "type": "image",
    "question": "El siguiente elemento de seguridad, está correctamente ubicado.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b207.jpg",
    "category": "teorica"
  },
  {
    "id": 305,
    "type": "text",
    "question": "¿Cuál es la importancia del color de las señales viales?",
    "options": [
      "El color es para llamar la atención al conductor de categoría particular.",
      "El color es irrelevante para el conductor particular pero sí para el conductor profesional.",
      "El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 306,
    "type": "text",
    "question": "En caso de siniestro, el orden de actuación recomendado es…",
    "options": [
      "Alertar - Socorrer - Proteger.",
      "Proteger - Alertar - Socorrer.",
      "Socorrer - Proteger - Alertar."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 307,
    "type": "image",
    "question": "El vehículo con la oblea universal de discapacidad que se muestra en esta imagen, ¿se encuentra en infracción?",
    "options": [
      "No, ya que al portar la oblea universal de discapacidad tiene libre estacionamiento y por ello puede estacionar en este lugar.",
      "Sí. Todo vehículo tiene prohibido estacionar en este sector ya que pone en riesgo a pasajeros y peatones."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b150.jpg",
    "category": "teorica"
  },
  {
    "id": 308,
    "type": "text",
    "question": "¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
    "options": [
      "Sólo una.",
      "La cantidad que solicite el titular del vehículo.",
      "Hasta cinco."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 309,
    "type": "text",
    "question": "¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
    "options": [
      "Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración.",
      "No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones.",
      "Sí, puede afectar la coordinación, la atención y el tiempo de reacción."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 310,
    "type": "image",
    "question": "Si al llegar a un cruce se presentan estas 3 señales, ¿cuál de ellas tiene prioridad normativa por sobre las demás?",
    "options": [
      "La opción A.",
      "La opción B.",
      "La opción C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b66.jpg",
    "category": "senales"
  },
  {
    "id": 311,
    "type": "image",
    "question": "Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?",
    "options": [
      "Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso está dada por la luz verde.",
      "No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.",
      "Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa manera se deja libre la intersección."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b75.jpg",
    "category": "senales"
  },
  {
    "id": 312,
    "type": "text",
    "question": "Las señales transitorias señalizan la ejecución de trabajos de construcción y mantenimiento en la vía, o en zonas próximas a las mismas:",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 313,
    "type": "image",
    "question": "Según las normas generales, ¿cuál es la velocidad máxima permitida para automóviles particulares en esta zona de la ruta?",
    "options": [
      "110 km/h.",
      "130 km/h.",
      "80 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b137.jpg",
    "category": "teorica"
  },
  {
    "id": 314,
    "type": "text",
    "question": "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?",
    "options": [
      "Poco antes de abandonar la misma.",
      "Cuando se haya entrado en el carril de desaceleración.",
      "Cuando se ingresa a la nueva vía de circulación."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 315,
    "type": "text",
    "question": "¿Qué peligro debe preverse al sobrepasar un colectivo detenido?",
    "options": [
      "Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste.",
      "Que los pasajeros bajen por la parte izquierda del colectivo detenido.",
      "Ninguno, mientras no sobrepase la velocidad máxima permitida por la Ley."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 316,
    "type": "image",
    "question": "¿En qué caso deberán utilizarse estas luces?",
    "options": [
      "Únicamente de noche y por una vía sin asfaltar.",
      "Sólo por vías sin banquina.",
      "En vías afectadas por niebla, en cualquier horario."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b190.jpg",
    "category": "senales"
  },
  {
    "id": 317,
    "type": "image",
    "question": "Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?",
    "options": [
      "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
      "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
      "Avanzar."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b102.jpg",
    "category": "senales"
  },
  {
    "id": 318,
    "type": "image",
    "question": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
    "options": [
      "El único que debería apartarse es el auto 2 hacia su derecha.",
      "Todos hacia su derecha.",
      "El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b92.jpg",
    "category": "teorica"
  },
  {
    "id": 319,
    "type": "image",
    "question": "¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?",
    "options": [
      "Ampliar la zona permitida de estacionamiento para motos.",
      "Reducir la velocidad y radio de giro de los vehículos.",
      "Ampliar la zona permitida de estacionamiento para vehículos de emergencia."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b36.jpg",
    "category": "senales"
  },
  {
    "id": 320,
    "type": "text",
    "question": "El consumo de medicamentos, ¿puede afectar la capacidad de conducir?",
    "options": [
      "Siempre.",
      "Nunca.",
      "Depende del tipo de medicamento."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 321,
    "type": "image",
    "question": "Si un conductor de un automóvil particular obtiene el siguiente resultado en un control de alcoholemia realizado en la Ciudad Autónoma de Buenos Aires, ¿cómo debe proceder la autoridad de control de tránsito?",
    "options": [
      "Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo.",
      "Esperar un tiempo prudencial y realizar una contraprueba, a la espera de que descienda la graduación alcohólica.",
      "Darle la opción al conductor de llamar a un tercero para que se haga responsable de la conducción del vehículo."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b52.jpg",
    "category": "teorica"
  },
  {
    "id": 322,
    "type": "image",
    "question": "Frente a un siniestro, ¿qué puede evitar este elemento si está correctamente ubicado?",
    "options": [
      "Nada en especial, dado que sólo es un elemento de confort.",
      "Lesiones en la zona cervical.",
      "Lesiones en el tórax."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b216.jpg",
    "category": "teorica"
  },
  {
    "id": 323,
    "type": "text",
    "question": "¿De qué color es la cartelería de Permitido Estacionar?",
    "options": [
      "Azul.",
      "Blanco.",
      "Rojo."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 324,
    "type": "image",
    "question": "El conductor del vehículo A quiere volver rápidamente al carril derecho porque ve ante él una situación de peligro, ¿qué debe hacer el conductor del vehículo B?",
    "options": [
      "Aumentar la velocidad para que realice la maniobra detrás suyo.",
      "Reducir la velocidad para facilitarle el retorno al carril.",
      "Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b116.jpg",
    "category": "teorica"
  },
  {
    "id": 325,
    "type": "image",
    "question": "El vehículo señalizado tiene permitido girar a la izquierda en este cruce que no tiene semáforo.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b126.jpg",
    "category": "senales"
  },
  {
    "id": 326,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Fin de semiautopista.",
      "Fin de ruta.",
      "Fin de autopista."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b264.jpg",
    "category": "senales"
  },
  {
    "id": 327,
    "type": "text",
    "question": "En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los medios para que los servicios de emergencia atiendan a los heridos y resguardando los vehículos y otras pruebas del incidente para una adecuada resolución del caso.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 328,
    "type": "text",
    "question": "Todos los cristales de un vehículo deben garantizar visibilidad...",
    "options": [
      "Solamente de adentro del automóvil hacia afuera.",
      "Desde adentro hacia fuera y de afuera hacia adentro del vehículo.",
      "El único cristal que debe garantizar plena y total visibilidad es el parabrisas."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 329,
    "type": "image",
    "question": "Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?",
    "options": [
      "No, al reducir la velocidad, mayor es la proporción de agua en el asfalto.",
      "Sí, con lluvia la adherencia es menor.",
      "No. La distancia de seguridad debe ser siempre la misma."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b183.jpg",
    "category": "teorica"
  },
  {
    "id": 330,
    "type": "image",
    "question": "En este lugar, ¿está permitido sobrepasar a otro vehículo?",
    "options": [
      "Sí, salvo que haya una señal que indique lo contrario.",
      "No, está prohibido por normativa.",
      "Sólo si no se perjudica la circulación de otros vehículos."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b121.jpg",
    "category": "teorica"
  },
  {
    "id": 331,
    "type": "text",
    "question": "Todo usuario de la vía pública debe, como premisa básica…",
    "options": [
      "Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.",
      "Acreditar experiencia de manejo en vehículos por más de un año.",
      "Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 332,
    "type": "image",
    "question": "En este tramo de la vía no se puede realizar un sobrepaso",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b117.jpg",
    "category": "teorica"
  },
  {
    "id": 333,
    "type": "image",
    "question": "La siguiente acción del conductor, ¿es considerada un factor de riesgo?",
    "options": [
      "No, ya que el conductor no está utilizando sus manos para mantener una comunicación telefónica.",
      "Sí, sólo cuando circula a altas velocidades.",
      "Sí, porque interfiere en su atención al contexto."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b59.jpg",
    "category": "teorica"
  },
  {
    "id": 334,
    "type": "text",
    "question": "Cuando hay agua en el camino, debe reducir su velocidad para evitar…",
    "options": [
      "Desgastar las llantas.",
      "Sobrecalentar las llantas.",
      "El aquaplaning."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 335,
    "type": "text",
    "question": "¿A qué se denomina 'carril de aceleración'?",
    "options": [
      "Es el carril de incorporación a una autopista.",
      "Es el carril derecho de una autopista.",
      "Es el carril izquierdo de una autopista."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 336,
    "type": "text",
    "question": "¿Qué es una ciclovía?",
    "options": [
      "Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
      "Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
      "Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados (bicicletas) y dispositivos de movilidad personal."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 337,
    "type": "image",
    "question": "¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
    "options": [
      "Que circule con precaución.",
      "Que detenga el vehículo.",
      "Que continúe avanzando."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b68.jpg",
    "category": "senales"
  },
  {
    "id": 338,
    "type": "image",
    "question": "Según la Organización Mundial de la Salud, la siguiente problemática es categorizada como 'pandemia' ya que constituye la décima causa de muerte en todo el mundo.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b1.jpg",
    "category": "teorica"
  },
  {
    "id": 339,
    "type": "image",
    "question": "De acuerdo a la Ley N° 2148, ¿está permitido realizar el siguiente giro?",
    "options": [
      "No, ya que sólo está permitido hacer ese giro si existe un semáforo que lo habilita.",
      "Sí, ya que es una intersección no semaforizada.",
      "No, ya que es una vía de doble sentido de circulación."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b127.jpg",
    "category": "teorica"
  },
  {
    "id": 340,
    "type": "image",
    "question": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
    "options": [
      "Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
      "Que es un espacio reservado al estacionamiento exclusivo de vehículos destinados al servicio de emergencia.",
      "Que está prohibido estacionar o detenerse paralelo al cordón."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b79.jpg",
    "category": "senales"
  },
  {
    "id": 341,
    "type": "text",
    "question": "¿A qué se denomina 'distancia de reacción'?",
    "options": [
      "A la distancia que recorre un vehículo hasta su detención.",
      "A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar.",
      "A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 342,
    "type": "image",
    "question": "Indique qué significa esta señal:",
    "options": [
      "Ruta Nacional N°5.",
      "Ruta Provincial N°5.",
      "Ruta Panamericana N°5."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b274.jpg",
    "category": "senales"
  },
  {
    "id": 343,
    "type": "image",
    "question": "Al conducir por un largo lapso de tiempo y en esta condición climática…",
    "options": [
      "Es menos probable que aparezca la fatiga, ya que aumenta la atención.",
      "Es necesario descansar con más frecuencia, para evitar la fatiga.",
      "No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b182.jpg",
    "category": "teorica"
  },
  {
    "id": 344,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Rotonda.",
      "Peligro extremo de rotonda.",
      "Preferencia de avance."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b233.jpg",
    "category": "senales"
  },
  {
    "id": 345,
    "type": "text",
    "question": "Si al circular por ruta, el vehículo sale involuntariamente de la calzada, es recomendable:",
    "options": [
      "Usar el freno de mano.",
      "Desacelerar (no frenar).",
      "Accionar fuertemente el pedal de freno."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 346,
    "type": "image",
    "question": "Si al circular por una vía y la persona señalada le indica detenerse, ¿está obligado usted a obedecer?",
    "options": [
      "Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando.",
      "Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad legal para realizar dicha indicación.",
      "No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b69.jpg",
    "category": "senales"
  },
  {
    "id": 347,
    "type": "image",
    "question": "¿Cuál de estas señales es Informativa?",
    "options": [
      "La señal A.",
      "La señal B.",
      "La señal C."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b85.jpg",
    "category": "senales"
  },
  {
    "id": 348,
    "type": "image",
    "question": "El vehículo, señalado con un círculo rojo, circula utilizando las luces correctas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b174.jpg",
    "category": "senales"
  },
  {
    "id": 349,
    "type": "image",
    "question": "¿Qué indica esta seña?",
    "options": [
      "Giro a la izquierda.",
      "Adelantamiento por la izquierda.",
      "Detenerse."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b14.jpg",
    "category": "senales"
  },
  {
    "id": 350,
    "type": "text",
    "question": "En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
    "options": [
      "La intención de la conducta dañosa.",
      "La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente.",
      "Los antecedentes de la persona que provoca el daño."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 351,
    "type": "text",
    "question": "Indique cuál es la premisa correcta:",
    "options": [
      "Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.",
      "Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad.",
      "A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 352,
    "type": "image",
    "question": "¿Qué vehículo puede realizar el acarreo de otro en esta vía?",
    "options": [
      "Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para sujetarlo firmemente.",
      "Cualquier vehículo utilizando la cuarta de enganche para que quede sujeto firmemente sin riesgo.",
      "Sólo los vehículos destinados a ese fin."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b195.jpg",
    "category": "teorica"
  },
  {
    "id": 353,
    "type": "text",
    "question": "¿Qué se debe evitar al circular en bicicleta?",
    "options": [
      "Usar auriculares y dispositivos electrónicos, que afecten la concentración.",
      "Usar ropa oscura y suelta.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 354,
    "type": "text",
    "question": "La persona que conduce bajo los efectos de estupefacientes…",
    "options": [
      "Se pone en grave riesgo a sí mismo y a todos los que lo rodean.",
      "Sólo pone en riesgo su propia vida.",
      "Al estar desinhibido, asume menos riesgos."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 355,
    "type": "text",
    "question": "En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?",
    "options": [
      "Son las rotondas.",
      "Son los espacios reservados para estacionamiento exclusivo de motovehículos.",
      "Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 356,
    "type": "image",
    "question": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
    "options": [
      "El vehículo A, ya que está circulando por la derecha",
      "Los vehículos B, ya que son varios los que circulan por esa calle.",
      "El vehículo A, ya que está saliendo del paso a nivel ferroviario."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b96.jpg",
    "category": "senales"
  },
  {
    "id": 357,
    "type": "text",
    "question": "Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a pesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?",
    "options": [
      "Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los vehículos lentos.",
      "Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo.",
      "Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál fuera."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 358,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Prohibición de Girar a la Derecha.",
      "Prohibición de Cambiar de Carril.",
      "Prohibición de Adelantar."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b259.jpg",
    "category": "senales"
  },
  {
    "id": 359,
    "type": "text",
    "question": "Según la Ley Nº 2148, ¿está permitido colocar a un automóvil particular luces adicionales?",
    "options": [
      "Está permitido el agregado de dos faros rompeniebla y de hasta dos faros elevados con luces de freno.",
      "Sí. Se puede agregar las luces que se deseen ya que cuanto más capacidad de iluminación tenga el vehículo, mejor visibilidad tendrá el conductor.",
      "No, está prohibido agregar cualquier tipo de luz adicional. Sólo se podrá reponer las que traiga de fábrica, en caso de destrucción."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 360,
    "type": "image",
    "question": "¿Qué significa esta demarcación amarilla en la calzada?",
    "options": [
      "Es una señalización que se utiliza únicamente para dividir los carriles de la vía.",
      "Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
      "Significa que sólo pueden circular vehículos particulares."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b77.jpg",
    "category": "senales"
  },
  {
    "id": 361,
    "type": "image",
    "question": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
    "options": [
      "Que sólo está prohibido estacionar, pudiendo efectuarse detenciones.",
      "Que es un lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros.",
      "Que está prohibido estacionar o detenerse al costado de la vereda."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b81.jpg",
    "category": "senales"
  },
  {
    "id": 362,
    "type": "image",
    "question": "Un vehículo podrá circular por la franja paralela a la calzada, indicada en la imagen, sólo cuando el flujo vehicular esté absolutamente congestionado.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b125.jpg",
    "category": "teorica"
  },
  {
    "id": 363,
    "type": "text",
    "question": "Bajo los efectos del estrés, la conducción se vuelve:",
    "options": [
      "Más temeraria.",
      "Menos segura.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 364,
    "type": "text",
    "question": "¿A qué se llama “Punto Ciego”?",
    "options": [
      "Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.",
      "Sólo al área de visión que no es cubierta por los espejos retrovisores.",
      "Al punto imaginario ubicado en el horizonte de una ruta."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 365,
    "type": "text",
    "question": "¿Está permitido llevar carga en una bicicleta?",
    "options": [
      "Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad.",
      "No, está prohibido ya que puede desestabilizar la bicicleta.",
      "Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 366,
    "type": "text",
    "question": "¿En qué consiste el Sistema de Evaluación Permanente de Conductores (Scoring)?",
    "options": [
      "En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas.",
      "La obligación de los conductores a realizar un curso vial anual.",
      "Ambas respuestas, la A y la B, son incorrectas."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 367,
    "type": "image",
    "question": "¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?",
    "options": [
      "Opción A.",
      "Opción B.",
      "Opción C."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b5.jpg",
    "category": "teorica"
  },
  {
    "id": 368,
    "type": "image",
    "question": "Las intervenciones horizontales señaladas, sirven para…",
    "options": [
      "Incrementar la seguridad de los peatones.",
      "Promover la movilidad vehicular.",
      "Colaborar con la rapidez en la movilidad."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b34.jpg",
    "category": "senales"
  },
  {
    "id": 369,
    "type": "image",
    "question": "Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos, ¿cuál es el límite superior de velocidad precautoria que deben respetar?",
    "options": [
      "20 kilómetros por hora.",
      "40 kilómetros por hora.",
      "30 kilómetros por hora.\\t"
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b143.jpg",
    "category": "senales"
  },
  {
    "id": 370,
    "type": "text",
    "question": "Indique cuál es la premisa correcta:",
    "options": [
      "A menor cantidad de vehículos, mayor probabilidad de siniestralidad.",
      "A mayor cantidad de vehículos, menor probabilidad de siniestralidad.",
      "A menor cantidad de vehículos, menor probabilidad de siniestralidad."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 371,
    "type": "image",
    "question": "¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?",
    "options": [
      "El vehículo A porque circula por una avenida.",
      "El vehículo B porque circula por la derecha.",
      "Es indistinto ya que es una esquina sin semáforo."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b100.jpg",
    "category": "senales"
  },
  {
    "id": 372,
    "type": "text",
    "question": "¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?",
    "options": [
      "Cerca del borde derecho de la calzada.",
      "Cerca del borde izquierdo de la calzada.",
      "No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 373,
    "type": "image",
    "question": "La presente conducta, ¿es riesgosa al momento de conducir?",
    "options": [
      "Sí, porque es considerado un factor de distracción.",
      "Únicamente si se circula a altas velocidades.",
      "Al contrario, ayuda a mantener la atención en la conducción."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b62.jpg",
    "category": "teorica"
  },
  {
    "id": 374,
    "type": "text",
    "question": "¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?",
    "options": [
      "Fríos.",
      "Calientes.",
      "Es indistinto, al ser de caucho se mantienen aislados de la temperatura."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 375,
    "type": "text",
    "question": "En condiciones de viento fuerte, es recomendable realizar los sobrepasos de un camión con una diferencia de velocidad no demasiado elevada.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 376,
    "type": "image",
    "question": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
    "options": [
      "20 km/h.",
      "40 km/h.",
      "30 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b139.jpg",
    "category": "teorica"
  },
  {
    "id": 377,
    "type": "image",
    "question": "Si el vehículo de la imagen se dispone a ingresar a un garaje, está anticipando su maniobra, utilizando las luces correctas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b171.jpg",
    "category": "senales"
  },
  {
    "id": 378,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Panel de Prevención (Objeto Rígido).",
      "Calzada Reducida.",
      "Contramano."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b244.jpg",
    "category": "senales"
  },
  {
    "id": 379,
    "type": "image",
    "question": "¿Qué indica esta seña?",
    "options": [
      "Giro a la izquierda.",
      "Adelantamiento por la izquierda.",
      "Detenerse."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b12.jpg",
    "category": "senales"
  },
  {
    "id": 380,
    "type": "image",
    "question": "¿El límite de velocidad máxima de 20 km/h en este tramo de calle se debe respetar sólo en el horario de funcionamiento escolar?",
    "options": [
      "No, ya que el límite de la señal de tránsito rige independientemente del día y horario.",
      "Sí, ya que la Ley 2148 establece que esta restricción es durante el horario de funcionamiento escolar."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b141.jpg",
    "category": "teorica"
  },
  {
    "id": 381,
    "type": "text",
    "question": "Para circular de noche por una calle de la Ciudad de Buenos Aires, ¿qué luces deben utilizarse?",
    "options": [
      "Las bajas.",
      "Las altas.",
      "Las de posición solamente."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 382,
    "type": "image",
    "question": "Indique qué tipo de señal es la que a continuación se muestra:",
    "options": [
      "Preventiva",
      "Reglamentaria.",
      "Informativa."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b86.jpg",
    "category": "senales"
  },
  {
    "id": 383,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Sobrepasos por la derecha.",
      "Circulación exclusiva (camión).",
      "Tránsito pesado a la derecha."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b252.jpg",
    "category": "senales"
  },
  {
    "id": 384,
    "type": "image",
    "question": "En esta intersección, ¿quién tiene prioridad de paso?",
    "options": [
      "El peatón.",
      "El conductor.",
      "Es indistinto."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b23.jpg",
    "category": "teorica"
  },
  {
    "id": 385,
    "type": "image",
    "question": "De acuerdo a la Ley N°2148 durante la siguiente circunstancia, ¿qué acción está prohibida realizar?",
    "options": [
      "Ubicarse cerca del surtidor.",
      "Dejar el motor y las luces encendidas.",
      "Sólo dejar el motor encendido."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b197.jpg",
    "category": "teorica"
  },
  {
    "id": 386,
    "type": "image",
    "question": "En este cruce de dos calles sin semáforos, ¿cuál es el límite superior de la velocidad precautoria establecida por ley?",
    "options": [
      "20 kilómetros por hora.",
      "40 kilómetros por hora.",
      "30 kilómetros por hora."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b142.jpg",
    "category": "senales"
  },
  {
    "id": 387,
    "type": "image",
    "question": "En caso de un siniestro vial en este tipo de calle, ¿cómo es recomendable señalizar la zona del vehículo inmovilizado?",
    "options": [
      "Se deben encender las luces bajas y, en lo posible, colocar balizas portátiles delante y detrás del mismo.",
      "Se deben encender las luces altas y, en lo posible, colocar balizas portátiles detrás del mismo.",
      "Se deben encender las balizas y, en lo posible, colocar balizas portátiles del lado de donde provienen los vehículos a una distancia adecuada del vehículo."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b43.jpg",
    "category": "senales"
  },
  {
    "id": 388,
    "type": "image",
    "question": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están circulando por esta arteria?",
    "options": [
      "No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.",
      "Sí, porque se encuentra a la derecha.",
      "Sí, porque señalizó su maniobra.\\t"
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b109.jpg",
    "category": "senales"
  },
  {
    "id": 389,
    "type": "image",
    "question": "Frente a esta condición climática, ¿se deben encender las luces bajas?",
    "options": [
      "Sí, siempre que está disminuida la visibilidad.",
      "No, porque las luces sólo deben utilizarse por la noche.",
      "Sí, pero sólo en rutas."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b181.jpg",
    "category": "senales"
  },
  {
    "id": 390,
    "type": "image",
    "question": "¿Cuál es el límite de velocidad máxima en esta situación?",
    "options": [
      "60 km/h.",
      "80 km/h.",
      "40 km/h."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b187.jpg",
    "category": "teorica"
  },
  {
    "id": 391,
    "type": "image",
    "question": "¿Cuál de estos sistemas de comunicación telefónica no es considerado riesgoso al momento de conducir un vehículo?",
    "options": [
      "Opción A. Ya que al utilizar un sólo auricular la audición no se encuentra afectada.",
      "Opción B. Ya que al activar el manos libres las manos quedan disponibles para la conducción.",
      "Ambos sistemas son riesgosos."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b58.jpg",
    "category": "teorica"
  },
  {
    "id": 392,
    "type": "image",
    "question": "Según las Leyes N° 2.148 y 24.449, ¿qué ítem enumera los elementos de seguridad obligatorios que se deben llevar en un vehículo?",
    "options": [
      "Los elementos A, B y D.",
      "Los elementos B, C y D.",
      "Los elementos A, D y E."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b205.jpg",
    "category": "teorica"
  },
  {
    "id": 393,
    "type": "image",
    "question": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
    "options": [
      "Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por la arteria que cruza, puedo reiniciarla.",
      "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
      "Efectuar el cruce con máxima precaución."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b73.jpg",
    "category": "senales"
  },
  {
    "id": 394,
    "type": "text",
    "question": "Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
    "options": [
      "30 días corridos desde su vencimiento.",
      "Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva.",
      "No debe superar el año desde su vencimiento."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 395,
    "type": "image",
    "question": "¿Es correcto estacionar el vehículo de esta manera?",
    "options": [
      "No, excepto que se encuentre junto al cordón del garaje del propietario del vehículo.",
      "Sí, siempre que se estacione paralelo al cordón los días no hábiles.",
      "No. Está prohibido ya que pone en riesgo a los ciclistas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b149.jpg",
    "category": "teorica"
  },
  {
    "id": 396,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Paneles de prevención.",
      "Prohibición de circular.",
      "Reducción de velocidad."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b243.jpg",
    "category": "senales"
  },
  {
    "id": 397,
    "type": "text",
    "question": "¿Cuál es la velocidad máxima permitida para un automóvil particular en Av. Intendente Cantilo, salvo señalización que indique otra velocidad?",
    "options": [
      "60 km/h.",
      "110 km/h.",
      "100 km/h."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 398,
    "type": "image",
    "question": "¿Qué indica esta señal reglamentaria?",
    "options": [
      "Inicio de calle de convivencia.",
      "Los peatones no deben circular por esa zona.",
      "Los peatones deben circular obligatoriamente por la derecha."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b256.jpg",
    "category": "senales"
  },
  {
    "id": 399,
    "type": "image",
    "question": "¿Cuál de estos carriles es el llamado ''carril de sobrepaso''?",
    "options": [
      "Cualquiera de ellos.",
      "Sólo el carril señalado como A.",
      "Sólo el carril señalado como F."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b115.jpg",
    "category": "teorica"
  },
  {
    "id": 400,
    "type": "text",
    "question": "¿Cuál es el tiempo promedio de reacción de un conductor desde que percibe un peligro hasta que acciona el freno?",
    "options": [
      "Aproximadamente 1 segundo.",
      "Entre 2 y 3 segundos.",
      "Es inmediato, no transcurre tiempo entre estas acciones."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 401,
    "type": "image",
    "question": "¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?",
    "options": [
      "Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en posición de estacionamiento en el caso de tener caja automática.",
      "Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática.",
      "Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento en el caso de tener caja automática."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b166.jpg",
    "category": "teorica"
  },
  {
    "id": 402,
    "type": "text",
    "question": "Ud. viene circulando por una avenida de doble mano y al llegar a la bocacalle, precisa girar a la izquierda para tomar una calle de único sentido. De acuerdo a la Ley Nº 2148, ¿en qué condiciones puede efectuar esa maniobra?",
    "options": [
      "Si hay un semáforo de giro que me habilite (en verde).",
      "Si es un cruce sin semáforos y no se acerca ningún vehículo por la mano de circulación contraria a la de mi avance.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 403,
    "type": "text",
    "question": "¿Por qué es peligroso conducir cansado?",
    "options": [
      "Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
      "Porque se circula más rápido.",
      "Porque el viaje dura más."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 404,
    "type": "text",
    "question": "Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué debe hacer para no generar una situación de riesgo en la vía pública?",
    "options": [
      "Colocar balizas y detenerse en un lugar donde esté permitido.",
      "Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas.",
      "Al tratarse de una llamada de urgencia, no importa donde se realice."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 405,
    "type": "text",
    "question": "En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 406,
    "type": "text",
    "question": "En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un sobrepaso?",
    "options": [
      "Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún vehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso.",
      "Que ningún otro vehículo esté realizando la maniobra de sobrepaso.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 407,
    "type": "image",
    "question": "¿Cómo se denomina la intervención de color amarillo que se visualiza en la imagen?",
    "options": [
      "Intervención Peatonal.",
      "Intervención Vehicular.",
      "Intervención de la Calzada."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b35.jpg",
    "category": "teorica"
  },
  {
    "id": 408,
    "type": "text",
    "question": "Es importante realizar un correcto mantenimiento vehicular porque...",
    "options": [
      "Evita desperfectos del motor y ayuda a reducir el consumo de combustible.",
      "Ayuda a reducir el factor de riesgo vehicular involucrado en los siniestros viales.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 409,
    "type": "image",
    "question": "Si ve esta señal mientras conduce, usted debe…",
    "options": [
      "Reducir la velocidad del vehículo",
      "Incrementar la velocidad del vehículo",
      "Dar vuelta a la izquierda y después a la derecha"
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b146.jpg",
    "category": "senales"
  },
  {
    "id": 410,
    "type": "image",
    "question": "¿Está permitido sobrepasar a otro vehículo en este lugar?",
    "options": [
      "Sí, salvo que haya una señal que indique lo contrario.",
      "No, está prohibido por normativa.",
      "Sólo en el caso de que no perjudique la circulación de otros vehículos."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b118.jpg",
    "category": "teorica"
  },
  {
    "id": 411,
    "type": "image",
    "question": "Para poder estacionar en esta zona, se deben dejar libre al menos de 5 metros para cada lado de la entrada.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b153.jpg",
    "category": "teorica"
  },
  {
    "id": 412,
    "type": "image",
    "question": "¿Es correcta la detención del vehículo en este sector?",
    "options": [
      "Sí, ya que se encuentra con balizas encendidas.",
      "Sí, porque sólo está prohibido el estacionamiento.",
      "No, ya que tanto la detención como el estacionamiento en este sector se encuentra prohibido."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b151.jpg",
    "category": "teorica"
  },
  {
    "id": 413,
    "type": "image",
    "question": "¿Cuál es la manera más adecuada de conducir un vehículo en este tramo de la ruta?",
    "options": [
      "Aumentar la velocidad gradualmente antes de ingresar en la curva.",
      "Desacelerar antes de ingresar a la curva.",
      "Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b145.jpg",
    "category": "teorica"
  },
  {
    "id": 414,
    "type": "text",
    "question": "Una indicación puede estar expresada con una señal vertical o con una demarcación horizontal, ya que ambas tienen el mismo significado y orden jerárquico.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 415,
    "type": "image",
    "question": "¿Qué significa esta señal?",
    "options": [
      "Indica la prohibición de estacionamiento en el frente de entidades bancarias.",
      "Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar.",
      "Indica la prohibición de circulación de vehículos sin permiso de ingreso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b248.jpg",
    "category": "senales"
  },
  {
    "id": 416,
    "type": "text",
    "question": "En cuanto al grado o tono de color que pueden tener los cristales de un automóvil, ¿qué establece la ley 2148, con respecto a su control en la vía pública?",
    "options": [
      "Para medir el grado de tonalidad debe efectuarse una prueba colorimétrica mediante un dispositivo portátil reglamentado debidamente.",
      "Se deben distinguir los ocupantes del vehículo a corta distancia.",
      "Se debería poder observar las facciones del conductor a una distancia mínima de 15 metros."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 417,
    "type": "image",
    "question": "¿Cuáles de los siguientes vehículos NO se encuentran en infracción?",
    "options": [
      "Los vehículos A y B.",
      "Los vehículos A y C.",
      "Los vehículos B y C."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b112.jpg",
    "category": "teorica"
  },
  {
    "id": 418,
    "type": "text",
    "question": "¿Qué Ley rige al momento de circular por la Ciudad de Buenos Aires?",
    "options": [
      "La Ley Nacional N° 24.449.",
      "La Ley de la Ciudad N° 2.148.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 419,
    "type": "image",
    "question": "Según las normas generales, ¿cuál es la velocidad máxima permitida en esta calle?",
    "options": [
      "60 km/h.",
      "40 km/h.",
      "70 km/h."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b130.jpg",
    "category": "teorica"
  },
  {
    "id": 420,
    "type": "image",
    "question": "Dadas las características de esta intersección, ¿el peatón también tiene prioridad?",
    "options": [
      "No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial.",
      "Sí, siempre."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b20.jpg",
    "category": "teorica"
  },
  {
    "id": 421,
    "type": "image",
    "question": "¿Esta persona tiene el cinturón correctamente colocado?",
    "options": [
      "No, porque pasa por el abdomen y debería hacerlo por los huesos de la cadera.",
      "No, porque pasa por el abdomen y debería hacerlo por los muslos.",
      "Sí, porque pasa por la clavícula y el abdomen."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b219.jpg",
    "category": "teorica"
  },
  {
    "id": 422,
    "type": "image",
    "question": "Determine qué indica la señal que a continuación se presenta:",
    "options": [
      "Comienzo de autopista.",
      "Comienzo de ruta.",
      "Comienzo de semiautopista."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b263.jpg",
    "category": "senales"
  },
  {
    "id": 423,
    "type": "text",
    "question": "Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 424,
    "type": "text",
    "question": "¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?",
    "options": [
      "La velocidad máxima permitida en la vía donde se encuentra la ciclovía.",
      "25 km/h.",
      "30 km/h."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 425,
    "type": "image",
    "question": "¿Cuál de las siguientes imágenes muestra una bicisenda?",
    "options": [
      "Opción A.",
      "Opción B.",
      "Opción C."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b41.jpg",
    "category": "teorica"
  },
  {
    "id": 426,
    "type": "image",
    "question": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
    "options": [
      "Opción A.",
      "Opción B.",
      "Es indistinto."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b4.jpg",
    "category": "teorica"
  },
  {
    "id": 427,
    "type": "image",
    "question": "Se deben utilizar balizas mientras se conduce bajo estas condiciones climáticas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b192.jpg",
    "category": "teorica"
  },
  {
    "id": 428,
    "type": "image",
    "question": "¿Qué tipo de señal es la siguiente imagen?",
    "options": [
      "Reglamentaria.",
      "Transitoria.",
      "Informativa."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b72.jpg",
    "category": "senales"
  },
  {
    "id": 429,
    "type": "image",
    "question": "En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?",
    "options": [
      "El vehículo A.",
      "El vehículo B."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b108.jpg",
    "category": "teorica"
  },
  {
    "id": 430,
    "type": "text",
    "question": "¿Es peligroso conducir con resaca?",
    "options": [
      "Sí, es peligroso porque tiene efectos en el organismo.",
      "No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta.",
      "No, ya que los efectos de la resaca no intervienen en la conducción."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 431,
    "type": "text",
    "question": "El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE cuando se conduce por vías interurbanas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 432,
    "type": "image",
    "question": "¿Está permitido circular con la placa de dominio de este modo?",
    "options": [
      "Sí, ya que exhibe una documentación provisoria.",
      "No, ya que para poder cumplir su función como provisoria debe ampliarse.",
      "No, ya que debe estar colocada en el lugar y de forma reglamentaria."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b47.jpg",
    "category": "teorica"
  },
  {
    "id": 433,
    "type": "text",
    "question": "La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 434,
    "type": "text",
    "question": "¿Cada cuánto tiempo es recomendable parar si se realiza un viaje largo?",
    "options": [
      "Cada 2 horas aproximadamente.",
      "Cada 4 horas aproximadamente.",
      "Cada 1 hora aproximadamente."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 435,
    "type": "image",
    "question": "Frente a esta señal, ¿qué sucede con la prioridad de avance en esa vía?",
    "options": [
      "Se tiene la prioridad de avance.",
      "Se pierde la prioridad de avance.",
      "Esta señal no es indicativa de prioridad de avance."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b247.jpg",
    "category": "senales"
  },
  {
    "id": 436,
    "type": "text",
    "question": "Un conductor principiante, ¿puede sentirse más fácilmente fatigado?",
    "options": [
      "Sí, por la falta de experiencia en la conducción.",
      "No, porque todos somos iguales ante la Ley.",
      "Únicamente cuando se trata de una persona que padece de fatiga crónica."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 437,
    "type": "text",
    "question": "Si ud. circula en el carril contiguo al carril exclusivo del Metrobús y desea realizar un sobrepaso a otro vehículo que circula más lento, ¿puede utilizar el carril exclusivo para hacer esta maniobra?",
    "options": [
      "No, porque está prohibido circular de manera permanente o transitoria por dicho carril.",
      "Sí, sólo cuando la línea longitudinal del lado exterior de este carril sea discontinua.",
      "Sí, porque sólo se permite su utilización para realizar alguna maniobra."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 438,
    "type": "text",
    "question": "Al circular por una ruta a la velocidad máxima permitida sólo se está habilitado a superarla en el momento del sobrepaso.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 439,
    "type": "image",
    "question": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están detenidos en la arteria?",
    "options": [
      "No. La prioridad es de los otros vehículos, independientemente si están detenidos o circulando.",
      "Sí, porque se encuentra el tránsito detenido y deben cederle el paso.",
      "No. La Ley no menciona nada al respecto, sólo se expresa sobre las prioridades en intersecciones no semaforizadas."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b110.jpg",
    "category": "senales"
  },
  {
    "id": 440,
    "type": "image",
    "question": "La siguiente acción del conductor es riesgosa porque:",
    "options": [
      "Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
      "El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar.",
      "Ambas respuestas, la A y la B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b60.jpg",
    "category": "teorica"
  },
  {
    "id": 441,
    "type": "image",
    "question": "Si el vehículo de la imagen se dispone a ingresar a un garaje ubicado a su derecha, está anticipando su maniobra utilizando las luces correctas.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b172.jpg",
    "category": "senales"
  },
  {
    "id": 442,
    "type": "text",
    "question": "Circular a velocidad constante y dentro de los límites establecidos por la Ley, además de minimizar las posibilidades de provocar un siniestro vial, puede optimizar el consumo de combustible en un vehículo.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 443,
    "type": "text",
    "question": "Indique el orden de prioridad normativo que debe respetar (de mayor a menor jerarquía):",
    "options": [
      "Normas legales de carácter general; Señalización; Indicaciones de la autoridad competente.",
      "Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general.",
      "Señalización; Normas legales de carácter general; Indicaciones de la autoridad competente."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 444,
    "type": "text",
    "question": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?",
    "options": [
      "Niños menores de 15 años.",
      "Jóvenes y adultos de 15 a 34 años.",
      "Adultos mayores de 35 años."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 445,
    "type": "image",
    "question": "De acuerdo al símbolo que exhibe, ¿cuál es el nivel máximo de alcoholemia admitido para el conductor de este vehículo?",
    "options": [
      "0,5 gramos de alcohol por litro de sangre.",
      "0,0 gramos de alcohol por litro de sangre.",
      "0,2 gramos de alcohol por litro de sangre."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b55.jpg",
    "category": "senales"
  },
  {
    "id": 446,
    "type": "text",
    "question": "¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante el acontecimiento de algún incidente?",
    "options": [
      "911 y 109.",
      "103 y 107.",
      "107 y 911."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 447,
    "type": "text",
    "question": "¿A qué se denomina “aquaplaning”?",
    "options": [
      "Cuando la cantidad de agua caída en una lluvia es abundante.",
      "A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos.",
      "Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna."
    ],
    "correct": 1,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 448,
    "type": "image",
    "question": "Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?",
    "options": [
      "30 km/h.",
      "40 km/h.",
      "20 km/h."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b131.jpg",
    "category": "teorica"
  },
  {
    "id": 449,
    "type": "text",
    "question": "De los factores citados, ¿cuál interviene en el exceso de consumo de combustible?",
    "options": [
      "La resistencia aerodinámica.",
      "La velocidad.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 450,
    "type": "text",
    "question": "¿A qué se denomina “distancia de seguridad”?",
    "options": [
      "A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él.",
      "A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para realizar un sobrepaso seguro.",
      "A la distancia que recorre el vehículo desde que el conductor percibe una situación de peligro hasta que acciona el freno."
    ],
    "correct": 0,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 451,
    "type": "image",
    "question": "Según la Ley 2148, los límites de velocidad para un automóvil particular que circula por esta arteria son de 30 km/h (mínima) y 60 km/h (máxima).",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b136.jpg",
    "category": "teorica"
  },
  {
    "id": 452,
    "type": "image",
    "question": "¿Es correcta la colocación del dispositivo de retención infantil en este vehículo?",
    "options": [
      "Sí, salvo en rutas nacionales.",
      "Sí, siempre y cuando esté debidamente ajustado.",
      "No, ya que estos dispositivos deben ir colocados en los asientos traseros."
    ],
    "correct": 2,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b211.jpg",
    "category": "teorica"
  },
  {
    "id": 453,
    "type": "image",
    "question": "El apoyacabeza está correctamente ubicado en función del conductor.",
    "options": [
      "Verdadero.",
      "Falso."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b214.jpg",
    "category": "teorica"
  },
  {
    "id": 454,
    "type": "image",
    "question": "¿Qué indica esta señal?",
    "options": [
      "Se encuentra permitido detenerse en esa vía.",
      "Existencia de un estacionamiento vehicular, en las inmediaciones.",
      "Se encuentra permitido estacionar en esa vía."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b272.jpg",
    "category": "senales"
  },
  {
    "id": 455,
    "type": "image",
    "question": "Con esta documentación, ¿quién está autorizado a conducir el vehículo?",
    "options": [
      "Nadie, porque está vencida y debe renovarse.",
      "Sólo el titular.",
      "El titular y sus familiares directos, por tener el mismo apellido."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b46.jpg",
    "category": "teorica"
  },
  {
    "id": 456,
    "type": "image",
    "question": "En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?",
    "options": [
      "Que se pueden traspasar.",
      "Que está prohibido traspasarlas.",
      "Que es una zona de máximo peligro."
    ],
    "correct": 0,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b78.jpg",
    "category": "senales"
  },
  {
    "id": 457,
    "type": "text",
    "question": "Un menor de 12 años puede circular en bicicleta por…",
    "options": [
      "La calle, acompañado de un adulto mayor de 18 años.",
      "Por la vereda, a la menor velocidad posible.",
      "Ambas respuestas, A y B, son correctas."
    ],
    "correct": 2,
    "weight": 1,
    "category": "teorica"
  },
  {
    "id": 458,
    "type": "image",
    "question": "Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta señal?",
    "options": [
      "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
      "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
      "Avanzar."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b101.jpg",
    "category": "senales"
  },
  {
    "id": 459,
    "type": "image",
    "question": "Ante la siguiente situación, ¿qué es lo que se recomienda hacer?",
    "options": [
      "Utilizar las luces rompeniebla, lo cual es suficiente porque permite ampliar la visibilidad del conductor.",
      "Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia entre vehículos y utilizar las luces correspondientes del vehículo.",
      "Detenerse en la banquina hasta que levante el banco de niebla."
    ],
    "correct": 1,
    "weight": 1,
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b188.jpg",
    "category": "teorica"
  }
];