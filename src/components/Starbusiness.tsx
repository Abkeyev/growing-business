import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccLink } from "./BccComponents";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "72px 48px 114px",
        margin: "0 auto",
      },
      mobileApp: {
        backgroundColor: "#fafafa",
        padding: "32px 64px 0",
        borderRadius: 30,
        "& > div:first-child": {
          marginRight: 96,
        },
      },
      desc: {
        marginBottom: 48,
      },
      qr: {
        minHeight: 100,
        minWidth: 100,
        "& > img": {
          width: "100%",
          height: "100%",
        },
      },
      title: {},
      mobMA: { display: "none" },
      AS: {
        marginRight: 36,
      },
      GP: {
        marginRight: 40,
      },
      mobileLinks: {},
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "32px 20px",
        margin: "0 auto",
      },
      mobileApp: {
        backgroundColor: "#F3F3F3",
        padding: "20px 20px 0",
        borderRadius: 8,
        flexWrap: "wrap",
        justifyContent: "center",
        "& > div:first-child": {
          marginRight: 0,
          width: "100%",
        },
      },
      desc: {
        marginBottom: 20,
      },
      qr: { display: "none" },
      title: { display: "none" },
      mobMA: {
        display: "block",
        width: "max-content",
        textTransform: "uppercase",
        marginBottom: 26,
      },
      AS: {
        marginRight: 18,
      },
      GP: {
        marginRight: 0,
      },
      mobileLinks: {
        justifyContent: "center",
        marginBottom: 12,
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const Starbusiness = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();
  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.mobileApp}
        >
          <Grid item>
            <BccTypography type="h2" block mb="32px" className={classes.title}>
              StarBusiness
            </BccTypography>
            <BccChip
              type="outlined"
              color="secondary"
              className={classes.mobMA}
            >
              {t("star.chip")}
            </BccChip>
            <BccTypography
              type="h1"
              mb="12px"
              mt="24px"
              block
              className={classes.mobMA}
            >
              StarBusiness
            </BccTypography>
            <BccTypography
              type="h5"
              weight="normal"
              className={classes.desc}
              block
            >
              {t("star.desc")}
            </BccTypography>

            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              className={classes.mobileLinks}
            >
              <Grid className={classes.AS} item>
                <BccLink
                  href="https://apps.apple.com/kz/app/starbusiness/id1452748006?utm_source=bcc.kz&utm_medium=button&utm_campaign=ip_request"
                  target="_blank"
                >
                  <img src={process.env.PUBLIC_URL + "/as.svg"} />
                </BccLink>
              </Grid>
              <Grid className={classes.GP} item>
                <BccLink
                  href="https://play.google.com/store/apps/details?id=bcc.sapphire&hl=ru&utm_source=bcc.kz&utm_medium=button&utm_campaign=ip_request"
                  target="_blank"
                >
                  <img src={process.env.PUBLIC_URL + "/gp.svg"} />
                </BccLink>
              </Grid>
              <Grid
                style={{
                  padding: 4,
                  backgroundColor: "white",
                  borderRadius: 4,
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.04)",
                }}
                className={classes.qr}
                item
              >
                <img src={process.env.PUBLIC_URL + "/qr.svg"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src={process.env.PUBLIC_URL + "/mobile-app.png"}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Starbusiness;
