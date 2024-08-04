import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { forwardRef } from "react";

const Header = forwardRef<HTMLElement>((props, ref) => {
  const { theme, setTheme } = useTheme();
  return (
    <header
      className="flex h-12 justify-between items-center"
      ref={ref}
      {...props}
    >
      <div>logo</div>
      <div>
        {theme === "dark" ? (
          <Sun onClick={() => setTheme("light")} />
        ) : (
          <Moon onClick={() => setTheme("dark")} />
        )}
      </div>
    </header>
  );
});

export default Header;
