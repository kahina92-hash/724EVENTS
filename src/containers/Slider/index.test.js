import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

// Données mockées pour le test
const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z", // Date au format ISO
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {
    // Suppression des erreurs console pendant les tests
    window.console.error = jest.fn();

    // Mock de la fonction api.loadData
    api.loadData = jest.fn().mockReturnValue(data);

    // Rendu du composant Slider dans un contexte DataProvider
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );

    // Attente du texte "World economic forum"
    await screen.findByText("World economic forum");

    // Vérification du formatage de la date (janvier pour 2022-01-29)
    await screen.findByText("janvier");

    // Vérification de la description
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});
