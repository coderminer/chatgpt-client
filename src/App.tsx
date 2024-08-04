import { ThemeProvider } from "@/components/ThemeProvider";
import AppLayout from "@/layouts/AppLayout";
import Chat from "@/pages/Chat";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cm-ai-chat">
      <AppLayout>
        <div className="flex w-full h-full justify-center">
          <Chat />
        </div>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
