import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsEnvelope, BsLock } from "react-icons/bs";

const LoginForm = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El correo ingresado no es válido")
        .required("Por favor, ingresa un correo electrónico válido"),
      password: Yup.string()
      .required("Por favor ingrese una contraseña"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsEnvelope className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps("email")}
            className={`block w-full pl-10 pr-3 py-2 border-b-2 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-400"
            } focus:outline-none focus:border-primary transition duration-500`}
            placeholder="correo@ejemplo.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps("password")}
            className={`block w-full pl-10 pr-3 py-2 border-b-2 ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-400"
            } focus:outline-none focus:border-primary transition duration-500`}
            placeholder="Contraseña"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs">{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded transition duration-500"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
