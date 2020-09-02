import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const BccRadio = withStyles({
  root: {
    color: "#4D565F",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-checked": {
      color: "#27AE60",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: 24,
    },
    "&.Mui-disabled": {
      "&.Mui-checked": {
        color: "#B3B6BA",
      },
    },
  },
})(Radio);

export default BccRadio;
