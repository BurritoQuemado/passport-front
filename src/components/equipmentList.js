import { equipos } from "./equipmentInfo"
import { Link } from "react-router-dom"
import ImgSello from '../media/sello.png'
  
export default function EquipmentList(props) {

  const user_list = props.equipment_list;

  const equipments = equipos.map(equipment => {
    for (let i = 0; i < user_list.length; i++){
      if(equipment.name === user_list[i].equipment_name){
        equipment.sellado = true;
        break;
      } else {
        equipment.sellado = false;
      }
    }
    return equipment;
  });

  return (
    <>
        <div className="text-center px-4 pt-16 pb-10 sm:px-2 lg:px-8 lg:pt-24 lg:pb-10">
          <h2 className="text-3xl font-bold tracking-tight text-morado_abalat sm:text-4xl uppercase">Equipos participantes</h2>
        </div>
        <div className="px-4 py-3 text-right sm:px-6 ">
          <div className="rounded-md shadow">
            <Link
              to="/escanear"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-azul_abalat px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
            >
              Escanear QR
            </Link>
          </div>
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
                    <p className="text-xl font-semibold text-azul_abalat">{equipo.name}</p>
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
