import React from "react";
import { Table, Thead, Tbody, Tr, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Table.css";
import { Link, Outlet } from "react-router-dom";

const TableComponent = () => {
  const tableData = [
    {
      name: "Lorem Ipsum Dolor",
      startDate: "10/08/2021",
      endDate: "10/08/2021",
      status: "Entregado",
    },
    {
      name: "Lorem Ipsum Dolor",
      startDate: "10/08/2021",
      endDate: "10/08/2021",
      status: "En progreso",
    },
    {
      name: "Lorem Ipsum Dolor",
      startDate: "10/08/2021",
      endDate: "10/08/2021",
      status: "Discutido",
    },
  ];

  const getIcon = (prop) => {
    console.log(prop);
    switch (prop) {
      case "Entregado":
        return (
          <FiberManualRecordIcon
            style={{ marginLeft: "0px", color: "#7D4BF4" }}
          />
        );
      case "En progreso":
        return (
          <FiberManualRecordIcon
            style={{ marginLeft: "0px", color: "#FFD500" }}
          />
        );
      case "Discutido":
        return (
          <FiberManualRecordIcon
            style={{ marginLeft: "0px", color: "#14B097" }}
          />
        );
      case "Cancaledo":
        return (
          <FiberManualRecordIcon
            style={{ marginLeft: "0px", color: "#D53D47" }}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="tableComponent">
      <Table>
        <Thead>
          <Tr className="tr">
            <Td className="heading">Nombre </Td>
            <Td className="heading">Fecha de creación </Td>
            <Td className="heading">Fecha de entrega </Td>
            <Td className="heading">Estatus </Td>
          </Tr>
        </Thead>

        <Tbody>
          {tableData.map((row, index) => (
            <Tr key={index}>
              <Td className="td-first">{row.name}</Td>
              <Td> {row.startDate}</Td>
              <Td> {row.endDate}</Td>
              <Td className="icon-progress">
                {" "}
                {getIcon(row.status)} {row.status}
              </Td>
              <Td style={{ color: "#14B097" }}>
                {" "}
                <Link to={row.status}>Ver detalle</Link>{" "}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Outlet />
    </div>
  );
};

export default TableComponent;
