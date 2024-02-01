import React from "react";
import useForm from "../../Hooks/useForm";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { USER_POST } from "../../Api";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit() {
    event.preventDefault();
    console.log(username.value, email.value, password.value);
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Input label="Email" type="email" name="email" {...email} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
