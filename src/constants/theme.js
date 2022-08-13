const transitionDuration = 250;
const transitionFunction = 'ease-out';

export const theme = Object.freeze({
  colors: {
    darkText: '#212121',
    lightText: '#8a8a8a',
    whiteText: '#fff',

    darkBG: '#ddd',
    lightBG: '#f6f6f6',
    whiteBG: '#fff',

    backdropBG: '#5e5e5ea0',

    lightTransparentBG: '#eeeeee80',

    addButtonHovered: '#f7f7f7',

    addButtonBG: '#2c9403',
    addButtonHoveredBG: '#297a09',

    filterIcon: '#888',
    filterIconHovered: '#212121',

    tableHead: '#11c2bc',
    sortButtonBG: 'transparent',
    tableRowLight: '#f8f8f8',
    tableRowLightHovered: '#dadada',
    tableRowDark: '#eaeaea',
    tableRowDarkHovered: '#cfcfcf',

    callIcon: '#2c9403',
    callIconHovered: '#297a09',

    deleteButtonIcon: '#db1212',
    deleteButtonIconHovered: '#ba0b0b',
    deleteButtonBG: 'transparent',

    cancelButton: '#db1212',
    cancelButtonHovered: '#ba0b0b',

    errorText: '#c40a0a',
  },

  space: [0, '2px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],

  sizes: {
    headerH: '70px',

    filterFieldW: '230px',
    filterFieldH: '38px',

    addContactIcon: '26px',
    filterIcon: '20px',

    contactsTableMin: '290px',
    contactsTableMax: '520px',

    sortButton: '26px',
    sortButtonIcon: '22px',

    callLink: '30px',
    callLinkIcon: '22px',

    deleteButton: '32px',
    deleteButtonIcon: '30px',

    noResultIcon: '26px',

    addFormMin: '340px',
    addFormMax: '350px',

    addFormFieldW: '100%',
    addFormFieldH: '42px',

    addFormFieldIcon: '18px',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '22px',
    xl: '26px',
    xxl: '32px',
  },

  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },

  borders: {
    light: '1px solid #aaa',
    generic: '1px solid #888',
    genericHovered: '1px solid #212121',
  },

  radii: {
    none: '0',
    generic: '8px',
    round: '50%',
  },

  shadows: {
    generic:
      '0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16)',
    genericHovered:
      '0px 1px 1px rgba(0, 0, 0, 0.22), 0px 4px 4px rgba(0, 0, 0, 0.16), 1px 4px 6px rgba(0, 0, 0, 0.26)',
    text: '0px 0px 10px rgba(0, 0, 0, 1)',
  },

  breakPoints: {
    midMin: '480px',
    midMax: '767.98px',
    tabletMin: '768px',
    tabletMax: '1279.98px',
    desktopMin: '1280px',
    desctopMax: '1679.98px',
    bigMin: '1680px',
  },

  transitions: {
    opacity: `opacity ${transitionDuration}ms ${transitionFunction}`,
    visibility: `visibility ${transitionDuration}ms ${transitionFunction}`,

    color: `color ${transitionDuration}ms ${transitionFunction}`,
    backgroundColor: `background-color ${transitionDuration}ms ${transitionFunction}`,
    borderColor: `border-color ${transitionDuration}ms ${transitionFunction}`,

    boxShadow: `box-shadow ${transitionDuration}ms ${transitionFunction}`,

    transform: `transform ${transitionDuration}ms ${transitionFunction}`,

    font: `font ${transitionDuration}ms ${transitionFunction}`,

    contactButtonsBackwardOpacity: `opacity ${transitionDuration}ms ${transitionFunction} ${
      transitionDuration / 2
    }ms`,
    contactDataBackwardTransform: `transform ${transitionDuration}ms ${transitionFunction} ${
      transitionDuration / 2
    }ms`,
  },
});
