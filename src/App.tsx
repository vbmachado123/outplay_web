
import './App.css'
import { Container, Paper, Stack, ThemeProvider } from '@mui/material';

import { RegisterForm } from './components/forms/RegisterForms';
import Logo from './assets/logo.png'
import { MuiTheme } from './settings/MuiTheme'

function App() {

  return (
    <ThemeProvider theme={MuiTheme}>
      <Container>
        <Stack
          alignItems="center"
          justifyContent="center"
          position="relative"
          flexDirection="column" // Para dispositivos menores, alinha os itens verticalmente

          height="100vh"
          spacing={3}
          marginY={4}>

          <Paper elevation={5} sx={{
            maxWidth: "100%", // O container ocupará 100% da largura para dispositivos menores
            '@media (min-width: 600px)': {
              maxWidth: "80vw", // Para dispositivos maiores, volta ao valor original
            },
          }}>
            <Stack height="100%"
              width="100%"
              justifyContent={'space-between'}
              alignItems={'normal'}
              paddingTop={4}
              paddingBottom={2}
              spacing={3}>
              <Stack alignItems={"center"}>
                <img src={Logo} height={120} width={120} />
              </Stack>

              <RegisterForm />
            </Stack>
          </Paper>
        </Stack>

      </Container>
    </ThemeProvider>

  );
}

export default App
