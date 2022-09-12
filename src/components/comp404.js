import { Link } from "react-router-dom";

export default function comp404 () {
    return (
        <>
            <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex flex-shrink-0 justify-center">
                    <Link to="/" className="inline-flex">
                    <span className="sr-only">logo_abalat</span>
                    <img
                        className="h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                    />
                    </Link>
                </div>
                <div className="py-16">
                    <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Error 404, pagina no encontrada.</h1>
                    <p className="mt-2 text-base text-gray-500">Lo sentimos no conseguimos encontrar la página que buscas.</p>
                    <div className="mt-6">
                        <Link to="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                        Regresar al Inicio
                        <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    </div>
                    </div>
                </div>
            </main>
        </>
    );
}