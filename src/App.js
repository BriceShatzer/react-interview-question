import React, {useState} from 'react';
import './App.css';
import 'h8k-components';
import UserList from './components/UserList';
import AddEditUser from './components/AddEditUser';

const title = 'User Management'

const App = () => {

    // const initialState = { firstName: '', lastName: '', phone: '' }
    const [userList,setUserList] = useState([{firstName: 'test', lastName: 'test', phone: '123',id:1}]);
    function removeItemById(id) {
        const index = userList.findIndex(item => item.id === id);
        if (index !== -1) {
            userList.splice(index, 1);
        }
        debugger
        setUserList(userList);
    }
    function addItem(firstName,lastName,phone){
            if (userList.length === 0) {
                return null; // Return null if the array is empty
            }
        
            const highID = userList.reduce((maxId, currentItem) => {
                return Math.max(maxId, currentItem.id);
            }, userList[0].id);
            userList.push({firstName:firstName, lastName:lastName,phone:phone, id:highID+1})
    }



    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className='layout-row justify-content-center mt-100'>
                <div className='w-60 mr-75'>
                    <UserList users={userList} methods={{removeItemById}}/>
                </div>
                <div className='layout-column w-40'>
                    <AddEditUser user={userList} methods={{setUserList,addItem,removeItemById}} />
                </div>
            </div>
        </div>
    );
}

export default App;
