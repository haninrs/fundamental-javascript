const endPoint = "https://reqres.in/api/users";

// console.log(fetch(endPoint));

fetch(endPoint ,{
    method: "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({
        name : "jason",
        email : "json@gmail.com"
    })
})
  .then((res) => res.json())
  .then(( data ) => console.log(data));

// async function hitApi() {
//   const api = await fetch(endPoint);
//   const  {data}  = await api.json();
//   console.log(data);
// }

// hitApi();
