import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <hr></hr>
      <div className="flex justify-between mt-2">
        <p>
          Copyright &copy; {new Date().getFullYear()} Joonhyuk Ko. All rights
          reserved.
        </p>
        <a href="https://github.com/joon0516/HoosNotes">
          <AiFillGithub style={{ fontSize: "30", color: "#1c1c1e" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
