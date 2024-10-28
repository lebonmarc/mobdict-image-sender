import * as React from 'react';

function MiniLogo(props) {
  return (
    <svg
      width={62}
      height={43}
      viewBox="0 0 62 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0_2_86)" fill="#0A2854">
        <path d="M51.048 12.25l-27.792 2.338c-3.85.322-7.196 2.935-8.623 6.741l-2.061 5.488c-.497 1.317-2.042 1.766-3.102.9L0 22.18l8.367 15.586C10.199 41.011 13.506 43 17.077 43h33.246c4.93 0 9.147-3.754 9.994-8.897l1.533-9.286c1.143-6.92-4.19-13.12-10.798-12.564l-.004-.004zM42.015 9.974c-.06-.115-.06-.274 0-.473l1.915-4.816c.197-.457.087-.688-.339-.688h-.555c-.37 0-.556-.171-.556-.517V.473c0-.314.126-.473.382-.473h4.477c.284 0 .426.143.426.43v2.704c0 .17-.043.342-.126.517l-3.11 6.021c-.17.283-.52.473-.85.473H42.31c-.142 0-.24-.06-.3-.17h.004z" />
      </g>
      <defs>
        <clipPath id="clip0_2_86">
          <path fill="#fff" d="M0 0H62V43H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MiniLogo;