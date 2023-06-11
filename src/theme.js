import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#24a9e2",
    },
    secondary: {
      main: "#ef5297",
    },
    error: {
      main: "#fa4040",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Cairo"].join(","),
    body2: {
      fontSize: "1em",
    },
    h5: {
      fontSize: "2em",
    },
    h4: {
      fontSize: "2.4em",
      fontWeight: 600,
    },
    h2: {
      fontSize: "3.2em",
    },
    h3: {
      fontSize: "2.8em",
    },
    h6: {
      fontSize: "1.6em",
    },
  },
});

const Theme = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export const withTheme = (Component) => {
  return (props) => {
    // const direction = useSelector(({ direction }) => direction.direction);
    // if (direction === "ltr") {
    //   theme.direction = direction;
    // } else {
    //   theme.direction = "rtl";
    // }
    // theme.direction = null;

    // useEffect(() => {
    //   console.log("passs");
    //   theme.direction = direction;
    // }, [direction]);
    // console.log(direction);
    return (
      <Theme>
        <Component {...props} />
      </Theme>
    );
  };
};
export default theme;
