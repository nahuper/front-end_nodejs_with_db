const SAVE_DATA = "http://localhost:3000/save_dat";
const GET_DATA = "http://localhost:3000/get_dat";
const GET_DATA_5 = "http://localhost:3000/get_5";

const btnSend = document.getElementById("btnSend");
const txtName = document.getElementById("txtName");
const txtDir = document.getElementById("txtDir");
const listData = document.getElementById("listData");
const btnGet = document.getElementById("btnGet");
const btnGet5 = document.getElementById("btnGet5");

btnSend.addEventListener("click", ()=>{
    sendData();
});

btnGet.addEventListener("click", () => {
    fetchData();
})

btnGet5.addEventListener("click", () => {
    fetchData_5();
})




const addDataRow = ({name, address}) => {
    listData.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${address}</td>
        </tr>
    `
}


const showData = (data) => {
    listData.innerHTML = "";
    data.forEach(addDataRow);
}

const getData = () => ({
    name: txtName.value,
    address: txtDir.value
});



const fetchData_5 = () => {
    fetch(GET_DATA_5)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => {
        console.log(error);
    })
}

const fetchData = () => {
    fetch(GET_DATA)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => {
        console.log(error);
    })
}

const sendData = async () => {
    try{
        const response = await fetch(SAVE_DATA, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getData()),
        });
        //const jsonResponse = await response.json();
        console.log(jsonResponse)
        clearFields();
    } catch (error){
        console.log(error);
    }
};

function clearFields(){
    txtName.value = "";
    txtDir.value = "";
}



