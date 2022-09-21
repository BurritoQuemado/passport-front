import AlinityImg from '../media/equipos/alinity.png'
import IngeniusImg from '../media/equipos/ingenius.png'
import LuminexImg from '../media/equipos/luminex.png'
import MiSeqImg from '../media/equipos/miSeq.png'
import Pentra80Img from '../media/equipos/pentra80XL.png'
import ReveosImg from '../media/equipos/reveos.png'
import TrimaImg from '../media/equipos/trima.png'

export const equipos = [
  {
    name: "Alinity i",
    img: AlinityImg,
    highlight: "Alinity i está diseñado para realizar de manera más eficiente la serologia infecciosa,tanto en suero como en plasma, ocupando un espacio más pequeño, en comparacióncon otros sistemas diseñados para el mismo fin. En una especialidad de pruebas que puede requerir mucho tiempo del personal técnico, la automatización y la flexibilidad adicionales de Alinity i ayudarán a los bancos de sangre a mejorar su productividad y mantener los más altos niveles de precisión.",
    description: "El Alinity i pertenece a una nueva generación de auto analizadores para inmunoensayos; maximiza el rendimiento de las pruebas con tests de alta calidad para ofrecer resultados eficientes y precisos, de esta manera aumenta la productividad.",
    description_extra: "Nuestra amplia gama de ensayos diferenciados ofrece resultados uniformes y conmutables entre sistemas que ayudan…",
    extras: [ 
        {
            title: "Método",
            data: "Fotométrica, potenciometría"
        },
        {
            title: "Tipo de muestra",
            data: "Suero, plasma, sangre completa, orina."
        },
        {
            title: "Capacidad de muestras",
            data: "150"
        },
        {
            title: "Capacidad de reactivos",
            data: "Hasta 47"
        },
        {
            title: "Rendimiento máximo",
            data: "Hasta 200 pruebas/hora"
        },
        {
            title: "Diseño de ensayos",
            data: "Libre de interferencias por biotina"
        },
    ],
  },
  {
    name: "InGenius",
    img: IngeniusImg,
    highlight: "Dedicado a diagnóstico molecular que integra extracción, amplificación e interpretación de resultados; con la posibilidad de menú de análisis en laboratorios de bancos de células progenitoras hematopoyéticas (BCPH).",
    description: "Procesa de 1 a 12 muestras en pistas paralelas e independientes por PCR; esto le permite a los laboratorios crear y ejecutar paneles personalizados de ensayos combinando el menú de enfermedades infecciosas CE-IVD más grande disponible en un instrumento totalmente automatizado que va del tubo primario a la obtención de resultado.",
    extras: [ 
        {
            title: "Flexibilidad",
            data: "Hasta 12 muestras simultaneas"
        },
        {
            title: "Automatización",
            data: "Conectividad Bi-direcccional con LIS "
        },
        {
            title: "Rendimiento",
            data: "Resultados en 2h30"
        },
    ],
  },
  {
    name: "Luminex LX 200",
    img: LuminexImg,
    highlight: "El equipo Luminex LX-200 es un sistema de multiplexado que, en combinación con los productos LABType permiten la tipificación de ADN SSO inverso y proporcionan una resolución superior para la tipificación HLA A, B, C, DRB1, DRB3, DRB4, DRB5, DQA1, DQB1, DPA1 y DPB1 HLA.",
    description: "El análisis múltiple reduce drásticamente la mano de obra, los reactivos, las inconsistencias de reacción a reacción y el tiempo de ensayo asociado con un ensayo de formato multipozo, lo que lo convierte en una solución rentable. No es necesario el manejo de tiras o membranas, ni reacciones colorométricas, ni análisis visual de bandas o puntos de color.",
    description_extra: "Ventajas:",
    extras: [ 
        {
            title: "-Reduce drásticamente el tiempo de trabajo y procesamiento con la reacción \"todo en uno\"",
            data: ""
        },
        {
            title: "-Permite la resolución de ambigüedades sin un ensayo adicional",
            data: ""
        },
        {
            title: "-Adquisición automatizada de datos mediante análisis de flujo",
            data: ""
        },
        {
            title: "-Análisis de datos asistido por software y asignación de alelo HLA",
            data: ""
        },
        {
            title: "-Estabilidad posterior a la hibridación para el procesamiento por lotes",
            data: ""
        },
        {
            title: "-Solución ideal para laboratorios de bajo volumen y alto rendimiento",
            data: ""
        },
        {
            title: "Multiplexado",
            data: "Hasta 80 analitos por muestra"
        },
        {
            title: "Tiempo de lectura",
            data: "Hasta 12,800 pruebas/hora"
        },
        {
            title: "Intervalo dinámico",
            data: ">3.5 registros"
        },
        {
            title: "Inicio/apagados diarios",
            data: "<30 minutos"
        },
    ],
  },
  {
    name: "MiniSeq",
    img: MiSeqImg,
    highlight: "Los sistemas de illumina aprovechan el proceso químico de secuenciación por síntesis (SBS, sequencing by synthesis), una tecnología probada de secuenciación de nueva generación (NGS, next-generation sequencing)",
    description: "Aplicaciones para área de trasplantes: Tipificación de HLA por NGS, quimerismo, genotipificación eritrocitaria de grupos sanguíneos.",
    extras: [ 
        {
            title: "Tamaño",
            data: "Aproximadamente 0,19 m²"
        },
        {
            title: "Tiempo de procesamiento",
            data: "3 a 5 horas"
        },
        {
            title: "Aplicaciones",
            data: "Biblioteca MiSeq System"
        },
        {
            title: "Secuencia",
            data: "2 lecturas de extremos emparejados en 300 pb  en una sola ejecución"
        },
    ],
  },
  {
    name: "Pentra 80 XL",
    img: Pentra80Img,
    highlight: "El ABX Pentra XL 80 es un analizador de hematología de alto rendimiento que permite el análisis de sangre total para la selección del donador en el proceso del banco de sangre, cuenta con una estación de trabajo integrada y ofrece un rendimiento de hasta 80 muestras/hora.",
    description: "Proporciona informes precisos de pacientes, permite una validación personalizada para cumplir con los requisitos de su laboratorio. Habilita una extensión automática de linealidad en caso de muestras fuera de rango.",
    extras: [ 
        {
            title: "Parámetros",
            data: "Hasta 35 parámetros"
        },
        {
            title: "Tiempo de muestreo",
            data: "80 muestras/hora"
        },
        {
            title: "Resultados",
            data: "QC exportable al programa QCP"
        },
    ],
  },
  {
    name: "Reveos",
    img: ReveosImg,
    highlight: "Un nivel completamente nuevo en el procesamiento total de la sangre.",
    description: "La automatización puede mejorar las operaciones y brindar beneficios impresionantes a su centro de sangre. El sistema Reveos es una plataforma fácil de usar que automatiza e integra los pasos manuales del procesamiento de sangre completa: de principio a fin, desde sangre completa hasta concentrado de plaquetas. Además, puede procesar cuatro unidades de sangre completa en una sola corrida. Con solo tocar un botón, puede enfrentar fácilmente los desafíos que enfrentan los laboratorios de componentes en todo el mundo.",
    extras: [ 
        {
            title: "Tiempo de procesamiento",
            data: "18 a 20 minutos"
        },
        {
            title: "Versatilidad y Rendimiento",
            data: "Procesamiento de 2 o 3 componentes"
        },
    ],
  },
  {
    name: "Trima Accel",
    img: TrimaImg,
    highlight: "El único sistema de aféresis del mercado con la versatilidad que los centros de transfusión necesitan para cubrir todo el espectro de combinaciones de componentes.",
    description: "Incrementa con seguridad la tasa de calificación de donantes mediante el uso de sofisticadas opciones de configuración que permiten que el donante aporte más productos sin sobrepasarse, con controles que ayudan a asegurar el confort de todos los donantes.",
    extras: [ 
        {
            title: "Restablecimiento",
            data: "<30 minutos"
        },
        {
            title: "Número de alertas",
            data: "Hasta 50% menos"
        },
        {
            title: "Riesgos",
            data: "Reducción en el riesgo de contaminación de los productos y de sepsis en pacientes"
        },
    ],
  },
]