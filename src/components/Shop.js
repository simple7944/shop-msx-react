import { useEffect, useState } from "react";

const Shop = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("feetch")
        fetch('/api')
        .then((response) => response.json())
        .then((data) => console.log(data));
        setItems(["vfd"]);
        // const fetchMeals = async () => {
        //   const response = await fetch(
        //     'https://react-http-6b4a6.firebaseio.com/meals.json'
        //   );
    
        //   if (!response.ok) {
        //     throw new Error('Something went wrong!');
        //   }
    
        //   const responseData = await response.json();
    
        //   const loadedMeals = [];
    
        //   for (const key in responseData) {
        //     loadedMeals.push({
        //       id: key,
        //       name: responseData[key].name,
        //       description: responseData[key].description,
        //       price: responseData[key].price,
        //     });
        //   }
    
        //   setMeals(loadedMeals);
        //   setIsLoading(false);
        // };
    
        // fetchMeals().catch((error) => {
        //   setIsLoading(false);
        //   setHttpError(error.message);
        // });
      }, []);

  return (
<div>items</div>
  );
}

export default Shop;
