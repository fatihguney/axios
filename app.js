import axios from "axios";


async function getData(userID) {
    const { data: users } = await axios (
        `http://jsonplaceholder.typicode.com/users/${userID}`
    );

   const { data: post } = await axios (
      `http://jsonplaceholder.typicode.com/posts/${userID}`   
  );
    
       console.log("users", users);
       console.log("post", post);
       
};

getData(5);

export default getData;