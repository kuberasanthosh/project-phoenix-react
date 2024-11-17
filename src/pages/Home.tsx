import {useState } from "react";

  const Home = () => {""
    const [imgProps, setImgProps] = useState({message: "", status:""});
    // useEffect(() => {
    //     try {
    //       imgProps = 
    function randomDog () {
     return fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => response.json())
        .then(json => setImgProps(json));
      }      
    //     } catch(e) {
    //       console.error(e);
    //     }
    // });
    return (
      <div style={{textAlign: 'center'}}>
        <h1>This is the home page</h1>
        <button type="button" onClick={randomDog}>Get Random Dog</button><br/><br/>
        {imgProps.message!=='' && 
        <div className="dog-card">
          <img src={imgProps.message} alt="Random Dog" /><br/>
          <strong className="dog-name">{imgProps.message?.split('breeds/')[1].split('/')[0]}</strong>
        </div>}<br/>
      </div>
    );
  };
  
  export default Home;