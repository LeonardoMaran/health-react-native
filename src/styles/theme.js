/**
 * Basic color pallet of the app.
 * @type {String}
 */
const theme = {
  color: {
    light: '#DEE5EA',
    regular: '#1B4964',
    dark: '#093854'
  },
  font: {
    bold: {
      fontFamily: 'OleoScript',
      fontWeight: 'bold'
    },
    regular: {
      fontFamily: 'OleoScript',
      fontWeight: '400'
    }
  }
};

// default text styles
theme.text = {
  header: {
    ...theme.font.bold,
    color: theme.color.dark
  },
  regular: {
    ...theme.font.regular,
    color: theme.color.regular,
    fontSize: 25
  }
};

theme.text.regularCenter = {
  ...theme.text.regular,
  textAlign: 'center'
}

// default button styles
theme.button = {
  style: {
    backgroundColor: theme.color.dark,
    borderRadius: 10
  },
  icon: {
    size: 26
  },
  text: {
    ...theme.font.regular,
    color: theme.color.light,
    textAlign: 'center'
  }
};

// default containers

theme.container = {
  regular: {
    flex: 1,
    backgroundColor: theme.color.light
  }
};

theme.container.center = {
  ...theme.container.regular,
  alignItems: 'center'
}

theme.container.justified = {
  ...theme.container.center,
  justifyContent: 'center'
}

export default theme;
