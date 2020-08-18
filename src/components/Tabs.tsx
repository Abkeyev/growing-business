import React from "react";
import { Grid, InputAdornment } from "@material-ui/core";
import {
  BccTypography,
  BccToggleButton,
  BccToggleButtonGroup,
  BccSlider,
  BccInput,
  BccLink,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "40px 20px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "100%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            width: "70%",
            margin: "0 auto",
          },
          "&  > video": {
            width: "70%",
            margin: "0 auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        "& > div": {
          width: "100%",
        },
      },
      qr: {
        "& > img": {
          width: "50%",
        },
      },
      mobileLinks: {
        marginRight: 6,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            display: "block",
            width: 120,
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
    },
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "80px 100px",
      },
      title: {
        marginBottom: 30,
      },
      subitle: {
        marginBottom: 30,
      },
      star: {
        width: "80%",
        margin: "0 auto",
        marginBottom: 50,
        "& > div:last-child": { textAlign: "left" },
        "& > div": {
          width: "50%",
          textAlign: "center",
          "&  > img": {
            height: 350,
          },
          "&  > video": {
            height: 350,
            width: "auto",
          },
        },
      },
      starBlock2: {
        alignSelf: "center",
      },
      starBusiness: {
        color: "#249052",
        marginBottom: 10,
      },
      starSteps: {
        marginBottom: 10,
        "& > span": {
          color: "#249052",
        },
      },
      lastSetp: {
        marginBottom: 50,
      },
      lOut: {
        flexWrap: "wrap",
        "& > div": {
          width: "calc(50% - 18px)",
        },
      },
      qr: {
        "& > img": {
          height: "100%",
        },
      },
      mobileLinks: {
        marginRight: 36,
        "& > a:last-child": {
          marginBottom: 0,
        },
        "& > a": {
          display: "block",
          marginBottom: 12,
          width: 120,
          "& > img": {
            width: 120,
            display: "block",
          },
        },
      },
      toggleGroup: {
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        border: "1px solid #27AE60",
        borderRadius: "100px",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          width: "50%",
          borderRadius: "100px!important",
          border: "none",
        },
      },
      toggleText: {
        textTransform: "initial",
        letterSpacing: "initial",
        color: "#80868C",
      },
      stepper: {
        padding: "40px 0 60px",
      },
      backButton: {
        minWidth: 250,
        textTransform: "capitalize!important",
      },
      nextBtn: {
        minWidth: 250,
        marginLeft: 12,
      },
      instructions: {
        minWidth: 250,
        textAlign: "center",
      },
      anim: {
        transition: "all 1s ease-in",
      },
      item: {
        display: "flex",
        width: "calc(50% - 20px)",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        marginBottom: 50,
        "& > img": {
          marginBottom: 42,
          marginRight: 24,
          height: 60,
        },
      },
    },
    tarifText: {
      marginTop: 24,
      marginBottom: 24,
    },
    link: {
      color: "#249052",
      textDecoration: "underline",
      cursor: "pointer",
    },
    calc: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      alignItems: "center",
      "& > div:first-child": {
        width: "calc(60% - 15px)",
      },
      "& > div:last-child": {
        width: "calc(40% - 15px)",
        background: "#FAFAFA",
        borderRadius: 8,
        padding: 24,
      },
    },
    paymentWrap: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      marginBottom: 60,
    },
    paymentWrapSec: {
      marginBottom: 0,
    },
    sliderWrap: {
      position: "relative",
      width: "100%",
      "& > div > div": {
        width: "100%",
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
    tabsContent: {
      marginTop: 56,
    },
    input: {
      display: "block",
      width: "100%",
    },
    right: {
      float: "right",
    },
    sumTitle: {
      marginBottom: 16,
    },
    sumText: {
      marginBottom: 24,
    },
    docs: {
      marginTop: 24,
      "& > div": {
        width: "calc(50% - 20px)",
        marginBottom: 40,
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        "& > img": {
          marginRight: 24,
        },
      },
    },
    table: {
      "& > tr > td > tr": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
      "& > tr > td > tr td": {
        borderBottom: 0,
        padding: "16px 16px 0 0",
        "& tr:last-child > td": { padding: "0 16px 0 0" },
        "& td": {
          padding: "0 16px 16px 0",
        },
      },
    },
    tarifDoc: {
      display: "flex",
      alignItems: "center",
      marginBottom: 24,
      "& > img": {
        marginRight: 12,
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [loan, setLoan] = React.useState(15000000);
  const [month, setMonth] = React.useState(24);
  const [toggle, setToggle] = React.useState("rates");
  const [docToggle, setDocToggle] = React.useState("ip");
  const { t } = useTranslation();

  return (
    <div className={classes.container} ref={props.refProp}>
      <BccToggleButtonGroup
        value={toggle}
        exclusive
        onChange={(e: any, next: any) => {
          next && setToggle(next);
        }}
        className={classes.toggleGroup}
      >
        <BccToggleButton value="overview">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Обзор
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="redemption">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Погашение
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="documents">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Документы
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="rates">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            Тарифы
          </BccTypography>
        </BccToggleButton>
      </BccToggleButtonGroup>
      <div className={classes.tabsContent}>
        {toggle === "overview" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/tengeu.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Максимальная сумма займа для для субъектов микро, малого и
                среднего бизнеса - до 40 000 000 ₸
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/period.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Срок кредитования - 12, 24 и 36 месяцев
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/tengee.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Валюта – тенге.
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/contractt.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Обеспечение:
                <br /> - Квартира до 150 кв.м. в областных центрах РК
                <br /> - Жилые дома до 350 кв.м. с земельным участком от 4 до 20
                соток в областных центрах РК
                <br /> - Коммерческая недвижимость до 200 кв.м. с земельным
                участком от 4 до 20 соток в областных центрах РК
                <br /> - Приобретаемые имущества, с отсрочкой о предоставлении в
                залог
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "redemption" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/roundperd.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Вознаграждение - ежемесячно*
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/periodt.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Основной долг - ежемесячно, равными долями*
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Очередной платеж для погашения автоматически списывается с
                текущего счета в указанную в графике дату.
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                Возможно досрочное погашение без штрафных санкций, с 7-го месяца
                кредитования**
              </BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="p2" weight="normal" block>
                *возможно применение аннуитетного графика платежей
              </BccTypography>
              <BccTypography type="p2" weight="normal" block>
                ** в зависимости от сроков кредитования
              </BccTypography>
            </Grid>
          </Grid>
        ) : toggle === "documents" ? (
          <>
            <BccToggleButtonGroup
              value={docToggle}
              exclusive
              onChange={(e: any, next: any) => {
                next && setDocToggle(next);
              }}
              className={classes.toggleGroup}
            >
              <BccToggleButton value="ip">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  Для индивидуальных предпринимателей
                </BccTypography>
              </BccToggleButton>
              <BccToggleButton value="ul">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  Для юридических лиц
                </BccTypography>
              </BccToggleButton>
            </BccToggleButtonGroup>
            {docToggle === "ip" ? (
              <Grid container justify="space-between" className={classes.docs}>
                {/* <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="https://www.bcc.kz/ip_kaz.pdf">
                    Перечень документов [KZ]
                  </BccLink>
                </Grid> */}
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="https://www.bcc.kz/ip_rus.pdf">
                    Перечень документов
                  </BccLink>
                </Grid>
                {/* <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink target="_blank" href="https://www.bcc.kz/ip_eng.pdf">
                    Перечень документов [EN]
                  </BccLink>
                </Grid> */}
              </Grid>
            ) : (
              <Grid container justify="space-between" className={classes.docs}>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink
                    target="_blank"
                    href="https://www.bcc.kz/too_rus.pdf"
                  >
                    Перечень документов
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
                  <BccLink
                    target="_blank"
                    href="http://bcc.kz/declaration_rus.docx"
                  >
                    Шаблон решения единственного участника
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
                  <BccLink target="_blank" href="http://bcc.kz/KAXXX_rus.docx">
                    Шаблон протокола общего собрания учредителей
                  </BccLink>
                </Grid>
              </Grid>
            )}
          </>
        ) : toggle === "rates" ? (
          <>
            <BccTypography
              type="h6"
              className={classes.tarifText}
              weight="bold"
              block
            >
              Средства ЕБРР
            </BccTypography>
            <BccTableContainer>
              <BccTable aria-label="simple table">
                <BccTableHead>
                  <BccTableRow>
                    <BccTableCell>Название тарифа</BccTableCell>
                    <BccTableCell>Срок</BccTableCell>
                    <BccTableCell>Ценовые параметры</BccTableCell>
                  </BccTableRow>
                </BccTableHead>
                <BccTableBody className={classes.table}>
                  <BccTableRow>
                    <BccTableCell>
                      Ставка вознаграждения номинальная*:
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>12 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>24 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>36 месяцев</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>15%</BccTableCell>
                        <BccTableCell>годовых</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>ГЭСВ</BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>12 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>24 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>36 месяцев</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>16,5%</BccTableCell>
                        <BccTableCell>годовых</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>Пеня за просрочку</BccTableCell>
                    <BccTableCell></BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>0,2%</BccTableCell>
                        <BccTableCell>в день от суммы просрочки</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>Комиссия за организацию займа*</BccTableCell>
                    <BccTableCell></BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>0,5%</BccTableCell>
                        <BccTableCell>от суммы кредита</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                </BccTableBody>
              </BccTable>
            </BccTableContainer>
            <BccTypography
              type="p2"
              className={classes.tarifText}
              weight="normal"
              block
            >
              * При включении в Государственную программу поддержки
              предпринимательства “Дорожная карта бизнеса - 2025” номинальная
              ставка вознаграждения будет составлять 14% годовых, при этом
              комиссия за организацию займа не взимается.
            </BccTypography>
            <div className={classes.tarifDoc}>
              <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
              <BccLink
                target="_blank"
                href="https://docs.google.com/document/d/1bN-Kb4jFx04EoLqixMd0E-8g9TeJAE9edaazNl60Sx0/edit"
              >
                Критерии для получения займа по средствам ЕБРР
              </BccLink>
            </div>
            <BccTypography
              type="h6"
              className={classes.tarifText}
              weight="bold"
              block
            >
              Собственные средства банка
            </BccTypography>
            <BccTableContainer>
              <BccTable aria-label="simple table">
                <BccTableHead>
                  <BccTableRow>
                    <BccTableCell>Название тарифа</BccTableCell>
                    <BccTableCell>Срок</BccTableCell>
                    <BccTableCell>Ценовые параметры</BccTableCell>
                  </BccTableRow>
                </BccTableHead>
                <BccTableBody className={classes.table}>
                  <BccTableRow>
                    <BccTableCell>
                      Ставка вознаграждения номинальная*:
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>12 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>24 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>36 месяцев</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTableRow>
                            <BccTableCell>18%</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>18,5%</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>19%</BccTableCell>
                          </BccTableRow>
                        </BccTableCell>
                        <BccTableCell>годовых</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>ГЭСВ</BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>12 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>24 месяцев</BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>36 месяцев</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTableRow>
                            <BccTableCell>20,7%</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>20,8%</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>21,2%</BccTableCell>
                          </BccTableRow>
                        </BccTableCell>
                        <BccTableCell>годовых</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>Пеня за просрочку</BccTableCell>
                    <BccTableCell></BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>0,2%</BccTableCell>
                        <BccTableCell>в день от суммы просрочки</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                  <BccTableRow>
                    <BccTableCell>Комиссия за организацию займа*</BccTableCell>
                    <BccTableCell></BccTableCell>
                    <BccTableCell>
                      <BccTableRow>
                        <BccTableCell>0,5%</BccTableCell>
                        <BccTableCell>от суммы кредита</BccTableCell>
                      </BccTableRow>
                    </BccTableCell>
                  </BccTableRow>
                </BccTableBody>
              </BccTable>
            </BccTableContainer>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
