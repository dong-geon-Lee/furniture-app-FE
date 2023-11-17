import React, { useEffect, useState } from "react";
import * as S from "./styles";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TopHeader from "../../components/TopHeader/TopHeader";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { totalCart } from "../../store/features/carts/cartsSlice";
import { getUser } from "../../store/features/users/usersSlice";
import { RootState } from "../../store";

const steps = [
  {
    label: "주문자 정보",
    type: "order",
  },
  {
    label: "배송 정보",
    type: "shipping",
  },
  {
    label: "결제 정보",
    type: "payment",
  },
  {
    label: "결제 수단",
    type: "point",
  },
];

const ShippingSteps = () => {
  const { token, user } = useSelector((state: RootState) => state.users);
  const { totalPrice, shipping, cartItems } = useSelector(
    (state: RootState) => state.carts
  );

  const [activeStep, setActiveStep] = useState(0);
  const [orderInfo, setOrderInfo] = useState<any>({
    address: "",
    postcode: "",
    method: "",
    userPhone: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const handleNext = (finalStep: boolean) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (finalStep) handleSubmit();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNavigate = () => {
    navigate("/payments");
  };

  const handleSubmit = async () => {
    console.log("작동");
    const response = await axios.post("http://localhost:5000/shippings", {
      address: orderInfo.address,
      postcode: parseInt(orderInfo.postcode),
      method: orderInfo.method,
      userPhone: orderInfo.userPhone,
      userName: user.name,
      userEmail: user.email,
      productPrice: totalPrice,
      productShip: shipping,
      productTotal: totalPrice + shipping,
    });

    console.log(response.data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR");

  console.log(orderInfo);

  // useEffect(() => {
  //   const fetchDatas = async () => {
  //     const response = await axios.get("http://localhost:5000/carts/me", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     const total = response.data.reduce(
  //       (acc: number, cur: any) => acc + cur.product.price,
  //       0
  //     );

  //     dispatch(totalCart(total));
  //     console.log(totalPrice);
  //   };
  //   fetchDatas();
  // }, [dispatch, token, cartItems, totalPrice]);

  useEffect(() => {
    const fetchDatas = async () => {
      const { data } = await axios.get("http://localhost:5000/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getUser(data));
    };
    fetchDatas();
  }, [dispatch, token]);

  return (
    <S.Container>
      <TopHeader path="carts" title="정보입력" />
      <S.Div className="box">
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{
            p: "2rem",

            ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
              fontSize: "1.8rem",
            },
            ".css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
              fontSize: "1.8rem",
            },
            ".css-117w1su-MuiStepIcon-text": {
              fontSize: "1.8rem",
            },
            ".css-14cbqj5-MuiStepLabel-root .css-1hv8oq8-MuiStepLabel-label.Mui-active":
              { fontSize: "1.4rem" },
            ".css-8t49rw-MuiStepConnector-line": {
              minHeight: "9rem",
            },
            ".css-1hv8oq8-MuiStepLabel-label.Mui-completed": {
              fontSize: "1.4rem",
              lineHeight: "2rem",
            },

            ".css-1hv8oq8-MuiStepLabel-label": { fontSize: "1.2rem" },
          }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                sx={{
                  ".css-1hv8oq8-MuiStepLabel-label.Mui-active": {
                    fontSize: "1.6rem",
                    fontFamily: "Nunito Sans",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                  },
                }}
                optional={
                  index === 2 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {step.type === "order" ? (
                  <>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label">이름</S.Label>
                      <S.P className="contents__text">{user?.name}</S.P>
                    </S.Div>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label">이메일</S.Label>
                      <S.P className="contents__text">{user?.email}</S.P>
                    </S.Div>

                    <S.Div className="contents__grid">
                      <S.Label className="contents__label">전화번호</S.Label>
                      <S.Input
                        autoComplete="off"
                        type="text"
                        variant="outlined"
                        className="contents__input"
                        name="userPhone"
                        value={orderInfo.userPhone}
                        onChange={onChange}
                        placeholder="ex) 010-1234-5678"
                      />
                    </S.Div>
                  </>
                ) : step.type === "shipping" ? (
                  <>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label">주소</S.Label>
                      <S.Input
                        autoComplete="off"
                        type="text"
                        variant="outlined"
                        className="contents__input"
                        name="address"
                        value={orderInfo.address}
                        onChange={onChange}
                        placeholder="ex) 서울특별시 마포구 양화진길"
                      />
                    </S.Div>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label">우편번호</S.Label>
                      <S.Input
                        autoComplete="off"
                        type="text"
                        variant="outlined"
                        className="contents__input"
                        name="postcode"
                        value={orderInfo.postcode}
                        onChange={onChange}
                        placeholder="ex) 07800"
                      />
                    </S.Div>
                  </>
                ) : step.type === "payment" ? (
                  <>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label-price">
                        상품가격
                      </S.Label>
                      <S.P className="contents__price">
                        {formattedPrice.format(totalPrice)}원
                      </S.P>
                    </S.Div>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label-price">
                        배송비
                      </S.Label>
                      <S.P className="contents__price">
                        {formattedPrice.format(shipping)}원
                      </S.P>
                    </S.Div>
                    <S.Div className="contents__grid">
                      <S.Label className="contents__label-price">
                        총 결제금액
                      </S.Label>
                      <S.P className="contents__price">
                        {formattedPrice.format(totalPrice + shipping)}원
                      </S.P>
                    </S.Div>
                  </>
                ) : (
                  <>
                    <S.Div className="contents__grid-payment">
                      <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="method"
                          value={orderInfo.method}
                          onChange={onChange}
                        >
                          <FormControlLabel
                            value="카카오페이"
                            control={<Radio />}
                            label="카카오페이"
                          />
                          <FormControlLabel
                            value="네이버페이"
                            control={<Radio />}
                            label="네이버페이"
                            disabled
                          />
                        </RadioGroup>
                      </FormControl>
                    </S.Div>
                  </>
                )}

                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={() => handleNext(index === steps.length - 1)}
                      sx={{ mt: 1, mr: 1, fontFamily: "inherit" }}
                    >
                      {index === steps.length - 1 ? "완료" : "계속하기"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{
                        mt: 1,
                        mr: 1,
                        fontFamily: "inherit",
                      }}
                    >
                      뒤로가기
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper
            square
            elevation={4}
            sx={{
              mt: "10rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
              alignContent: "center",
              m: "8rem 2rem",
            }}
          >
            <S.H1>배송정보 입력완료!</S.H1>
            <S.Div>
              <Button
                onClick={handleReset}
                sx={{
                  mt: 1,
                  mb: 1,
                  mr: 5,
                  fontSize: "1.4rem",
                  fontFamily: "inherit",
                  color: "gray",
                }}
              >
                다시 입력하기
              </Button>
              <Button
                onClick={() => handleNavigate()}
                sx={{
                  mt: 1,
                  mb: 1,
                  mr: 0,
                  fontSize: "1.4rem",
                  fontFamily: "inherit",
                  color: "blue",
                }}
              >
                결제페이지 이동
              </Button>
            </S.Div>
          </Paper>
        )}
      </S.Div>
    </S.Container>
  );
};

export default ShippingSteps;
