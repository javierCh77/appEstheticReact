import { Container } from '@mui/material';
import './SectionLogo.css';
import logo from '../../../assets/images/logo-ruth.png';


export default function SectionLogo() {
    return (
        <div className='container-logo'>
            <img src={logo} alt="" />
      </div>
    );
}