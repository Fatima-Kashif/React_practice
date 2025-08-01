function Card({title='The Coldest Sunset'}){  // you can also pass it directly by destructuring {title} like this or can pass props
    // default value of title
    return(
        <>
        <div className="flex items-center justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-6 ">
  <img class="w-full" src="./card-top.jpg" alt="Sunset in the mountains"/> 
  {/* in this every tag should be a closing tag so that's why it was giving error because image tag do not have closing tag so we have to close it */}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</div>
        </>
    )
}
export default Card;