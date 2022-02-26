import React from 'react';

export const RightIcon = ({width = 209, height = 385, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 209 385" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 14.5L185.429 185.429C189.334 189.334 189.334 195.666 185.429 199.571L14.5 370.5" stroke={stroke} strokeWidth="50"/>
    </svg>
)

export const BenchmarkIcon = ({width = 503, height = 428, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 503 428" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="13" y1="4.37114e-07" x2="13" y2="408" stroke={stroke} strokeWidth="20"/>
        <line x1="503" y1="418" x2="3" y2="418" stroke={stroke} strokeWidth="20"/>
        <path d="M13.5 323L67.0617 368.42C71.7526 372.398 78.8886 371.239 82.0789 365.98L142.827 265.851C145.875 260.827 152.576 259.501 157.307 262.985L204.313 297.603C209.001 301.055 215.634 299.789 218.721 294.854L281.598 194.333C285.231 188.526 293.494 188.007 297.824 193.314L330.855 233.793C335.275 239.21 343.748 238.534 347.254 232.486L465.5 28.5" stroke={stroke} strokeWidth="40"/>
    </svg>
)

export const CloseIcon = ({width = 539, height = 539, bg, stroke}) => (
    <svg width={width} height={height} viewBox="0 0 539 539" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="269.5" cy="269.5" r="269.5" fill={bg}/>
        <path d="M132.5 150L393 410.5" stroke={stroke} strokeWidth="40"/>
        <path d="M393 150L132.5 410.5" stroke={stroke} strokeWidth="40"/>
    </svg>
)

export const UpDown = ({width = 108, height = 46, stroke = "white"}) => (
    <svg width={width} height={height} viewBox="0 0 108 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4L54 41L105 4" stroke={stroke} strokeWidth="8"/>
    </svg>
)

export const SearchIcon = ({width = 490, height = 506, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 490 506" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="188" cy="188" r="173" stroke={stroke} strokeWidth="40"/>
        <path d="M303.5 320L475 491.5" stroke={stroke} strokeWidth="40"/>
    </svg>
)

export const LikeIcon = ({width = 512, height = 480, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 512 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M512 243.2C512 209.6 484.8 192 448 192H340.8C348.8 163.2 352 136 352 112C352 19.2 326.4 0 304 0C289.6 0 278.4 1.6 264 9.6C259.2 12.8 257.6 16 256 20.8L240 107.2C222.4 152 179.2 192 144 219.2V448C156.8 448 169.6 454.4 185.6 462.4C203.2 470.4 220.8 480 240 480H392C424 480 448 454.4 448 432C448 427.2 448 424 446.4 420.8C465.6 412.8 480 396.8 480 376C480 366.4 478.4 358.4 475.2 350.4C488 342.4 499.2 328 499.2 312C499.2 302.4 494.4 292.8 489.6 284.8C502.4 275.2 512 259.2 512 243.2ZM478.4 243.2C478.4 264 457.6 265.6 454.4 275.2C451.2 286.4 467.2 289.6 467.2 308.8C467.2 328 443.2 328 440 339.2C436.8 352 448 355.2 448 374.4V377.6C444.8 393.6 420.8 395.2 416 401.6C411.2 409.6 416 412.8 416 430.4C416 440 404.8 446.4 392 446.4H240C227.2 446.4 214.4 440 198.4 432C185.6 425.6 172.8 419.2 160 416V248C200 217.6 251.2 172.8 270.4 116.8V113.6L284.8 33.6C291.2 32 296 32 304 32C307.2 32 320 51.2 320 112C320 136 315.2 161.6 307.2 192H304C294.4 192 288 198.4 288 208C288 217.6 294.4 224 304 224H448C464 224 478.4 232 478.4 243.2Z" fill={stroke} />
        <path d="M128 480H32C14.4 480 0 465.6 0 448V224C0 206.4 14.4 192 32 192H128C145.6 192 160 206.4 160 224V448C160 465.6 145.6 480 128 480ZM32 224V448H128V224H32Z" fill={stroke} />
    </svg>
)

export const CommentIcon = ({width = 980, height = 940, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 980 940" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M710.5 445.3H269.5C254.8 445.3 245 455.2 245 470C245 484.8 254.8 494.7 269.5 494.7H710.5C725.2 494.7 735 484.8 735 470C735 455.2 725.2 445.3 710.5 445.3ZM882 0.899994H98C44.1 0.899994 0 45.3 0 99.7V692.3C0 746.6 44.1 791.1 98 791.1H588L725.2 929.4C732.6 936.8 739.9 939.3 749.7 939.3C766.9 939.3 784 924.5 784 904.7V791H882C935.9 791 980 746.6 980 692.2V99.6C980 45.3 935.9 0.899994 882 0.899994ZM931 692.2C931 719.4 908.9 741.6 882 741.6H784H735V791V870L622.3 756.4L607.6 741.6H588H98C71 741.6 49 719.4 49 692.2V99.6C49 72.4 71 50.2 98 50.2H882C908.9 50.2 931 72.4 931 99.6V692.2ZM710.5 297.2H269.5C254.8 297.2 245 307.1 245 321.9C245 336.7 254.8 346.6 269.5 346.6H710.5C725.2 346.6 735 336.7 735 321.9C735 307 725.2 297.2 710.5 297.2Z" fill={stroke}/>
    </svg>
)

export const ShareIcon = ({width = 876, height = 840, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 876 840" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M844.6 300.791C829.017 300.791 815.66 314.148 815.66 329.731V781.626H58.7921V329.73C58.7921 314.148 45.4361 300.791 29.8531 300.791C14.2701 300.791 0.914062 314.148 0.914062 329.731V810.565C0.914062 826.148 14.2711 839.505 29.8541 839.505H846.827C862.41 839.505 875.767 826.148 875.767 810.565V329.73C873.54 314.148 860.184 300.791 844.601 300.791H844.6Z" fill={stroke} />
        <path d="M261.365 227.33C268.043 227.33 276.948 225.104 281.4 218.426L408.287 95.991V407.643C408.287 423.226 421.643 436.583 437.227 436.583C452.809 436.583 466.165 423.226 466.165 407.643V95.991L593.052 218.426C599.73 222.878 606.409 227.33 613.087 227.33C619.765 227.33 628.67 225.104 633.122 218.426C635.767 215.803 637.866 212.682 639.299 209.243C640.732 205.805 641.47 202.116 641.47 198.391C641.47 194.666 640.732 190.977 639.299 187.539C637.866 184.1 635.767 180.979 633.122 178.356L457.26 6.94899C452.808 2.49699 446.13 0.270996 439.451 0.270996H437.225H435C428.322 0.270996 421.643 2.49699 417.191 6.94899L241.331 176.13C238.686 178.753 236.586 181.874 235.153 185.313C233.721 188.751 232.983 192.44 232.983 196.165C232.983 199.89 233.721 203.579 235.153 207.017C236.586 210.456 238.686 213.577 241.331 216.2C245.783 225.104 254.687 227.33 261.365 227.33Z" fill={stroke}/>
    </svg>
)

export const RePostIcon = ({width = 980, height = 980, stroke="black"}) => (
    <svg width={width} height={height} viewBox="0 0 980 980" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M848.9 191.6L665.6 9C653.6 -3 634.2 -3 622.2 9C610.2 21 610.2 40.4 622.2 52.4L753.2 183.4L30.6 183C13.7 183 0 196.7 0 213.6V458.6C0 475.5 13.7 489.2 30.6 489.2C47.5 489.2 61.2 475.5 61.2 458.6V244.5H752.6L622.6 374.6C610.6 386.6 610.6 406 622.6 418C634.6 430 654 430 666 418L848.9 235C860.8 222.9 860.8 203.6 848.9 191.6Z" fill={stroke}/>
        <path d="M131.1 788.4L314.3 971C326.3 983 345.7 983 357.7 971C369.7 959 369.7 939.6 357.7 927.6L226.7 796.7L949.4 797C966.3 797 980 783.3 980 766.4V521.4C980 504.5 966.3 490.8 949.4 490.8C932.5 490.8 918.8 504.5 918.8 521.4V735.5H227.4L357.5 605.4C369.5 593.4 369.5 574 357.5 562C345.5 550 326.1 550 314.1 562L131.1 745C119.2 757.1 119.2 776.4 131.1 788.4Z" fill={stroke}/>
    </svg>
)

export const PaperIcon = ({width = 262, height = 308, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 262 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M218.264 200.541C218.264 203.232 216.063 205.436 213.371 205.436H48.2319C45.5389 205.436 43.3369 203.233 43.3369 200.541V197.28C43.3369 194.589 45.5379 192.386 48.2319 192.386H213.371C216.062 192.386 218.264 194.588 218.264 197.28V200.541Z" fill={stroke}/>
        <path d="M117.293 64.99C117.293 67.68 115.092 69.883 112.398 69.883H48.2319C45.5389 69.883 43.3369 67.681 43.3369 64.99V61.727C43.3369 59.036 45.5379 56.833 48.2319 56.833H112.398C115.091 56.833 117.293 59.035 117.293 61.727V64.99V64.99Z" fill={stroke}/>
        <path d="M215.787 245.727C215.787 248.417 213.584 250.619 210.89 250.619H146.724C144.031 250.619 141.829 248.417 141.829 245.727V242.464C141.829 239.773 144.03 237.57 146.724 237.57H210.89C213.583 237.57 215.787 239.772 215.787 242.464V245.727Z" fill={stroke}/>
        <path d="M151.312 110.172C151.312 112.863 149.111 115.067 146.419 115.067H48.2309C45.5379 115.067 43.3359 112.864 43.3359 110.172V106.911C43.3359 104.22 45.5369 102.018 48.2309 102.018H146.419C149.11 102.018 151.312 104.22 151.312 106.911V110.172Z" fill={stroke}/>
        <path d="M218.264 155.357C218.264 158.048 216.063 160.25 213.371 160.25H48.2319C45.5389 160.25 43.3369 158.048 43.3369 155.357V152.095C43.3369 149.404 45.5379 147.201 48.2319 147.201H213.371C216.062 147.201 218.264 149.403 218.264 152.095V155.357Z" fill={stroke}/>
        <path d="M249.475 74.521L170.352 9.454C163.801 4.062 152.463 0 143.981 0H19.516C8.756 0 0 8.754 0 19.516C0 19.516 0 229.54 0 287.355C0 307.454 19.01 307.454 19.463 307.454C67.803 307.454 242.086 307.454 242.086 307.454C252.848 307.454 261.602 298.699 261.602 287.937V100.198C261.602 91.247 256.387 80.207 249.475 74.521ZM164.941 29.475C164.941 24.694 168.9 28.362 168.9 28.362L231.617 81.947C231.617 81.947 235.631 85.896 228.752 85.896C214.064 85.896 170.006 85.896 170.006 85.896C167.213 85.896 164.941 83.625 164.941 80.832C164.941 80.832 164.941 42.315 164.941 29.475ZM242.086 292.999C242.086 292.999 63.031 292.999 18.096 292.999C17.295 292.999 14.453 292.77 14.453 288.817C14.453 234.41 14.453 19.515 14.453 19.515C14.453 16.77 16.773 14.452 19.516 14.452H143.98C146.087 14.452 150.49 15.57 150.49 21.59V80.832C150.49 91.593 159.244 100.348 170.006 100.348H243.529C244.871 100.348 247.142 101.27 247.142 104.517C247.142 104.568 247.15 287.936 247.15 287.936C247.15 290.729 244.879 292.999 242.086 292.999Z" fill={stroke}/>
    </svg>
)

export const PdfIcon = ({width = 262, height = 308, stroke}) => (
    <svg width={width} height={height} viewBox="0 0 262 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M249.475 74.521L170.352 9.454C163.801 4.062 152.463 0 143.981 0H19.516C8.756 0 0 8.754 0 19.516C0 19.516 0 229.54 0 287.355C0 307.454 19.01 307.454 19.463 307.454C67.803 307.454 242.086 307.454 242.086 307.454C252.848 307.454 261.602 298.699 261.602 287.937V100.198C261.602 91.247 256.387 80.207 249.475 74.521ZM164.941 29.475C164.941 24.694 168.9 28.362 168.9 28.362L231.617 81.947C231.617 81.947 235.631 85.896 228.752 85.896C214.064 85.896 170.006 85.896 170.006 85.896C167.213 85.896 164.941 83.625 164.941 80.832C164.941 80.832 164.941 42.315 164.941 29.475ZM242.086 292.999C242.086 292.999 63.031 292.999 18.096 292.999C17.295 292.999 14.453 292.77 14.453 288.817C14.453 234.41 14.453 19.515 14.453 19.515C14.453 16.77 16.773 14.452 19.516 14.452H143.98C146.087 14.452 150.49 15.57 150.49 21.59V80.832C150.49 91.593 159.244 100.348 170.006 100.348H243.529C244.871 100.348 247.142 101.27 247.142 104.517C247.142 104.568 247.15 287.936 247.15 287.936C247.15 290.729 244.879 292.999 242.086 292.999Z" fill={stroke}/>
        <path d="M124.5 166L127.554 171.192C132.141 178.99 138.195 185.826 145.382 191.322L172.601 212.136C175.329 214.222 178.953 214.719 182.142 213.443V213.443C191.475 209.71 189.732 196.004 179.761 194.726L159.917 192.182C158.975 192.061 158.022 192.03 157.074 192.09L148.829 192.612C129.358 193.844 110.657 200.673 94.9723 212.277L58.0689 239.579C57.6919 239.858 57.3606 240.194 57.0869 240.575V240.575C54.3083 244.441 58.6241 249.421 62.8461 247.221L79.8839 238.342C80.9507 237.786 81.8965 237.024 82.6666 236.1L87.4117 230.406C91.7504 225.199 94.887 219.1 96.5977 212.542L103 188L129.538 116.443C130.488 113.88 130.608 111.082 129.879 108.447L128.497 103.452C126.624 96.6781 118.38 94.0999 112.981 98.5994V98.5994C110.775 100.437 109.5 103.16 109.5 106.031V123.039C109.5 129.604 110.905 136.092 113.622 142.068L124.5 166Z" stroke={stroke} strokeWidth="8"/>
    </svg>
)

export const CodeIcon = ({width = 523, height = 393, stroke = "black"}) => (
    <svg width={width} height={height} viewBox="0 0 523 393" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M325.762 5.51303L308.056 0.659023C305.777 -0.100977 303.532 0.138027 301.349 1.37403C299.159 2.61103 297.68 4.46803 296.92 6.94203L190.426 375.53C189.666 378.005 189.904 380.339 191.141 382.525C192.378 384.715 194.231 386.19 196.709 386.95L214.41 391.806C216.694 392.572 218.931 392.332 221.12 391.094C223.31 389.851 224.786 388 225.545 385.53L332.042 16.936C332.801 14.462 332.565 12.128 331.326 9.93702C330.088 7.74702 328.237 6.27203 325.762 5.51303Z" fill={stroke}/>
        <path d="M166.167 77.465C166.167 74.991 165.214 72.8 163.311 70.898L149.034 56.622C147.131 54.719 144.941 53.765 142.467 53.765C139.993 53.765 137.802 54.72 135.9 56.622L2.856 189.666C0.95 191.569 0 193.759 0 196.233C0 198.707 0.953 200.897 2.856 202.799L135.899 335.843C137.801 337.749 139.988 338.697 142.466 338.697C144.944 338.697 147.131 337.746 149.033 335.843L163.31 321.575C165.213 319.673 166.166 317.482 166.166 315.005C166.166 312.534 165.213 310.344 163.31 308.442L51.107 196.233L163.311 84.032C165.217 82.13 166.167 79.939 166.167 77.465Z" fill={stroke}/>
        <path d="M519.615 189.663L386.567 56.619C384.665 54.717 382.474 53.762 380.004 53.762C377.526 53.762 375.343 54.717 373.434 56.619L359.163 70.894C357.261 72.797 356.312 74.984 356.312 77.461C356.312 79.938 357.26 82.126 359.163 84.028L471.369 196.232L359.163 308.442C357.261 310.344 356.312 312.535 356.312 315.005C356.312 317.483 357.26 319.673 359.163 321.575L373.434 335.843C375.343 337.749 377.527 338.697 380.004 338.697C382.475 338.697 384.665 337.746 386.567 335.843L519.615 202.8C521.518 200.898 522.469 198.704 522.469 196.23C522.469 193.755 521.518 191.565 519.615 189.663Z" fill={stroke}/>
    </svg>
)

export const BenchMarkIcon = ({width = 405, height = 354, stroke = "#00B3DA"}) => (
    <svg width={width} height={height} viewBox="0 0 405 354" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20.9999" y1="0.0636951" x2="19.9999" y2="314.064" stroke={stroke} strokeWidth="30"/>
        <line x1="405" y1="334" y2="334" stroke={stroke} strokeWidth="30"/>
        <path d="M20 212L84.7776 280.771C89.0577 285.315 96.4088 284.87 100.11 279.843L179.078 172.582C182.881 167.416 190.495 167.116 194.692 171.967L243.957 228.895C248.686 234.359 257.471 233.158 260.559 226.625L362.5 11" stroke={stroke} strokeWidth="30"/>
    </svg>
)

export const DemoIcon = ({width = 157, height = 157, stroke = "#00B3DA"}) => (
    <svg width={width} height={height} viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M61 104.851V52.6166C61 51.0441 62.7313 50.0867 64.0632 50.9227L105.324 76.8202C106.567 77.6007 106.574 79.4102 105.337 80.2L64.0761 106.537C62.7447 107.386 61 106.43 61 104.851Z" stroke={stroke} strokeWidth="10"/>
        <circle cx="78.5" cy="78.5" r="73.5" stroke={stroke} strokeWidth="10"/>
    </svg>
)

export const PaperswithCodeIcon = ({width = 262, height = 308, stroke = "#00B3DA"}) => (
    <svg width={width} height={height} viewBox="0 0 262 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M117.293 64.99C117.293 67.68 115.092 69.883 112.398 69.883H48.2319C45.5389 69.883 43.3369 67.681 43.3369 64.99V61.727C43.3369 59.036 45.5379 56.833 48.2319 56.833H112.398C115.091 56.833 117.293 59.035 117.293 61.727V64.99V64.99Z" fill={stroke}/>
        <path d="M151.312 110.172C151.312 112.863 149.111 115.067 146.419 115.067H48.2309C45.5379 115.067 43.3359 112.864 43.3359 110.172V106.911C43.3359 104.22 45.5369 102.018 48.2309 102.018H146.419C149.11 102.018 151.312 104.22 151.312 106.911V110.172Z" fill={stroke}/>
        <path d="M249.475 74.521L170.352 9.454C163.801 4.062 152.463 0 143.981 0H19.516C8.756 0 0 8.754 0 19.516C0 19.516 0 229.54 0 287.355C0 307.454 19.01 307.454 19.463 307.454C67.803 307.454 242.086 307.454 242.086 307.454C252.848 307.454 261.602 298.699 261.602 287.937V100.198C261.602 91.247 256.387 80.207 249.475 74.521ZM164.941 29.475C164.941 24.694 168.9 28.362 168.9 28.362L231.617 81.947C231.617 81.947 235.631 85.896 228.752 85.896C214.064 85.896 170.006 85.896 170.006 85.896C167.213 85.896 164.941 83.625 164.941 80.832C164.941 80.832 164.941 42.315 164.941 29.475ZM242.086 292.999C242.086 292.999 63.031 292.999 18.096 292.999C17.295 292.999 14.453 292.77 14.453 288.817C14.453 234.41 14.453 19.515 14.453 19.515C14.453 16.77 16.773 14.452 19.516 14.452H143.98C146.087 14.452 150.49 15.57 150.49 21.59V80.832C150.49 91.593 159.244 100.348 170.006 100.348H243.529C244.871 100.348 247.142 101.27 247.142 104.517C247.142 104.568 247.15 287.936 247.15 287.936C247.15 290.729 244.879 292.999 242.086 292.999Z" fill={stroke}/>
        <path d="M153.596 148.551L147.259 147.127C146.443 146.904 145.64 146.974 144.858 147.337C144.075 147.7 143.545 148.245 143.273 148.97L105.157 257.097C104.885 257.823 104.97 258.508 105.413 259.149C105.856 259.791 106.519 260.224 107.406 260.447L113.742 261.872C114.559 262.096 115.36 262.026 116.143 261.663C116.927 261.298 117.455 260.755 117.727 260.03L155.844 151.902C156.116 151.176 156.031 150.492 155.588 149.849C155.145 149.207 154.482 148.774 153.596 148.551Z" fill={stroke}/>
        <path d="M96.4739 169.659C96.4739 168.933 96.1328 168.29 95.4517 167.732L90.3417 163.544C89.6606 162.986 88.8768 162.706 87.9913 162.706C87.1058 162.706 86.3216 162.986 85.6408 163.544L38.0222 202.573C37.34 203.131 37 203.774 37 204.5C37 205.225 37.3411 205.868 38.0222 206.426L85.6405 245.455C86.3212 246.014 87.104 246.292 87.9909 246.292C88.8778 246.292 89.6606 246.013 90.3414 245.455L95.4513 241.269C96.1325 240.711 96.4735 240.068 96.4735 239.342C96.4735 238.617 96.1325 237.974 95.4513 237.416L55.292 204.5L95.4517 171.585C96.1339 171.027 96.4739 170.384 96.4739 169.659Z" fill={stroke}/>
        <path d="M222.979 202.572L175.359 163.543C174.678 162.985 173.894 162.705 173.01 162.705C172.123 162.705 171.342 162.985 170.659 163.543L165.551 167.731C164.87 168.289 164.53 168.931 164.53 169.657C164.53 170.384 164.87 171.026 165.551 171.584L205.711 204.499L165.551 237.416C164.87 237.974 164.53 238.617 164.53 239.342C164.53 240.069 164.87 240.711 165.551 241.269L170.659 245.455C171.342 246.014 172.123 246.292 173.01 246.292C173.894 246.292 174.678 246.013 175.359 245.455L222.979 206.426C223.66 205.868 224 205.224 224 204.499C224 203.773 223.66 203.13 222.979 202.572Z" fill={stroke}/>
    </svg>
)

export const BackIcon = ({width = 58, height = 104, stroke}) => (
    <svg width={width} height={height} viewBox="0 0 58 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.5 3.5L6 52L54.5 100.5" stroke={stroke} strokeWidth="15"/>
    </svg>
)

export const GithubIcon = ({width = 1024, height = 1024, stroke = "white"}) => (
    <svg width={width} height={height} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill={stroke}/>
    </svg>
)

export const ColabIcon = ({width = 1000, height = 1000, stroke = "#000000"}) => (
    <svg 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        width={width}
        height={height}
        viewBox="0 0 1000 1000">
        <path 
            id="path"
            fill={stroke}
            d=" M 665 375C 633 375 602 388 579 411C 556 434 543 465 543 498C 543 530 556 561 579 584C 602 607 633 620 665 620C 698 620 729 607 752 584C 775 561 788 530 788 498C 788 430 733 375 665 375C 665 375 665 375 665 375M 338 261C 390 261 440 278 481 310C 481 310 424 411 424 411C 401 388 370 375 338 375C 305 375 274 388 251 411C 228 434 215 465 215 498C 215 530 228 561 251 584C 274 607 305 620 338 620C 369 620 399 608 422 587C 422 587 480 686 480 686C 439 717 389 734 338 734C 275 734 215 709 171 665C 126 620 101 560 101 498C 101 367 207 261 338 261C 338 261 338 261 338 261M 665 261C 796 261 902 367 902 498C 902 628 796 734 665 734C 603 734 543 709 498 665C 454 620 429 560 429 498C 429 367 535 261 665 261C 665 261 665 261 665 261"
            transform="">
        </path>    
    </svg>
)

export const ConvertIcon = ({width = 254, height = 222, stroke}) => (
    <svg width={width} height={height} viewBox="0 0 254 222" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0621 118.817C22.2582 118.893 22.4598 118.943 22.6615 119.005C23.0312 119.117 23.4009 119.212 23.7902 119.274C23.891 119.29 23.9863 119.332 24.0871 119.344C24.426 119.383 24.7593 119.402 25.0926 119.402C25.6527 119.402 26.2073 119.344 26.7507 119.234C27.0812 119.167 27.3892 119.049 27.7057 118.946C27.9102 118.879 28.1203 118.837 28.3191 118.755C28.6776 118.607 29.0081 118.408 29.3386 118.212C29.4758 118.131 29.6271 118.072 29.7615 117.982C30.2209 117.674 30.6494 117.324 31.0415 116.932L52.5292 95.4443C55.8118 92.1646 55.8118 86.8431 52.5292 83.5633C49.2495 80.2808 43.928 80.2808 40.6482 83.5633L36.4106 87.801C46.7568 47.3854 83.4837 17.4169 127.078 17.4169C163.469 17.4169 196.84 38.773 212.094 71.828C214.035 76.0404 219.031 77.8777 223.241 75.9368C227.456 73.993 229.293 68.9992 227.35 64.7868C209.36 25.8025 170 0.612061 127.078 0.612061C74.8684 0.612061 31.0387 37.0589 19.6198 85.8348L16.5473 80.785C14.1331 76.819 8.96558 75.5587 4.99965 77.9758C1.03652 80.3872 -0.223842 85.5575 2.19045 89.5235L17.9141 115.366C17.9449 115.417 17.9898 115.453 18.0206 115.504C18.281 115.91 18.5807 116.285 18.9056 116.641C18.9812 116.725 19.0429 116.82 19.1213 116.901C19.5358 117.319 19.9923 117.691 20.4881 118.016C20.6169 118.1 20.7598 118.159 20.8942 118.237C21.2667 118.456 21.6532 118.657 22.0621 118.817Z" fill={stroke}/>
        <path d="M251.809 132.477L236.085 106.634C236.057 106.586 236.015 106.55 235.984 106.502C235.718 106.085 235.41 105.698 235.077 105.334C235.009 105.258 234.953 105.172 234.883 105.099C234.469 104.679 234.01 104.306 233.514 103.981C233.388 103.897 233.248 103.841 233.116 103.766C232.738 103.544 232.349 103.343 231.937 103.183C231.741 103.107 231.539 103.06 231.338 102.998C230.968 102.886 230.598 102.791 230.209 102.729C230.108 102.712 230.013 102.67 229.909 102.659C229.763 102.642 229.621 102.668 229.475 102.656C229.285 102.642 229.103 102.598 228.909 102.598C228.738 102.598 228.582 102.637 228.414 102.648C228.153 102.662 227.898 102.687 227.64 102.726C227.282 102.78 226.94 102.864 226.599 102.962C226.375 103.026 226.153 103.085 225.938 103.166C225.559 103.309 225.204 103.491 224.854 103.684C224.688 103.777 224.518 103.85 224.358 103.953C223.854 104.278 223.38 104.645 222.958 105.068L201.47 126.556C198.187 129.835 198.187 135.157 201.47 138.437C204.752 141.719 210.068 141.719 213.351 138.437L217.588 134.199C207.242 174.615 170.515 204.583 126.921 204.583C89.225 204.583 55.3773 182.146 40.6899 147.424C38.8806 143.15 33.954 141.142 29.6771 142.96C25.4031 144.769 23.4033 149.696 25.2127 153.973C42.5356 194.926 82.4582 221.388 126.921 221.388C179.131 221.388 222.96 184.941 234.379 136.162L237.452 141.212C239.031 143.811 241.801 145.245 244.636 145.245C246.123 145.245 247.63 144.85 248.997 144.021C252.963 141.61 254.223 136.442 251.809 132.477Z" fill={stroke}/>
    </svg>
)

export const SendIcon = ({width = 207, height = 207, stroke = "#25A2F9"}) => (
    <svg width={width} height={height} viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="103.5" cy="103.5" r="96" stroke={stroke} strokeWidth="15"/>
        <path d="M108.303 48.6967C105.374 45.7678 100.626 45.7678 97.6967 48.6967L49.967 96.4264C47.0381 99.3553 47.0381 104.104 49.967 107.033C52.8959 109.962 57.6447 109.962 60.5736 107.033L103 64.6066L145.426 107.033C148.355 109.962 153.104 109.962 156.033 107.033C158.962 104.104 158.962 99.3553 156.033 96.4264L108.303 48.6967ZM110.5 153L110.5 54L95.5 54L95.5 153L110.5 153Z" fill={stroke} />
    </svg>
)