import RegisterForm from "../components/registerForm";

export default function RegisterPage(){
    return(
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Obten tu Pasaporte Abalat</h2>
                </div>

                <div className="mt-8 mx-auto w-full max-w-md lg:mx-0 lg:w-screen lg:max-w-full">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </>
    );
}