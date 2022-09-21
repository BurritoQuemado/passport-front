import { useParams, useNavigate } from "react-router-dom";
import { equipos } from "./equipmentInfo";

export default function EquipmentCard() {
    const { eqName } = useParams();
    const navigate = useNavigate();
    const activeEq = equipos.find(equipo => equipo.name === eqName);

    const backToEquipmentList = () => {
      navigate('/equipos')
    }

    return(
      <>
        <div className="lg:relative bg-white">
          <div className="h-56 bg-gray-100 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
            <img
              className="h-full w-full object-contain"
              src={activeEq.img}
              alt={activeEq.name + "_img"}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:h-4/6">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {activeEq.name}
              </h2>
              <p className="mt-6 text-lg text-black">
                {activeEq.highlight}
              </p>
              <p className="mt-6 text-lg text-black">
                {activeEq.description}
              </p>
              { activeEq.description_extra?
                <p className="mt-6 text-lg text-black">
                  {activeEq.description_extra}
                </p>
                : null
              }
              <div className="mt-8 overflow-hidden">
                <dl className="-mx-8 -mt-8 flex flex-wrap">
                  {
                    activeEq.extras.map((extra) => (
                    <div key={extra.title} className="flex flex-col px-8 pt-8">
                      <dt className="order-2 text-base font-medium text-gray-500">{extra.title}</dt>
                      <dd className="order-1 text-2xl font-bold text-azul_abalat sm:text-3xl sm:tracking-tight uppercase">{extra.data}</dd>
                    </div>
                    ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className='justify-center mt-6'>
          <div className="px-4 py-3 text-center sm:px-6">
              <button
                  onClick={backToEquipmentList}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm lg:text-2xl lg:font-semibold font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
              >
                  Regresar
              </button>
          </div>
        </div>
      </>
    );
}
