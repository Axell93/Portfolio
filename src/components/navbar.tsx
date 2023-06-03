import { useState, useLayoutEffect } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import {
  Panel,
  PanelContent,
  PanelTrigger,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "./sidepanel";
import { ThemeSwitch } from "./themetoggle";
import { ReactComponent as Icon } from "../assets/pictures/icon.svg";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [active, setActive] = useState({
    isAboutActive: false,
    isWorkActive: false,
  });
  const [open, setOpen] = useState(false);

  const params = useLocation();

  const pages = ["about", "work"];

  const handleTabClick = (e: any) => {
    makeTabActive(e.target.id);
  };

  function makeTabActive(name: string) {
    switch (name?.toLowerCase()) {
      case "about":
        setActive({
          isAboutActive: true,
          isWorkActive: false,
        });
        break;
      case "work":
        setActive({
          isAboutActive: false,
          isWorkActive: true,
        });
        break;
      case "home":
        setActive({
          isAboutActive: false,
          isWorkActive: false,
        });
        break;

      default:
        break;
    }
  }
  useLayoutEffect(() => {
    const isActivePage = pages.includes(params.pathname.substring(1));
    if (isActivePage) {
      makeTabActive(params.pathname.substring(1));
    }
  }, []);

  return (
    <>
      <div className="block relative bg-[color:var(--background)] text-[color:var(--foreground)]">
        <div className="block bg-[color:var(--background)]">
          <div className="flex justify-between items-center py-6 md:space-x-10 ">
            <div className="cursor-pointer navbar" onClick={handleTabClick}>
              <Link id="home" to={`/`}>
                <Icon id="home" className="logo" />
              </Link>
            </div>
            <div className="-my-2 md:hidden flex">
              <div id="theme">
                <ThemeSwitch />
              </div>
              <Panel open={open} onOpenChange={setOpen}>
                <PanelTrigger>
                  <MenuSharpIcon />
                </PanelTrigger>
                <PanelContent
                  className="items-center flex flex-col justify-start text-[color:var(--foreground)] navbar"
                  size="full"
                  position="top"
                >
                  <PanelHeader>
                    <PanelTitle>
                      <div className="flex ">
                        <Icon className="logo" />
                      </div>
                    </PanelTitle>
                  </PanelHeader>
                  <PanelDescription className=""></PanelDescription>
                  <div className="font-black text-xl">
                    <Link to={`/about`}>
                      <div className="my-2 pl-4" onClick={() => setOpen(false)}>
                        About
                      </div>
                    </Link>
                    <Link to={`/work`}>
                      <div className="my-4 pl-4" onClick={() => setOpen(false)}>
                        Work
                      </div>
                    </Link>
                  </div>
                </PanelContent>
              </Panel>
            </div>
            <div
              className="hidden md:flex space-x-2 grow-[0.15] justify-between font-bold text-lg"
              onClick={handleTabClick}
            >
              <div>
                <ThemeSwitch />
              </div>
              <Link id="about" to={`/about`}>
                <div
                  id="about"
                  className={`mx-2 cursor-pointer ${
                    active.isAboutActive ? "active" : ""
                  }`}
                >
                  About
                </div>
              </Link>
              <Link id="work" to={`/work`}>
                <div
                  id="work"
                  className={`mx-2 cursor-pointer ${
                    active.isWorkActive ? "active" : ""
                  }`}
                >
                  Work
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
