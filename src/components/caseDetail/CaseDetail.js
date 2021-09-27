import "./CaseDetail.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import "react-dropzone-uploader/dist/styles.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import rightArrow from "../../assets/appAssets/Assets/arrowRight.png";
import expanderSvg from "../../assets/appAssets/Assets/Expandir.png";
import camera from "../../assets/appAssets/Assets/Reunion.png";
import { useParams } from 'react-router-dom'


// heading for each step in stepper
function getSteps() {
    return [
      "Dataset recibido",
      "Aceptado",
      "En progreso",
      "Entregado",
      "Discutido",
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
  


const CaseDetail = () => {
  const tableData = [
    {name:'Lorem Ipsum Dolor',
     startDate : '10/08/2021',
     endDate :'10/08/2021',
     status : 'Entregado'
    },
    {name:'Lorem Ipsum Dolor',
     startDate : '10/08/2021',
     endDate :'10/08/2021',
     status : 'En progreso'
    },
    {name:'Lorem Ipsum Dolor',
     startDate : '10/08/2021',
     endDate :'10/08/2021',
     status : 'Discutido'
    },
]

    const classes1 = useStyles1();
    const {slug} = useParams();
    const steps = getSteps();
  
    
    let productNew  = tableData.find(product => product.status == slug)
  
    
    // logic to answer what content would be in each step
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="stepInfo">
              <h3>This is first case</h3>
          </div>
        );
      case 1:
        return (
          <div className="stepInfoForm">
              <h3>This is Great thing todo</h3>
          </div>
        );
      case 3:
        return (
          <div className="stepperExpand">
            <div className="stepperHeader">
               Resultado de caso: Lorem Ipsum Dolor
               <img width='30' src={rightArrow} alt="" />
            </div>
            <div className="stepperMain">
                <img width='60' src={expanderSvg} alt="" />
                <p>Expandir para ver resultados</p>
            </div>
            <div className="stepperExpandFooter">
                <img  src={camera} alt="" />
                <p>Establecer reunión</p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="stepperExpand">
            <div className="stepperHeader">
               Resultado de caso: Lorem Ipsum Dolor
               <img width='30' src={rightArrow} alt="" />
            </div>
            <div className="stepperMain">
                <img width='60' src={expanderSvg} alt="" />
                <p>Expandir para ver resultados</p>
            </div>
            <div className="stepperExpandFooter">
                <img  src={camera} alt="" />
                <p>Establecer reunión</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="progress">
              <p>Bitácora de progreso</p>
              <h6>Actividad / Estatus</h6>
                <div className="progress-row">
                    <p>Extracción de Redes Sociales</p>
                    <h6>Terminado</h6>
                </div>
                <div className="progress-row">
                    <p>Enriquecimiento con Datos Gubernamentales</p>
                    <h6>Terminado</h6>
                </div>
                <div className="progress-row">
                    <p>Observaciones de Actividades Estatles</p>
                    <h6 className="blue">Terminado</h6>
                </div>
                <div className="progress-row">
                    <p>Generación de Grafo y Análisis </p>
                    <h6>Terminado</h6>
                </div>
          </div>
        );
    }
  }

  return (
    <div className="caseDetail">
      <h6 className="caseDetail_heading">Lorem Ipsum Dolor</h6>
      <div className="caseDetail_progress">
        <div><FiberManualRecordIcon style={{marginLeft:'0px', color:'#FFD500'}}/></div>
         <p>En progreso</p>
      </div>
      <div className="paragraph">
        {" "}
        <p>Tipo de caso: Lorem ipsum </p>
        <p>Zona geográfica: Eiusmod tempor </p>
        <p>Tipo de enfoque: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Link de archivos: https://www.lipsum.com/ </p>
        <p>Peso de archivo: 1.2 gb (3 archivos)</p>
        <p>Fecha de creación: 10/08/2021 </p>
        <p>Fecha de entrega: Próximamente </p>
      </div>

      <div className={`${classes1.root} stepper`}>
        <p className="stepLabel">
          La cuenta ha sido validada, crea tu primer caso
        </p>

        <Stepper activeStep={2} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                 <p className="stepLabel">{label}</p>
              </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default CaseDetail;
