function Blogs({title,desc,image}){
    return(
        <>
        <div className='w-[600px] bg-[#03253a] my-6 px-6 py-6 rounded-xl text-white transition-transform duration-300 hover:scale-105 '>
            <p className='mb-4 text-3xl'>{title}</p>
            <p className='mb-4'>{desc}</p>
            <div className='flex justify-center items-center'>
            <img  className='w-[300px] h-[200px] rounded-md' src={image} alt="image" />
        </div>
        </div>
        </>
    )
}
export default Blogs;