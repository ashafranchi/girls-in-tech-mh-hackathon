import * as React from "react";
import Svg, {
  G,
  Path,
  Ellipse,
  Rect,
  Text,
  TSpan,
  Circle,
} from "react-native-svg";

const WelcomeImage = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={271} height={228} {...props}>
        <Path
          d="M34.164 122.01c0-1.075-.38-1.993-1.141-2.754a3.754 3.754 0 00-2.755-1.141c-1.076 0-1.994.38-2.755 1.14a3.754 3.754 0 00-1.14 2.756c0 1.076.38 1.994 1.14 2.755a3.754 3.754 0 002.755 1.14c1.076 0 1.994-.38 2.755-1.14a3.754 3.754 0 001.141-2.755M51.246 154.077c0-1.076-.38-1.994-1.141-2.755a3.754 3.754 0 00-2.755-1.141c-1.076 0-1.994.38-2.755 1.141a3.754 3.754 0 00-1.14 2.755c0 1.076.38 1.994 1.14 2.755a3.754 3.754 0 002.755 1.14c1.076 0 1.994-.38 2.755-1.14a3.754 3.754 0 001.141-2.755M38.06 145.985c0-1.075-.38-1.994-1.141-2.754a3.754 3.754 0 00-2.755-1.141c-1.076 0-1.994.38-2.755 1.14a3.754 3.754 0 00-1.14 2.755c0 1.076.38 1.995 1.14 2.755a3.754 3.754 0 002.755 1.141c1.076 0 1.994-.38 2.755-1.14a3.754 3.754 0 001.14-2.756M190.087 219.108h-66.312s-1.344-19.714 6.609-19.938c7.953-.224 7.057 8.737 17.026-3.584 9.97-12.322 22.067-11.65 23.635-4.369 1.568 7.28-3.025 13.106 5.376 11.313 8.402-1.792 20.5 2.913 13.666 16.578z"
          fill="#E3562A"
        />
        <Path
          d="M155.812 219.113l-.224-.009c.522-12.98 3.24-21.32 5.429-26.03 2.376-5.115 4.666-7.185 4.689-7.205l.149.167c-.023.02-2.286 2.07-4.643 7.15-2.177 4.69-4.88 12.996-5.4 25.927zM179.812 219.14l-.215-.063c2.59-8.889 8.688-14.5 8.75-14.556l.15.166a34.516 34.516 0 00-8.685 14.453zM134.22 219.124l-.223-.03a24.4 24.4 0 00-2.194-14.262 19.638 19.638 0 00-3.464-5.054l.155-.162a19.883 19.883 0 013.51 5.116 24.623 24.623 0 012.215 14.392z"
          fill="#F2F2F2"
        />
        <Path
          d="M199.087 219.408h-82.465l-.019-.28c-.047-.694-1.099-17.086 4.212-22.935a5.817 5.817 0 014.251-2.04c3.462-.098 5.638 1.2 7.393 2.24 3.307 1.962 5.492 3.258 13.437-6.56 8.606-10.638 17.892-12.926 23.23-11.654 3.449.823 5.826 3.147 6.522 6.377.658 3.058.449 5.932.28 8.242-.18 2.47-.323 4.422.692 5.306.847.738 2.538.805 5.32.212 5.661-1.208 13.56-.175 17.524 4.947 2.133 2.756 3.813 7.765-.294 15.98l-.083.165zm-81.902-.6h81.531c3.06-6.208 3.156-11.454.274-15.178-3.637-4.699-11.267-5.935-16.924-4.728-3.024.645-4.825.538-5.84-.346-1.24-1.08-1.088-3.164-.896-5.802.166-2.271.372-5.097-.268-8.072-.645-2.995-2.86-5.153-6.075-5.92-5.168-1.233-14.194 1.027-22.626 11.447-8.27 10.222-10.76 8.744-14.208 6.7-1.777-1.054-3.794-2.25-7.07-2.156a5.24 5.24 0 00-3.824 1.843c-4.773 5.257-4.19 19.997-4.074 22.213z"
          fill="#CFCCE0"
        />
        <Path
          d="M96.995 219.033h118.298v.599H96.995zM89.46 155.39c.106.728.11 1.468.013 2.198-.02.165-.045.328-.075.488v.001a13.02 13.02 0 01-2.04 4.816c-.066.094-.103.143-.103.143l-.14-.107a13.447 13.447 0 01-2.852-3.13 10.2 10.2 0 01-.201-.328 8.579 8.579 0 01-1.15-3.087l-.002-.016a6.71 6.71 0 01-.043-.35 8.816 8.816 0 01.26-3.043c.03-.124.063-.246.098-.366a13.452 13.452 0 011.789-3.745c.065-.094.102-.143.102-.143s.05.036.14.107a13.45 13.45 0 012.786 3.03c.067.102.134.206.2.313.448.723.795 1.505 1.028 2.323.04.143.076.289.106.436.034.15.062.304.085.46zM125.802 170.553a8.013 8.013 0 011.164 1.865c.07.151.133.303.193.455v.001a13.02 13.02 0 01.777 5.346l-.175-.017a13.447 13.447 0 01-4.07-1.168c-.114-.056-.23-.113-.343-.174a8.579 8.579 0 01-2.599-2.025l-.01-.012a6.696 6.696 0 01-.22-.275 8.815 8.815 0 01-1.377-2.727 9.842 9.842 0 01-.107-.364 13.452 13.452 0 01-.443-4.126c.006-.114.013-.175.013-.175s.061.004.175.017a13.45 13.45 0 013.96 1.117c.112.052.223.106.335.163.761.38 1.466.863 2.095 1.437.109.1.215.206.318.315.109.111.213.227.314.347z"
          fill="#CFCCE0"
        />
        <Path
          d="M131.222 100.801l-1.504 25.067s-5.014 14.037 1.504 14.037c6.517 0 2.506-15.04 2.506-15.04l6.016-24.565-8.522.501zM179.85 97.793l1.505 25.067s5.013 14.037-1.504 14.037c-6.517 0-2.507-15.04-2.507-15.04l-6.016-24.565 8.523.501z"
          fill="#FFB9B9"
        />
        <Path
          d="M149.77 204.076l1.004 12.533s-4.011 10.027 2.506 11.03a5.171 5.171 0 005.989-6.003l-.975-5.528s.5-10.027-2.507-12.032c-3.008-2.006-6.016 0-6.016 0zM159.296 193.047s-1.002 3.008-.501 6.016 1.003 11.53 1.003 11.53 0 9.024 3.509 9.024c1.253 0 2.315-1.087 3.162-2.485a12.722 12.722 0 001.29-9.934l-1.945-7.133v-5.514l-6.518-1.504z"
          fill="#2F2E41"
        />
        <Path
          d="M140.747 101.303s-11.03 14.538-5.013 36.096c6.016 21.557 6.517 27.573 6.517 27.573l3.51 41.11s6.015 2.005 11.029-1.003l-1.504-39.606V141.41l3.008 26.57v26.571s7.018 7.02 12.032.502l1.002-29.579s3.008-41.11 1.003-45.12c-2.005-4.01-6.517-18.048-6.517-18.048l-25.067-1.002zM150.731 33.659s-5.098-1.82-8.376 5.463c-3.278 7.283-8.376 15.295-8.376 15.295l2.913.728s.729-5.098 2.55-5.826l-.729 6.555s21.85 7.647 31.684-.729l-.365-2.549s1.457.364 1.457 2.55l1.093-1.093s-1.093-2.185-4.37-5.099c-2.152-1.912-2.891-5.55-3.145-7.824a9.469 9.469 0 00-2.18-5.157c-2.178-2.524-6.147-5.207-12.156-2.314z"
          fill="#2F2E41"
        />
        <Path
          d="M162.806 48.161c0-2.63-.93-4.875-2.79-6.735-1.86-1.86-4.105-2.79-6.736-2.79-2.63 0-4.875.93-6.735 2.79-1.86 1.86-2.79 4.105-2.79 6.735s.93 4.876 2.79 6.736c1.86 1.86 4.105 2.79 6.735 2.79s4.876-.93 6.736-2.79c1.86-1.86 2.79-4.105 2.79-6.736"
          fill="#FFB9B9"
        />
        <Path
          d="M150.774 54.177l-3.008 12.032 9.024 26.07 7.018-27.574s-6.517-4.512-5.013-10.528h-8.021z"
          fill="#FFB9B9"
        />
        <Path
          d="M175.339 122.86s-14.539 5.515-17.547-3.008c-3.008-8.523-2.506-15.04-2.506-15.04s-4.512 17.547-12.032 17.547c-7.52 0-11.531-2.507-11.531-2.507s5.515-17.547 10.528-20.555l.07-.17c.28-.702 1.273-3.485.577-5.931a5.09 5.09 0 00-.647-1.419c-2.005-3.008-4.01-4.01-3.51-11.53l-4.01-14.038 13.832-3.188 7.224 22.74 6.577-22.264 11.972 1.71s1.003 18.048-4.01 24.565a10.822 10.822 0 00-1.765 3.424c-.872 2.767-.667 5.68-.196 8.006h.005a22.14 22.14 0 001.454 4.613l5.515 17.045z"
          fill="#CFCCE0"
        />
        <Path
          d="M171.328 65.708l3.008-.501s1.254-.251 3.51 1.504c2.88 2.24 3.008 32.586 3.008 32.586l-9.526.502V65.708zM137.238 67.212l-2.507-1.003s-1.003-.501-1.504 2.507c-.501 3.008-3.008 34.09-3.008 34.09l10.528-.5v-22.56l-3.51-12.534z"
          fill="#CFCCE0"
        />
        <Path
          d="M142.263 49.548s2.913-4.006 5.462-4.734c2.55-.729 2.914-4.37 2.914-4.37s6.555 7.283 10.56 7.647c4.007.364.365-8.74.365-8.74l-7.283-1.82-6.92.727L141.9 41.9l.364 7.648zM159.046 96.039c0-.831-.294-1.54-.881-2.127a2.898 2.898 0 00-2.127-.881c-.831 0-1.54.293-2.127.88a2.898 2.898 0 00-.881 2.128c0 .83.293 1.54.88 2.127a2.898 2.898 0 002.128.88c.83 0 1.54-.293 2.127-.88a2.898 2.898 0 00.88-2.127"
          fill="#2F2E41"
        />
        <Path
          d="M207.752 53.354C202.386 38.239 208.865 21.47 223 13.892c14.136-7.58 31.688-3.697 41.307 9.137 9.62 12.834 8.423 30.77-2.817 42.211-11.24 11.442-29.153 12.957-42.155 3.566a10.499 10.499 0 11-11.583-15.452z"
          fill="#E3562A"
        />
        <Path
          d="M229.887 41.16a3.619 3.619 0 00-1.1-2.655 3.619 3.619 0 00-2.656-1.1 3.619 3.619 0 00-2.656 1.1 3.619 3.619 0 00-1.1 2.655c0 1.038.367 1.923 1.1 2.656a3.619 3.619 0 002.656 1.1 3.619 3.619 0 002.656-1.1 3.619 3.619 0 001.1-2.656M242.702 41.16a3.619 3.619 0 00-1.1-2.655 3.619 3.619 0 00-2.656-1.1 3.619 3.619 0 00-2.656 1.1 3.619 3.619 0 00-1.1 2.655c0 1.038.366 1.923 1.1 2.656a3.619 3.619 0 002.656 1.1 3.619 3.619 0 002.655-1.1 3.619 3.619 0 001.1-2.656M255.516 41.16a3.619 3.619 0 00-1.1-2.655 3.619 3.619 0 00-2.656-1.1 3.619 3.619 0 00-2.656 1.1 3.619 3.619 0 00-1.1 2.655c0 1.038.367 1.923 1.1 2.656a3.619 3.619 0 002.656 1.1 3.619 3.619 0 002.656-1.1 3.619 3.619 0 001.1-2.656"
          fill="#CFCCE0"
        />
        <Path
          d="M204.541 67.506a11.267 11.267 0 01-.197-21.776c-5.484-15.924 1.44-33.47 16.32-41.359 14.881-7.888 33.29-3.77 43.392 9.705 10.102 13.476 8.89 32.3-2.854 44.371-11.746 12.071-30.53 13.796-44.277 4.067a11.303 11.303 0 01-12.384 4.992zM245.096 1.94a33.667 33.667 0 00-40.079 43.897l.111.313-.322.08a10.668 10.668 0 1011.77 15.7l.165-.287.27.195A33.667 33.667 0 10245.095 1.94zM35.407 201.284c-.07-.113-1.69-2.82-2.253-8.443-.516-5.158-.184-13.853 4.325-25.982 8.543-22.977-1.968-41.516-2.076-41.701l.519-.3c.027.046 2.74 4.773 4.342 12.3a53.662 53.662 0 01-2.223 29.91c-8.528 22.938-2.188 33.796-2.123 33.903l-.511.313zM32.066 124.109a4.196 4.196 0 110-8.392 4.196 4.196 0 010 8.392zm0-7.792a3.596 3.596 0 100 7.192 3.596 3.596 0 000-7.192z"
          fill="#CFCCE0"
        />
        <Path
          d="M48.25 134.298c0-1.076-.381-1.994-1.142-2.755a3.754 3.754 0 00-2.755-1.141c-1.076 0-1.994.38-2.755 1.141a3.754 3.754 0 00-1.14 2.755c0 1.076.38 1.994 1.14 2.755a3.754 3.754 0 002.755 1.14c1.076 0 1.994-.38 2.755-1.14a3.754 3.754 0 001.141-2.755M35.962 148.083a4.196 4.196 0 110-8.39 4.196 4.196 0 010 8.39zm0-7.792a3.596 3.596 0 100 7.193 3.596 3.596 0 000-7.193zM46.151 156.175a4.196 4.196 0 110-8.391 4.196 4.196 0 010 8.39zm0-7.792a3.596 3.596 0 100 7.192 3.596 3.596 0 000-7.192z"
          fill="#CFCCE0"
        />
        <Path
          d="M197.192 183.746c0-1.076-.38-1.994-1.14-2.755a3.754 3.754 0 00-2.756-1.141c-1.075 0-1.994.38-2.754 1.14a3.754 3.754 0 00-1.141 2.756c0 1.076.38 1.994 1.14 2.755a3.754 3.754 0 002.755 1.14c1.076 0 1.995-.38 2.755-1.14a3.754 3.754 0 001.141-2.755"
          fill="#E3562A"
        />
        <Path
          d="M192.098 185.843a4.196 4.196 0 110-8.39 4.196 4.196 0 010 8.39zm0-7.791a3.596 3.596 0 100 7.192 3.596 3.596 0 000-7.192z"
          fill="#CFCCE0"
        />
        <Path
          d="M86.01 205.623c0-1.076-.38-1.994-1.142-2.755a3.754 3.754 0 00-2.754-1.141c-1.076 0-1.995.38-2.755 1.14a3.754 3.754 0 00-1.141 2.756c0 1.075.38 1.994 1.14 2.754a3.754 3.754 0 002.756 1.142c1.075 0 1.994-.38 2.754-1.142a3.754 3.754 0 001.141-2.754"
          fill="#E3562A"
        />
        <Path
          d="M80.915 207.72a4.196 4.196 0 110-8.39 4.196 4.196 0 010 8.39zm0-7.791a3.596 3.596 0 100 7.192 3.596 3.596 0 000-7.192zM36.861 164.566c0-1.076-.38-1.994-1.14-2.755a3.754 3.754 0 00-2.756-1.141c-1.076 0-1.994.38-2.755 1.141a3.754 3.754 0 00-1.14 2.755c0 1.076.38 1.994 1.14 2.755a3.754 3.754 0 002.755 1.14c1.076 0 1.994-.38 2.755-1.14a3.754 3.754 0 001.141-2.755M37.76 201.427s-3.896-9.59 7.792-16.782l-7.792 16.782zM32.969 201.253s-1.773-10.198-15.496-10.11l15.496 10.11z"
          fill="#CFCCE0"
        />
        <Path d="M0 200.828h62.934v.6H0z" fill="#CFCCE0" />
      </svg>
    )
  }

export default WelcomeImage;