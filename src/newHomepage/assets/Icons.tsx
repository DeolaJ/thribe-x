export function ExitIcon() {
    return (
        <svg
            className="w-4 h-4 md:w-8 md:h-8"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                stroke="#333333"
                stroke-linejoin="round"
            />
            <path
                d="M11.1215 6.87891L6.87891 11.1215"
                stroke="#333333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M6.87891 6.87891L11.1215 11.1215"
                stroke="#333333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export function ArrowRightIcon() {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.5 8H2.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.5 4L14.5 8L10.5 12"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

export function ArrowSendIcon() {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.5007 2L1.83398 6.71277L8.50065 8.00277L10.1691 14.6667L14.5007 2Z"
                stroke="white"
                stroke-linejoin="round"
            />
            <path
                d="M8.50195 8.00279L10.3876 6.11719"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}

interface AngleDownUpProp {
    isClicked: boolean;
}

export function AngleDownUp({ isClicked }: AngleDownUpProp) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={isClicked ? "M4.5 11.25L9 6.75L13.5 11.25" : "M13.5 6.75L9 11.25L4.5 6.75"}
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
