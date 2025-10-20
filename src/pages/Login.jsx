import "../style.sass";
import "../styles/Login.sass";

// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import Logo from "../img/timeline.png"

// import emailjs from "@emailjs/browser";

const formSchema = z.object({
  email: z.string().min(1, { 
    message: "Campo obrigatório." 
  }),

  password: z.string().min(1, { 
    message: "Campo obrigatório." 
  })
});

const LoginEmail = () => {
  // const navigate = useNavigate();

const DEFAULT_USER = {
  username: import.meta.env.VITE_DEFAULT_USER,
  password: import.meta.env.VITE_DEFAULT_PASS,
};

const [type, setType] = useState("password");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    dispatch(loginStart());

    try {
      // Usuário e senha padrão
      if (
        data.email === DEFAULT_USER.username &&
        data.password === DEFAULT_USER.password
      ) {
        dispatch(loginSuccess({ username: data.email }));
        setErrorLogin(false);
      } else {
        dispatch(loginFailure());
        setErrorLogin(true);
      }
    } catch {
      dispatch(loginFailure());
      setErrorLogin(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside id="Login" className="noheaderMenu">   
      <Helmet>
        <title>Entrar | Revista Timeline</title>
      </Helmet>
   
      <div className="headerBack bg-1">
        <img src={Logo} alt="" />
        
        {/* <div onClick={() => navigate(-1)} className="hbButton col-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div> */}
      </div>

      <div className="Main">
        <form className="grid w-full gap-5" onSubmit={handleSubmit(onSubmit)}>
          <h1>Entrar com sua conta</h1>
          <hr />

          {errorLogin &&
          <div className="w-full">
            <div className="info-alert">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Usuário e/ou senha inválido.
            </div>
          </div>}

          <div className="flex flex-col gap-2">
            <Label>Usuário</Label>
            <Input id="email" {...register("email")} type="text" />
            <div className="detailsInput">
              <label className="error-text">{errors.email && <span>Campo obrigatório.</span>}</label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Senha</Label>
            <div className="passwordInput">
              <Input id="password" {...register("password")} type={type} />
              {type==="password"?(
                <div className="buttonHidden" onClick={()=>setType("text")}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </div>
              ):(
                <div className="buttonHidden" onClick={()=>setType("password")}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="detailsInput">
              <label className="error-text">{errors.password && <span>Campo obrigatório.</span>}</label>
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Entrar
          </Button>

          {/* <div className="flex justify-center">
            <Link to="/auth/reset-password" className="w-full">
              <Button variant="outline">
                Esqueci minha senha
              </Button>
            </Link>
          </div>

          <hr />
          <div className="flex justify-center">
            <Link to={`/auth/signup${queryParams ? `?${queryParams}` : ''}`} className="w-full">
              <Button variant="outline">
              Crie sua conta
              </Button>
            </Link>
          </div> */}
        </form>
      </div>
    </aside>
  );
}

export default LoginEmail;
