import { Link,NavLink } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className='flex justify-around bg-[#111827] text-white p-4 items-center'>
            <img src="Logo.svg" alt="logo" />
            <ul className='flex gap-6'>
                <li>
                    <NavLink to='/' className={({isActive})=>`
                    ${isActive?"text-[#1D4ED8]":"text-white"}`
                    }>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' className={({isActive})=>`
                     ${isActive?"text-[#1D4ED8]":"text-white"} `
                    }>
                        Blogs
                        </NavLink>
                </li>
                {/* <li>
                    <NavLink to='/about' className={({isActive})=>`
                    ${isActive?"text-[#1D4ED8]":"text-white"}
                        p-2 `
                    }>
                        About
                        </NavLink>
                </li> */}
                <li>
                    <NavLink to='/howitworks' className={({isActive})=>`
                    ${isActive?"text-[#1D4ED8]":"text-white"}
                        p-2 `
                    }>
                        How it works
                        </NavLink>
                </li>
            </ul>
            <div className='flex gap-3 text-white'>
                <button className='bg-[#1D4ED8] px-5 py-2 rounded-md'>Login</button>
                <button className='bg-[#1F2937] px-5 py-2 rounded-md'>Signup</button>
            </div>          
        </div>
        </>
    )
}
export default Navbar;