import React from "react";

const Navbar = () => {
  return (
    <div
      id="sidemenu"
      className="gap-2 rounded-l-3xl rounded-r-none bg-[rgba(0,0,0,0.8)] border-1 border-white h-full flex text-gray-250 flex-col w-1/10 "
    >
      <div className="flex-col flex h-full rounded-l-3xl rounded-r-none">
        <div
          id="menu-icons-container rounded-l-3xl rounded-r-none"
          className="h-full flex flex-col justify-around "
        >
          <img
            id="menu-icon"
            className="h-1/6 rounded-r-none"
            src="/assets/blob3.svg"
          />
          <a
            id="menu-icon"
            className=" h-1/6 flex flex-col rounded-r-none justify-center items-center "
            href="/profile"
          >
            <div
              id="menu-icon"
              className="text-center flex flex-col items-center justify-around"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
            </div>
            <p className="text-center w-full break-words">My Profile</p>
          </a>
          <a
            id="menu-icon"
            className="h-1/6 flex flex-col justify-center items-center"
            href="/home"
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <svg
                id="sidemenu-svgs"
                className="bg-HTpurple-900 w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />{" "}
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <p className="text-center w-full break-words">Home</p>
          </a>

          <a
            id="menu-icon"
            className="h-1/6 flex flex-col justify-center items-center"
            href="/offers"
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <svg
                className="bg-HTpurple-900 w-6 h-6"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79999V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.49997 13.4513 8.49997 13.75C8.49997 14.3023 8.05226 14.75 7.49997 14.75C6.94769 14.75 6.49997 14.3023 6.49997 13.75C6.49997 13.4513 6.63091 13.1832 6.83851 13H2.49999C2.2681 13 2.06664 12.8406 2.01336 12.6149C1.96009 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 2.99999 11.0563 2.99999 10.25V6.79999C2.99999 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40036 1.75448 6.40036 1.25086C6.40036 0.643104 6.89304 0.150421 7.5008 0.150421C8.10855 0.150421 8.60124 0.643104 8.60124 1.25086ZM7.49999 3.29999C5.56699 3.29999 3.99999 4.86699 3.99999 6.79999V10.25L4.00002 10.3009C4.0005 10.7463 4.00121 11.4084 3.69929 12H11.3007C10.9988 11.4084 10.9995 10.7463 11 10.3009L11 10.25V6.79999C11 4.86699 9.43299 3.29999 7.49999 3.29999Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-center w-full break-words">Offers</p>
          </a>

          <a
            id="menu-icon"
            className="h-1/6 flex flex-col justify-center items-center"
            href="/products"
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around "
            >
              <svg
                id="sidemenu-svgs"
                className="bg-HTpurple-900 w-7 h-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#D9D9D9"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="5" y1="5" x2="5" y2="21" />{" "}
                <line x1="19" y1="5" x2="19" y2="14" />{" "}
                <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />{" "}
                <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
              </svg>
            </div>
            <p className="text-center w-full break-words">Challenges</p>
          </a>
          <a
            id="menu-icon"
            className="h-1/6 flex flex-col justify-center visually-hidden items-center"
            href=""
          >
            <div
              id="menu-icon-img"
              className="text-center flex flex-col items-center justify-around"
            >
              <svg
                id="sidemenu-svgs"
                className="bg-HTpurple-900 w-7 h-7"
                fill="none"
                stroke="#D9D9D9"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <p className="text-center w-full break-words">FAQ</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
