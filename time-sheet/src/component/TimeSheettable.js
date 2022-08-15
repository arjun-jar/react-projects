import React from "react";

function TimeSheettable() {
  return (
    <div className="table-box">
      <table className="table-content">
        <thead>
          <tr>
            <th>Workflow</th>
            <th>BU</th>
            <th>subwork flow</th>
            <th>downstream Affilate </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FIMS 02 -Equipement Strategy Development & optimiztion:RBi</td>
            <td>EMcc-EquipeStratergy (TMTS/BMR)</td>
            <td>
              FIMS 02 -Equipement Strategy Development & optimiztion(Pipeing)
            </td>
            <td>Singapore Chemicals</td>
          </tr>
          <tr>
            <td>FIMS 02 -Equipement Strategy Development & optimiztion</td>
            <td>EMcc-EquipeStratergy (TMTS/BMR)</td>
            <td>FIMS 02 -Equipement Strategy Development &</td>
            <td>Fawley Chemicals</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimeSheettable;
