import { NavLink } from "react-router-dom";

export function LinksPopular({ children }) {
  return (
    <NavLink
      className={(isAction) => (isAction ? "flex flex-col" : undefined)}
      to={`/populard`}
    >
      {children}
    </NavLink>
  );
}
