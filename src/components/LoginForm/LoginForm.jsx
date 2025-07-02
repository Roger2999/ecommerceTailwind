import { useForm } from "react-hook-form";
import "./LoginForm.css";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="email-container">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              placeholder="Ejemplo: pepe@gmail.com"
              type="email"
              {...register("email", {
                required: "Campo obligatorio",
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="password-container">
            <label htmlFor="password">Contraseña: </label>
            <input
              id="password"
              placeholder="Introduce la contraseña..."
              type="password"
              {...register("password", {
                required: "Campo obligatorio",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener un mínimo de 8 caracteres",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};
