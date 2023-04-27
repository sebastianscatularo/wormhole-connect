import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { WalletType } from '../utils/wallet';
import { CENTER } from '../utils/style';

const useStyles = makeStyles<{ size: number }>()((theme, { size }) => ({
  container: {
    height: size,
    width: size,
    ...CENTER,
  },
  icon: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
}));

type Props = {
  type: WalletType;
  height?: number;
};

function WalletIcon(props: Props) {
  const size = props.height || 32;
  const { classes } = useStyles({ size });

  switch (props.type) {
    case WalletType.METAMASK: {
      return (
        <div className={classes.container}>
          <svg
            className={classes.icon}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            height="318.6"
            width="318.6"
            viewBox="0 0 318.6 318.6"
            enableBackground="0 0 318.6 318.6"
            xmlSpace="preserve"
          >
            <path
              fill="#e2761b"
              stroke="#e2761b"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m274.1 35.5-99.5 73.9L193 65.8z"
            />
            <path
              fill="#e4761b"
              stroke="#e4761b"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m44.4 35.5 98.7 74.6-17.5-44.3zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7 50.1 263l56.7-15.6-26.5-40.6z"
            />
            <path
              fill="#e4761b"
              stroke="#e4761b"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z"
            />
            <path
              fill="#d7c1b3"
              stroke="#d7c1b3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zM106.8 247.4l31.5 14.9-.2-9.3 2.5-22.1z"
            />
            <path
              fill="#233447"
              stroke="#233447"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m138.8 193.5-28.2-8.3 19.9-9.1zM179.7 193.5l8.3-17.4 20 9.1z"
            />
            <path
              fill="#cd6116"
              stroke="#cd6116"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zM230.8 162.1l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zM110.6 185.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
            />
            <path
              fill="#e4751f"
              stroke="#e4751f"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m87.8 162.1 23.6 46-.8-22.9zM208.1 185.2l-1 22.9 23.7-46zM144.1 164.6l-5.3 28.9 6.6 34.1 1.5-44.9zM174.6 164.6l-2.7 18 1.2 45 6.7-34.1z"
            />
            <path
              fill="#f6851b"
              stroke="#f6851b"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zM110.6 185.2l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
            />
            <path
              fill="#c0ad9e"
              stroke="#c0ad9e"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
            />
            <path
              fill="#161616"
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
            />
            <path
              fill="#763d16"
              stroke="#763d16"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
            />
            <path
              fill="#f6851b"
              stroke="#f6851b"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zM103.6 138.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zM174.6 164.6l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
            />
          </svg>
        </div>
      );
    }
    case WalletType.WALLET_CONNECT: {
      return (
        <div className={classes.container}>
          <svg
            className={classes.icon}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M76.4246 32.8121C61.9168 18.3379 38.0802 18.3379 23.5725 32.8121L21.6486 34.7416C21.3005 35.0916 21.1052 35.5651 21.1052 36.0587C21.1052 36.5523 21.3005 37.0258 21.6486 37.3758L27.6552 43.3769C27.8304 43.5518 28.0677 43.65 28.3152 43.65C28.5627 43.65 28.8 43.5518 28.9751 43.3769L31.5646 40.793C41.682 30.6924 58.315 30.6924 68.4324 40.793L70.8485 43.2035C71.0237 43.3784 71.261 43.4766 71.5085 43.4766C71.756 43.4766 71.9933 43.3784 72.1684 43.2035L78.1807 37.208C78.3566 37.0361 78.4963 36.8308 78.5917 36.6042C78.6872 36.3775 78.7363 36.134 78.7363 35.8881C78.7363 35.6422 78.6872 35.3987 78.5917 35.1721C78.4963 34.9454 78.3566 34.7401 78.1807 34.5682L76.4246 32.8121ZM94.1929 50.5581L88.8462 45.2169C88.4945 44.8699 88.0204 44.6754 87.5263 44.6754C87.0322 44.6754 86.5581 44.8699 86.2064 45.2169L69.0924 62.303C69.0038 62.3884 68.8855 62.4362 68.7624 62.4362C68.6393 62.4362 68.521 62.3884 68.4324 62.303L51.3184 45.2169C50.9668 44.8699 50.4926 44.6754 49.9985 44.6754C49.5045 44.6754 49.0303 44.8699 48.6786 45.2169L31.5646 62.303C31.476 62.3884 31.3577 62.4362 31.2346 62.4362C31.1116 62.4362 30.9933 62.3884 30.9047 62.303L13.7907 45.2169C13.439 44.8699 12.9648 44.6754 12.4708 44.6754C11.9767 44.6754 11.5025 44.8699 11.1509 45.2169L5.80413 50.5581C5.62825 50.73 5.4885 50.9353 5.39309 51.1619C5.29768 51.3886 5.24854 51.632 5.24854 51.878C5.24854 52.1239 5.29768 52.3673 5.39309 52.594C5.4885 52.8207 5.62825 53.026 5.80413 53.1979L29.9091 77.2693C30.6418 77.9964 31.8275 77.9964 32.5545 77.2693L49.6686 60.1833C49.7572 60.0979 49.8754 60.0501 49.9985 60.0501C50.1216 60.0501 50.2399 60.0979 50.3285 60.1833L67.4425 77.2693C68.1696 77.9964 69.3553 77.9964 70.0823 77.2693L94.1929 53.1979C94.3688 53.026 94.5086 52.8207 94.604 52.594C94.6994 52.3673 94.7485 52.1239 94.7485 51.878C94.7485 51.632 94.6994 51.3886 94.604 51.1619C94.5086 50.9353 94.3688 50.73 94.1929 50.5581Z"
              fill="#3B99FC"
            />
          </svg>
        </div>
      );
    }
    case WalletType.PHANTOM: {
      return (
        <div className={classes.container}>
          <svg
            className={classes.icon}
            width="173"
            height="173"
            viewBox="0 0 173 173"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.1 172.2C133.652 172.2 172.2 133.652 172.2 86.1C172.2 38.5483 133.652 0 86.1 0C38.5483 0 0 38.5483 0 86.1C0 133.652 38.5483 172.2 86.1 172.2Z"
              fill="url(#paint0_linear_101_6779)"
            />
            <path
              d="M147.8 87.1999H132.6C132.6 56.0999 107.5 30.8999 76.4999 30.8999C45.7999 30.8999 20.7999 55.3999 20.1999 86.0999C19.5999 117.5 49.1999 144.8 80.6999 144.8H84.6999C112.5 144.8 149.8 123.1 155.6 96.6999C156.5 92.3999 153.7 88.2999 149.4 87.3999C148.9 87.1999 148.4 87.1999 147.8 87.1999ZM53.7999 88.5999C53.7999 92.7999 50.3999 96.0999 46.1999 96.0999C41.9999 96.0999 38.6999 92.6999 38.6999 88.5999V76.3999C38.6999 72.1999 42.0999 68.8999 46.2999 68.8999C50.4999 68.8999 53.7999 72.2999 53.7999 76.3999V88.5999ZM79.9999 88.5999C79.9999 92.7999 76.5999 96.0999 72.3999 96.0999C68.1999 96.0999 64.8999 92.6999 64.8999 88.5999V76.3999C64.8999 72.1999 68.2999 68.8999 72.4999 68.8999C76.6999 68.8999 79.9999 72.2999 79.9999 76.3999V88.5999Z"
              fill="url(#paint1_linear_101_6779)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_101_6779"
                x1="86.14"
                y1="0"
                x2="86.14"
                y2="172.28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#534BB1" />
                <stop offset="1" stopColor="#551BF9" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_101_6779"
                x1="87.9737"
                y1="31.1599"
                x2="87.9737"
                y2="144.79"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.82" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }
    case WalletType.SOLFLARE: {
      return (
        <div className={classes.container}>
          <svg
            className={classes.icon}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_103_6791)">
              <path
                d="M50.3416 95.8208C51.3916 95.8208 52.243 96.6628 52.243 97.7014C52.243 98.74 51.3916 99.5818 50.3416 99.5818C49.2916 99.5818 48.4402 98.74 48.4402 97.7014C48.4402 96.6628 49.2916 95.8208 50.3416 95.8208ZM48.276 5.9895C49.2052 6.06622 49.9556 6.7703 50.0814 7.68312L52.3428 24.1146C53.1024 29.5432 59.6498 31.8954 63.6914 28.2064L86.3496 7.58324C86.8962 7.08578 87.7474 7.12026 88.251 7.66026C88.7128 8.1557 88.7268 8.9142 88.2832 9.4258L68.525 32.2174C64.8876 36.4058 67.5714 42.946 73.1162 43.413L90.5498 45.0936C91.418 45.1772 92.0532 45.9404 91.9684 46.7984C91.8986 47.5058 91.3536 48.0774 90.6428 48.1882L72.324 51.0486C67.0054 51.7736 64.5968 58.072 68.0562 62.1638L74.4962 69.756C75.015 70.3676 74.9338 71.279 74.3146 71.7916C73.7902 72.226 73.0308 72.2428 72.487 71.8322L64.5482 65.8366C60.264 62.6148 54.0888 65.3532 53.636 70.6852L51.8866 91.4804C51.8142 92.3394 51.051 92.9778 50.1816 92.9064C49.4436 92.8458 48.8474 92.287 48.7474 91.5622L45.9732 71.4748C45.2298 66.046 38.6824 63.694 34.6246 67.383L10.5207 89.331C10.0218 89.7852 9.24452 89.7538 8.7847 89.261C8.36282 88.8086 8.35 88.1162 8.75484 87.649L29.7912 63.372C33.4286 59.1836 30.761 52.6432 25.216 52.1764L7.77856 50.4954C6.9103 50.4118 6.27512 49.6484 6.35984 48.7906C6.4297 48.0832 6.97462 47.5118 7.68524 47.4006L25.992 44.5408C31.3108 43.8158 33.7356 37.5174 30.2762 33.4256L25.8922 28.2574C25.2488 27.499 25.3496 26.3688 26.1174 25.7332C26.768 25.1944 27.71 25.1738 28.3842 25.6834L33.7678 29.7528C38.052 32.9746 44.2272 30.2362 44.68 24.9042L46.1282 7.78424C46.2196 6.70264 47.1812 5.8991 48.276 5.9895ZM1.90134 46.8688C2.95142 46.8688 3.80268 47.7108 3.80268 48.7494C3.80268 49.788 2.95142 50.63 1.90134 50.63C0.851258 50.63 0 49.788 0 48.7494C0 47.7108 0.851258 46.8688 1.90134 46.8688ZM97.2608 44.9594C98.3108 44.9594 99.1622 45.8014 99.1622 46.84C99.1622 47.8786 98.3108 48.7204 97.2608 48.7204C96.2108 48.7204 95.3594 47.8786 95.3594 46.84C95.3594 45.8014 96.2108 44.9594 97.2608 44.9594ZM48.0016 0C49.0516 0 49.9028 0.841946 49.9028 1.88054C49.9028 2.91914 49.0516 3.76108 48.0016 3.76108C46.9514 3.76108 46.1002 2.91914 46.1002 1.88054C46.1002 0.841946 46.9514 0 48.0016 0Z"
                fill="url(#paint0_linear_103_6791)"
              />
              <path
                d="M49.142 65.5584C59.0612 65.5584 67.1024 57.6054 67.1024 47.7946C67.1024 37.984 59.0612 30.0308 49.142 30.0308C39.2228 30.0308 31.1816 37.984 31.1816 47.7946C31.1816 57.6054 39.2228 65.5584 49.142 65.5584Z"
                fill="url(#paint1_radial_103_6791)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_103_6791"
                x1="12.9567"
                y1="15.84"
                x2="69.8214"
                y2="67.3186"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFC10B" />
                <stop offset="1" stopColor="#FB3F2E" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_103_6791"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(45.0404 41.2366) rotate(67.5196) scale(26.112 26.3658)"
              >
                <stop stopColor="#FFC10B" />
                <stop offset="1" stopColor="#FB3F2E" />
              </radialGradient>
              <clipPath id="clip0_103_6791">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      );
    }
    default: {
      return <div style={{ height: `${size}px`, width: `${size}px` }}></div>;
    }
  }
}

export default WalletIcon;