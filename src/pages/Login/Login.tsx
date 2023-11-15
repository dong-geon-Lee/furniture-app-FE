import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/features/users/usersSlice";

import { ILoginProps } from "../../@types";
import { signinAPI } from "../../apis";

import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState<ILoginProps>({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInfo.email || !userInfo.password) {
      alert("로그인에 실패하였습니다");
      return;
    }

    try {
      const token = await signinAPI(userInfo);

      if (token) {
        dispatch(loginUser(token));
        localStorage.setItem("token", JSON.stringify(token));

        alert("로그인 되었습니다");
        navigate("/home");
        setUserInfo({ email: "", password: "" });
      }
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  return (
    <S.Container>
      <S.Div className="header">
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>
      <S.Div className="header__logo">
        <S.Hr />
        <S.Img src={A.group} alt="group" />
        <S.Hr />
      </S.Div>
      <S.Box>
        <S.H1>Hello !</S.H1>
        <S.H1 className="h1">Welcome Back</S.H1>
      </S.Box>
      <S.Form onSubmit={onSubmit}>
        <S.Div className="input__box">
          <S.Text variant="h6" component="p">
            Email
          </S.Text>
          <S.Input
            type="email"
            variant="standard"
            name="email"
            value={userInfo.email}
            onChange={onChange}
          />
        </S.Div>
        <S.Div className="input__box">
          <S.Text variant="h6" component="p">
            Password
          </S.Text>
          <S.Input
            type={showPassword ? "text" : "password"}
            variant="standard"
            name="password"
            value={userInfo.password}
            onChange={onChange}
            helperText={
              <S.Icons
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <A.VisibilityOff /> : <A.Visibility />}
              </S.Icons>
            }
          />
        </S.Div>

        <S.Footer>
          <S.Link to="/">Forgot Password</S.Link>
          <S.Button type="submit">Log in</S.Button>
          <S.H2 to="/signup">Sign up</S.H2>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default Login;
