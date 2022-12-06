import React from "react";
import {Link} from "react-router-dom"
import "./home.css"
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios"
import {useEffect, useState} from 'react';
import Rating from "./rating";



function Home(){


  const [postData, setPostData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/image").then((res)=>{
            let data = res.data.reverse();
            setPostData(data);
            console.log(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    const[setadata]=useState([]);
    useEffect(()=>{
      const getmydata= async()=>{
        let objt=[]
        const reqdata= await fetch("http://localhost:3005/image");
        const resdata= await reqdata.json()
        console.log(resdata);

        for(let i=0;i<reqdata.length;i++){
          console.log(resdata[i])
        }
        setadata(objt)
      }

      getmydata();
    },[]);

    

    return (
        <div className="home-body">
          <div className="home">
            <div className="header">
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><div className="main"><b>Home</b></div></Link>
            <div className="search">
              <AiOutlineSearch className="iconsearch"/>
              <input type="text" className="searchtext" placeholder="Search"></input>
            </div>
            <div className="topSongs">
              <h1>Top 10 Songs</h1>
              <Link to="/addsongs"><div className="addSongs">+  Add Songs</div></Link>
            </div>
          </div>
          <div className="cart">

                <div className='cart1'>
                   <div className="one"><h4>Artist Pic</h4></div>
                      {postData.map((data, index) => {
                        return (
                        <div>
                           <div key={index} className='cart_child' type="none">
                             <div className="artwork-image">
                               <img src={data.image} alt={"cover"} className="cover-track" height={120} width={120}></img>
                             </div>
                           </div>
                        </div>
                        )
                        })}
                </div>

                <div className='cart2'>
                  <div className="two"><h4>Song</h4></div>
                      {postData.map((data, index) => {
                        return (
                        <div>
                           <div key={index} className='cart_child' type="none">
                             <div className="name-of-song">
                              <p>{data.song_name}</p>


                             </div>
                         </div>
                        </div>  
                        )
                        })}
                 </div>

                <div className='cart3'>
                  <div className="three"><h4>Date of Release</h4></div>
                       {postData.map((data, index) => {
                        return (
                        <div>
                          <div key={index} className='cart_child' type="none">
                            <div className="date-of-song">
                              <p>{data.dor}</p>
                            </div>
                          </div>
                        </div>
                        )
                        })}
                </div>

                <div className='cart4'>
                  <div className="four"><h4>Artists</h4></div>
                      {postData.map((data, index) => {
                       return (
                       <div>
                         <div key={index} className='cart_child' type="none">
                           <div className="last">
                             <p>{data.artist_name}</p>
                           </div>
                         </div>
                      </div>
                       )
                       })}
                </div>

                <div className='cart5'>
                   <div className="four"><h4>Rate</h4></div>
                     {postData.map((data, index) => {
                       return (
                       <div>
                         <div key={index} className='cart_child' type="none">
                            <div className="rate">
                              <Rating></Rating>
                            </div>
                         </div>
                        </div>
                        )
                        })}
                  </div>
              </div>

              <div><h1>Top 10 Artist</h1></div>
              <div className="cart">
              <div className='cart6'>
                  <div className="four"><h4>Artists</h4></div>
                      {postData.map((data, index) => {
                       return (
                       <div>
                         <div key={index} className='cart_child' type="none">
                           <div className="last">
                             <p>{data.artist_name}</p>
                           </div>
                         </div>
                      </div>
                       )
                       })}
                </div>
                <div className='cart3'>
                  <div className="three"><h4>Date of Birth</h4></div>
                       {postData.map((data, index) => {
                        return (
                        <div>
                          <div key={index} className='cart_child' type="none">
                            <div className="date-of-song">
                              <p>{data.dor}</p>
                            </div>
                          </div>
                        </div>
                        )
                        })}
                </div>
                <div className='cart7'>
                  <div className="six"><h4>Songs</h4></div>
                      {postData.map((data, index) => {
                        return (
                        <div>
                           <div key={index} className='cart_child' type="none">
                             <div className="song-art">
                              <p>{data.song_name}, Before You Go, Brusises, Hold me While You Wait</p>
                             </div>
                         </div>
                        </div>  
                        )
                        })}
                 </div> 
              </div>
              

              
          
            </div>

            
);}

export default Home;