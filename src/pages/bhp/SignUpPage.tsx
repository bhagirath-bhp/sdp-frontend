import { Link } from "react-router-dom";
import AnyForm from "../../components/bhp/AnyForm";

const SignUpPage = () => {
  const fields = [
    {
      label: "CompanyName",
      type: "text",
      className: "",
      value: "",
    },
    {
      label: "OwnerName",
      type: "text",
      className: "",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      className: "",
      value: "",
    },
    {
      label: "Phone",
      type: "number",
      className: "",
      value: "",
    },
    {
      label: "Address",
      type: "text",
      className: "",
      value: "",
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
      <h1 className="bhp-title">Sign Up</h1>
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
