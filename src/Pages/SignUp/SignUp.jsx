import { Navigate, NavLink } from "react-router-dom";
import { useAdmission } from "../../utils/useAdmission";

export function SignUp() {
  const {
    handleChangeValueSignUp,
    handleSubmitSignUp,
    dataSignUp,
    resultMethod,
  } = useAdmission();

  const { name, password, email, avatar } = dataSignUp;
  const { postSignUp } = resultMethod;

  return (
    <>
      {postSignUp ? <Navigate to={`/`} /> : null}
      <section className="flex flex-col items-center justify-center w-full h-screen my-0 mx-auto lg:w-[75vw]">
        <form onSubmit={handleSubmitSignUp}>
          <section className="flex flex-col w-[75vw] h-auto py-8 rounded bg-colorBgInput lg:justify-center lg:items-center lg:h-[30rem] lg:w-[48rem]">
            <label>
              <section className="flex flex-col items-center justify-center">
                <input
                  className="p-2 m-3 border border-solid border-black placeholder:text-defaultColor"
                  onChange={handleChangeValueSignUp}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  required
                />
                <input
                  className="p-2 m-3 border border-solid border-black placeholder:text-defaultColor"
                  onChange={handleChangeValueSignUp}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required
                />
                <input
                  className="p-2 m-3 border border-solid border-black placeholder:text-defaultColor"
                  onChange={handleChangeValueSignUp}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  required
                />
                <input
                  className="p-2 m-3 border border-solid border-black placeholder:text-defaultColor"
                  onChange={handleChangeValueSignUp}
                  type="url"
                  name="avatar"
                  placeholder="Avatar"
                  value={avatar}
                  required
                />
              </section>
            </label>
            <button className="self-center w-36 h-12 p-2 m-2 font-semibold rounded bg-colorOptional text-littleWhite hover:opacity-60">
              Send Info
            </button>
            <span className="flex flex-row justify-center">
              Already have an account?
              <NavLink to={`/login`} className="ml-1 text-colorOptional">
                <span>Login in</span>
              </NavLink>
            </span>
          </section>
        </form>
      </section>
    </>
  );
}
