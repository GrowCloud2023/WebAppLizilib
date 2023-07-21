import React from "react";
import { Amplify } from 'aws-amplify';
import { Authenticator, View , Image , useTheme} from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import RoutesApp from './routers/Routes';
import '@aws-amplify/ui-react/styles.css';
// import { useTheme } from "@tanstack/react-query-devtools/build/lib/theme";
Amplify.configure(awsExports)
function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt='Ejemplo'
          />
        </View>
      )
    }
  };
  return (
    <Authenticator components={components}>
      {({ signOut, user }) => (
      <div>
          <RoutesApp/>
      </div>
      )}
    </Authenticator>
  );
}
export default App;












