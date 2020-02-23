import { signInWithGoogle } from '../utils/firebase.utils';
import { Button } from 'semantic-ui-react';

<Button type="submit" value="Submit Form">SIGN IN</Button>
<Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>