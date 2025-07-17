import { theme } from "@/constants/theme";
import styled from "styled-components";

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: white;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media (min-width: 700px) {
    border-radius: 0.25rem;
    max-height: calc(100vh - 6rem);
    max-width: calc(100vw - 6rem);
    width: initial;
  }

  @media (min-width: 1120px) {
    height: 600px;
  }
`;

export const ReleaseContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1120px) {
    flex-direction: row;
  }
`;

export const ReleaseImage = styled.img`
  width: 100%;

  @media (min-width: 700px) {
    height: 100%;
    max-height: 600px;
  }

  @media (min-width: 1120px) {
    width: auto;
  }
`;

export const ReleaseData = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  padding: 2rem;
  width: 100%;

  @media (min-width: 700px) {
    width: 600px;
  }
`;

export const ReleaseTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-decoration: underline;
`;

export const ReleaseFormat = styled.div`
  align-items: center;
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const ArtistLink = styled.a`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  text-decoration: underline;
`;

export const ArtistThumbnail = styled.img`
  border-radius: 100%;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.5);
  height: 2rem;
  object-fit: contain;
  width: 2rem;
`;

export const TrackRow = styled.tr`
  background: #fbfbff;

  &:nth-child(odd) {
    background: ${theme.light.secondary.background};
  }
`;

export const TrackData = styled.td`
  padding: 0.5rem;
`;
