import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLinks = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (     
    <Link
      style={{ backgroundColor: match ? "green" : "" }}
      to={to}
      {...props}
    >
      <div className={match ? `bg-[#3E2EDF] rounded-md p-4 text-white` : `p-4`}>
        {children}
      </div>
    </Link>
     
  );
};

export default CustomLinks;
