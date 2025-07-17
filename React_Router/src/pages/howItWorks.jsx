import Steps from "../components/steps";
function Work() {
  return (
    <>
    <div className='h-screen flex gap-6 px-[100px] items-center justify-center bg-[#111827] relative overflow-hidden' >
     <div className="absolute w-[500px] h-[500px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] left-[-100px] top-[100px]"></div>
  <div className="absolute w-[500px] h-[500px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] right-[-100px] top-[300px]"></div>
  <div className="absolute w-[300px] h-[300px] bg-[#1D4ED8] rounded-full opacity-30 blur-[100px] left-[600px] top-[150px]"></div>
      <Steps
        image="research.png"
        title="Find Topics You Love"
        content="Explore categories that match your interests."
      />
      <Steps
        image="blog.png"
        title="Read & Engage"
        content="Dive into stories and comment."
      />
      <Steps
        image="share.png"
        title="Share Your Stories"
        content="Write and publish your own blogs easily."
      />
    </div>

    </>
  );
}
export default Work;
