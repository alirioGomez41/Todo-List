import React from 'react'


const Header = () => {
    return ( 
        <header className="mt-8 mx-8">
            <h1 className="text-left text-5xl text-white pt-8">Todo List!</h1>
            <h2 className="text-left text-sm text-white font-normal capitalize">A simple react todo list app.</h2>
            <hr className="w-11/12 mx-auto mt-4 text-gray-50 mb-4"/>
        </header>
     );
}
 
export default Header;