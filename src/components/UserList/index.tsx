import { FaBookOpen } from 'react-icons/fa'

export const UserTableHeader: React.FC = () => {
    return (
        <div className="flex justify-between items-center px-6 w-full max-w-7xl h-14 border-2 mb-2 rounded-t-lg">
            <div id="name">
                <h3 className="text-2xl">Name</h3>
            </div>
            <div id="info" className="flex gap-2">
                <h3 className="text-1xl w-14">Gender</h3>
                <h3 className="text-1xl w-24 text-center mr-12">Birth</h3>
            </div>
        </div>
    );
}

export const UserTableItem: React.FC = () => {
  return (
      <div className="flex justify-between items-center px-6 w-full max-w-7xl h-14 border-2 mb-2">
            <div id="name">
                <h3 className="text-1xl">Angelo Polatto</h3>
            </div>
            <div id="info" className="flex gap-4">
                <h3 className="text-1xl w-14">Male</h3>
                <h3 className="text-1xl w-24">04/12/1998</h3>
                <FaBookOpen className="w-6 h-5 cursor-pointer" color="#64B899"/>
            </div>
      </div>
  );
}