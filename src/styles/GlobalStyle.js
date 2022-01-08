import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
--black: hsl(0, 0%, 0%);
--gray: hsl(0, 0%, 87%);
--white: hsl(0, 0%, 100%);
--orange: hsl(28, 100%, 79%);
--purple: hsl(329, 36%, 59%);
--blue: hsl(229, 100%, 67%);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 


html {
  font-size:62.5%;
  font-family: 'DM Sans', sans-serif;
}

li{
  list-style:none;
}
a{
  text-decoration:none;
}
`;
