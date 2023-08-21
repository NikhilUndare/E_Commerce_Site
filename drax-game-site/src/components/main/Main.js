import { useEffect, useState } from "react"
import axios from 'axios'
import Header from "../header/Header";
import Item from "../item/Item";
 import './Main.css'

function Main(){
    const [singlePlayer,setsinglePlayer]=useState([]);
    const [multiPlayer,setmultiPlayer]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/single-players?populate=*').then((singlePlayer)=>{
            setsinglePlayer(singlePlayer.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })

        axios.get('http://localhost:1337/api/multi-players?populate=*').then((multiPlayer)=>{
            setmultiPlayer(multiPlayer.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
    },[])
    return <>
           <Header/>
           <div className="container">
           <section className="row">
             <article className="title fs-3"> <strong>Single Player</strong></article>
             {singlePlayer.map((item,key)=>{
                return <Item item={item.attributes} image = {`http://localhost:1337${item.attributes['image'].data.attributes.url}`}/>
             })}
             <article className="title fs-3"> <strong>Multi Player</strong></article>
             {
                multiPlayer.map((item,key)=>{
                 return <Item item={item.attributes} image = {`http://localhost:1337${item.attributes['image'].data.attributes.url}`}/>
                })
             }
           </section>
           </div>
    </>
}

export default Main