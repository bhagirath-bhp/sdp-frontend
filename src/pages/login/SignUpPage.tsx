import { Link } from "react-router-dom";
import AnyForm from "../../components/AnyForm";

const SignUpPage = () => {
  const fields = [
    {
      label: "Name",
      type: "text",
      className: "",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      className: "",
      value: "",
      onChange: (value: string) => console.log("Email:", value),
    },
    {
      label: "Image",
      type: "file",
      className: "",
      value: "",
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
      <h1 className="title">Sign Up</h1>
      <AnyForm fields={fields} formType="signup" />
      <p className="my-5">
        Signed Up Already? &nbsp;
        <Link to="/signin" className="text-blue underline">
          SignIn
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
