import { equipos } from "./equipmentInfo"
import { Link } from "react-router-dom"
import ImgSello from '../media/sello_test.png'
  
export default function EquipmentList() {
  return (
    <>
        <div className="text-center px-4 pt-16 pb-10 sm:px-2 lg:px-8 lg:pt-24 lg:pb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Equipos participantes</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-fit lg:grid-cols-2  px-4 pb-20 sm:px-2 lg:px-8 lg:pt-12 lg:pb-28">
          {equipos.map((equipo) => (
            <div key={equipo.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-contain" src={equipo.img} alt={equipo.name + "_thumb"} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link to={"/equipo/"+equipo.name}>
                    <p className="text-xl font-semibold text-gray-900 uppercase">{equipo.name}</p>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">{equipo.highlight}</p>
                </div>
              </div>
              { equipo.sellado ? <img src={ImgSello} alt="sello_asistencia" className="h-48 w-full object-contain" /> : null }
            </div>
          ))}
        </div>
    </>
  )
}
