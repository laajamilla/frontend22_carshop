import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {DialogContent} from '@mui/material';
import {TextField} from '@mui/material';
import {DialogActions} from '@mui/material';

function EditCar ({updateCar, params}) {

    const [open, setOpen] = useState (false);
    const [car, setCar] = useState ({
        brand:'',
        model:'',
        color:'',
        fuel:'',
        price:'',
        year:'',

    })

    const handleClickOpen = () => {
        console.log("handle click open kutsuttu")
        setOpen(true);
        setCar({
            brand: params.data.brand,
            model: params.data.model,
            color: params.data.color,
            fuel: params.data.fuel,
            price: params.data.price,
            year: params.data.year
        })
    }

    const handleClickClose = () => {
        console.log("handle click close kutsuttu");
        setOpen(false);
    }

    const handleSave = () => {
        console.log("käsitellään tallennus");
        console.log(params.value);
        updateCar(car, params.value);
        setOpen(false);
    }

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]:event.target.value})
    }

    return(
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                EDIT
            </Button>
            <Dialog open={open} onClose={handleClickClose}> 
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <TextField
                        name="brand"
                        label="Brand"
                        margin="dense"
                        value={car.brand}
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="model"
                        label="Model"
                        margin="dense"
                        value={car.model}
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="color"
                        label="Color"
                        margin="dense"
                        value={car.color}
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="fuel"
                        label="Fuel"
                        margin="dense"
                        value={car.fuel}
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="year"
                        label="Year"
                        margin="dense"
                        value={car.year}
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="price"
                        label="Price"
                        margin="dense"
                        value={car.price}
                        onChange={inputChanged}
                        fullWidth={true}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleClickClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
export default EditCar;