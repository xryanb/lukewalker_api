import React,{useEffect,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';

 const Results = (props) => {
        const[someObj,setSomeObj] = useState(null);
        const navigate=useNavigate();

    const {name,num}=useParams();

useEffect(()=> {
    axios.get(`https://swapi.dev/api/${name}/${num}/`)
    .then(res=>{
        console.log(res.data)
        setSomeObj(res.data);
    })
    .catch(err=> console.log(err))
    // console.log('❌❌❌❌');
    // navigate('/error',{replace:true})

},[name,num,navigate])


if(name ==='films'){
    return (
        someObj ?
    <>
        <h1>Title: {someObj.title}</h1>
        <h2>Episode: {someObj.episode_id}</h2>
        <p>Director: {someObj.director}</p>
        <p>Opening: {someObj.opening_crawl}</p>
    </> : <h1>LOADING....</h1>
    )} else if(name==='people'){
        return(
            someObj?
            <>
            <h1>Name: {someObj.name}</h1>
            <p>Height: {someObj.height}</p>
            <p>Hair Color: {someObj.hair_color}</p>
            <p>Skin Color: {someObj.skin_color}</p>
            </> : <h1>Loading...</h1>
        )
    } else if(name==='species'){
        return(
            someObj ?
            <>
            <h1>Name: {someObj.name}</h1>
            <p>Classification: {someObj.classification}</p>
            <p>Mammal: {someObj.designation}</p>
            <p>Height: {someObj.average_height}</p>
            </> : <h1>LOADING...</h1>
        )
    } else if(name ==='vehicles'){
        return(
            someObj ?
            <>
            <h1>Name: {someObj.name}</h1>
            <p>Height: {someObj.classification}</p>
            <p>Height: {someObj.designation}</p>
            <p>Height: {someObj.average_height}</p>
            </> : navigate('/error'))
    } else{
        navigate('/error')
    }
}



export default Results;