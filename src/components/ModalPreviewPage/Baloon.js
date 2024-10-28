import * as React from 'react';
import {View} from 'react-native';
import CheckIcon from './CheckIcon';
import {Text} from 'react-native';
import colors from '../../theme/colors';

function Baloon(props) {
  return (
    <View
      style={{
        width: 311,
        height: '100%',
        justifyContent: 'center',
        gap: 8,
        paddingTop: 64,
        position: 'relative',
      }}>
    <svg
      width={311}
      height={278}
      viewBox="0 0 311 278"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M231.729 267.786L59.596 254.551c-12.787-.982-23.235-10.584-25.278-23.224l-20.72-128.326c-2.669-16.525 9.835-31.623 26.597-32.112l201.232-5.876c16.267-.475 29.451 13.055 28.529 29.272l-8.374 147.441c-.883 15.499-14.344 27.254-29.849 26.06h-.004z"
        fill="#0A2854"
      />
      <path
        d="M218.492 277.916L46.359 264.681c-12.787-.982-23.235-10.584-25.278-23.224L.361 113.131c-2.669-16.525 9.836-31.623 26.598-32.112l201.231-5.876c16.268-.475 29.452 13.055 28.529 29.272l-8.374 147.441c-.882 15.499-14.344 27.254-29.849 26.06h-.004z"
        fill="#00DCCF"
      />
      <g clipPath="url(#clip0_0_1)" fill="#00DCCF">
        <path d="M252.641 44.755c1.099-13.614 2.185-27.228 3.278-40.836.404-5.026-7.382-5.319-7.78-.286-1.036 13.194-2.091 26.388-3.126 39.582-.392 4.962 7.224 6.566 7.628 1.54zM270.355 51.008c6.196-14.473 12.448-28.927 18.548-43.438 1.926-4.593-4.799-8.435-6.808-3.798-6.302 14.569-12.497 29.182-18.724 43.782-1.971 4.625 5.001 8.092 6.984 3.454zM284.678 57.809c6.657-6.018 13.3-12.055 19.988-18.035 3.751-3.353-1.623-9.085-5.336-5.7-6.694 6.088-13.426 12.138-20.152 18.194-3.745 3.372 1.787 8.9 5.5 5.541zM290.886 78.975c5.551-.611 11.108-1.222 16.66-1.839 4.963-.547 4.401-8.378-.594-7.819l-15.971 1.814c-4.901.56-5.084 8.384-.095 7.837v.007z" />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <path fill="#fff" transform="translate(245)" d="M0 0H66V79H0z" />
        </clipPath>
      </defs>
    </svg>
      <CheckIcon />
      <Text
        style={{
          width: 311,
          paddingHorizontal: 48,
          color: colors.darkBlue,
          fontFamily: 'Archivo',
          fontSize: 22,
          fontWeight: 'bold',
          fontStyle: 'italic',
          position: 'absolute',
        }}>
        Foto do texto enviada com sucesso!
      </Text>
    </View>
  );
}

export default Baloon;