import React from 'react'
import"./Loader.css"
<Loader className="css"></Loader>
import { ProgressBar} from 'react-loader-spinner'
function Loader() {
  return (<>
  <div className='loader'>
     <h2 className='lable'>Loading....</h2>
    <ProgressBar
        visible={true}
        height="80"
        width="80"
        barColor='#DDA0DD'
        borderColor='#8B008B'
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        /></div></>

  )
}

export default Loader