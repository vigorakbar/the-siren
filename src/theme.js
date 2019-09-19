import { createMuiTheme } from '@material-ui/core/styles';

const createTheme = () => {
  return createMuiTheme({
    palette: {
      text: {
        primary: '#404040',
        secondary: '#313131',
        hint: '#9A9A9A',
        disabled: '#888888',
        grey: '4C4C4C',
        highlight: '#F26A6E'
      },
      background: {
        grey: '#F7F7F7',
        darkGrey: '#393939',
        darkestGrey: '#1A1A1A'
      },
      common: {
        orange: '#F78181'
      },
      divider: '#ECECEC'
    },
  });
};

export default createTheme;
