import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import AllpokemonsPage from "./pages/AllpokemonsPage";
import MypokemonsPage from "./pages/MypokemonsPage";
import ArenaPage from "./pages/arenaPage"; // Import the ArenaPage component
import pokadexIcon from "./assets/pokadexIcon.svg"; // Import the Pokédex icon
import "./App.css";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const items = [
    {
      name: "All Pokémons",
      href: "/all-pokemons",
      isActive: location.pathname === "/all-pokemons",
    },
    {
      name: (
        <span className="flex items-center gap-2">
          My Pokémons
            <img src={pokadexIcon} alt="Pokédex Icon" className="w-5 h-5" /> {/* Add the icon */}
        </span>
      ),
      href: "/my-pokemons",
      isActive: location.pathname === "/my-pokemons",
    },
  ];

  return (
    <>
      <Header items={items} />
      <Routes>
        <Route path="/all-pokemons" element={<AllpokemonsPage />} />
        <Route path="/my-pokemons" element={<MypokemonsPage />} />
        <Route path="/arena" element={<ArenaPage />} /> {/* Use ArenaPage here */}
        <Route path="/" element={<Navigate to="/all-pokemons" replace />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;