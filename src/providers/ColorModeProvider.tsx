import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme";
import { PaletteMode } from "@mui/material";

export type ThemeModeContextProps = {
  mode: PaletteMode;
  toggle: () => void;
};
export const ThemeModeContext = createContext<ThemeModeContextProps>({} as any);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const toggleColorMode = async () => {
    const theme = mode === "light" ? "dark" : "light";
    setMode(theme);
  };
  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  const value: ThemeModeContextProps = {
    mode: mode,
    toggle: toggleColorMode,
  };

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ColorModeProvider;

export const useColorMode = () => useContext(ThemeModeContext);
