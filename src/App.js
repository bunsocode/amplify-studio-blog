import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider, withAuthenticator } from '@aws-amplify/ui-react'
import PostCollection from './ui-components/PostCollection'

function App() {
  return (
    <AmplifyProvider>
      <PostCollection />
    </AmplifyProvider>
  )
}

export default withAuthenticator(App)