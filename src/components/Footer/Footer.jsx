// no footer planned yet smh

import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="scale-[0.7] md:scale-[1] mt-10 h-[20vh] flex justify-center items-center gap-10">

      <Logo />
      <div className="flex gap-10 justify-center items-center">
        <div>
          <i className="fa-brands scale-[2] fa-instagram"></i>
        </div>
        <div>
          <i className="fa-brands scale-[2] fa-linkedin-in"></i>
        </div>
        {/* <FontAwesomeIcon icon="fa-brands scale-[2] fa-github" /> */}
        <div>
          <i className="fa-brands scale-[2] fa-github"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
