import React from 'react'

const Navbar = () => {
    // const { account } = state;
    // console.log(account);
    return (
        <>
            <header className="my-8 mx-4 sm:my-9 md:bg-white md:rounded-full md:shadow-lg tracking-wider">
                <div className="px-4 sm:px-8 py-4 flex flex-col items-center justify-center md:flex-row md:justify-center">
                    <nav>
                        <ul className="flex items-center space-x-4 md:space-x-8 text-sm md:text-lg font-bold">
                            <img className='h-10 w-auto' src="https://user-images.githubusercontent.com/16066404/77041853-a2044100-69e0-11ea-8da6-d64822a2c72a.jpg" alt="Logo" />
                            <li className="mx-3 sm:mx-0 font-italic hover:text-blue-600">Buy Me A Chai</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>

    );
}

export default Navbar;
