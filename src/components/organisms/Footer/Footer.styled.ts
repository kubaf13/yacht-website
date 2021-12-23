import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.palette.primaryPalette.blue};
  bottom: 0;
  color: white;
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    'socialMedia'
    'secondNavigation'
    'horizontalLine'
    'author';
  grid-template-rows: repeat(4, auto);
  position: absolute;
  width: 100vw;

  @media ${({ theme }) => theme.media.desktop} {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'socialMedia secondNavigation'
      'socialMedia secondNavigation'
      'horizontalLine horizontalLine'
      'author author';
  }
`;

export const SecondNavigation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: secondNavigation;
  justify-content: space-around;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: baseline;
  }
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.palette.primaryPalette.lightWhite};
  grid-area: horizontalLine;
  height: 0.5px;
  margin: 5px auto;
  width: 95%;
`;

export const Author = styled.div`
  grid-area: author;
  text-align: center;

  p {
    color: ${({ theme }) => theme.palette.primaryPalette.white};
    font-size: 1rem;
    padding: 5px;
  }
`;
