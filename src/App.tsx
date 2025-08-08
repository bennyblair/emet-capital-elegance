import { ThemeProvider } from "./components/theme-provider.tsx";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
        <h1>App + ThemeProvider ✅</h1>
      </div>
    </ThemeProvider>
  );
}
