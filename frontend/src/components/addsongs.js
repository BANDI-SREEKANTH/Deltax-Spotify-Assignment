import React,{useState} from "react";
import {Modal } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Filebase64 from "react-file-base64";
import Multiselect from "multiselect-react-dropdown"
import { GoFileMedia } from "react-icons/go";
import {Link} from "react-router-dom"
import "./addsong.css"
import {useNavigate} from "react-router-dom"
import axios from "axios"

function AddSongs(){
  const Navigate = useNavigate();
  const [modalIsopen, setModalIsopen]=useState(false);
  const [data,setdata] =useState({
                                  key:"",
                                  cat:"",
                                  bio:""
                                });
  const [options,setoptions]=useState([]);
  const [alldata,setalldata]=useState({
                                      song_name:"",
                                      dor:"",
                                      image:"",
                                      artist_name:""
                                     })
  const [name,setName]=useState(true);


  const AddItmes=(e)=>{
        setoptions([...options,data])
        alert("Artist added in dropdown sucessfully")
        setModalIsopen(false)
  }


  const handlealldata=(e)=>{
        e.preventDefault();
        console.log(alldata)
       
        //console.log(alldata)
        //setalldata({song_name:"",dor:"",image: "",artist_name:""})
  }

  const save = ()=>{
    console.log("From Save Method",alldata);
    const url="http://localhost:3005/addsongs";
    axios.post(url, {song_name:alldata.song_name,dor:alldata.dor,image:alldata.image,artist_name:alldata.artist_name})
   .then(res => console.log('Data send'))
   .catch(err => console.log(err.data))
    // axios({
      
    //   method: "POST",
    //   data: alldata,
    //   headers:{
    //   }
    // }).then((post)=>{
    //      Navigate("/home")
    // }).catch((err)=>{
    //      console.log(err)
    // })
  }

  
    
  return (
          <div>
               <div className="home">
                  <div className="header"></div>
                  <Link to="/home"><div className="main"><b>Home</b></div></Link>
                  <div className="search">
                     <AiOutlineSearch className="iconsearch"/>
                      <input type="text" className="searchtext" placeholder="Search"></input>
                  </div>
                  </div>
                    <form className="form-data" onSubmit={handlealldata} method="POST">
                       <div className="song-form">
                       <h1>Adding a New Song</h1>

                 <div className="name">
                    <label for="name">Song Name</label>
                    <input type="text" className="songname" id="name" onChange={e=>setalldata({...alldata,song_name: e.target.value})}></input>
                 </div>

                 <div className="date">
                    <label for="name">Date of Release</label>
                    <input type="date" className="songdate" id="date" onChange={e=>setalldata({...alldata,dor: e.target.value})}></input>
                 </div>

                 <div className="image-upload">
                     <div className="label-image">
                         <label for="image">Artist</label>
                     </div>
                     <div  className="input-file">
                        <GoFileMedia className="imageicon"/>
                        <Filebase64
                          id="fileimage"
                          type="file"
                          multiple={false}
                          onDone={({base64}) => {setalldata({ ...alldata,image: base64 });setName(!name)}}
                          title="Add File"/>
                     </div>
                </div>
            
                <div className="artistname">
                    <p className="art">Artist</p>
                </div>

                <div className="multiselect">
                    <Multiselect
                       displayValue="key"
                       onKeyPressFn={function noRefCheck(){}}
                       onRemove={(e)=>console.log(e)}
                       onSearch={(e)=>console.log(e)}
                       onSelect={(e)=>{
                       let arr=[]
                       for(let ele of e){
                       arr.push(ele.key)}
                       let ans=(String(arr));
                       setalldata({...alldata,artist_name: ans})}}
                       options={options}
                       showCheckbox/>
                 </div>

                 <div className="artist-select">  
                      <div className="add-artist" onClick={()=>setModalIsopen(true)}>+ Add Artist</div>  
                      <Modal isOpen={modalIsopen} portalclassname="modal">
                        <div className="artist-form">

                          <div className="box1">
                            <div className="title1">Add Artist</div>
                             <div className="closear"><button className="close" onClick={()=>setModalIsopen(false)}><b>X</b></button>
                          </div></div> 
                          <hr></hr>

                          <div className="box2">
                          <div className="cont1">
                            <label for="artist-name">Artist Name</label>
                          </div>
                        <div className="cont2">
                            <input type="text" id="artist-name"  required={true} onChange={e=>setdata({...data,key: e.target.value})} ></input>
                        </div>
                        </div>

                        <div className="box2">
                          <div className="cont1">
                            <label for="artist-date">Date of Birth</label>
                          </div>
                          <div className="cont2">
                            <input type="date" id="artist-date" required={true} onChange={e=>setdata({...data,cat: e.target.value})}></input>
                          </div>
                        </div>

                        <div className="box2">
                          <div className="cont1">
                            <label for="artist-bio">Bio</label>
                          </div>
                          <div className="cont2">
                            <input type="text" id="artist-bio" required={true} onChange={e=>setdata({...data,bio: e.target.value})}></input>
                          </div>
                        </div>

                         <div className="button">
                          <button className="cancel" onClick={()=>setModalIsopen(false)}>Cancel</button>
                          <button className="done" onClick={AddItmes} method="POST">Done</button>
                         </div>
                    </div>
                  </Modal>
              </div>
              <Link to='/home'><button className="cancelhome">Cancel</button></Link>
              <Link to="/home"><button className="formsubmit" onClick={()=>{save()}}>Save</button></Link>
              </div>
            </form>
          </div>
    )
}

export default AddSongs;