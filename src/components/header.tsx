import { FC, ReactNode } from "react";
import { useHistory, Link } from "react-router-dom";

type HeaderProps = {
  children: ReactNode;
};
export const Header: FC<HeaderProps> = ({ children }) => {
  const navigate = useHistory();
  const jump = (path: string) => {
    navigate.push(path);
  };

  const LinkStyle = { marginRight: "10px", display: "inline-block" };
  return (
    <>
      <Link style={LinkStyle} to="/">
        home
      </Link>
      <Link style={LinkStyle} to="/pictures">
        pictures
      </Link>
      <Link style={LinkStyle} to="/profile">
        profile
      </Link>
      <Link style={LinkStyle} to="/contact">
        contact
      </Link>

      <div>{children}</div>
    </>
  );
};
