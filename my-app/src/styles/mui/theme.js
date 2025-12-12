import { createTheme } from "@mui/material";

//COLOUR VARIABLES
const backgroundColor = "#E8EDE7";
const primaryColor = "#90ADCB";
const secondaryColor = "#1B2C37";
const text = "#000000";
const highlightColor= "#3A9BBB";

//COLOUR VARIABLES
const textDark = "#E8EDE7";
const primaryColorDark = "#47c5caff";
const secondaryColorDark = "#131d25ff";
const backgroundColorDark= "#ce1111ff";
const highlightColorDark= "#2a6478ff";

//theme

let theme = createTheme({
    palette: {
        mode: "light",

        background: {
            default: backgroundColor,
        },
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
        tertiary: {
            main: highlightColor,
        },
        text: {
            main:text,
        },
        error: {
            main: "#e90a0aff"
        },
    }
})

//darktheme

let darkTheme = createTheme({
    palette: {
        mode: "dark",

        background: {
            default: backgroundColorDark,
        },
        primary: {
            main: primaryColorDark,
        },
        secondary: {
            main: secondaryColorDark,
        },
        tertiary: {
            main: highlightColorDark,
        },
        text: {
            main:textDark,
        },
        error: {
            main: "#e90a0aff"
        },
    }
})

export{theme};
export{darkTheme};
