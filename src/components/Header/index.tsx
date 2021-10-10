import { FaSearch } from 'react-icons/fa'
import { Container } from './styles';

import avatar from '../../assests/avatar.jpg';

const Header: React.FC = () => {
  return(
      <Container>
          <h2 className="text-blue-900 text-2xl font-bold">
            Patients
          </h2>
          <div className="flex justify-between items-center">
              <div className="
                flex 
                justify-start 
                items-center
                gap-2
                pl-3 
                mr-3 
                w-60 
                h-8 
                rounded-3xl 
                bg-gray-300
                opacity-70
                ">
                <FaSearch/>
                <input type="text" placeholder="Search Patient" className=" w-44 bg-gray-300 text-gray-900" />
              </div>
              <div id="avatar">
                <img className="w-12 h-12 rounded-3xl" src={avatar} alt="avatar" />
              </div>
          </div>
      </Container>
  );
}

export default Header;