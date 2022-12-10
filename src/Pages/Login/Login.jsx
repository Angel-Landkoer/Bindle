import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAdmission } from "../../utils/useAdmission";

export function Login() {
  const { dataLogin, storageState, handleChangeValueLogin, handleSubmitLogin } =
    useAdmission();

  const { session, local } = storageState;

  const { password, email } = dataLogin;

  return (
    <>
      {" "}
      {session && local ? <Navigate to={`/`} /> : null}
      <main>
        <section className="flex flex-col w-2/3 h-screen py-10 my-0 mx-auto lg:w-[75vw] lg:items-center lg:justify-center">
          <form onSubmit={handleSubmitLogin}>
            <section className="flex flex-col justify-center h-[75vh] rounded-lg bg-colorBgInput lg:h-[30rem] lg:w-[48rem]">
              <label>
                <section className="flex flex-col items-center justify-center">
                  <input
                    className="p-2 m-3 border border-solid border-black placeholder:text-defaultColor lg:p-3 lg:m-5"
                    onChange={handleChangeValueLogin}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    required
                  />
                  <input
                    className="p-2 m-3 border border-solid border-black placeholder:text-defaultColor lg:p-3 lg:m-5"
                    onChange={handleChangeValueLogin}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    required
                  />
                </section>
              </label>
              <button className="self-center w-36 h-12 p-2 m-2 font-semibold rounded bg-colorOptional text-littleWhite hover:opacity-60">
                Send Info
              </button>
              <span className="flex flex-row justify-center">
                Don't have an account yet?
                <NavLink to={`/signUp`} className="ml-1 text-colorOptional">
                  <span>Register here</span>
                </NavLink>
              </span>
            </section>
          </form>
        </section>
      </main>
    </>
  );
}
