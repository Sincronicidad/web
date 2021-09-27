import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./HomeFirstCase.css";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import img1 from "../../assets/appAssets/Assets/Otros.png";
import img2 from "../../assets/appAssets/Assets/Neportismo en estructura.png";
import img3 from "../../assets/appAssets/Assets/Corrupcion.png";
import img4 from "../../assets/appAssets/Assets/Casos sobresalientes.png";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import Modal from "@material-ui/core/Modal";

// heading for each step in stepper
function getSteps() {
  return [
    "Elige el tipo de caso",
    "Agrega información",
    "Carga archivo(s)",
    "Sube el nuevo caso",
  ];
}

const useStyles1 = makeStyles((theme) => ({
  root: {
    width: "50%",
    marginTop: "30px",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));


const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    width: "30%",
  },

  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#fff",
  },

  hide: {
    display: "none",
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const HomeFirstCase = () => {
  const classes = useStyles();
  const classes1 = useStyles1();
  const [next, setNext] = React.useState(false);
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(false);
  const [option3, setOption3] = React.useState(false);
  const [option4, setOption4] = React.useState(false);
  const [caseName, setCaseName] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [textArea, setTextArea] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const [noOfFiles, setnoOfFiles] = React.useState(null);
  const [linkForFile, setLinkForFile] = React.useState('');

      // below two func is for model
      const handleOpen = () => {
        setOpenModal(true);
      };
    
    

  const steps = getSteps();

  // going to next step in steppper
  const handleNext = () => {
    // console.log(activeStep === steps.length - 1);
    if (activeStep === steps.length - 2) handleOpen();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setNext(false)
  };

  // going back step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    console.log("caseName:",caseName)
    console.log("country:",country)
    console.log("textArea:",textArea)


  };
  

  // login starts for drag and drop files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
     const noOfFiles = files.map((f) => f.meta);
     console.log(noOfFiles)
     setnoOfFiles(noOfFiles.length)
    setNext(!next);
  };

  // logic to disable next button in stepper before any activity
  const selectOption = (prop) => {
    if (prop == 1) {
      setOption1(!option1);
      setOption2(false);
      setOption3(false);
      setOption4(false);
      setNext(true);
    } else if (prop == 2) {
      setOption1(false);
      setOption2(!option2);
      setOption3(false);
      setOption4(false);
      setNext(true);
    } else if (prop == 3) {
      setOption1(false);
      setOption2(false);
      setOption3(!option3);
      setOption4(false);
      setNext(true);
    } else if (prop == 4) {
      setOption1(false);
      setOption2(false);
      setOption3(false);
      setOption4(!option4);
      setNext(true);
    }
  };

  const stepperForm = (e) => {
    e.preventDefault();
    console.log("Form submission of stepper");
    setNext(!next);
  };

  const getPicOfCase = () => {
      if(option1) return img4;
       else if(option2) return img2;
       else if (option3) return img3;
       else if (option4) return img1;
  }
  
  const getTypeOfCase = () => {
      if(option1) return 'Contratos sobresalientes';
       else if(option2) return 'Nepotismo en estructura';
       else if (option3) return 'Corrupción';
       else if (option4) return 'Otros';
  }

  // logic to answer what content would be in each step
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="stepInfo">
            <div
              onClick={() => selectOption(1)}
              className={`option ${option1 && "optionSelected"}`}
            >
              <img src={img4} alt="" />
              <p>Contratos sobresalientes</p>
            </div>
            <div
              className={`option ${option2 && "optionSelected"}`}
              onClick={() => selectOption(2)}
            >
              <img src={img2} alt="" />
              <p>Nepotismo en estructura</p>
            </div>
            <div
              className={`option ${option3 && "optionSelected"}`}
              onClick={() => selectOption(3)}
            >
              <img src={img3} alt="" />
              <p>Corrupción</p>
            </div>
            <div
              className={`option ${option4 && "optionSelected"}`}
              onClick={() => selectOption(4)}
            >
              <img src={img1} alt="" />
              <p>Otros</p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="stepInfoForm">
            <h2>Agrega información</h2>
            <form onSubmit={stepperForm}>
              <div className="form-control">
                <label htmlFor="name">Nombre del caso</label>
                <input
                  type="text"
                  value={caseName}
                  onChange={(e) => setCaseName(e.target.value)}
                  id="name"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="country">Zona geográfica que representa (Ciudad, Estado y País)</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  id="country"
                  placeholder="Toluca, Estado de México, México."
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="textarea">Tipo de enfoque </label>
                <textarea value={textArea}  onChange={(e)=> setTextArea(e.target.value)} name="" id="textarea" cols="30" rows="10" placeholder='Describe brevemente el tipo de caso y mencione los intereses que desea sean supervizados.'></textarea>
              </div>

              <div className="form-control">
                <input type="submit" value="Agregar" />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="stepperFileUpload">
            <h4>
              Link del conjunto de datos (preferible si es un archivo mayor de
              1gb)
            </h4>
            <input type="url" value={linkForFile} onChange={(e)=> setLinkForFile(e.target.value)} />
            <div className="dragAndDrop">
              <Dropzone
                className="drag"
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="*"
              />
            </div>
          </div>
        );
      case 3:
        return (
          
          <div className="uploadCase">
            <div className="uploadCase__left">
              <img src={getPicOfCase()} alt="" />
              {/* {console.log()} */}
            </div>
            <div className="uploadCase__right">
              <p>
                Tipo de caso: <span>{getTypeOfCase()}</span>{" "}
              </p>
              <p>
                Nombre del caso: <span>{caseName}</span>{" "}
              </p>
              <p>
                Zona geográfica: <span>{country}</span>{" "}
              </p>
              <p>
                Tipo de enfoque:{" "}
                <span> {textArea}</span>{" "}
              </p>
              <p>
                Link de archivos: <span>{linkForFile}</span>{" "}
              </p>
              <p>
              contar archivos: <span>({noOfFiles} archivos)</span>{" "}
              </p>
            </div>
          </div>
        );
      case 4:
        return (
          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={openModal}
          >
            <div className={classes.paper}>
              <p className="modal_loading">
                13<span className="modal__loadingPer">%</span>{" "}
              </p>
              <p className="modal_goingUp">Subiendo…</p>
              <p className="modal_filesCount">Enviando 3 archivos</p>
            </div>
          </Modal>
        );
    }
  }

  return (
    <div className="homeFirstCase"> 

      <div className={`${classes1.root} stepper`}>
        <p className="stepLabel">
          La cuenta ha sido validada, crea tu primer caso
        </p>

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <p className="stepLabel">{label}</p>
              </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes1.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep == 0}
                      onClick={handleBack}
                      className={classes1.button}
                      className="stepperBtnBack"  
                    >
                      Atrás
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className="stepperBtn"
                      disabled={activeStep === steps.length - 1 ? next : !next}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Próxima"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes1.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes1.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>

    </div>
  );
};

export default HomeFirstCase;
