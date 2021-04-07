import React from "react";
import { Grid, MenuItem, Snackbar } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccRadio,
  BccRadioGroup,
  BccButton,
  BccFormControl,
  BccFormControlLabel,
  BccLink,
  BccSlider,
} from "./BccComponents";
import api from "../api/Api";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import BlockUi from "react-block-ui";
import { Alert as MuiAlert } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import { GrowingBusinessBaseModel } from "../api/Model";
const webConfigEnv = (window as any).env;
const data = require("../data.json");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
      },
      title: {
        marginBottom: 40,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: "33px",
        color: "#141414",
      },

      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "100%",
        marginBottom: 30,
      },

      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "100%",
        textAlign: "left",
        background: "#FFFFFF",
        border: "1px solid #B9B9B9",
        borderRadius: 8,
      },
      innerOrderForm: {
        padding: "30px 20px",
      },
      titleForm: {
        marginBottom: 20,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        color: "#141414",
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "19px",
        color: "#141414",
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        alignItems: "flex-start",
        marginBottom: 20,
        marginTop: 15,
      },
      btnWrap: {
        width: "100%",
        "& > button": { width: "100%", marginBottom: 15 },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left", marginBottom: 16 },
    },
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 40,
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      stepsBlock: {
        marginBottom: 80,
      },
      orderForm: {
        width: "50%",
        maxWidth: "50%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 20,
      },
      subTitleForm: {
        marginBottom: 40,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 30,
        textAlign: "left",
      },
      checkboxText: {
        marginBottom: 20,
        marginTop: 15,
        "& > div:last-child": {
          marginLeft: 20,
          textAlign: "left",
        },
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      radio: {
        marginBottom: 30,
      },
    },
    timer: {
      fontSize: 16,
      color: "#4D565F",
    },
    sumInput: {
      "& > div": {
        borderColor: "#f44336!important",
      },
      "& > p": {
        position: "absolute",
        bottom: -40,
        color: "#f44336",
      },
    },
    linkReSendSms: {
      color: "#3F0259",
      fontSize: 16,
      height: "auto",
      padding: 0,
      lineHeight: "initial",
      cursor: "pointer",
      textTransform: "none",
      "&:hover, &:active": {
        textDecoration: "underline",
        opacity: 0.8,
      },
    },
    sliderRange: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: -20,
      color: "#b3b6ba",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
    },
    code: {
      margin: 0,
      "& input": {
        height: 62,
        boxSizing: "border-box",
      },
    },
    paymentWrap: {
      position: "relative",
      marginBottom: 40,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
    },
    input: {
      display: "block",
      width: "100%",
      "& > div": {
        width: "inherit",
      },
    },
    okBtn: {
      minWidth: 160,
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}
const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      maskChar=""
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const cities = [
  "Актау",
  "Актобе",
  "Алматы",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Нур-Султан",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Туркестанская область",
  "Уральск",
  "Усть-Каменогорск",
  "Шымкент",
];

const Order = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
  const [fio, setFio] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [sum, setSum] = React.useState("150000");
  const [minSum, setMinSum] = React.useState(150000);
  const [maxSum, setMaxSum] = React.useState(5000000);
  const [period, setPeriod] = React.useState("");
  const [iin, setIin] = React.useState("");
  const [city, setCity] = React.useState("");
  const [zalog, setZalog] = React.useState("0");
  const [type, setType] = React.useState("0");
  const [isLoading, setLoading] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [fioError, setFioError] = React.useState<boolean>(false);
  const [iinError, setIinError] = React.useState<boolean>(false);
  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [sumError, setSumError] = React.useState<boolean>(false);
  const [openError, setOpenError] = React.useState(false);
  const [agree, setAgree] = React.useState<boolean>(true);
  const [code, setCode] = React.useState("");
  const [timer, setTimer] = React.useState(0);
  const [processInstanceId, setProcessInstanceId] = React.useState("");
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  React.useEffect(() => {
    api.kato.getKatoChildren("710000000").then((res) => console.log(res));
  }, []);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "+7" + phone.slice(1);
    return res.replace(/\(|\)| /g, "");
  };

  const isValid = () => {
    if (step === 0) {
      return (
        fio !== "" &&
        email !== "" &&
        period !== "" &&
        iin.replace(/ /g, "").length === 12 &&
        phone.replace("_", "").length === 17 &&
        agree &&
        ((zalog === "0" && city !== "") || zalog !== "0")
      );
    } else if (step === 1) return code.length === 6;
    else return true;
  };

  const handleClose = () => {
    setOpenError(false);
  };

  function getUrlParameter(name: string) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  const startProcess = () => {
    api.camunda
      .start({
        env: {
          production: webConfigEnv.PRODUCTION === "1",
        },
        ...new GrowingBusinessBaseModel(),
        requestInfo: {
          type,
          zalog: !!+zalog,
          fio: fio,
          iin: iin,
          phone: formatPhoneNumber(),
          email: email,
          lang: i18n.language,
          amount: sum,
          period: period,
          city: city,
          utm_source: getUrlParameter("utm_source"),
          utm_medium: getUrlParameter("utm_medium"),
          utm_campaign: getUrlParameter("utm_campaign"),
          utm_term: getUrlParameter("utm_term"),
          utm_content: getUrlParameter("utm_content"),
          utm_keyword: getUrlParameter("utm_keyword"),
        },
      })
      .then((userContext) => {
        localStorage.setItem("processInstanceId", JSON.stringify(userContext));
        setProcessInstanceId(userContext.processInstanceId);
        setStep(2);
        props.scrollToOrder(false);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const validate = () => {
    let temp = false;

    if (fio.length < 5) {
      setFioError(true);
      temp = true;
    } else setFioError(false);

    if (+sum < minSum) {
      setSumError(true);
      temp = true;
    } else setSumError(false);

    if (iin.length === 12) {
      setIinError(false);
    } else {
      temp = true;
      setIinError(true);
    }

    if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
      setEmailError(true);
      temp = true;
    } else setEmailError(false);

    if (phone.length !== 17 || phone.substr(3, 1) !== "7") {
      setPhoneError(true);
      temp = true;
    } else setPhoneError(false);

    return temp ? false : true;
  };

  const getOtp = () => {
    if (!validate()) return;
    setLoading(true);
    setTimer(90);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        localStorage.removeItem("userContext");
        setStep(1);
        props.scrollToOrder(false);
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder(false);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);
    api.authOtp
      .confirmOtp({
        iin: iin,
        phone: formatPhoneNumber(),
        otp: code,
      })
      .then((userContext) => {
        props.scrollToOrder(false);
        localStorage.setItem("userContext", JSON.stringify(userContext));
        setToken(String(userContext.token?.accessToken));
        localStorage.removeItem("processInstanceId");
        startProcess();
      })
      .catch((e: any) => {
        props.scrollToOrder(false);
        console.error(e);
        setOpenError(true);
        setLoading(false);
      });
  };

  const onReSend = () => {
    setLoading(true);
    api.authOtp
      .sendOtp({ iin: iin, phone: formatPhoneNumber() })
      .then(() => {
        props.scrollToOrder(false);
        setTimer(90);
        setCode("");
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        props.scrollToOrder(false);
        setOpenError(true);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Возникла непредвиденная ошибка!
          </Alert>
        </Snackbar>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <BlockUi tag="div" blocking={isLoading}>
              {step === 0 ? (
                <>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t("order.title")}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      {t("order.subtitle")}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <BccFormControl className={classes.radio}>
                      <BccRadioGroup
                        value={type}
                        row
                        onChange={(e: any) => {
                          if (e.target.value === "1") {
                            setZalog("1");
                            setMaxSum(40000000);
                            setMinSum(1000000);
                            setSum("1000000");
                          } else {
                            setZalog("0");
                            setMaxSum(5000000);
                            setMinSum(150000);
                            setSum("150000");
                          }
                          setType(e.target.value);
                        }}
                      >
                        <BccFormControlLabel
                          value="0"
                          control={<BccRadio disableRipple />}
                          label={t("order.ip")}
                          labelPlacement="end"
                        />
                        <BccFormControlLabel
                          value="1"
                          control={<BccRadio disableRipple />}
                          label={t("order.ul")}
                          labelPlacement="end"
                        />
                      </BccRadioGroup>
                    </BccFormControl>
                  </Grid>
                  <Grid item>
                    <BccFormControl className={classes.radio}>
                      <BccRadioGroup
                        value={zalog}
                        row
                        onChange={(e: any) => {
                          if (e.target.value === "1") {
                            setMaxSum(40000000);
                            setMinSum(1000000);
                            setSum("1000000");
                          } else {
                            setMaxSum(5000000);
                            setMinSum(150000);
                            setSum("150000");
                          }
                          setZalog(e.target.value);
                        }}
                      >
                        {type === "0" && (
                          <BccFormControlLabel
                            value="0"
                            control={<BccRadio disableRipple />}
                            label={t("tabs.122")}
                            labelPlacement="end"
                          />
                        )}
                        <BccFormControlLabel
                          value="1"
                          control={<BccRadio disableRipple />}
                          label={t("tabs.111")}
                          labelPlacement="end"
                        />
                      </BccRadioGroup>
                    </BccFormControl>
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={
                        type === "1"
                          ? `${t("order.fioUl")}*`
                          : `${t("order.fioIp")}*`
                      }
                      variant="filled"
                      id="fio"
                      name="fio"
                      helperText={fioError ? t("order.error") : ""}
                      error={fioError ? true : false}
                      value={fio}
                      onChange={(e: any) => {
                        setFio(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={
                        type === "1"
                          ? `${t("order.bin")}*`
                          : `${t("order.iin")}*`
                      }
                      id="iin"
                      name="iin"
                      helperText={
                        iinError && type === "1"
                          ? `${t("order.error1")} ${t("order.bin")}`
                          : iinError
                          ? `${t("order.error1")} ${t("order.iin")}`
                          : ""
                      }
                      error={iinError ? true : false}
                      value={iin}
                      onChange={(e: any) => {
                        setIin(e.target.value.replace(/\D/g, "").substr(0, 12));
                      }}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label={t("order.phone") + "*"}
                      onChange={(e: any) => {
                        setPhone(e.target.value);
                        phoneError && validate();
                      }}
                      className={classes.inputStyle}
                      id="phone"
                      name="phone"
                      value={phone}
                      helperText={phoneError ? t("order.phone_error") : ""}
                      error={phoneError ? true : false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={"Email*"}
                      id="email"
                      name="email"
                      helperText={
                        emailError ? `${t("order.error1")} email` : ""
                      }
                      error={emailError ? true : false}
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                      variant="filled"
                    />
                  </Grid>
                  <Grid item>
                    <div
                      className={classes.paymentWrap}
                      style={{ marginBottom: sumError ? 60 : 40 }}
                    >
                      <div className={classes.sliderWrap}>
                        <BccInput
                          label={t("order.sum")}
                          key="sum"
                          value={`${sum.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${
                            sum !== "" ? " ₸" : ""
                          }`}
                          variant="filled"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          helperText={sumError ? `${t("order.errorSum")}` : ""}
                          onFocus={() => setSum("")}
                          onChange={(e: any) => {
                            const s = +e.target.value.replace(
                              /[^a-zA-Z0-9]/g,
                              ""
                            );
                            if (s > maxSum) setSum(maxSum.toString());
                            else setSum(s.toString());
                          }}
                          className={`${classes.input} ${
                            sumError ? classes.sumInput : ""
                          }`}
                        />
                        <BccSlider
                          style={{
                            left: 6,
                            right: 6,
                            width: "calc(100% - 12px)",
                            bottom: -1,
                            padding: 0,
                            position: "absolute",
                          }}
                          min={minSum}
                          max={maxSum}
                          step={50000}
                          value={+sum}
                          valueLabelDisplay="off"
                          defaultValue={+sum}
                          onChange={(e: any, val: any) =>
                            setSum(
                              val instanceof Array
                                ? val[1].toString()
                                : val.toString()
                            )
                          }
                        />
                        <div className={classes.sliderRange}>
                          <span>
                            {minSum === 150000 ? "150 000" : "1 000 000"}
                          </span>
                          <span>
                            {maxSum === 5000000 ? "5 000 000" : "40 000 000"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item>
                    {zalog === "0" && type === "0" ? (
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={`${t("order.period")}*`}
                        id="period"
                        name="period"
                        value={period}
                        onChange={(e: any) => setPeriod(e.target.value)}
                        variant="outlined"
                        select
                      >
                        <MenuItem key={12} value={12}>
                          12 {t("tabs.month")}
                        </MenuItem>
                      </BccInput>
                    ) : (
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={`${t("order.period")}*`}
                        id="period"
                        name="period"
                        value={period}
                        onChange={(e: any) => setPeriod(e.target.value)}
                        variant="outlined"
                        select
                      >
                        <MenuItem key={12} value={12}>
                          12 {t("tabs.month")}
                        </MenuItem>
                        <MenuItem key={24} value={24}>
                          24 {t("tabs.montha")}
                        </MenuItem>
                        <MenuItem key={36} value={36}>
                          36 {t("tabs.month")}
                        </MenuItem>
                      </BccInput>
                    )}
                  </Grid>
                  {zalog === "0" && (
                    <Grid item>
                      <BccInput
                        fullWidth={true}
                        className={classes.inputStyle}
                        label={t("order.city") + "*"}
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e: any) => setCity(e.target.value)}
                        variant="outlined"
                        select
                      >
                        {data
                          .filter(
                            (d: any, index: number, self: any) =>
                              index ===
                              self.findIndex((dd: any) => dd.city === d.city)
                          )
                          .map((c: any, i: number) => (
                            <MenuItem value={c.city} key={i}>
                              {c.city}
                            </MenuItem>
                          ))}
                      </BccInput>
                    </Grid>
                  )}
                  <Grid item>
                    <Grid
                      container
                      justify="space-between"
                      wrap="nowrap"
                      className={classes.checkboxText}
                    >
                      <Grid item>
                        <BccCheckbox
                          value="remember"
                          color="primary"
                          checked={agree}
                          onChange={() => setAgree(!agree)}
                        />
                      </Grid>
                      <Grid item>
                        <BccTypography type="p3">
                          {t("order.agree")}{" "}
                          <BccLink
                            href={`http://bcc.kz/consent_${
                              props.lang === "ru"
                                ? "rus"
                                : props.lang === "kz"
                                ? "kaz"
                                : "eng"
                            }.pdf`}
                            target="_blank"
                          >
                            {t("order.agree1")}
                          </BccLink>
                          {t("order.agree2")}
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      <Grid item className={classes.btnWrap}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <img
                              src={process.env.PUBLIC_URL + "/safety.svg"}
                              className={classes.icon}
                              alt="order_security"
                            />
                          </Grid>
                          <Grid
                            item
                            xl={true}
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                          >
                            <BccTypography type="p3" className={classes.garant}>
                              {t("order.safety")}
                            </BccTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.btnWrap}>
                        <BccButton
                          variant="contained"
                          disabled={!isValid()}
                          onClick={() => getOtp()}
                          color="primary"
                        >
                          {t("order.send")}
                        </BccButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : step === 1 ? (
                <>
                  <Grid item>
                    <BccTypography
                      type="h2"
                      weight="medium"
                      block
                      className={classes.titleForm}
                    >
                      {t("order.title")}
                    </BccTypography>
                    <BccTypography
                      type="p1"
                      weight="medium"
                      block
                      className={classes.subTitleForm}
                    >
                      {t("order.subtitle")}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      style={{ marginTop: "15px", alignItems: "center" }}
                      spacing={4}
                    >
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccInput
                          variant="outlined"
                          className={classes.code}
                          margin="normal"
                          fullWidth
                          id="code"
                          name="code"
                          value={code}
                          onChange={(e: any) =>
                            setCode(
                              e.target.value.replace(/\D/g, "").substr(0, 6)
                            )
                          }
                          label={t("order.code")}
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <BccButton
                          onClick={() => onSubmitOtp()}
                          variant="contained"
                          className={classes.submit}
                          disabled={!isValid()}
                        >
                          Отправить
                        </BccButton>
                      </Grid>
                      {timer !== 0 ? (
                        <Grid item>
                          <BccTypography type="p3" className={classes.timer}>
                            {t("order.sendAfter")} ({timer})
                          </BccTypography>
                        </Grid>
                      ) : (
                        <Grid item>
                          <BccButton
                            variant="text"
                            className={classes.linkReSendSms}
                            onClick={() => onReSend()}
                          >
                            {t("order.sendAgain")}
                          </BccButton>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Grid item>
                  <div className={classes.successForm}>
                    <img src="success.svg" alt="" />
                    <BccTypography block mb="16px" type="h5">
                      {t("order.succesTitle")}
                    </BccTypography>
                    {zalog === "0" && type === "0" ? (
                      <BccTypography block type="p2l" mb="16px">
                        {t("order.succesTextShort")}
                      </BccTypography>
                    ) : (
                      <>
                        <BccTypography block type="p2l" mb="16px">
                          {t("order.succesText")}
                        </BccTypography>
                        <BccButton
                          href={`https://green.bcc.kz/login?processInstanceId=${processInstanceId}&taskDefinitionKey=application_form&token=${token}`}
                          variant="contained"
                          color="primary"
                          className={classes.okBtn}
                        >
                          {t("order.ok")}
                        </BccButton>
                      </>
                    )}
                  </div>
                </Grid>
              )}
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
