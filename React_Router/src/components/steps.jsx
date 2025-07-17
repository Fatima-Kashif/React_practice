function Steps({title,image,content}){
    return(
        <>
        <div className='bg-[#08132f] w-[500px] text-white rounded-xl py-[100px] px-[50px] h-[300px] '>
            <div className='flex items-center gap-4 mb-5 '>
            <img src={image} alt="steps" className='h-[50px] w-[50px]' />
            <p>{title}</p>
            </div>
            <p className='mt-10'>{content}</p>
            
        </div>
        
        </>
    )
}
export default Steps;