// React Router
import { NavLink } from "react-router-dom";

// Componets
import { ContainerContextF } from "../ContainerContextF/ContainerContextF";
import { ContainerLinksF } from "../ContainerLinksF/ContainerLinksF";
import { ContainerSearchF } from "../ContainerSearchF/ContainerSearchF";
import { ContaiterIconsF } from "../ContainerSearchF/ContaiterIconsF";
import { Mark } from "../ContainerSearchF/Mark";

// utils
import { allExport } from "../../utils/utils";

export function Footer() {
  const { routes, contextContainer, icons } = allExport;

  return (
    <>
      <footer>
        <section className="footer flex flex-col items-center justify-center w-full px-8 py-8 font-fontFamilyDefault bg-defaultColor lg:grid lg:grid-cols-12 lg:grid-rows-3 lg:items-stretch 2xl:p-[3.75rem]">
          <ContainerContextF context={contextContainer} />
          <span className="block w-80 border-white border-solid border lg:hidden"></span>
          <ContainerLinksF>
            {routes.map((item) => (
              <NavLink key={`route-${item.nameList}`} to={`${item.links}`}>
                <li className="p-3 text-sm font-medium lg:px-1.5 lg:mx-1">
                  {item.nameList}
                </li>
              </NavLink>
            ))}
          </ContainerLinksF>
          <span className="block w-80 border-white border-solid border lg:hidden"></span>
          <ContainerSearchF />
          <ContaiterIconsF>
            {icons.map((item, i) => (
              <a
                key={`icon-${i}`}
                className="flex items-center justify-center mx-2 w-8 h-8 bg-white rounded-full 2xl:w-[2.5rem] 2xl:h-[2.5rem]"
                href={`${item.link}`}
                target="_blank"
              >
                <i className={`${item.type} text-colorOptional`}></i>
              </a>
            ))}
          </ContaiterIconsF>
          <Mark />
        </section>
      </footer>
    </>
  );
}
