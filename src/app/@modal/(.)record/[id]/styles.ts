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
  border-radius: 0.5rem;
  position: relative;
  padding: 1.5rem;
  height: 600px;
  max-height: calc(100vh - 6rem);
`;

export const ReleaseContainer = styled.div`
  align-items: flex-start;
  border-radius: 0.375rem;
  display: flex;
  height: 100%;
`;

export const ReleaseImage = styled.img`
  height: 100%;
  max-height: 600px;
`;

export const ReleaseData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  height: 100%;
  overflow: scroll;
  padding-right: 1rem;
`;

export const ReleaseTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
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
  &:nth-child(odd) {
    background: ${theme.light.main.background};
  }
`;

export const TrackData = styled.td`
  padding: 0.5rem;
`;
