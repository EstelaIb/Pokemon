let url = "http://jsonplaceholder.typicode.com/users";

const obtenerUsuarios = async ()=>{
    try{
        let response = await fetch(url);
        if(!response.ok)
        {
            throw new Error("Ay frijoles! :(")
        }

        let data = await response.json();

        pintarUsuarios(data);
    }catch (error)
    {
        console.log(error);
    }
};


const pintarUsuarios = (data) =>
{
    obtenerUsuarios();
    let body = "";

    for(let i=0; i<data.length; i++)
    {
        body += `<tr><td class="border  border-green-500">${data[i].id}</td><td class="border  border-green-500">${data[i].name}</td><td class="border  border-green-500">${data[i].email}</td></tr>`; 
        
    }

    document.getElementById("data").innerHTML = body;
};