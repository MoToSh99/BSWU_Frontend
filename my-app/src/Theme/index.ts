import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: '#e8e8e8',
            light: "#FFF",

        },
        secondary: {
            light: '',
            main: '#45425A',
            
        }, /*
        error: {
            light: '',
            main: '',
            dark: '',
            contrastText: ''
        }, */
        background: {
            default: "#1F2833"
          }
    },
    typography: {
        h1: {
            fontSize: 96
        },
        h2: {
            fontSize: 60,
            color: "white",
        },
        h3: {
            fontSize: 48
        },
        h4: {
            fontSize: 34,
            color: "white",
        },
        h5: {
            fontSize: 24,
            color: "white"
        },
        h6: {
            fontSize: 20,
            color: "white",
        },
        subtitle1: {
            fontSize: 16,
            color: "white",
        },
        subtitle2: {
            fontSize: 14,
            color: "white",
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 14
        },
        caption: {
            fontSize: 12
        },
        overline: {
            fontSize: 10
        },

    },
    

    overrides: {

    }

})

