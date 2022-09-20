import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function LoginForm (props) {

  const initialValues = {
      email: '',
      password: '',
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>{
      const { name, value } = e.target;
      setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  };

  useEffect(() => {
      if(Object.keys(formErrors).length === 0 && isSubmit){
        fetch('https://pure-atoll-64455.herokuapp.com/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: formValues.email,
            password: formValues.password
          })
        })
        .then(response => response.json())
        .then(data => {
          props.setLoggedIn(true, data.id);
          props.signin();
        })
      }
  }, [formErrors])

  const validate = (values) => {
      const errors = {};
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if(!values.email) {
          errors.email = 'El correo es obligatorio';
      } else if (!regex.test(values.email)) {
          errors.email = 'Correo invalido';
      }

      if(!values.password) {
          errors.password = 'La contraseña es obligatoria';
      } else if (values.password.length <= 3) {
          errors.password = 'La contraseña debe tener al menos 4 caracteres';
      }
      return errors;
  }


    return(
      <>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electronico
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-azul_abalat focus:outline-none focus:ring-azul_abalat sm:text-sm"
              />
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-red-600">
              {formErrors.email}
            </label>
          </div>
    
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-azul_abalat focus:outline-none focus:ring-azul_abalat sm:text-sm"
              />
            </div>
            <label htmlFor="password" className="block text-sm font-medium text-red-600">
              {formErrors.password}
            </label>
          </div>
    
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button className="font-medium text-azul_abalat hover:text-azul_abalat">
                Recuperar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md border border-transparent bg-morado_abalat py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-azul_abalat focus:ring-offset-2"
          >
            Ingresar
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm">
            <Link to='/registro' className="font-medium text-azul_abalat hover:text-azul_abalat">
              No tengo una cuenta
            </Link>
          </div>
        </div>
      </>
      );
}

export default LoginForm;