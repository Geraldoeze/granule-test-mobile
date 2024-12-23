import {isIOS} from '../utils/platformUtil';

// A setup for multiple fonts
// export const fontFamily = {
//   OUTFIT: {
//     light: isIOS() ? 'Outfit-Light' : 'OutfitLight',
//     normal: isIOS() ? 'Outfit-Regular' : 'OutfitRegular',
//     medium: isIOS() ? 'Outfit-Medium' : 'OutfitMedium',
//     semi_bold: isIOS() ? 'Outfit-SemiBold' : 'OutfitSemiBold',
//     bold: isIOS() ? 'Outfit-Bold' : 'OutfitBold',
//     extra_bold: isIOS() ? 'Outfit-ExtraBold' : 'OutfitExtraBold',
//     black: isIOS() ? 'Outfit-Black' : 'OutfitBlack',
//   },
// };

const platformSpecificFont = (font: string) =>
  isIOS() ? font.replace(/-/g, '-') : font.replace(/-/g, '');

export const fontFamily = {
  extra_light: platformSpecificFont('Outfit-ExtraLight'),
  light: platformSpecificFont('Outfit-Light'),
  regular: platformSpecificFont('Outfit-Regular'),
  medium: platformSpecificFont('Outfit-Medium'),
  semi_bold: platformSpecificFont('Outfit-SemiBold'),
  bold: platformSpecificFont('Outfit-Bold'),
  thin: platformSpecificFont('Outfit-Thin'),
  black: platformSpecificFont('Outfit-Black'),
  extra_bold: platformSpecificFont('Outfit-ExtraBold'),
};
