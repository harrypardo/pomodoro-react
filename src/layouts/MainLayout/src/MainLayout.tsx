import React from "react";
import AppBarLayout from "../../../components/AppBarLayout";
import Counter from "../../../components/Counter/Counter";
import { StyledContainer } from "./MainLayout.style";

export const MainLayout = () => {
  return (
    <div>
      <AppBarLayout />
      <StyledContainer>
        <Counter />
      </StyledContainer>

      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7K31D69s4M1"
        width="300"
        height="380"
        allow="encrypted-media"
        title="Spotify"
      />
    </div>
  );
};
