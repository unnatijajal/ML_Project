* {
    box-sizing: border-box;
  }
  
  html {
    font: normal 16px sans-serif;
    color: #555;
  }
  
  body {
    margin: 0;
  }
  
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 80px;
  }
  
  a {
    text-decoration: none;
    opacity: 0.75;
    color: #fff;
  }
  
  a:hover {
    opacity: 1;
  }
  
  a.btn {
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: #3f51b5;
    opacity: 1;
  }
  
  hr {
    width: 250px;
    height: 3px;
    background-color: #3f51b5;
    border: 0;
    margin-bottom: 50px;
  }
  
  /* Navbar Styles */
  
  div.topnav {
    z-index: 100;
    position: sticky;
    top: 0;
    background-image: url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c2d910abcc9bb04fcb180f6a45e407&dpr=2&auto=format&fit=crop&w=767&h=485&q=60&cs=tinysrgb);
    padding: 10px;
  }
  
  .hidden {
    display: none;
  }
  
  .topnav a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
  }
  
  .topnav a.icon {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
  }
  
  .heading {
    display: flex;
    justify-content: space-between;
  }
  
  .links {
    display: flex;
  }
  
  ul.list {
    list-style-type: none;
  }
  
  .fade-in-enter-active {
    animation: fadeIn 1.5s ease;
  }
  
  /* leave transitions */
  .fade-in-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  
  .fade-in-leave-active {
    transition: all 0.3s ease;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  /* route transitions */
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  
  .route-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  
  .route-leave-active {
    transition: all 0.3s ease-in;
  }
  
  /*Hero Section Styles*/
  
  .hero {
    position: relative;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    color: #fff;
  }
  
  .hero .heroBackgroundImage {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: -1;
    background-color: #80a3db;
  }
  
  .hero h1 {
    font: bold 60px "Open Sans", sans-serif;
    margin-bottom: 15px;
  }
  
  .hero h3 {
    font: bold 28px "Open Sans", sans-serif;
    margin-bottom: 40px;
  }
  
  .hero a.btn {
    padding: 20px 46px;
    cursor: pointer;
  }
  
  .hero-content-area {
    margin-top: 100px;
  }
  
  /* Media Queries and Keyframes */
  
  @media (max-width: 800px) {
    section {
      padding: 50px 20px;
    }
  
    .hero {
      min-height: 600px;
    }
  
    .hero h1 {
      font-size: 48px;
    }
  
    .hero h3 {
      font-size: 24px;
    }
  
    .hero a.btn {
      padding: 15px 40px;
    }
  }
  
  @media (max-width: 500px) {
    .topnav a.icon {
      display: block;
      margin-top: 10px;
    }
  
    div.links {
      display: none;
    }
  }
  
  @keyframes fadein {
    100% {
      opacity: 1;
    }
  }
  
  /*  Hero Transitions */
  
  /* enter transitions */
  .slide-fade-enter-active {
    animation: slidefade 1.5s ease;
  }
  
  /* leave transitions */
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  
  @keyframes slidefade {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
  
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  
  /*  Login/Register Styles */
  
  /* Login Form container */
  
  .login-container,
  .register-container {
    width: 450px;
    height: 450px;
    background-color: #fff;
    margin: auto;
    margin-top: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0px rgb(0 0 0 / 10%);
    padding: 77px 55px 33px 55px;
  }
  
  h3.title {
    text-transform: capitalize;
    font: bold 32px "open Sans", sans-serif;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .title {
    text-align: center;
  }
  
  /* Login Form Styles */
  
  form {
    display: grid;
  }
  
  form > input,
  button {
    margin: 0 0 20px 0;
  }
  
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: #fff;
    height: 40px;
    border-bottom: 2px solid #adadad;
    font-size: large;
  }
  
  input:focus {
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(88, 185, 235, 1) 2%,
      rgba(59, 108, 153, 1) 100%
    );
    border-image-slice: 1;
    outline: none;
  }
  
  button {
    font-size: 15px;
    color: #fff;
    height: 50px;
    border-radius: 10px;
    background: rgb(73, 172, 186);
    background: linear-gradient(
      90deg,
      rgba(73, 172, 186, 1) 2%,
      rgba(41, 92, 139, 1) 100%
    );
    border: 0;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  button.submit-button-disabled {
    background: gray;
  }
  
  button.submit-button-disabled:hover {
    cursor: not-allowed;
  }
  
  /* Media Queries and Keyframes */
  
  @media (max-width: 500px) {
    .topnav a.icon {
      display: block;
    }
  
    div.links {
      display: none;
    }
  
    div.flex-box {
      display: contents;
    }
  
    html,
    body {
      overflow-x: clip;
    }
  
    div.login-container {
      width: 240px;
    }
  }
  
  @keyframes fadein {
    100% {
      opacity: 1;
    }
  }
  
  /* About Us Styles */
  
  /* About Us Information Styles */
  
  /* Reviews Styles  */
  
  .reviews-container {
    width: 80%;
    height: 600px;
    background-color: #fff;
    margin: auto;
    margin-top: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0px rgb(0 0 0 / 10%);
    padding: 77px 55px 33px 55px;
  }
  
  /* Reviews Form Styles */
  
  form {
    display: grid;
  }
  
  form > input,
  button {
    margin: 0 0 20px 0;
  }
  
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: #fff;
    height: 40px;
    border-bottom: 2px solid #adadad;
    font-size: large;
  }
  
  input:focus {
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(88, 185, 235, 1) 2%,
      rgba(59, 108, 153, 1) 100%
    );
    border-image-slice: 1;
    outline: none;
  }
  
  textarea.review {
    background-color: #fff;
    border-bottom: 2px solid #adadad;
    border-radius: 10px;
    box-shadow: 0 5px 10px 0px rgb(0 0 0 / 10%);
    margin-bottom: 20px;
    padding: 10px;
  }
  
  textarea:focus {
    box-shadow: 0 0 1px 1px rgb(73, 172, 186);
    outline: none;
    border-radius: 10px;
  }
  
  button {
    font-size: 15px;
    color: #fff;
    height: 50px;
    border-radius: 10px;
    background: rgb(73, 172, 186);
    background: linear-gradient(
      90deg,
      rgba(73, 172, 186, 1) 2%,
      rgba(41, 92, 139, 1) 100%
    );
    border: 0;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  /* List of Reviews/Testimonials Styles */
  
  #testimonials {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 0;
  }
  
  .testimonial-heading {
    letter-spacing: 1px;
    margin: 30px 0px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .testimonial-heading span {
    font-size: 1.3rem;
    color: #252525;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  .testimonial-box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .testimonial-box {
    width: 100%;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    margin: 15px;
    cursor: pointer;
  }
  
  .profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
  }
  
  .profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .profile {
    padding: 20px 0px 0px 20px;
    display: flex;
    align-items: center;
  }
  
  .name-user {
    display: flex;
    flex-direction: column;
  }
  
  .name-user strong {
    color: #3d3d3d;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }
  
  .name-user span {
    color: #979797;
    font-size: 0.8rem;
  }
  
  .reviews {
    color: #f9d71c;
  }
  
  .box-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .client-comment p {
    font-size: 0.9rem;
    color: #4b4b4b;
  }
  
  .testimonial-box:hover {
    transform: translateY(-10px);
    transition: all ease 0.3s;
  }
  
  /* Media Queries and Keyframes */
  
  @media (max-width: 800px) {
    section {
      padding: 50px 20px;
    }
  }
  
  @media (max-width: 500px) {
    .topnav a.icon {
      display: block;
    }
  
    div.links {
      display: none;
    }
  
    div.flex-box {
      display: contents;
    }
  
    html,
    body {
      overflow-x: clip;
    }
  }
  
  @media (max-width: 376px) {
    .box-top {
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
  
    .reviews {
      margin-top: 10px;
    }
  
    form > input[type="text"] {
      width: 135px;
    }
  
    form > input[type="password"] {
      width: 135px;
    }
  
    form > input[type="email"] {
      width: 135px;
    }
  
    form > textarea {
      width: 135px;
    }
  
    form > button {
      width: 135 px;
    }
  
    .reviews-container {
      width: 240px;
      height: 700px;
    }
  }
  
  @keyframes fadein {
    100% {
      opacity: 1;
    }
  }
  
  /*     Reviews Transitions  */
  
  /* list transitions */
  .list-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  
  .list-enter-active {
    transition: all 0.4s ease;
  }
  
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  
  .list-leave-active {
    transition: all 0.4s ease;
  }
  
  /*   Packages Styles     */
  
  /* Packages Grid Styles */
  
  .packages .grid li {
    padding: 50px;
    flex-basis: 50%;
    text-align: center;
  }
  
  .packages .grid li i {
    color: #8c9eff;
  }
  
  .packages .grid li h4 {
    font-size: 30px;
    margin: 25px 0;
  }
  
  /* Packages card and pack-container */
  
  .pack-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  
  .pack-container .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c2d910abcc9bb04fcb180f6a45e407&dpr=2&auto=format&fit=crop&w=767&h=485&q=60&cs=tinysrgb");
    border-radius: 20px;
    overflow: hidden;
    margin: auto;
    margin-bottom: 10px;
  }
  
  .pack-container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }
  
  .pack-container .card:hover .contentBx {
    height: 210px;
  }
  
  .pack-container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin: 0;
  }
  
  .pack-container .card .contentBx .size,
  .pack-container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
  }
  
  .pack-container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }
  
  .pack-container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }
  
  .pack-container .card .contentBx .size h3,
  .pack-container .card .contentBx .color h3 {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }
  
  .pack-container .card .contentBx .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .pack-container .card .contentBx .color span {
    width: 20px;
    height: 20px;
    padding-right: 35px;
    color: #fff;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .pack-container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    font-weight: 600;
    color: #111;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.5s;
    margin-top: 0;
  }
  
  div.contentBx > div {
    margin-top: 10px;
  }
  
  #buy {
    margin-top: 10px;
  }
  
  .pack-container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
  
  /* Media Queries and Keyframes */
  
  @media (max-width: 800px) {
    section {
      padding: 50px 20px;
    }
  
    header {
      padding: 20px 50px;
      flex-direction: column;
    }
  
    header h2 {
      margin-bottom: 12px;
    }
  
    .packages .grid li {
      flex-basis: 100%;
      padding: 20px;
    }
  }
  
  @media (max-width: 500px) {
    .topnav a.icon {
      display: block;
    }
  
    div.links {
      display: none;
    }
  
    div.flex-box {
      display: contents;
    }
  
    html,
    body {
      overflow-x: clip;
    }
  }
  
  @keyframes fadein {
    100% {
      opacity: 1;
    }
  }
  
  /* Carousel */
  
  .numbertext > img {
    vertical-align: middle;
  }
  
  /* Slideshow container */
  .slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
    box-shadow: rgb(99 99 99 / 20%) 1px 0px 7px 9px;
  }
  
  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  
  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }
  
  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  
  .active,
  .dot:hover {
    background-color: #717171;
  }
  
  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .prev,
    .next {
      font-size: 11px;
    }
  }
  
  /*  Locations Styles  */
  
  /* Locations CSS */
  
  #locations-marker > li {
    margin-bottom: 20px;
    position: relative;
    left: -13px;
  }
  
  #locations-marker > li:first-child {
    list-style-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19.9' viewBox='-2.5 -2.4 20 19.9'%3E%3Ccircle fill='%2341c4ab' cx='7.5' cy='5.5' r='1.9'/%3E%3Cpath fill='%2341c4ab' d='M7.5-2.4c-5.6 0-10 4.4-10 9.9 0 5.6 4.4 10 10 10s10-4.4 10-10C17.4 2 13-2.4 7.5-2.4zm0 15.5S4 8.7 4 5.4c0-1.9 1.6-3.5 3.5-3.5 2 0 3.5 1.6 3.5 3.5 0 3.4-3.5 7.7-3.5 7.7z'/%3E%3C/svg%3E");
  }
  
  #locations-marker > li:not(:last-child)::after {
    position: relative;
    content: "";
    border-left: 1px dashed #c7d0d9;
    width: 0;
    height: 27px;
    left: -15px;
    top: -15;
    top: 19px;
  }
  
  #locations-marker > li:not(:first-child) {
    list-style-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0.5 0.43 20 20'%3E%3Cpath fill='%230a7bbd' d='M10.5 20.43c-5.51 0-10-4.49-10-10s4.49-10 10-10 10 4.49 10 10-4.49 10-10 10zm0-15c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z'/%3E%3Cpath fill='%23fff' d='M10.5 5.43c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z'/%3E%3C/svg%3E");
  }
  
  #locations-container {
    display: flex;
  }
  
  #locations-text > li:first-child {
    margin-top: 16px;
    list-style: none;
  }
  
  #locations-text > li {
    margin-top: 25px;
    list-style: none;
  }
  
  /* Package Details Styles  */
  
  /* Info wrapper */
  
  #package-info-wrapper {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 80%;
    margin-top: 50px;
  }
  
  #package-info-wrapper > :first-child {
    padding-right: 75px;
  }
  
  #package-info-wrapper > :last-child {
    padding-left: 75px;
  }
  
  .all-package-info {
    display: flex;
    flex-wrap: wrap;
  }
  
  .all-package-info > * {
    padding: 5px 20px 20px 0;
  }
  
  .package-price {
    border-radius: 5px;
  }
  
  .package-itenary {
    /* margin: 25px 25px 10px 25px */
    width: 80%;
    margin: auto;
    margin-top: 50px;
  }
  
  .package-itenary > p {
    font-size: 16px;
    line-height: 1.25;
    margin: auto;
    margin-bottom: 25px;
  }
  
  .package-details-button {
    align-items: center;
    background: #ffffff;
  
    color: black;
    cursor: pointer;
    transition: color 1s ease;
    transition: background 1s ease;
  
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(88, 185, 235, 1) 2%,
      rgba(59, 108, 153, 1) 100%
    );
    border-image-slice: 1;
    outline: none;
  
    border-radius: 0.25rem;
    box-shadow: rgb(0 0 0 / 2%) 0 1px 3px 0;
    box-sizing: border-box;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
      Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }
  
  .package-details-button:hover {
    background: #3d91b8;
    color: #ffffff;
    transform: translateY(-1px);
  }
  
  .package-details-button:focus {
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(88, 185, 235, 1) 2%,
      rgba(59, 108, 153, 1) 100%
    );
    border-image-slice: 1;
    outline: none;
  }
  
  .package-details-button:active {
    background-color: #f0f0f1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
  
  @media (max-width: 900px) {
    #package-info-wrapper {
      flex-wrap: wrap;
    }
  
    #package-info-wrapper > :last-child {
      padding-left: 0;
    }
  
    #package-info-wrapper > :first-child {
      padding-right: 0;
    }
  
    .all-package-info {
      width: 500px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  
    p.package-duration {
      display: flex;
      justify-content: center;
    }
  
    .package-details-button:hover {
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      border-image: linear-gradient(
        90deg,
        rgba(88, 185, 235, 1) 2%,
        rgba(59, 108, 153, 1) 100%
      );
      border-image-slice: 1;
      outline: none;
    }
  
    h1.destination-name {
      width: fit-content;
      margin: auto;
      margin-top: 20px;
    }
  }
  
  @media (max-width: 500px) {
    #package-info-wrapper {
      flex-wrap: wrap;
    }
  
    #package-info-wrapper > :last-child {
      padding-left: 0;
    }
  
    #package-info-wrapper > :first-child {
      padding-right: 0;
    }
  
    .all-package-info {
      width: unset;
    }
  
    p.package-duration {
      display: flex;
      justify-content: center;
    }
  
    h1.destination-name {
      width: fit-content;
      margin: auto;
      margin-top: 20px;
    }
  }
  
  /*  Login Packages  */
  
  .booking-list {
    padding: 20px;
    margin: auto;
    margin-top: 20px;
    width: 50%;
  }
  
  .booking {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid;
    border-radius: 3px;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  
  .booking > span {
    padding-top: 30px;
    padding-bottom: 20px;
  }
  
  .booking > button {
    margin-top: 15px;
  }
  