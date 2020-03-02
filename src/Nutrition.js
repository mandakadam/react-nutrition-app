import React,  {useState, useEffect} from 'react';

const Nutrition = () =>{
    const [serving, setServing] = useState("10");
    const [title, setTitle] = useState("Analyze Meal Nutrition")
    const [ingrArr, setIngrArr] = useState(["1 Orange Juice", "3 tablespoons olive oil", "2 Carrots"]);
    const [ingr, setIngr] = useState('');
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState('false');

    const addIngr = () =>{
       setIngrArr([...ingrArr, ingr]);
    }
    useEffect(() => {
        setIngr('')
    }, [ingrArr]);

   

    const deleteDiet = (id) =>{
        var array = [...ingrArr]; // make a separate copy of the array
        var index = array[id];
        if (index !== -1) {
          array.splice(index, 1);
          setIngrArr(array)
        }
    }

    const app_id = "b66eab84";
    const app_key = "c5be16564187193ee7130c3586a5611c";
  
    var url = 'https://api.edamam.com/api/nutrition-details?app_id=' + app_id + '&app_key=' + app_key;

    const postData = async function(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
   }
  

    const makeCorsRequest = (e) => {
        setLoading("true")
        postData(url, {
            "title": title,
            "yield": `About ${serving} serving`,
            "ingr": ingrArr
          })
          .then(function(resp) {
              console.log(resp)
            setResponse(resp);
            setLoading("false")
          })
    }


    const getDietList = () =>{
        if(ingrArr.length) { 
            return(
            <ul className="ingrList">
                {
                    ingrArr.map((item, index)=>{
                        return <li key={index}>{item} <span className="deleteBtn" onClick={()=>deleteDiet(index)}>x</span></li>
                    })
                }
            </ul>
            )
        }
        else{
            return( <h3>No Diet List added</h3>)
        }
    }

    const getResult = () => {
        if(Object.entries(response).length > 0 && !response.error) { 
            return(
                <div className="result">
                    <ul>
                    <li>Total calories:  {response.calories}</li>
                    <li>Total total weight:    {response.totalWeight}</li>
                    </ul>
                </div>
            )
        }
         if(response.error) { 
            return(
                <div className="result">
                   <div class="errorMsg"> Something went wrong, Please try adding Proper Ingredients list.
                   For example:</div>
                   <ul>
                   <li>1 cup orange juice</li>
                   <li>3 tablespoons olive oil</li>
                   <li>2 carrots</li>
                    </ul>
                </div>
            )
        }
    }
    
    return(<div className="form-wrap">
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Serving For</label>
                <input className="form-control" type="number" value={serving} onChange={(e)=>setServing(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Ingredients list</label>
                <div>
                <input className="form-control" type="text" value={ingr} onChange={(e)=>setIngr(e.target.value)} />
                <button className="addDietBtn" disabled={ingr===""} onClick={addIngr}>Add diet</button>
                {
                    getDietList()
                }
                </div>

            </div>

            
            <div className="form-group">
            <label></label>
                <button className="submitBtn" onClick={makeCorsRequest}>Analyze</button>
            </div>

            <div>
                   {
                       (loading === "true") ? (<div className="result">Loading ...</div>) : getResult()
                      
                   }
            </div>
    </div>)
}

export default Nutrition;