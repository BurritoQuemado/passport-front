import { useParams } from "react-router-dom";
import { equipos } from "./equipmentInfo";

export default function EquipmentCard() {
    const { eqName } = useParams();

    const activeEq = equipos.find(equipo => equipo.name === eqName);

    return(
      <div className="relative bg-white">
        <div className="h-56 bg-gray-100 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="h-full w-full object-contain"
            src={activeEq.img}
            alt={activeEq.name + "_img"}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {activeEq.name}
            </h2>
            <p className="mt-6 text-lg font-semibold text-gray-500">
              {activeEq.highlight}
            </p>
            <p className="mt-6 text-lg text-gray-500">
              {activeEq.description}
            </p>
            <p className="mt-6 text-lg text-gray-500">
              {activeEq.description_extra}
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                {
                  activeEq.extras.map((extra) => (
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">{extra.title}</dt>
                    <dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight uppercase">{extra.data}</dd>
                  </div>
                  ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
}
