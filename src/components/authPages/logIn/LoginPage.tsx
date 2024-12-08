import bgImg from "../../../assets/images/auth/bgImg.png";
import IKitchenLogo from "../../../assets/images/general/IKitchenLogo.png";
import facebookIcon from "../../../assets/images/auth/facebookIcon.png";
import googleIcon from "../../../assets/images/auth/googleIcon.png";
import { useForm } from "react-hook-form";

type form = {
  nickName: string;
  email: string;
  password: string;
};

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>();

  function submitFormData(data: form) {
    console.log(data);
  }

  const labelTitleStyle = "text-neutral-700 text-xl font-normal mb-1";
  const inputStyle =
    "w-full h-16 pl-6 pr-60 py-6 bg-white rounded-lg border border-zinc-500/70 ";
  const socialButtonStyle =
    "w-80 h-16 flex justify-center items-center bg-white rounded-lg border border-neutral-400 mr-3 hover:bg-slate-200";
  return (
    <div className="flex">
      <div>
        <img src={bgImg} alt="loginBackground" className="opacity-70" />
        <div className="absolute top-64 left-52">
          <p className="text-white text-4xl font-semibold w-72 h-96">
            Embark on a culinary journey with us! Sign up to unlock a world of
            delicious recipes, and personalized cooking experiences.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="">
          <div>
            <img src={IKitchenLogo} alt="IKitchenLogo" className="w-44 h-24" />

            <h1 className="text-black text-5xl font-semibold mt-7 mb-5">
              Create an Account
            </h1>
          </div>
          <div>
            <div className="h-20 flex ">
              <button className={socialButtonStyle}>
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="w-10 h-10"
                />
                <h1 className="text-stone-900 text-xl font-bold ml-3">
                  Sign up with Facebook
                </h1>
              </button>
              <button className={socialButtonStyle}>
                <img src={googleIcon} alt="googleIcon" className="w-10 h-10" />
                <h1 className="text-stone-900 text-xl font-bold ml-3">
                  Sign up with Google
                </h1>
              </button>
            </div>
            <div className="flex justify-center mr-3">
              <div className="h-[1.5px] w-72 bg-neutral-200 mt-6 mr-1"></div>

              <div className="flex justify-center text-neutral-400 text-2xl font-normal mt-2 mb-2">
                OR
              </div>
              <div className="h-[1.5px] w-72   bg-neutral-200 mt-6 ml-1" ></div>
            </div>

            <form onSubmit={handleSubmit(submitFormData)}>
              <div className="flex flex-col mb-4">
                <label htmlFor="NickName" className={labelTitleStyle}>
                  NickName
                </label>
                <input
                  type="text"
                  id="NickName"
                  placeholder="Enter your nickname"
                  className={inputStyle}
                  {...register("nickName", {
                    required: "Enter nickname",
                    minLength: { value: 4, message: "At least 4 symbols" },
                  })}
                />
                {errors.nickName && (
                  <p className="text-red-500 font-medium">
                    {errors.nickName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className={labelTitleStyle}>
                  E-mail Address
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your e-mail"
                  className={inputStyle}
                  {...register("email", { required: "Enter email" })}
                />
                {errors.email && (
                  <p className="text-red-500 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="password" className={labelTitleStyle}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className={inputStyle}
                  {...register("password", {
                    required: "Enter password",
                    minLength: { value: 8, message: "At least 8 symbols" },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 font-medium">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-16 pt-4 pb-4 mb-4 bg-green-800 rounded-lg justify-center items-center inline-flex text-center text-white text-2xl font-medium"
              >
                Create Account
              </button>
            </form>
            <div className="flex">
              <p className="text-zinc-600 text-xl font-normal mr-2">
                Already have an account?
              </p>
              <button className="text-green-800 text-xl font-semibold ">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
