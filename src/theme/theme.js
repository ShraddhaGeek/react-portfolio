import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "\"Roboto\", sans-serif",
        fontWeightLight: '600',
    },
    palette: {
        type: "light",
        text: {
            primary: "#222222",
            secondary: "#089ECA"
        },
        primary: {
            light: '#4f83cc',
            main: '#f5f5f5',
            dark: '#002f6c',
        },
        secondary: {
            light: '#6ec6ff',
            main: '#f5f5f5',
            dark: '#0069c0',
        },
        mainPage: {
            minHeight: '100vh',
            // background: 'linear-gradient(to top, #f5f5f5 30%, #fafafa 100%)',
            padding: '2%',
            paddingTop: '6%',
            flexGrow: 1,
            boxSizing: 'border-box',
        },
        particle: {
            background: 'linear-gradient(to top, #f5f5f5 30%, #fafafa 100%)',
            width: '100%',
            height: '100%',
            position: 'fixed',
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
        },
        fullHeight: {
            minHeight: '100vh',
        },
    },
});

const darkTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: `"Roboto", sans-serif`,
        fontWeightLight: '600',
    },
    palette: {
        type: 'dark',
        text: {
            primary: '#ffffff',
            secondary: '#53f6c7',
        },
        primary: {
            light: '#4f83cc',
            main: '#0a0c17',
            dark: '#002f6c',
        },
        secondary: {
            light: '#6ec6ff',
            main: '#0a192f',
            dark: '#0069c0',
        },
        mainPage: {
            minHeight: '100vh',
            // background: '#1d1b24',
            // background: '#0a0c17',
            padding: '2%',
            paddingTop: '6%',
            flexGrow: 1,
            boxSizing: 'border-box',
        },
        particle: {
            background: '#0a0c17',
            width: '100%',
            height: '100%',
            position: 'fixed',
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
        },
        fullHeight: {
            minHeight: '100vh',
        },
    },
});

export { darkTheme, lightTheme };