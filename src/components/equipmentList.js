import AlinityImg from '../media/equipos/alinity.jpeg'
import IngeniusImg from '../media/equipos/ingenius.png'
import LuminexImg from '../media/equipos/luminex.jpeg'
import MiSeqImg from '../media/equipos/miSeq.webp'
import Pentra80Img from '../media/equipos/pentra80XL.jpg'
import ReveosImg from '../media/equipos/reveos.jpeg'
import TrimaImg from '../media/equipos/trima.png'

const equipos = [
  {
    name: "Alinity",
    img: AlinityImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
  {
    name: "Ingenius",
    img: IngeniusImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
  {
    name: "Luminex",
    img: LuminexImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
  {
    name: "miSeq",
    img: MiSeqImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
  {
    name: "Pentra 80 XL",
    img: Pentra80Img,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
  {
    name: "Reveos",
    img: ReveosImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
  {
    name: "Trima Accel",
    img: TrimaImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    sellado: false,
  },
]
  
export default function EquipmentList() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equipos participantes</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
          {equipos.map((equipo) => (
            <div key={equipo.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-contain" src={equipo.img} alt={equipo.name + "_thumb"} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{equipo.name}</p>
                  <p className="mt-3 text-base text-gray-500">{equipo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
