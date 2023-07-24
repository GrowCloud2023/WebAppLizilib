import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { toast } from "sonner";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Auth.signIn(email, password);
      toast.success("Se ha iniciado sesión correctamente");
      navigate("/dashboard");
      setTimeout(() => {
        toast.success("Bienvenido :)!");
      }, 4000);
    } catch (error) {
      console.log("Error al iniciar sesión:", error);
      toast.error("Oh:(, ha ocurrido un error al iniciar sesión", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg">
        <div className="flex justify-center mb-8">
          <Link to="/">
            <h1 className="text-6xl font-bold text-primary">LIZILIB</h1>
          </Link>
        </div>
        <h1 className="text-3xl text-gray-900 mb-8 flex justify-center">
          Inicia sesión en tu cuenta
        </h1>
        <div className="bg-white w-full rounded-xl p-10 mb-8">
          <div className="flex flex-col items-center gap-1 mb-8">
            <p className="text-gray-400 text-md font-bold">
              Introduce tu dirección de correo electrónico de trabajo
            </p>
          </div>
          <LoginForm handleSubmit={handleSubmit} />
        </div>

        <div className="my-10">
          <p className="text-center relative text-gray-500 bg-white before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            O inicia sesión con
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 p-2 px-4 rounded-full hover:bg-gray-200 transition-all duration-500"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                width="20"
                height="20"
              />
              <span className="ml-2">Ingresar con Google</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span>
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-green-600  transition-all duration-500"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
