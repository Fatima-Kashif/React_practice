import Blogs from "../components/Blogs";
function BlogPage(){
    return(
        <>
        <div className='flex flex-col justify-center items-center bg-[#111827] p-12'>
         <div className="fixed w-[500px] h-[500px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] left-[-100px] top-[100px]"></div>
  <div className="fixed w-[500px] h-[500px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] right-[-100px] top-[300px]"></div>
  <div className="fixed w-[300px] h-[300px] bg-[#d946ef] rounded-full opacity-30 blur-[100px] left-[400px] top-[100px]"></div>
        <Blogs title='Healthy Diet' desc='Discover easy ways to build nutritious eating habits. From balanced meals to smart snacking, start your journey to better health today.' image='healthy.jpeg'/>
        <Blogs title='Exercise' desc='Learn simple workouts you can do anywhere, anytime. Stay active, boost your energy, and make fitness a part of your daily routine.' image='exercise.jpeg'/>
        <Blogs title='Technology' desc='Explore the latest trends shaping our digital world. From AI innovations to practical tech tips, stay informed and ahead of the curve.' image='tech.jpg'/>
        <Blogs title='Time Management' desc='Master the art of productivity. Get practical tips to organize your tasks, beat procrastination, and make the most of every day' image='time.jpeg'/>
        <Blogs title='Goals' desc='Set meaningful goals and turn them into action. Learn how to plan, stay motivated, and celebrate progress along the way.' image='goals.jpeg'/>
        </div>
        </>
    )
}
export default BlogPage;