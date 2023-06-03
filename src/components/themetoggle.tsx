import * as Switch from "@radix-ui/react-switch";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ThemeContext } from "../lib/theme-context";

export const ThemeSwitch = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const onClick = () => {
    toggle();
  };

  return (
    <div className="flex items-center box-border mx-2">
      <Switch.Root
        className="flex cursor-pointer SwitchRoot justify-between items-center w-20 h-8 bg-gradient-to-r from-[#e1e1e1] to-[#fff] rounded-full relative px-1 py-2"
        checked={dark}
        onCheckedChange={onClick}
      >
        <span className="flex w-full justify-between">
          <span className="flex h-5 w-5 z-10 ml-[4px]">
            <WbSunnyIcon className="light text-[#fafafa]" />
          </span>
          <span className="flex h-5 w-5 z-10 mr-[4px]">
            <DarkModeIcon className="night text-[#151d2a]" />
          </span>
        </span>
        <Switch.Thumb className="data-[state=checked]:translate-x-[2.9rem] translate-x-[0.125rem] h-6 w-6 SwitchThumb bg-[#151d2a] rounded-full absolute transition-transform will-change-transform" />
      </Switch.Root>
    </div>
  );
};
