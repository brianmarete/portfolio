import { Dispatch, SetStateAction, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface NavbarProps {
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
  isTopOfPage: boolean;
}

interface LinkProps {
  page: string;
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}

const Link = ({ page, selectedPage, setSelectedPage }: LinkProps) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
      hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

/**
 * A component that renders a navigation bar that is either a desktop nav
 * or a mobile nav popup. The desktop nav is a horizontal list of links
 * to the different sections of the website. The mobile nav popup is a
 * vertical list of links that appears when the user clicks on the menu
 * icon in the top right corner of the page. The component also handles
 * the state of whether the mobile nav popup is open or closed.
 *
 * @param {string} selectedPage - The id of the currently selected page
 * @param {Dispatch<SetStateAction<string>>} setSelectedPage - A function
 * that updates the selectedPage state
 * @param {boolean} isTopOfPage - A boolean indicating whether the user is
 * currently at the top of the page. If they are, the navbar should have
 * a transparent background. If they are not, the navbar should have a
 * red background.
 * @returns {JSX.Element} A JSX element representing the navigation bar
 */
const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav
      className={`${navbarBackground} z-40 w-full fixed top-0 py-6 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">BM</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="menu-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
