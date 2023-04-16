import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SimpleAccordion.css";
import { useForm, Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { useContext  } from "react";

import { SendDataContext } from "./SendDataContext";


export default function SimpleAccordion() { 

  const {sendData, setSendData} = useContext(SendDataContext);

  const {
    register,
    handleSubmit,getValues,
    control,
    formState: { errors },
  } = useForm({defaultValues:sendData});

 
                      let d=sendData;
            
console.log( "This data from usestate"  + "- - -"+ d.email) ;




  const onSubmit = (data) =>{ 
             setSendData(data);
    console.log(data)  ;}

  return ( <>

        

    <div className="accordian-box">
   
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Basic Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              defaultValue="John"
              {...register("firstName", { required: true })}
            /> 
            {errors.firstName && <span>First Name is required</span>}

            <TextField
              required
              id="outlined-required"
              label="Last Name"
              defaultValue="Doe"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span>Last Name is required</span>}

            <TextField
              required
              id="outlined-required"
              label="Job-title"
              defaultValue="Software Developer"
              {...register("jobTitle", { required: true })}
            />
            {errors.jobTitle && <span>Job Title is required</span>}

            <TextField
              required
              id="outlined-required"
              label="Phone"
              defaultValue=""
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>Phone is required</span>}

            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              {...register("email", { required: true })}
            />
            {errors.email && <span>Email is required</span>}

            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Professional Summary"
              defaultValue=""
              {...register("profSummary", { required: true })}
            />
            {errors.profSummary && (
              <span>Professional Summary is required</span>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Employment Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined"
              label="Job Title"
              {...register("employmentTitle")}
            />
            <TextField id="outlined" label="Company" {...register("company")} />
            <TextField id="outlined" label="city" {...register("city")} />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker />
            </LocalizationProvider>

            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="hello date"
              control={control}
              defaultValue={new Date()}
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  margin="dense"
       
                  id="date-picker-dialog"
                  label="datepicker label"
                  format="dd/MM/yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                  inputRef={ref}
                  {...rest}
                />
              )}
            />
          </MuiPickersUtilsProvider>
            
     

    
            <TextField
              fullWidth
              id="outlined"
              label="description"
              {...register("description")}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Other Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <input type="submit" label="Submit" />
        </form>
   
       
    </div> 
   

    </>
    
  );
}
