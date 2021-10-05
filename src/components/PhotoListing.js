import React, { useState, useEffect } from "react";
import getAll from "../services/ApiService";

const PhotoListing = props => {
    
    const [photo, setPhoto] = useState([])
    const [tableData, setTableData] = useState([])
    const [buttonText,setButtonText] = useState('Compare');
    const [loader,setLoader] = useState(false);
    let tempArray = [];

  const getPhotos = () => {
      setLoader(true)
    getAll.getAll()
      .then(response => {
          setPhoto(response.data)
          setLoader(false)
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {

    getPhotos()
  },[]);

 const handleCompare = (item) => {
    console.log("sadas",tableData)
        if(tableData.includes(item)){
            return setTableData(tableData.filter(i => i !==item))
        } 
        else{
            return setTableData([...tableData, item])
        } 
     
     console.log(item)
 }

  return (
    <div class="container">
        {loader && (
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        )}
        
    <div class="row" style={{height: '400px',overflow:'auto'}}>
       {photo.map((item,index) => {
           return (
            <div class="col-sm">

            <div class="card" key={item.id}>
            <img loading="lazy" src={item.thumbnailUrl} class="img-thumbnail card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">Id : {item.id}</p>
                <a href="#" class="btn btn-primary">URL : {item.url}</a>
             </div>
                <button onClick={() => handleCompare(item)}>

                  {tableData.includes(item) ? 'Remove' :'Compare'}
                    
                </button>
             </div>
            </div>

           )
       })}
  </div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Photo</th>
      <th scope="col">Id</th>
      <th scope="col">URl</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
      {tableData.map((item,index) => {
          return (
        <tr>
          <th scope="row"><img src={item.thumbnailUrl} /></th>
            <td>{item.id}</td>
            <td>{item.url}</td>
            <td>{item.title}</td>
        </tr>
          )
      })}
  </tbody>
</table>
</div>
  );
};

export default PhotoListing;
