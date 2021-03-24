import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#2E84DA",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
      backgroundColor: "#2E84DA",
      fontWeight: 700,
      color: "#D9E8F6",
      "&:hover":{
        backgroundColor: "#2E84DA",
        fontWeight: 700,
        color: "#D9E8F6",
      },
    "&:disabled": {
      backgroundColor: "#cccccc",
      color: "#666666",
    }
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
