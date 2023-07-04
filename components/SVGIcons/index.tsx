import React from "react";

export const Cross: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 31" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M30.0619 5.53979L27.9117 7.64219L20.6487 14.7438L19.9113 15.4649L20.6546 16.1797L27.9177 23.1636L27.9176 23.1637L27.9271 23.1725L30.0539 25.1654L25.7367 29.3867L23.667 27.2751L23.6671 27.275L23.6579 27.2659L16.5153 20.1642L15.8161 19.4691L15.1111 20.1584L7.84802 27.26L5.66536 29.3942L1.43811 25.1729L3.57293 23.1725L3.58069 23.1652L3.58829 23.1578L10.731 16.1739L11.4561 15.4648L10.7369 14.7497L3.59424 7.64806L3.59426 7.64803L3.58829 7.64219L1.43037 5.53223L5.65796 1.39859L7.84802 3.53997L7.84799 3.54L7.85401 3.54579L15.1171 10.5297L15.816 11.2018L16.5093 10.5239L23.652 3.53997L23.6596 3.53254L23.667 3.52494L25.744 1.40583L30.0619 5.53979Z" />
  </svg>
);

export const Location: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 31" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c-4.418 0-8 3.582-8 8 0 3.255 2.363 5.958 4.866 8.819.792.906 1.612 1.843 2.342 2.791a1 1 0 0 0 1.584 0c.73-.948 1.55-1.885 2.342-2.791C17.637 15.958 20 13.255 20 10c0-4.418-3.582-8-8-8zm0 11a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
  </svg>
);

export const User: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 20 20" {...props} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C7.25 0 5 2.8 5 6.25C5 9.7 7.25 12.5 10 12.5C12.75 12.5 15 9.7 15 6.25C15 2.8 12.75 0 10 0ZM4.775 12.5C2.125 12.625 0 14.8 0 17.5V20H20V17.5C20 14.8 17.9 12.625 15.225 12.5C13.875 14.025 12.025 15 10 15C7.975 15 6.125 14.025 4.775 12.5Z" />
  </svg>
);

export const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 0L8.25 8.25H0L6.875 13.75L4.125 22L11 16.5L17.875 22L15.125 13.75L22 8.25H13.75L11 0Z" />
  </svg>
);

export const Community: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="81"
    height="70"
    viewBox="0 0 81 70"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;people&#34;">
      <path
        id="Vector"
        d="M55.356 0C50.223 0 45.7945 3.05868 43.077 7.69039C47.6061 12.4095 50.3236 18.8764 50.3236 26.3046C50.3236 28.8389 50.0217 31.1111 49.4178 33.3833C51.3301 34.3446 53.2424 35.0437 55.356 35.0437C63.7097 35.0437 70.4531 27.1785 70.4531 17.5655C70.4531 7.95256 63.7097 0.0873908 55.356 0.0873908V0ZM25.1618 8.73908C16.8081 8.73908 10.0647 16.6042 10.0647 26.2172C10.0647 35.8302 16.8081 43.6954 25.1618 43.6954C33.5155 43.6954 40.2589 35.8302 40.2589 26.2172C40.2589 16.6042 33.5155 8.73908 25.1618 8.73908ZM72.9692 36.3546C68.6414 40.8115 62.7032 43.5206 55.9599 43.6954C58.6773 47.0162 60.3883 51.0362 60.3883 55.4057V61.1735H80.5178V46.6667C80.5178 42.1223 77.3977 38.1898 72.9692 36.2672V36.3546ZM7.54854 45.0936C3.12006 47.0162 0 50.9488 0 55.4931V70H50.3236V55.4931C50.3236 50.9488 47.2035 47.0162 42.7751 45.0936C38.2459 49.7253 32.1065 52.4345 25.1618 52.4345C18.2171 52.4345 12.0777 49.6379 7.54854 45.0936Z"
        fill="#135677"
      />
    </g>
  </svg>
);

export const Chat: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="80"
    height="70"
    viewBox="0 0 80 70"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;chat&#34;">
      <path
        id="Vector"
        d="M0 0V50L10 40H20V10H50V0H0ZM30 20V60H70L80 70V20H30Z"
        fill="#135677"
      />
    </g>
  </svg>
);
export const Dollar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="44"
    height="70"
    viewBox="0 0 44 70"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;dollar&#34;">
      <path
        id="Vector"
        d="M17.5655 0V8.73908H11.0112C5.06866 8.73908 0.0873908 13.7203 0.0873908 19.6629V24.0325C0.0873908 29.975 3.93259 34.8689 9.61298 36.3546L31.985 42.1223C33.2085 42.4719 34.9563 44.6567 34.9563 45.9675V50.3371C34.9563 51.5605 33.995 52.5218 32.7715 52.5218H10.9238C9.87516 52.5218 9.08864 52.1723 8.73908 51.9975V43.7828H0V52.5218C0 55.4931 1.74782 58.0275 3.84519 59.3383C5.85518 60.7366 8.38951 61.2609 10.9238 61.2609H17.4782V70H26.2172V61.2609H32.7715C38.8015 61.2609 43.6954 56.367 43.6954 50.3371V45.9675C43.6954 40.025 39.8502 35.1311 34.1698 33.6454L11.7978 27.8777C10.5743 27.5281 8.82647 25.3433 8.82647 24.0325V19.6629C8.82647 18.4394 9.78777 17.4782 11.0112 17.4782H32.8589C33.8202 17.4782 34.6941 17.8277 35.0437 18.0025V26.2172H43.7828V17.4782C43.7828 14.5069 42.035 11.9725 39.9376 10.6617C37.9276 9.26342 35.3933 8.73908 32.8589 8.73908H26.3046V0L17.5655 0Z"
        fill="#135677"
      />
    </g>
  </svg>
);

export const Medical: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;medical cross&#34;">
      <path
        id="Vector"
        d="M17.5 0V17.5H0V52.5H17.5V70H52.5V52.5H70V17.5H52.5V0H17.5Z"
        fill="#135677"
      />
    </g>
  </svg>
);

export const Clock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="&#240;&#159;&#166;&#134; icon &#34;clock&#34;">
      <g id="Vector">
        <path
          d="M35 0C15.75 0 0 15.75 0 35C0 54.25 15.75 70 35 70C54.25 70 70 54.25 70 35C70 15.75 54.25 0 35 0ZM35 8.75C49.525 8.75 61.25 20.475 61.25 35C61.25 49.525 49.525 61.25 35 61.25C20.475 61.25 8.75 49.525 8.75 35C8.75 20.475 20.475 8.75 35 8.75ZM30.625 17.675V36.925L32.025 38.0625L36.4 42.4375L39.375 45.7625L45.675 39.4625L42.35 36.4875L39.375 33.5125V17.675H30.625Z"
          fill="#135677"
        />
        <path
          d="M35 0C15.75 0 0 15.75 0 35C0 54.25 15.75 70 35 70C54.25 70 70 54.25 70 35C70 15.75 54.25 0 35 0ZM35 8.75C49.525 8.75 61.25 20.475 61.25 35C61.25 49.525 49.525 61.25 35 61.25C20.475 61.25 8.75 49.525 8.75 35C8.75 20.475 20.475 8.75 35 8.75ZM30.625 17.675V36.925L32.025 38.0625L36.4 42.4375L39.375 45.7625L45.675 39.4625L42.35 36.4875L39.375 33.5125V17.675H30.625Z"
          stroke="white"
        />
      </g>
    </g>
  </svg>
);
export const Eye: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="#000000"
    viewBox="0 0 32 32"
    version="1.1"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"></path>{" "}
  </svg>
);

export const Pencil: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="#02283F"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"></path>{" "}
  </svg>
);

export const ThreeDots: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="#000000"
    height="64px"
    width="64px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32.055 32.055"
    {...props}
    transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)"
  >
        <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967 C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967 s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967 c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"></path>{" "}

  </svg>
);

export const Earth: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg width="70" height="70" viewBox="0 0 70 70" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
<path d="M35 0C15.6625 0 0 15.6625 0 35C0 54.3375 15.6625 70 35 70C54.3375 70 70 54.3375 70 35C70 15.6625 54.3375 0 35 0ZM35 8.75C37.8875 8.75 40.6 9.5375 43.225 10.4125C41.3875 12.1625 39.2875 13.7375 39.6375 15.3125C39.9875 16.8875 45.675 16.45 45.675 19.6875C45.675 22.05 42 22.75 44.5375 25.4625C47.6 28.525 38.9375 34.0375 38.7625 38.0625C38.5 45.325 46.1125 46.55 52.15 46.55C55.825 46.55 56.7875 48.3 56.525 50.4C51.8 57.1375 43.75 61.3375 34.9125 61.3375C31.5875 61.3375 28.525 60.55 25.6375 59.4125C27.5625 55.5625 23.1875 47.95 19.075 45.5C17.0625 43.4875 12.775 44.275 10.325 43.3125C9.5375 40.95 8.75 38.5875 8.6625 35.9625C8.925 35.525 9.3625 35.175 10.0625 35.175C11.725 35.175 14 38.5 15.225 38.15C16.8 37.8 8.75 26.6875 12.5125 24.5C14.2625 23.45 17.7625 27.9125 16.625 23.1C15.575 18.6375 19.775 20.65 22.4 19.5125C24.675 18.55 26.3375 15.925 23.5375 14.35C23.0125 14.0875 22.4 13.475 21.6125 12.6875C25.55 10.325 30.1 8.8375 35 8.8375V8.75ZM55.2125 18.2875C56.7875 20.2125 58.0125 22.3125 59.0625 24.5875V24.85C58.7125 25.4625 58.1 25.8125 57.1375 26.775C54.6875 29.225 54.3375 24.9375 53.2875 24.0625C52.15 23.0125 48.0375 24.2375 47.5125 22.925C46.9 21.35 51.8875 19.25 55.2125 18.2875Z" fill="#135677"/>
</svg>
);
