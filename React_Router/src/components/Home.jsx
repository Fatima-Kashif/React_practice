function Home(){
    return(
        <>
        <div className="relative min-h-screen flex items-center bg-[#111827] overflow-hidden">

  <div className="absolute w-[500px] h-[500px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] left-[-100px] top-[100px]"></div>
  <div className="absolute w-[500px] h-[500px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] right-[-100px] top-[300px]"></div>
  <div className="absolute w-[300px] h-[300px] bg-[#d946ef] rounded-full opacity-30 blur-[100px] left-[400px] top-[150px]"></div>

  <div className="relative ml-25 text-white">
    <div className="text-7xl font-fira w-[500px]  font-bold text-left">
        <p className="text-7xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#d946ef] bg-clip-text text-transparent">
  Inspiration
</p>

      <p className="text-7xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#d946ef] bg-clip-text text-transparent">is everywhere</p>
    </div>
    <p className="mt-4 text-gray-300 max-w-xl mx-auto">
      There is no passion to be found playing small...
    </p>
    <button className="mt-8 px-8 py-4 cursor-pointer bg-gradient-to-r from-[#1D4ED8] to-[#d946ef] hover:bg-purple-700 rounded-lg">
      Get started
    </button>
  </div>
</div>

        
        </>
    )
}
export default Home;