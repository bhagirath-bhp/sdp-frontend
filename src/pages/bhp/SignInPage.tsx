import { Link } from "react-router-dom";
import AnyForm from "../../components/bhp/AnyForm";
// import "../../bhp.css"

const SignInPage = () => {
  const fields = [
    {
      label: "Email",
      type: "email",
      className: "",
      value: "",
      onChange: (value: string) => console.log("Email:", value),
    },
    {
      label: "Password",
      type: "password",
      className: "",
      value: "",
      onChange: (value: string) => console.log("Email:", value),
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bhp-title">Sign In</h1>
      <AnyForm fields={fields} formType="signin"/>
      <p className="my-5">
        Not Signed Up Yet? &nbsp;
        <Link to="/signup" className="text-blue underline">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
