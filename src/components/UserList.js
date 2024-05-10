import React from 'react'

function UserList(props) {
    console.log(props.users);
    console.log(typeof props.methods.removeItemById);
    debugger
    const list = props.users;
    // const remove = (id)=> props.removeItemById(id);
//    const remove = ;

  //  debugger
    
    const users = list.map(user=>{
        return (
<tr key={user.id}>
    <td>
        {user.firstName}
    </td>
    <td>
        {user.lastName}
    </td>
    <td>
        {user.phone}
    </td>
    <td>
        <button type='button'>
            Edit
        </button>
        <button type='button' onClick={()=>{
            alert('fired');
            props.methods.removeItemById(user.id);
            }}>
            Delete
        </button>
    </td>
</tr>            
        )
        

    });
    return (
        <section>
            <h3 className='p-3 text-center'>Users</h3>
            <table className="table table-striped table-bordered" data-testid='userListTable'>
                <thead>
                    <tr>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        </section>
    );
}

export default UserList;