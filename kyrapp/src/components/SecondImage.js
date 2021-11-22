import * as React from "react";
import { View } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from "react-native-svg";

const SecondImage = (props) => {
  return (
    <View>
    <svg xmlns="http://www.w3.org/2000/svg" width={245} height={185} {...props}>
      <Path
        d="M115.139 155.303s3.116-5.111 7.116-2.089c4 3.022 11.408 8.122 11.408 8.122s1.517 3.262-2.41 2.037c-3.927-1.226-16.747-3.197-16.747-3.197l.633-4.873z"
        fill="#FEB8B8"
      />
      <Path
        d="M28.065 122.84c.993-7.984 5.941-15.851 13.556-18.45a37.069 37.069 0 00.002 25.451c1.17 3.165 2.8 6.563 1.7 9.753-.685 1.985-2.36 3.503-4.232 4.453-1.873.95-3.951 1.402-6.004 1.845l-.403.334c-3.258-7.356-5.611-15.402-4.619-23.386z"
        fill="#F0F0F0"
      />
      <Path
        d="M41.696 104.542a31.684 31.684 0 00-7.876 17.831 13.644 13.644 0 00.155 4.273 7.826 7.826 0 001.946 3.63c.878.963 1.886 1.847 2.514 3.008a4.792 4.792 0 01.234 3.911c-.554 1.59-1.646 2.885-2.758 4.115-1.235 1.366-2.54 2.764-3.064 4.575-.064.219-.4.108-.337-.111.913-3.15 3.97-4.939 5.429-7.776.68-1.323.966-2.86.328-4.258-.558-1.221-1.598-2.134-2.494-3.102a8.35 8.35 0 01-2.036-3.479 12.614 12.614 0 01-.319-4.25 30.74 30.74 0 012.245-9.341 32.246 32.246 0 015.799-9.292c.151-.17.385.097.234.266z"
        fill="#FFF"
      />
      <Path
        d="M33.915 120.228a4.754 4.754 0 01-3.618-4.98c.018-.227.372-.21.354.018a4.402 4.402 0 003.375 4.625c.222.053.11.389-.11.337zM35.412 129.845a9.162 9.162 0 004.092-5.277c.064-.219.4-.107.336.112a9.53 9.53 0 01-4.268 5.482c-.197.116-.355-.2-.16-.317zM37.381 110.498a2.69 2.69 0 002.55-.13c.195-.118.353.2.16.318a3.015 3.015 0 01-2.821.15.183.183 0 01-.113-.225.178.178 0 01.224-.113z"
        fill="#FFF"
      />
      <Path
        d="M64.83 118.651c-.12.078-.239.156-.359.237a35.436 35.436 0 00-4.53 3.537c-.111.099-.222.2-.33.302a37.357 37.357 0 00-8.113 11.106 36.276 36.276 0 00-1.987 5.142c-.734 2.433-1.335 5.13-2.787 7.12-.149.209-.31.409-.484.598H33.122l-.09-.042-.523.024.066-.281.039-.162c.009-.036.018-.072.024-.105a.494.494 0 01.009-.032c.006-.033.015-.063.02-.093.132-.536.268-1.072.408-1.607 0-.003 0-.003.003-.006 1.074-4.08 2.498-8.105 4.489-11.786.06-.11.12-.224.185-.335a34.616 34.616 0 013.11-4.716c.64-.811 1.32-1.59 2.038-2.332a25.448 25.448 0 016.368-4.77c4.705-2.484 10.152-3.436 15.18-1.918.128.038.254.077.382.12z"
        fill="#F0F0F0"
      />
      <Path
        d="M64.8 118.818a31.684 31.684 0 00-17.024 9.495 13.644 13.644 0 00-2.448 3.505 7.826 7.826 0 00-.632 4.07c.12 1.297.394 2.61.196 3.915a4.792 4.792 0 01-2.168 3.264c-1.4.936-3.051 1.313-4.68 1.625-1.808.347-3.691.678-5.2 1.808-.183.136-.385-.155-.202-.292 2.625-1.965 6.143-1.552 9.016-2.94 1.34-.647 2.493-1.702 2.825-3.202.29-1.311.01-2.666-.123-3.979a8.35 8.35 0 01.469-4.002 12.614 12.614 0 012.304-3.586 30.74 30.74 0 017.417-6.107 32.246 32.246 0 0110.224-3.928c.223-.044.249.31.027.354z"
        fill="#FFF"
      />
      <Path
        d="M49.144 126.657a4.754 4.754 0 01.11-6.154c.15-.171.423.056.271.227a4.402 4.402 0 00-.09 5.725c.146.176-.146.377-.29.202zM44.549 135.238a9.162 9.162 0 006.444-1.75c.183-.137.385.155.202.291a9.53 9.53 0 01-6.71 1.807c-.227-.025-.162-.374.064-.348zM57.77 120.976a2.69 2.69 0 002.113 1.432c.228.022.163.37-.063.349a3.015 3.015 0 01-2.342-1.58.183.183 0 01.045-.246.178.178 0 01.246.045z"
        fill="#FFF"
      />
      <Path
        d="M133.856 175.756c.385-3.095 2.302-6.143 5.253-7.15a14.366 14.366 0 00.001 9.863c.454 1.227 1.086 2.544.66 3.78a3.211 3.211 0 01-1.641 1.725 9.538 9.538 0 01-2.327.716l-.156.13c-1.263-2.852-2.175-5.97-1.79-9.064z"
        fill="#F0F0F0"
      />
      <Path
        d="M139.139 168.664a12.279 12.279 0 00-3.053 6.91 5.287 5.287 0 00.06 1.657c.122.527.382 1.013.755 1.406.37.348.697.74.974 1.166.245.47.278 1.021.09 1.516a4.824 4.824 0 01-1.069 1.595c-.478.529-.984 1.071-1.187 1.773-.025.085-.155.041-.13-.043.353-1.221 1.538-1.914 2.103-3.014.296-.5.342-1.11.128-1.65a4.87 4.87 0 00-.967-1.202 3.236 3.236 0 01-.789-1.348 4.89 4.89 0 01-.123-1.648c.098-1.244.392-2.466.87-3.62a12.497 12.497 0 012.247-3.601c.059-.066.15.038.09.103z"
        fill="#FFF"
      />
      <Path
        d="M136.123 174.743a1.842 1.842 0 01-1.402-1.93c.007-.088.144-.081.137.007a1.706 1.706 0 001.308 1.793c.086.02.043.15-.043.13zM136.703 178.47a3.55 3.55 0 001.586-2.044c.025-.085.155-.042.13.043a3.694 3.694 0 01-1.654 2.124c-.076.045-.138-.077-.062-.122zM137.466 170.973c.317.15.689.131.989-.05.075-.047.137.076.061.122-.332.2-.741.221-1.093.058a.071.071 0 01-.043-.087.07.07 0 01.086-.043z"
        fill="#FFF"
      />
      <Path
        d="M148.104 174.132l-.139.092a13.734 13.734 0 00-1.883 1.488 14.478 14.478 0 00-3.145 4.304 14.06 14.06 0 00-.77 1.993c-.284.943-.517 1.988-1.08 2.759-.057.081-.12.159-.188.232h-5.083l-.035-.016-.203.009.026-.109.015-.063.009-.04a.183.183 0 01.003-.013l.009-.036c.05-.208.103-.415.157-.623l.001-.002c.398-1.586.982-3.12 1.74-4.568.023-.042.047-.087.072-.13.351-.64.754-1.252 1.205-1.827.248-.315.512-.616.79-.904a9.863 9.863 0 012.468-1.849c1.823-.962 3.934-1.331 5.883-.743l.148.046z"
        fill="#F0F0F0"
      />
      <Path
        d="M148.093 174.197a12.28 12.28 0 00-6.598 3.68c-.386.4-.706.858-.949 1.358a3.033 3.033 0 00-.245 1.577c.087.501.113 1.01.076 1.518a1.857 1.857 0 01-.84 1.265 4.825 4.825 0 01-1.814.63c-.7.134-1.43.262-2.015.7-.071.053-.15-.06-.078-.113 1.017-.761 2.38-.602 3.494-1.14a1.88 1.88 0 001.095-1.24 4.87 4.87 0 00-.048-1.542 3.237 3.237 0 01.182-1.551c.216-.511.518-.98.893-1.39a11.913 11.913 0 012.874-2.367 12.496 12.496 0 013.962-1.522c.087-.017.097.12.011.137z"
        fill="#FFF"
      />
      <Path
        d="M142.025 177.235a1.842 1.842 0 01.042-2.385c.059-.066.165.022.106.088a1.706 1.706 0 00-.035 2.219c.056.068-.057.146-.113.078zM140.244 180.56a3.55 3.55 0 002.498-.678c.07-.053.149.06.078.113a3.693 3.693 0 01-2.6.7c-.088-.01-.063-.144.024-.135zM145.368 175.033c.162.311.47.52.82.555.087.009.062.144-.025.135a1.169 1.169 0 01-.908-.612.071.071 0 01.017-.095.069.069 0 01.096.017z"
        fill="#FFF"
      />
      <Path
        d="M221.197 110.03c-1.527-12.273-9.132-24.364-20.836-28.358a56.977 56.977 0 01-.002 39.119c-1.799 4.864-4.306 10.088-2.614 14.99 1.053 3.051 3.627 5.385 6.506 6.845 2.878 1.459 6.072 2.155 9.227 2.836l.62.514c5.008-11.308 8.625-23.675 7.099-35.947z"
        fill="#F0F0F0"
      />
      <Path
        d="M200.245 81.905a48.7 48.7 0 0112.107 27.408c.213 2.182.239 4.415-.239 6.566a12.028 12.028 0 01-2.991 5.58c-1.349 1.48-2.9 2.84-3.864 4.623-1.017 1.88-1.056 4.016-.36 6.013.852 2.443 2.53 4.434 4.24 6.324 1.898 2.1 3.903 4.25 4.71 7.032.097.337.615.165.517-.171-1.403-4.841-6.103-7.591-8.344-11.951-1.046-2.035-1.485-4.397-.504-6.545.857-1.878 2.455-3.28 3.833-4.769 1.447-1.563 2.557-3.277 3.129-5.346.584-2.116.646-4.355.49-6.533a47.248 47.248 0 00-3.45-14.358 49.563 49.563 0 00-8.913-14.282c-.233-.261-.592.15-.36.409z"
        fill="#FFF"
      />
      <Path
        d="M212.205 106.014a7.306 7.306 0 005.562-7.654c-.028-.35-.572-.322-.545.028a6.766 6.766 0 01-5.188 7.109c-.34.08-.168.598.171.517zM209.904 120.797a14.083 14.083 0 01-6.288-8.11c-.1-.337-.617-.166-.518.17a14.648 14.648 0 006.561 8.427c.303.18.546-.309.245-.487zM206.878 91.06a4.136 4.136 0 01-3.92-.199c-.3-.183-.542.305-.245.487a4.635 4.635 0 004.336.23.282.282 0 00.173-.345.274.274 0 00-.344-.173z"
        fill="#FFF"
      />
      <Path
        d="M164.687 103.591c.184.12.368.24.552.364a54.466 54.466 0 016.964 5.437c.17.152.34.308.506.465a57.42 57.42 0 0112.47 17.07 55.767 55.767 0 013.055 7.903c1.127 3.74 2.052 7.884 4.283 10.943.23.322.478.63.745.92h20.162c.046-.023.092-.041.138-.064l.805.037c-.033-.143-.07-.29-.102-.433-.018-.083-.04-.165-.06-.248-.013-.055-.027-.11-.036-.161a.753.753 0 00-.014-.05c-.01-.051-.023-.097-.032-.143-.203-.824-.411-1.647-.626-2.47 0-.005 0-.005-.004-.01-1.652-6.27-3.841-12.457-6.9-18.115-.092-.17-.184-.345-.285-.515a53.211 53.211 0 00-4.78-7.25 47.036 47.036 0 00-3.132-3.583 39.117 39.117 0 00-9.79-7.332c-7.23-3.818-15.602-5.28-23.33-2.949-.198.06-.391.12-.589.184z"
        fill="#F0F0F0"
      />
      <Path
        d="M164.732 103.847a48.7 48.7 0 0126.169 14.595c1.484 1.615 2.848 3.382 3.763 5.387a12.028 12.028 0 01.97 6.255c-.185 1.995-.605 4.014-.301 6.019.32 2.113 1.574 3.842 3.332 5.017 2.151 1.438 4.69 2.017 7.194 2.497 2.779.533 5.674 1.043 7.993 2.779.281.21.591-.238.31-.448-4.035-3.02-9.442-2.387-13.857-4.519-2.06-.995-3.832-2.616-4.343-4.921-.446-2.016-.015-4.098.19-6.116.214-2.12.068-4.156-.721-6.152-.808-2.042-2.106-3.866-3.542-5.512a47.247 47.247 0 00-11.4-9.386 49.563 49.563 0 00-15.715-6.038c-.343-.068-.382.476-.042.543z"
        fill="#FFF"
      />
      <Path
        d="M188.798 115.897a7.307 7.307 0 00-.168-9.46c-.232-.262-.651.087-.418.35a6.766 6.766 0 01.138 8.8c-.224.27.225.579.448.31zM195.86 129.085a14.083 14.083 0 01-9.904-2.69c-.281-.209-.591.24-.31.449a14.648 14.648 0 0010.312 2.778c.35-.04.25-.575-.097-.537zM175.54 107.164a4.136 4.136 0 01-3.249 2.201c-.35.035-.25.57.098.536a4.635 4.635 0 003.6-2.426.282.282 0 00-.07-.38.274.274 0 00-.378.07z"
        fill="#FFF"
      />
      <Path
        d="M244.701 146.992H.397a.3.3 0 110-.598h244.206a.3.3 0 01.3.3c0 .164-.037.298-.202.298zM85.787 173.328H31.82a.3.3 0 110-.598h53.87a.3.3 0 01.299.3c0 .164-.036.298-.202.298zM170.481 185h-53.966a.3.3 0 110-.599h53.869a.3.3 0 01.299.3c0 .165-.036.299-.202.299zM221.358 173.03H167.39a.3.3 0 110-.6h53.869a.3.3 0 01.3.3c0 .165-.037.3-.202.3z"
        fill="#CACACA"
      />
      <Path
        d="M99.833 161.657c-3.353 0-6.422-.322-8.86-1.08-2.899-.903-4.719-2.363-5.41-4.342a5.111 5.111 0 01.801-5.067c4.288-5.588 19.167-7.163 21.164-7.35l4.05-7.67c.26-1.83-.967-3.214 1.152-3.249l25.06-.34c2.08-.044 1.49 1.244 1.845 3.028l3.818 6.816-16.432 6.935 2.485 6.054-.162.094c-4.81 2.79-18.64 6.17-29.511 6.17z"
        fill="#2F2E41"
      />
      <Path
        d="M141.179 142.694s22.948-2.626 21.451 7.879c-1.496 10.504-18.957 17.945-45.398 0l2.994-5.253s9.853-.49 15.84-3.116l5.113.49z"
        fill="#2F2E41"
      />
      <Path
        d="M108.69 95.104s-4.362-.793-5.551 5.947c-1.19 6.741-3.095 22.708-3.095 22.708l-5.917 20.51a4.163 4.163 0 105.93 2.45l7.917-21.769 1.509-18.742v-9.821c0-.543-.307-1.04-.793-1.283zM139.39 95.104s4.362-.793 5.551 5.947c1.19 6.741 3.095 22.708 3.095 22.708l5.917 20.51a4.163 4.163 0 11-5.93 2.45l-7.917-21.769-1.509-18.742v-9.821c0-.543.307-1.04.793-1.283z"
        fill="#FEB8B8"
      />
      <Path
        d="M139.058 89.532l-8.25-3.086-15.991-.206-6.884 3.292 1.934 11.11s-3.904 6.61.394 13.22l.964 23.554s15.418 8.94 28.431-1.796l-2.94-21.899s4.919-10.16 1.105-13.935l1.237-10.254z"
        fill="#E3562A"
      />
      <Path
        d="M135.698 92.985l3.36-3.453s7.333 3.857 7.182 16.76l-9.25-2.852-1.292-10.455zM111.666 92.985l-3.57-3.57s-6.3 4.872-6.148 17.774l8.427-3.749 1.291-10.455z"
        fill="#E3562A"
      />
      <Path
        d="M134.939 152.751s-2.57-5.407-6.861-2.815c-4.292 2.592-12.188 6.897-12.188 6.897s-1.847 3.087 2.186 2.275c4.033-.812 16.988-1.445 16.988-1.445l-.125-4.912z"
        fill="#FEB8B8"
      />
      <Path
        d="M127.8 56.098c.036-.035.074-.066.11-.102 2.296-2.296 2.762-5.554 1.04-7.276-1.628-1.628-4.626-1.3-6.89.68-1.94-1.848-4.541-2.363-6.225-1.087-1.942 1.47-1.927 4.76.034 7.35.134.177.275.345.42.506a13.56 13.56 0 00-8.899 12.733v12.905a2.882 2.882 0 002.882 2.881h23.85a2.785 2.785 0 002.785-2.785v-13c0-5.772-3.655-10.91-9.107-12.805z"
        fill="#2F2E41"
      />
      <Path
        d="M130.529 64.08c-2.21-2.21-4.878-3.315-8.003-3.315-3.126 0-5.793 1.105-8.003 3.315s-3.315 4.878-3.315 8.003 1.105 5.793 3.315 8.003 4.877 3.315 8.003 3.315c3.125 0 5.793-1.105 8.003-3.315s3.314-4.878 3.314-8.003-1.105-5.793-3.314-8.003"
        fill="#FFB6B6"
      />
      <Path
        d="M110.633 64.964a15.393 15.393 0 008.797 2.719 9.433 9.433 0 01-3.739 1.538 31.04 31.04 0 0012.68.071 8.206 8.206 0 002.653-.911 3.359 3.359 0 001.638-2.191c.279-1.59-.96-3.033-2.246-4.006a16.574 16.574 0 00-13.928-2.783c-1.556.402-3.114 1.081-4.125 2.33-1.01 1.25-1.31 3.176-.347 4.463l-1.383-1.23z"
        fill="#2F2E41"
      />
      <Path
        d="M50.097 42.379l.357-.48 9.501 7.047c-.516-1.574-2.344-6.563-5.34-8.553-3.58-2.378-6.098-1.639-7.47.426-1.372 2.065-1.078 4.674 2.501 7.052 3.035 2.016 8.44 1.735 10.017 1.603l-9.566-7.095zM193.059 3.792l.44.405-7.997 8.717c1.619-.35 6.77-1.649 9.062-4.421 2.738-3.313 2.264-5.895.353-7.474-1.911-1.58-4.536-1.558-7.274 1.754-2.32 2.808-2.604 8.213-2.636 9.795l8.052-8.776zM64.072 96.866l.441.405-7.998 8.717c1.62-.35 6.771-1.649 9.063-4.422 2.737-3.312 2.263-5.894.352-7.473-1.91-1.58-4.535-1.559-7.273 1.754-2.32 2.808-2.604 8.213-2.637 9.795l8.052-8.776zM131.7 13.782l.519.3-5.925 10.239c1.505-.692 6.255-3.073 7.893-6.276 1.956-3.826.936-6.244-1.271-7.373-2.208-1.129-4.766-.541-6.723 3.285-1.658 3.243-.767 8.581-.457 10.133l5.965-10.308zM187.066 77.826l.518.3-5.924 10.24c1.505-.692 6.254-3.074 7.892-6.276 1.957-3.826.936-6.244-1.27-7.373-2.208-1.13-4.766-.542-6.723 3.284-1.659 3.243-.768 8.582-.457 10.133l5.964-10.308z"
        fill="#F2F2F2"
      />
    </svg>
    </View>
  );
};

export default SecondImage;