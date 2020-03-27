const SAIL = '#FFFCED';
const GRAY = '#282C33';
const BLACK = '#16171D';

type Theme = {
  light: {
    backgroundColor: string;
    color: string;
  };
    dark: {
    backgroundColor: string;
    color: string;
  }
}

const theme: Theme = {
  light: {
    backgroundColor: SAIL,
    color: GRAY
  },
  dark: {
    backgroundColor: BLACK,
    color: SAIL
  }
};

export default theme;
