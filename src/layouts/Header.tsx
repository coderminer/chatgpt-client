import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="flex h-12 justify-between items-center">
      <div>logo</div>
      <div>
        {
          theme === 'dark' ? <Sun onClick={() => setTheme('light')} /> : <Moon onClick={() => setTheme('dark')} />
        }
      </div>
    </header>
  );
};

export default Header;
