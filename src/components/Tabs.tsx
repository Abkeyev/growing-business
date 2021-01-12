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
        marginTop: 24,
      },
      input: {
        display: "block",
        width: "100%",
      },
      sumTitle: {
        marginBottom: 16,
      },
      sumText: {
        marginBottom: 24,
      },
      docs3: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          display: "flex",
          flexWrap: "nowrap",
          "& > img": {
            marginRight: 24,
          },
        },
      },
      docs2: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          marginBottom: 12,
          "& > img": {
            marginRight: 24,
          },
        },
      },
      docs4: {
        marginTop: 24,
        "& > div": {
          width: "calc(50% - 20px)",
          display: "flex",
          flexWrap: "nowrap",
          "& > div": {
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            marginBottom: 12,
            "& > img": {
              marginRight: 24,
            },
          },
        },
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
        marginTop: 24,
        "& > img": {
          marginRight: 12,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        maxWidth: 1280,
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
        overflow: "scroll",
        justifyContent: "space-between",
        "& > button.Mui-selected": {
          "& > span": {
            color: "#FFFFFF!important",
            whiteSpace: "nowrap",
          },
        },
        "& > button:hover": {
          backgroundColor: "initial",
        },
        "& > button:hover > span": {
          color: "#27AE60!important",
        },
        "& > button": {
          borderRadius: "100px!important",
          border: "none",
          width: "max-content",
          "& > span": {
            whiteSpace: "nowrap",
          },
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
        marginTop: 24,
      },
      input: {
        display: "block",
        width: "100%",
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
        marginTop: 24,
        "& > img": {
          marginRight: 12,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      item: {
        width: "100%",
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [toggle, setToggle] = React.useState("overview");
  const [docToggle, setDocToggle] = React.useState("ip");
  const [tarifToggle, setTarifToggle] = React.useState("ebr");
  const [zalog, setZalog] = React.useState("bezzalog");
  const [tarifToggleBez, setTarifToggleBez] = React.useState("road");
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
            {t("tabs.1")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="redemption">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.2")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="documents">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.3")}
          </BccTypography>
        </BccToggleButton>
        <BccToggleButton value="rates">
          <BccTypography
            className={classes.toggleText}
            weight="medium"
            type="p2"
          >
            {t("tabs.4")}
          </BccTypography>
        </BccToggleButton>
      </BccToggleButtonGroup>
      <div className={classes.tabsContent}>
        {toggle === "overview" ? (
          <>
            <BccToggleButtonGroup
              value={zalog}
              exclusive
              onChange={(e: any, next: any) => {
                next && setZalog(next);
              }}
              className={classes.toggleGroup}
            >
              <BccToggleButton value="bezzalog">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.12")}
                </BccTypography>
              </BccToggleButton>
              <BccToggleButton value="zalog">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.11")}
                </BccTypography>
              </BccToggleButton>
            </BccToggleButtonGroup>
            {zalog === "zalog" ? (
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                style={{ marginTop: 24 }}
              >
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/tengeu.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.11text1")}
                  </BccTypography>
                </Grid>
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/period.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.11text2")}
                  </BccTypography>
                </Grid>
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/tengee.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.11text3")}
                  </BccTypography>
                </Grid>
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/contractt.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.11text40")}
                    <br /> {t("tabs.11text41")}
                    <br /> {t("tabs.11text42")}
                    <br /> {t("tabs.11text43")}
                  </BccTypography>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                style={{ marginTop: 24 }}
              >
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/tengeu.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.12text1")}
                  </BccTypography>
                </Grid>
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/period.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.12text2")}
                  </BccTypography>
                </Grid>
                <Grid item className={classes.item}>
                  <img src={process.env.PUBLIC_URL + "/icons/tengee.svg"} />
                  <BccTypography type="p2" block className={classes.itemTitle}>
                    {t("tabs.12text3")}
                  </BccTypography>
                </Grid>
              </Grid>
            )}
          </>
        ) : toggle === "redemption" ? (
          <Grid container direction="row" justify="space-between">
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/roundperd.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                {t("tabs.2text1")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/periodt.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                {t("tabs.2text2")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                {t("tabs.2text3")}
              </BccTypography>
            </Grid>
            <Grid item className={classes.item}>
              <img src={process.env.PUBLIC_URL + "/icons/givet.svg"} />
              <BccTypography type="p2" block className={classes.itemTitle}>
                {t("tabs.2text4")}
              </BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="p2" weight="normal" block>
                {t("tabs.2text01")}
              </BccTypography>
              <BccTypography type="p2" weight="normal" block>
                {t("tabs.2text02")}
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
                  {t("tabs.ip")}
                </BccTypography>
              </BccToggleButton>
              <BccToggleButton value="ul">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.ul")}
                </BccTypography>
              </BccToggleButton>
            </BccToggleButtonGroup>
            {docToggle === "ip" ? (
              <Grid
                container
                justify="space-between"
                direction="column"
                className={classes.docs2}
              >
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
                  <BccLink
                    target="_blank"
                    href={`${
                      props.lang === "ru"
                        ? "https://www.bcc.kz/gb_rus.pdf"
                        : props.lang === "kz"
                        ? "https://www.bcc.kz/gb_kaz.pdf"
                        : ""
                    }`}
                  >
                    {t("tabs.doc12")}
                  </BccLink>
                </Grid>
                <Grid item>
                  <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                  <BccLink
                    target="_blank"
                    href={`https://www.bcc.kz/ip_${
                      props.lang === "ru"
                        ? "rus"
                        : props.lang === "kz"
                        ? "kaz"
                        : "eng"
                    }.pdf`}
                  >
                    {t("tabs.doc1")}
                  </BccLink>
                </Grid>
              </Grid>
            ) : (
              <Grid container justify="space-between" className={classes.docs4}>
                <Grid item></Grid>
                <Grid container direction="column">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/icons/pdf.svg"} />
                    <BccLink
                      target="_blank"
                      href={`https://www.bcc.kz/too_${
                        props.lang === "ru"
                          ? "rus"
                          : props.lang === "kz"
                          ? "kaz"
                          : "eng"
                      }.pdf`}
                    >
                      {t("tabs.doc1")}
                    </BccLink>
                  </Grid>
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
                    <BccLink
                      target="_blank"
                      href={`http://bcc.kz/declaration_${
                        props.lang === "ru"
                          ? "rus"
                          : props.lang === "kz"
                          ? "kaz"
                          : "eng"
                      }.docx`}
                    >
                      {t("tabs.doc2")}
                    </BccLink>
                  </Grid>
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/icons/docFile.svg"} />
                    <BccLink
                      target="_blank"
                      href={`http://bcc.kz/KAXXX_${
                        props.lang === "ru"
                          ? "rus"
                          : props.lang === "kz"
                          ? "kaz"
                          : "eng"
                      }.docx`}
                    >
                      {t("tabs.doc3")}
                    </BccLink>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </>
        ) : toggle === "rates" ? (
          <>
            <BccToggleButtonGroup
              value={zalog}
              exclusive
              onChange={(e: any, next: any) => {
                next && setZalog(next);
              }}
              className={classes.toggleGroup}
              style={{ marginBottom: 24 }}
            >
              <BccToggleButton value="bezzalog">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.12")}
                </BccTypography>
              </BccToggleButton>
              <BccToggleButton value="zalog">
                <BccTypography
                  className={classes.toggleText}
                  weight="medium"
                  type="p2"
                >
                  {t("tabs.11")}
                </BccTypography>
              </BccToggleButton>
            </BccToggleButtonGroup>
            {zalog === "zalog" ? (
              <>
                <BccToggleButtonGroup
                  value={tarifToggle}
                  exclusive
                  onChange={(e: any, next: any) => {
                    next && setTarifToggle(next);
                  }}
                  className={classes.toggleGroup}
                >
                  <BccToggleButton value="ebr">
                    <BccTypography
                      className={classes.toggleText}
                      weight="medium"
                      type="p2"
                    >
                      {t("tabs.type1")}
                    </BccTypography>
                  </BccToggleButton>
                  <BccToggleButton value="road">
                    <BccTypography
                      className={classes.toggleText}
                      weight="medium"
                      type="p2"
                    >
                      {t("tabs.type2")}
                    </BccTypography>
                  </BccToggleButton>
                  <BccToggleButton value="ssb">
                    <BccTypography
                      className={classes.toggleText}
                      weight="medium"
                      type="p2"
                    >
                      {t("tabs.type3")}
                    </BccTypography>
                  </BccToggleButton>
                </BccToggleButtonGroup>

                {tarifToggle === "ebr" ? (
                  <>
                    <BccTableContainer>
                      <BccTable aria-label="simple table">
                        <BccTableHead>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name")}</BccTableCell>
                            <BccTableCell>{t("tabs.period")}</BccTableCell>
                            <BccTableCell>{t("tabs.price")}</BccTableCell>
                          </BccTableRow>
                        </BccTableHead>
                        <BccTableBody className={classes.table}>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name1")}:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  12 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  36 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>17,5% {t("tabs.year")}</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name2")}</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  12 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  36 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>20,5% {t("tabs.year")}</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name3")}</BccTableCell>
                            <BccTableCell></BccTableCell>
                            <BccTableCell>
                              0,2% {t("tabs.period1")}
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name4")}</BccTableCell>
                            <BccTableCell></BccTableCell>
                            <BccTableCell>
                              0,5% {t("tabs.period2")}
                            </BccTableCell>
                          </BccTableRow>
                        </BccTableBody>
                      </BccTable>
                    </BccTableContainer>
                    <div className={classes.tarifDoc}>
                      <img
                        src={process.env.PUBLIC_URL + "/icons/docFile.svg"}
                      />
                      <BccLink
                        target="_blank"
                        href={`${
                          props.lang === "ru"
                            ? "https://www.bcc.kz/ebrr_rus.pdf"
                            : props.lang === "kz"
                            ? "https://www.bcc.kz/ebrr_kaz.pdf"
                            : "https://www.bcc.kz/ebrr_eng.pdf"
                        }`}
                      >
                        {t("tabs.doc")}
                      </BccLink>
                    </div>
                  </>
                ) : tarifToggle === "road" ? (
                  <>
                    <BccTableContainer>
                      <BccTable aria-label="simple table">
                        <BccTableHead>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name")}</BccTableCell>
                            <BccTableCell>{t("tabs.period")}</BccTableCell>
                            <BccTableCell>{t("tabs.price")}</BccTableCell>
                          </BccTableRow>
                        </BccTableHead>
                        <BccTableBody className={classes.table}>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name1")}*:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  12 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  36 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>
                              от 14%* до 17,5%** {t("tabs.year")}
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name5")}:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  12 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  36 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>
                              от 8%* до 11,5%** {t("tabs.year")}
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name6")}:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  12 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  36 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>6% {t("tabs.year")}</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name2")}</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  12 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                              <BccTableRow>
                                <BccTableCell>
                                  36 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>19% {t("tabs.year")}</BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name3")}</BccTableCell>
                            <BccTableCell></BccTableCell>
                            <BccTableCell>
                              0,2% {t("tabs.period1")}
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name4")}</BccTableCell>
                            <BccTableCell></BccTableCell>
                            <BccTableCell>0% {t("tabs.period2")}</BccTableCell>
                          </BccTableRow>
                        </BccTableBody>
                      </BccTable>
                    </BccTableContainer>
                    <div className={classes.tarifDoc}>
                      <img
                        src={process.env.PUBLIC_URL + "/icons/docFile.svg"}
                      />
                      <BccLink
                        target="_blank"
                        href={`${
                          props.lang === "ru"
                            ? "https://www.bcc.kz/dkb_2025_russ.pdf"
                            : props.lang === "kz"
                            ? "https://www.bcc.kz/dkb_2025_qaz.pdf"
                            : "https://www.bcc.kz/dkb_2025_eng.pdf"
                        }`}
                      >
                        *{t("tabs.doc11")}
                      </BccLink>
                    </div>
                    <div className={classes.tarifDoc}>
                      <img
                        src={process.env.PUBLIC_URL + "/icons/docFile.svg"}
                      />
                      <BccLink
                        target="_blank"
                        href={`${
                          props.lang === "ru"
                            ? "https://www.bcc.kz/gb_dkb_2025_rus.pdf"
                            : props.lang === "kz"
                            ? "https://www.bcc.kz/gb_dkb_2025_kaz.pdf"
                            : ""
                        }`}
                      >
                        **{t("tabs.doc1112")}
                      </BccLink>
                    </div>
                    <div className={classes.tarifDoc}>
                      <BccTypography type="p2" block>
                        {t("tabs.doc1113")}
                        <br />
                        {t("tabs.doc11132")}
                      </BccTypography>
                    </div>
                  </>
                ) : (
                  <BccTableContainer>
                    <BccTable aria-label="simple table">
                      <BccTableHead>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name")}</BccTableCell>
                          <BccTableCell>{t("tabs.period")}</BccTableCell>
                          <BccTableCell>{t("tabs.price")}</BccTableCell>
                        </BccTableRow>
                      </BccTableHead>
                      <BccTableBody className={classes.table}>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name1")}:</BccTableCell>
                          <BccTableCell>
                            <BccTableRow>
                              <BccTableCell>12 {t("tabs.month")}</BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>24 {t("tabs.month")}</BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>36 {t("tabs.month")}</BccTableCell>
                            </BccTableRow>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTableRow>
                              <BccTableCell>18% {t("tabs.year")}</BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>
                                18,5% {t("tabs.year")}
                              </BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>19% {t("tabs.year")}</BccTableCell>
                            </BccTableRow>
                          </BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name2")}</BccTableCell>
                          <BccTableCell>
                            <BccTableRow>
                              <BccTableCell>12 {t("tabs.month")}</BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>24 {t("tabs.month")}</BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>36 {t("tabs.month")}</BccTableCell>
                            </BccTableRow>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTableRow>
                              <BccTableCell>
                                20,7% {t("tabs.year")}
                              </BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>
                                20,8% {t("tabs.year")}
                              </BccTableCell>
                            </BccTableRow>
                            <BccTableRow>
                              <BccTableCell>
                                21,2% {t("tabs.year")}
                              </BccTableCell>
                            </BccTableRow>
                          </BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name3")}</BccTableCell>
                          <BccTableCell></BccTableCell>
                          <BccTableCell>0,2% {t("tabs.period1")}</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name4")}</BccTableCell>
                          <BccTableCell></BccTableCell>
                          <BccTableCell>0,5% {t("tabs.period2")}</BccTableCell>
                        </BccTableRow>
                      </BccTableBody>
                    </BccTable>
                  </BccTableContainer>
                )}
              </>
            ) : (
              <>
                <BccToggleButtonGroup
                  value={tarifToggleBez}
                  exclusive
                  onChange={(e: any, next: any) => {
                    next && setTarifToggleBez(next);
                  }}
                  className={classes.toggleGroup}
                >
                  <BccToggleButton value="road">
                    <BccTypography
                      className={classes.toggleText}
                      weight="medium"
                      type="p2"
                    >
                      {t("tabs.type2")}
                    </BccTypography>
                  </BccToggleButton>
                  <BccToggleButton value="ssb">
                    <BccTypography
                      className={classes.toggleText}
                      weight="medium"
                      type="p2"
                    >
                      {t("tabs.type3")}
                    </BccTypography>
                  </BccToggleButton>
                </BccToggleButtonGroup>

                {tarifToggleBez === "road" ? (
                  <>
                    <BccTableContainer>
                      <BccTable aria-label="simple table">
                        <BccTableHead>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name")}</BccTableCell>
                            <BccTableCell>{t("tabs.period")}</BccTableCell>
                            <BccTableCell>{t("tabs.price")}</BccTableCell>
                          </BccTableRow>
                        </BccTableHead>
                        <BccTableBody className={classes.table}>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name1")}*:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  17,5% {t("tabs.year")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name5")}:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  11,5% {t("tabs.year")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name6")}:</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>6% {t("tabs.year")}</BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name2")}</BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  24 {t("tabs.month")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                            <BccTableCell>
                              <BccTableRow>
                                <BccTableCell>
                                  19% {t("tabs.year")}
                                </BccTableCell>
                              </BccTableRow>
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name3")}</BccTableCell>
                            <BccTableCell></BccTableCell>
                            <BccTableCell>
                              0,2% {t("tabs.period1")}
                            </BccTableCell>
                          </BccTableRow>
                          <BccTableRow>
                            <BccTableCell>{t("tabs.name4")}</BccTableCell>
                            <BccTableCell></BccTableCell>
                            <BccTableCell>0% {t("tabs.period2")}</BccTableCell>
                          </BccTableRow>
                        </BccTableBody>
                      </BccTable>
                    </BccTableContainer>
                    <div className={classes.tarifDoc}>
                      <img
                        src={process.env.PUBLIC_URL + "/icons/docFile.svg"}
                      />

                      <BccLink
                        target="_blank"
                        href={`${
                          props.lang === "ru"
                            ? "https://www.bcc.kz/gb_dkb_2025_rus.pdf"
                            : props.lang === "kz"
                            ? "https://www.bcc.kz/gb_dkb_2025_kaz.pdf"
                            : ""
                        }`}
                      >
                        {t("tabs.doc1112")}
                      </BccLink>
                    </div>
                  </>
                ) : (
                  <BccTableContainer>
                    <BccTable aria-label="simple table">
                      <BccTableHead>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name")}</BccTableCell>
                          <BccTableCell>{t("tabs.period")}</BccTableCell>
                          <BccTableCell>{t("tabs.price")}</BccTableCell>
                        </BccTableRow>
                      </BccTableHead>
                      <BccTableBody className={classes.table}>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name1")}:</BccTableCell>
                          <BccTableCell>12 {t("tabs.month")}</BccTableCell>
                          <BccTableCell>21,25% {t("tabs.year")}</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name2")}</BccTableCell>
                          <BccTableCell>12 {t("tabs.month")}</BccTableCell>
                          <BccTableCell>от 23% {t("tabs.year")}</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name3")}</BccTableCell>
                          <BccTableCell></BccTableCell>
                          <BccTableCell>0,2% {t("tabs.period1")}</BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>{t("tabs.name4")}</BccTableCell>
                          <BccTableCell></BccTableCell>
                          <BccTableCell>
                            2%(мин 10 000тг) {t("tabs.period2")}
                          </BccTableCell>
                        </BccTableRow>
                      </BccTableBody>
                    </BccTable>
                  </BccTableContainer>
                )}
              </>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Tabs;
