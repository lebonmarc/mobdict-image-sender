import * as React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native';

const image = require('./1.png');

function GaleryButton(props) {
  return (
    <View style={{
      width: 146,
      height: 126,
      justifyContent: 'center',
      alignItems: 'center', 
      position: 'relative'}}>
      <svg
      width={146}
      height={126}
      viewBox="0 0 146 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_0_1)" fill="#00DCCF">
        <path d="M123.01 17.562c.433-5.342.861-10.684 1.291-16.024.16-1.972-2.908-2.087-3.065-.113-.408 5.178-.823 10.355-1.231 15.533-.154 1.947 2.846 2.576 3.005.604zM129.988 20.016c2.441-5.68 4.904-11.351 7.307-17.045.759-1.803-1.891-3.31-2.682-1.49-2.483 5.716-4.923 11.45-7.376 17.18-.776 1.814 1.97 3.175 2.751 1.355zM135.631 22.685c2.622-2.362 5.239-4.731 7.874-7.078 1.477-1.315-.64-3.564-2.102-2.236-2.638 2.389-5.29 4.763-7.939 7.14-1.475 1.322.704 3.492 2.167 2.174zM138.076 30.99l6.563-.721c1.956-.215 1.734-3.288-.234-3.068l-6.291.711c-1.931.22-2.003 3.29-.038 3.076v.002z" />
      </g>
      <g clipPath="url(#clip1_0_1)">
        <path
          d="M108.14 121.205l-80.329-6.214c-5.967-.461-10.843-4.969-11.796-10.903l-9.67-60.247c-1.245-7.758 4.59-14.847 12.413-15.076l93.908-2.759c7.591-.223 13.744 6.13 13.313 13.743l-3.908 69.221c-.411 7.276-6.694 12.795-13.929 12.235h-.002z"
          fill="#0A2854"
        />
        <path
          d="M101.963 125.961l-80.329-6.214c-5.967-.461-10.843-4.969-11.796-10.903L.168 48.597c-1.245-7.759 4.59-14.847 12.413-15.077l93.908-2.758c7.591-.223 13.744 6.129 13.313 13.743l-3.908 69.221c-.411 7.276-6.694 12.795-13.929 12.235h-.002z"
          fill="#00DCCF"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <path fill="#fff" transform="translate(120)" d="M0 0H26V31H0z" />
        </clipPath>
      </defs>
    </svg>
      <Image
        source={image}
        style={{width: 50, height: 50, marginTop: 30, marginRight: 20, position: 'absolute'}}
      />
  </View>
  );
}

export default GaleryButton;