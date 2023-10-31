import { useState } from "react";

import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

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

  return (
    <S.Container>
      <S.Div>
        <S.P>{koreanTime}</S.P>
        <S.Img src={A.container} alt="container" />
      </S.Div>
      <S.Div>
        <S.Hr />
        <S.Img src={A.group} alt="group" />
        <S.Hr />
      </S.Div>
      <S.Box>
        <S.H1 className="h1">Welcome</S.H1>
      </S.Box>
      <S.Form>
        <S.Text variant="h6" component="p">
          Name
        </S.Text>
        <S.Input type="text" variant="standard" />

        <S.Text variant="h6" component="p">
          Email
        </S.Text>
        <S.Input type="text" variant="standard" />

        <S.Text variant="h6" component="p">
          Password
        </S.Text>
        <S.Input
          type={showPassword ? "text" : "password"}
          variant="standard"
          helperText={
            <S.Icons
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <A.VisibilityOff /> : <A.Visibility />}
            </S.Icons>
          }
        />

        <S.Text variant="h6" component="p">
          Confirm Password
        </S.Text>
        <S.Input
          type={confirmPassword ? "text" : "password"}
          variant="standard"
          helperText={
            <S.Icons
              onClick={handleClickConfirmPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {confirmPassword ? <A.VisibilityOff /> : <A.Visibility />}
            </S.Icons>
          }
        />
        <S.Button>SignUp</S.Button>
        <S.Footer>
          <S.H3> Already have account?</S.H3>
          <S.LinkText to="/login">SignIn</S.LinkText>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default SignUp;
