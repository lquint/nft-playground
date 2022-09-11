import { useSession, signOut} from 'next-auth/react';
import styles from '../styles/Home.module.css'

const Test = () => {
    const { data: session, status} = useSession({required: true});

    return ( 
        <div><h1>Test !</h1>
        </div>
        
     );
}
 
export default Test;