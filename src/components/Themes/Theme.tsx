export interface Theme {
  body: string;
  text: string;
  fontFamily: string;
  bodyRgba: string;
  textRgba: string;
}

//  Light theme
export const LightTheme: Theme = {
  body: '#FCF6F4',
  text: '#000000',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '252, 246, 244',
  textRgba: '0, 0, 0',
};

//  Dark theme
export const DarkTheme: Theme = {
  body: '#000000',
  text: '#FCF6F4',
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: '252, 246, 244',
  bodyRgba: '0, 0, 0',
};
