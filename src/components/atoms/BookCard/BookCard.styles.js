import { Dimensions } from 'react-native';

export const imageStyle = {
  bookCover: {
    borderRadius: 4,
    height: (Dimensions.get('window').width / 2) * 1.3,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  image: {
    borderRadius: 4,
    height: (Dimensions.get('window').width / 2) * 1.3,
    width: '100%',
  },
};
