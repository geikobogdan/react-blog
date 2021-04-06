import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  but_log: {
    display: "inline",
  },
  appBar: {
    backgroundColor: "#fff",
    height: "110px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#2E84DA",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2E84DA",
    fontWeight: 700,
    color: "#D9E8F6",
    "&:hover": {
      backgroundColor: "#2E84DA",
      fontWeight: 700,
      color: "#D9E8F6",
    },
    "&:disabled": {
      backgroundColor: "#cccccc",
      color: "#666666",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "700",
    "&:hover": {
      color: "#2E84DA",
    },
  },
}));
