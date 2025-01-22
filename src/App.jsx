
function App() {


  return (
    <>

      <div className='w-full flex flex-col items-center h-screen   bg-black'>

        <div className="w-2/3">
          <div id='navbar' className='flex justify-between px-3 items-center  h-[4rem] border-b border-gray-700 text-white' >
            <div className='flex  text-3xl font-semibold text-gray-400 ' ><div>{"{"}</div>
              <div className="font-bold text-white">{"S"}</div>

              <div>{"}"}</div></div>

            <div className='flex font-semibold px-4 '>
              <div className='px-4'>Home</div>
              <div className='px-4'>Projects</div>
              <div className='px-4'>Contact</div>
            </div>
            {/* <div className='text-white text-2xl'> <MenuFoldOutlined /> </div> */}

          </div>

          <div className="flex w-full mt-[8rem]   flex-col ">
            <div className="text-4xl font-semibold pl-16 text-webText ">Hey there!, I'm-</div>

            <div className="pl-24">
              <div className="text-9xl mt-6 font-bold  text-white">Shivanshu Gupta.</div>

              <div className="text-white mt-6 flex flex-col  text-4xl ">
                <div className="flex"> <div>Software Engineer.</div>
                  <div className="text-gray-300"> &nbsp; A autodidact developer with an

                  </div></div>
                <div className="text-gray-300 mt-2">interest in Computer Science.</div>

              </div>
            </div>


          </div>
        </div>

      </div>

    </>
  )
}

export default App
