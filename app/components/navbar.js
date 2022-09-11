import Link from 'next/link'
import { useSession, signOut} from 'next-auth/react';
import styles from '../styles/Home.module.css'

const Navbar = () => {
    const { data: session, status} = useSession();
    return ( 
        <nav>
            <div className="logo">
                <h1> nftCenter</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </nav>
     );
}
 
export default Navbar;