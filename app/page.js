import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-white h-[44vh]">
        <div className="text-5xl font-bold flex justify-center items-center gap-2">Buy Me A Chai <span><img className="invertImg" width={88} src="./tea.gif" alt="tea-logo" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-14 pt-6">
        <h2 className="text-3xl font-bold text-center my-8">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img width={77} className="bg-slate-400 rounded-full p-2 text-black" src="./man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img width={77} className="bg-slate-400 rounded-full p-2 text-black" src="./coin.gif" alt="" />
            <p className="font-bold">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img width={77} className="bg-slate-400 rounded-full p-2 text-black" src="./group.gif" alt="" />
            <p className="font-bold">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-14 pt-6 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center my-8">Learn more about us</h2>

        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      </div>
    </>
  );
}
