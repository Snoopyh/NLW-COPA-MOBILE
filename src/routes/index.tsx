import { Box } from 'native-base';
import { NavigationContainer  } from '@react-navigation/native';
import { useAuth } from '../hooks/usersAuth'

import { AppRoutes } from './app.routes';
import { Signin } from '../screens/Signin';


export function Routes(){
  const { user } = useAuth();

  return(
    <Box flex={1} bg="gray.900">
    <NavigationContainer>
      {user.name ? <AppRoutes/> : <Signin/>}
    </NavigationContainer>
    </Box>
  )
}