import { UserTableHeader, UserTableItem } from '../UserList';


const Main: React.FC = () => {
  return(
    <div className="container px-3 py-3 flex flex-col items-center mx-auto">
        <UserTableHeader/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
        <UserTableItem/>
    </div>
  );
}

export default Main;