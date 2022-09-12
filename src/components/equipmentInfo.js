import AlinityImg from '../media/equipos/alinity.jpeg'
import IngeniusImg from '../media/equipos/ingenius.png'
import LuminexImg from '../media/equipos/luminex.jpeg'
import MiSeqImg from '../media/equipos/miSeq.webp'
import Pentra80Img from '../media/equipos/pentra80XL.jpg'
import ReveosImg from '../media/equipos/reveos.jpeg'
import TrimaImg from '../media/equipos/trima.png'

export const equipos = [
  {
    name: "Alinity",
    img: AlinityImg,
    highlight: "Bioquímica clínica, inmunoensayos y sistemas integrados para transformar su laboratorio.",
    description: "Maximiza el rendimiento de las pruebas con ensayos de alta calidad para ofrecer resultados eficientes y precisos y aumentar la productividad.",
    description_extra: "Nuestra amplia gama de ensayos diferenciados ofrece resultados uniformes y conmutables entre sistemas que ayuda en la toma de decisiones clínicas y se refleja en los resultados de los pacientes. Los ensayos de la serie Alinity ci-series están armonizados con las directrices de CLSI, lo que garantiza definiciones claras de parámetros de rendimiento y aprovechan la misma tecnología que Abbott desarrolló para sus sistemas heredados ARCHITECT, lo que permite obtener resultados conmutables entre plataformas.",
    extras: [ 
        {
            title: "Método",
            data: "Fotométrica, potenciometría"
        },
        {
            title: "Capacidad de muestras",
            data: "150"
        },
        {
            title: "Rendimiento máximo",
            data: "1350 pruebas/hora"
        },
    ],
    sellado: false,
  },
  {
    name: "InGenius",
    img: IngeniusImg,
    highlight: "La solución fácil de usar de muestra a resultado dedicada a Diagnóstico Molecular que integra extracción, amplificación e interpretación de resultados con una flexibilidad sin precedentes y una posibilidad de menú de análisis.",
    description: "Procesa de 1 a 12 muestras en pistas paralelas e independientes. Cuenta con un proceso de extracción universal con PCR múltiple e independiente que permite a los laboratorios crear y ejecutar paneles personalizados de ensayos a pedido.",
    description_extra: "Ofrece a los laboratorios una capacidad de menú ilimitada, combinando el menú de enfermedades infecciosas CE-IVD más grande disponible en un instrumento de muestra a resultado, con una capacidad abierta real.",
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
    sellado: false,
  },
  {
    name: "Luminex",
    img: LuminexImg,
    highlight: "Establece la norma del multiplexado, proporcionando la capacidad de realizar hasta 100 pruebas diferentes en un único volumen de reacción en una plataforma basada en la citometría de flujo.",
    description: "Es compatible con todos los inmunoensayos multiplex Invitrogen ProcartaPlex y los ensayos de expresión génica multiplex Invitrogen QuantiGene Plex.",
    extras: [ 
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
    sellado: false,
  },
  {
    name: "MiSeq",
    img: MiSeqImg,
    highlight: "Velocidad y simplicidad para la resecuenciación selectiva y la secuenciación de genomas pequeños",
    description: "Ofrece la primera plataforma de secuenciación de ADN a datos que integra la generación de grupos, la amplificación, la secuenciación y el análisis de datos en un único instrumento",
    description_extra: "Por sus pequeñas dimensiones  encaja en prácticamente cualquier entorno de laboratorio. Aprovecha el proceso químico de secuenciación por síntesis (SBS, sequencing by synthesis) de Illumina, una tecnología de secuenciación de nueva generación (NGS, next-generation sequencing) probada y que ha permitido generar más del 90 % de los datos de secuenciación en todo el mund",
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
    sellado: false,
  },
  {
    name: "Pentra 80 XL",
    img: Pentra80Img,
    highlight: "Plataforma hematológica compacte y fiable con reticulocitos realizados por fluorescencia",
    description: "Facilida el diagnóstico gracias al completo estudio reticulocitario, ahorra tiempo e incrementa su eficiencia, total compatilbilidad con las soluciones de HORIBA medical para gran volumen.",
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
    sellado: false,
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
    sellado: false,
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
    sellado: false,
  },
]