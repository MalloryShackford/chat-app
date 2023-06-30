import GoogleButton from 'react-google-button'
import {auth} from '../Firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

const style = {
    wrapper: `flex justify-center`
}

const googleSignin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}


const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignin}/>

    </div>
  )
}

export default Signin