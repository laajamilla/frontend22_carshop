
import React, { useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCar from './AddCar'
import EditCar from './EditCar';


function Carlist() {

    const [cars, setCars] = React.useState([]);

    useEffect( () => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch("http://carrestapi.herokuapp.com/cars")
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
    }

    const deleteCar = (link) => {
        console.log('delete car funktio');
        console.log(link);
        fetch(link, {method: 'DELETE'})
        .then(response => {
            if(response.ok){
               fetchCars();
            }
        })}

    const addCar = (car) => {
        console.log("carlistin addCar funktio" + JSON.stringify(car))
        fetch("http://carrestapi.herokuapp.com/cars",{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(car)
        })
        .then(response => {
            if(response.ok) {
               fetchCars();
            } else {
                alert('Something went wrong when adding car');
            }
        })
        .catch(err => console.error(err))
    }

    const updateCar = (updateCar, link) => {
        console.log("update car painettu");
        console.log("updatecar: " + updateCar.brand);
        console.log("linkki:" + link);
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(updateCar)
        })
        .then(response => {
            if(response.ok) {
                console.log("response ok");
                fetchCars();
            } else {
                alert('something went wrong, update car');
            }
        })
        .catch(err => console.error(err))
    }

    const columns = [
        {field: 'brand', sortable: true, filter: true},
        {field: 'model', sortable: true, filter: true},
        {field: 'color', sortable: true, filter: true},
        {field: 'fuel', sortable: true, filter: true},
        {field: 'year', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true},
        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params =>
              <EditCar updateCar={updateCar} params={params} />
           
        },
        {
            headerName: '',
            width: 100,
            field: '_links.self.href',
            cellRenderer: params =>
                <IconButton onClick={()=> deleteCar(params.value)}>
                    <DeleteIcon />
                </IconButton>
        },
    ]

    return(
        <>
        <AddCar addCar={addCar}/>
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
           <AgGridReact
               pagination={true}
               paginationPageSize={10}
               rowData={cars}
               columnDefs={columns}>
           </AgGridReact>
       </div>
       </>
    )
}

export default Carlist;