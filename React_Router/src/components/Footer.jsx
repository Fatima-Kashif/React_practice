function Footer(){
    return(
        <>
        <div className='bg-[#111827] py-12 text-white font-fira flex px-12 justify-around '>
            <div className='flex gap-18 w-[600px]'>
                <ul>
                    <li>Home</li>
                    <li>How it works</li>
                    <li>Bloggers</li>
                    <li>Become a member</li>
                </ul>
                <ul>
                    <li>Public reviews</li>
                    <li>Privacy guide</li>
                    <li>Term conditions</li> 
                    <li>Help and support</li>
                </ul>
            </div>
<div className='w-[350px]'>
    <div className='flex items-center mb-3 gap-5'>
    <img src="Logo.svg" alt="logo" />
    <span>Ideaspiration</span>
    </div>
    <p className='mb-3'>All media, contents, articles and everything
here are have copyright material and law.</p>
<p>© 2021 Ideaspiration Media Limited.</p>
</div>
        </div>
        
        </>
    )
}
export default Footer;