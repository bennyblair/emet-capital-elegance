import { ThemeProvider } from "./components/theme-provider.tsx";
import { ToastProvider } from "./hooks/use-toast";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ToastProvider>
        <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
          <h1>Theme + Toast ✅</h1>
        </div>
        <Toaster />
      </ToastProvider>
    </ThemeProvider>
  );
}
