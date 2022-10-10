import Main from "../components/templates/Main";
import Logo from "../assets/escudo.png";
import { IAContextProvider } from "../context/Context";
import { MensajesContextProvider } from "../context/ContextMensajes";

export default function App() {
  return (
    <MensajesContextProvider>
      <IAContextProvider>
        <div className="bg-zinc-900 h-screen font-poppins">
          <header className="w-full fixed bg-zinc-800 h-24 border-b-2 border-white">
            <img src={Logo} className="h-24" />
          </header>
          <Main />
        </div>
      </IAContextProvider>
    </MensajesContextProvider>
  );
}
