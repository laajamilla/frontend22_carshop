import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import {DialogContent} from '@mui/material';
import {TextField} from '@mui/material';
import {DialogActions} from '@mui/material';


function AddCar ({addCar}) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand:'',
        model:'',
        color:'',
        fuel:'',
        price:'',
        year:'',
    })

    const handleClickOpen = () => {
        console.log("painettu handleClickOpen")
        setOpen(true);
    }

    const handleClose = () => {
        console.log("painettu handleClose");
        addCar(car);
        setOpen(false);
    }

    const inputChanged = (event) => {
        setCar({...car,[event.target.name]: event.target.value})
        console.log("brand painettu" + car.brand);
    }

    return(
        <div>
             <Button variant="outlined" onClick={handleClickOpen}>New car</Button>
             <Dialog onClose={handleClose} open={open}>
                <DialogTitle>AddCar</DialogTitle>
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
                    <Button onClick={handleClose}>Save</Button>
                    <Button>Cancel</Button>
                </DialogActions>
                
             </Dialog>
        </div>
    )
}
export default AddCar;
