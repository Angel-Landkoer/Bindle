import { useState, useEffect } from "react";

export function useAdmission() {
  const [storageState, setStorageState] = useState({
    local: Boolean(localStorage.user),
    session: Boolean(sessionStorage.token),
  });

  const [resultMethod, setResultMethod] = useState({
    getLogin: false,
    postLogin: false,
    postSignUp: false,
  });

  const [dataSignUp, setDataSignUp] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "",
  });

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const reset = () => {
    setDataSignUp({
      ...dataSignUp,
      name: "",
      password: "",
      email: "",
      avatar: "",
    });

    setDataLogin({ ...dataLogin, email: "", password: "" });
  };

  useEffect(() => {
    // Login Data User
    async function getDataLogin() {
      const tokenSession = JSON.parse(sessionStorage.getItem("token"));
      let storage = {
        correct: tokenSession.access_token,
        error: tokenSession.statusCode,
      };

      const { correct, error } = storage;


      const option = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${correct}`,
        },
      };

      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          option
        );
        const data = await response.json();

        const userLoginLocalJSON = JSON.stringify(data);
        setStorageState({ ...storageState, local: true });
        setResultMethod({ ...resultMethod, getLogin: true });

        localStorage.setItem("user", userLoginLocalJSON);
      } catch (error) {
        console.log("ErrorUserDontLogin: ", error);
      }
    }

    if (storageState.session) {
      getDataLogin();
    }
  }, [storageState.session]);

  const handleChangeValueSignUp = (e) => {
    setDataSignUp({ ...dataSignUp, [e.target.name]: e.target.value });
  };

  // Sign Up
  async function handleSubmitSignUp(e) {
    e.preventDefault();

    try {
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify({
          email: dataSignUp.email,
          name: dataSignUp.name,
          password: dataSignUp.password,
          avatar: dataSignUp.avatar,
        }),
      };

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/users/",
        option
      );
      const data = await response.json();
      setResultMethod({ ...resultMethod, postSignUp: true });
      // navigate(`/`);
      reset();
    } catch (error) {
      console.log("ErrorSignUp: ", error);
      reset();
    }
  }

  const handleChangeValueLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  // Login
  async function handleSubmitLogin(e) {
    e.preventDefault();

    const option = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: dataLogin.email,
        password: dataLogin.password,
      }),
    };

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        option
      );

      const data = await response.json();

      const { statusCode, access_token } = data;

      if (statusCode >= 400) {
        alert("NO estas autorizado");
      }

      if (access_token) {
        sessionStorage.setItem("token", JSON.stringify(data));
        setStorageState({ ...storageState, session: true });
        setResultMethod({ ...resultMethod, postLogin: true });
      }

      reset();
    } catch (error) {
      console.log("ErrorLogin: ", error);
      reset();
    }
  }

  return {
    handleSubmitSignUp,
    handleChangeValueSignUp,
    handleSubmitLogin,
    handleChangeValueLogin,
    setStorageState,
    dataSignUp,
    dataLogin,
    storageState,
    resultMethod,
  };
}
