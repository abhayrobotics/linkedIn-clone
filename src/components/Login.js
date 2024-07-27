import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Input } from '@mui/material';


const Login = () => {
  return (
    <div>
      <div >
        <LinkedInIcon  sx={{ fontSize: 40 }} color="primary"/>
      </div>

      <div className='flex flex-col w-3/5 min-w-80 border '>
        <div>
          <h2>Sign In</h2>
          <h3>Stay updated on your professional world.</h3>
        </div>
      {/* ************************ Login */}
        <form className='flex flex-col'>
            <Input type='email' placeholder='Email' ></Input>
            <Input type='password' placeholder='Password' ></Input>
            
            <button className='bg-blue-700 w-1/5'>Login</button>
        </form>

      </div>

    </div>
  )
}

export default Login