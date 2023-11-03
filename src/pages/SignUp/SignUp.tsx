import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signupAPI } from "../../apis";
import { IAuthProps } from "../../@types";

import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [userInfo, setUserInfo] = useState<IAuthProps>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userInfo.password !== userInfo.password2) {
      alert("회원가입에 실패하였습니다");
      return;
    }

    try {
      const response = await signupAPI(userInfo);
      if (response) {
        alert("회원가입 되었습니다");
        navigate("/login");
        setUserInfo({
          name: "",
          email: "",
          password: "",
          password2: "",
        });
      }
    } catch (error) {
      console.log(error);
      // throw new Error(error.response.data.message);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleClickConfirmPassword = () => {
    setConfirmPassword((confirm) => !confirm);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const koreanTimeFormatter = new Intl.DateTimeFormat("ko-KR", C.options);
  const koreanTime = koreanTimeFormatter.format(new Date());

  console.log(userInfo);
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
        <S.H1 className="h1">Welcome</S.H1>
      </S.Box>

      <S.Form onSubmit={onSubmit}>
        <S.Div className="input__box">
          <S.Text variant="h6" component="p">
            Name
          </S.Text>
          <S.Input
            type="text"
            variant="standard"
            name="name"
            value={userInfo.name}
            onChange={onChange}
          />
        </S.Div>
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

        <S.Div className="input__box">
          <S.Text variant="h6" component="p">
            Confirm Password
          </S.Text>
          <S.Input
            type={confirmPassword ? "text" : "password"}
            variant="standard"
            name="password2"
            value={userInfo.password2}
            onChange={onChange}
            helperText={
              <S.Icons
                className="icons"
                onClick={handleClickConfirmPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {confirmPassword ? <A.VisibilityOff /> : <A.Visibility />}
              </S.Icons>
            }
          />
        </S.Div>
        <S.Button>Sign Up</S.Button>
        <S.Footer>
          <S.H3> Already have account?</S.H3>
          <S.LinkText to="/login">SignIn</S.LinkText>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default SignUp;
