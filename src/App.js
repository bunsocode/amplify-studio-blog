import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider, withAuthenticator } from '@aws-amplify/ui-react'
import PostCollection from './ui-components/PostCollection'
import { Auth } from 'aws-amplify'

function App() {
  return (
    <AmplifyProvider>
      <button onClick={() => Auth.signOut({ global: true })}>Sign Out</button>
 
      <PostCollection />
    </AmplifyProvider>
  )
}

export default withAuthenticator(App)