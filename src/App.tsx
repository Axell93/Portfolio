import React, { useRef, useState, useMemo, useEffect } from "react";
// import { FloatButton, social } from "./components/floatingbutton";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./lib/theme-context";
//import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactComponent as LinkedInIcon } from "./assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "./assets/icons/github_outline.svg";

function App() {
  const footerRef = useRef(null);
  //const isInViewport = useIsInViewport(footerRef);
  //const hideCss = !isInViewport ? "hidden sm:block" : "hidden";
  const hideCss = "hidden sm:block";
  const { dark } = React.useContext(ThemeContext);
  const darkClassName = dark ? "dark" : "";

  return (
    <>
      <div className={`${darkClassName} block font-sans`}>
        <div className="p-2 px-4 md:px-32 sm:px-10 bg-[color:var(--background)] bg-gradient-to-b from-[color:var(--page-background-start)] to-[color:var(--page-background-end)]">
          <Navbar />
          <div className="text-[color:var(--foreground)]">
            <Outlet />
          </div>

          <div className={`${hideCss} left-[30px] sticky bottom-0`}>
            <a
              href="https://www.linkedin.com/in/anurag-kashyap-70597a60/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialwrap linkedin absolute top-[-90px] left-[-90px]">
                <LinkedInIcon className="social h-[20px] w-[20px]" />
              </div>
            </a>
            <a
              href="https://github.com/Axell93/UI-Components"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialwrap github absolute top-[-160px] left-[-90px]">
                <GithubIcon className="social " />
              </div>
            </a>
          </div>
        </div>
        <div>
          <Footer ref={footerRef} />
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default App;
