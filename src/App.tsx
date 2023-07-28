
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
          height="100vh"
          maxWidth={"80vw"}
          spacing={3}
        >
          <Paper elevation={5} sx={{ minWidth: 500, paddingX: 4 }}>
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
