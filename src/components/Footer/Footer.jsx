import { Component } from "react";

import { Container } from "react-bootstrap";

import "./__footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container className="footer__container">
          <div className="footer__links">
            <div className="footer__linkTitle">COMPANY</div>
            <ol>
              <li>About</li>
              <li>Categories</li>
              <li>Men</li>
              <li>Women</li>
              <li>Find a store</li>
            </ol>
          </div>
          <div className="footer__links">
            <div className="footer__linkTitle">USEFUL LINKS</div>
            <ol>
              <li>Brands</li>
              <li>Send Gift</li>
              <li>Redeem</li>
              <li>Legal</li>
              <li>Help</li>
            </ol>
          </div>
          <div className="footer__links">
            <div className="footer__linkTitle">SOCIALIZE WITH ANGHAMI</div>
            <div className="footer__icons">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 19.5489C39 8.75789 30.264 0 19.5 0C8.736 0 0 8.75789 0 19.5489C0 29.0105 6.708 36.8887 15.6 38.7068V25.4135H11.7V19.5489H15.6V14.6617C15.6 10.8887 18.6615 7.81955 22.425 7.81955H27.3V13.6842H23.4C22.3275 13.6842 21.45 14.5639 21.45 15.6391V19.5489H27.3V25.4135H21.45V39C31.2975 38.0226 39 29.6947 39 19.5489Z"
                  fill="#0041B9"
                />
              </svg>

              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.31 0H27.69C33.93 0 39 5.07 39 11.31V27.69C39 30.6896 37.8084 33.5663 35.6874 35.6874C33.5663 37.8084 30.6896 39 27.69 39H11.31C5.07 39 0 33.93 0 27.69V11.31C0 8.3104 1.19159 5.43366 3.31262 3.31262C5.43366 1.19159 8.3104 0 11.31 0ZM10.92 3.9C9.05818 3.9 7.27262 4.63961 5.95611 5.95611C4.63961 7.27262 3.9 9.05818 3.9 10.92V28.08C3.9 31.9605 7.0395 35.1 10.92 35.1H28.08C29.9418 35.1 31.7274 34.3604 33.0439 33.0439C34.3604 31.7274 35.1 29.9418 35.1 28.08V10.92C35.1 7.0395 31.9605 3.9 28.08 3.9H10.92ZM29.7375 6.825C30.384 6.825 31.004 7.08181 31.4611 7.53893C31.9182 7.99605 32.175 8.61604 32.175 9.2625C32.175 9.90897 31.9182 10.529 31.4611 10.9861C31.004 11.4432 30.384 11.7 29.7375 11.7C29.091 11.7 28.471 11.4432 28.0139 10.9861C27.5568 10.529 27.3 9.90897 27.3 9.2625C27.3 8.61604 27.5568 7.99605 28.0139 7.53893C28.471 7.08181 29.091 6.825 29.7375 6.825ZM19.5 9.75C22.0859 9.75 24.5658 10.7772 26.3943 12.6057C28.2228 14.4342 29.25 16.9141 29.25 19.5C29.25 22.0859 28.2228 24.5658 26.3943 26.3943C24.5658 28.2228 22.0859 29.25 19.5 29.25C16.9141 29.25 14.4342 28.2228 12.6057 26.3943C10.7772 24.5658 9.75 22.0859 9.75 19.5C9.75 16.9141 10.7772 14.4342 12.6057 12.6057C14.4342 10.7772 16.9141 9.75 19.5 9.75ZM19.5 13.65C17.9485 13.65 16.4605 14.2663 15.3634 15.3634C14.2663 16.4605 13.65 17.9485 13.65 19.5C13.65 21.0515 14.2663 22.5395 15.3634 23.6366C16.4605 24.7337 17.9485 25.35 19.5 25.35C21.0515 25.35 22.5395 24.7337 23.6366 23.6366C24.7337 22.5395 25.35 21.0515 25.35 19.5C25.35 17.9485 24.7337 16.4605 23.6366 15.3634C22.5395 14.2663 21.0515 13.65 19.5 13.65Z"
                  fill="url(#paint0_linear_28_527)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_527"
                    x1="19.5"
                    y1="0"
                    x2="19.5"
                    y2="39"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A800AB" />
                    <stop offset="1" stop-color="#FD3737" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                width="48"
                height="39"
                viewBox="0 0 48 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48 4.58824C46.2333 5.39118 44.3289 5.91882 42.3556 6.17118C44.3748 4.95529 45.935 3.02824 46.6692 0.711176C44.7648 1.85824 42.6539 2.66118 40.4283 3.12C38.6157 1.14706 36.0688 0 33.1778 0C27.7859 0 23.3805 4.40471 23.3805 9.84176C23.3805 10.6218 23.4723 11.3788 23.6329 12.09C15.4646 11.6771 8.19121 7.75412 3.3499 1.81235C2.50096 3.25765 2.01912 4.95529 2.01912 6.74471C2.01912 10.1629 3.73996 13.1912 6.40153 14.9118C4.77247 14.9118 3.25813 14.4529 1.92734 13.7647V13.8335C1.92734 18.6053 5.32314 22.5971 9.82027 23.4918C8.37643 23.8868 6.86064 23.9418 5.39197 23.6524C6.01516 25.608 7.23565 27.3193 8.88187 28.5455C10.5281 29.7718 12.5173 30.4514 14.5698 30.4888C11.0905 33.2428 6.77781 34.7314 2.34034 34.71C1.56023 34.71 0.780115 34.6641 0 34.5724C4.35947 37.3712 9.54493 39 15.0975 39C33.1778 39 43.1128 23.9965 43.1128 10.9888C43.1128 10.5529 43.1128 10.14 43.0899 9.70412C45.0172 8.32765 46.6692 6.58412 48 4.58824Z"
                  fill="#699BF7"
                />
              </svg>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}
