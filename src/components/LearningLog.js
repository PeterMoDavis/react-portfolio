import React from "react";
import { useEffect, useState } from "react";

const LearningLog = () => {
  const [reports, setReports] = useState([]);
  const styles = {
    logContainer: {
      border: " rgb(0, 255, 234) solid 2px",
      backgroundColor: "rgb(0, 255, 234)",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgb(0, 255, 234)",
      width: "60vw",
      height: "20vh",
      overflowY: "auto",
    },
    header: {
      fontWeight: "800",
      letterSpacing: "10px",
      color: "rgb(0, 255, 234)",
    },

    tableHeader: {
      border: "none",
      position: "sticky",
      top: "0",
      zIndex: "1",
      background: "rgb(0, 255, 234)",
    },
    tableBody: {
      border: "1px black solid",
    },
  };

  const getReports = () => {
    fetch("./reports.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReports(data);
      });
  };
  useEffect(() => {
    getReports();
    console.log(reports);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center my-4">
      <h4 style={styles.header} className="mt-1 text-center">
        PROGRESS LOG
      </h4>
      <div
        style={styles.logContainer}
        className="d-flex flex-column align-items-center"
      >
        <table className="table" style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader} scope="col">
                Date
              </th>
              <th style={styles.tableHeader} scope="col">
                Title
              </th>
              <th style={styles.tableHeader} scope="col">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((each) => {
              return (
                <tr style={styles.table}>
                  <td style={styles.tableBody}>{each.date}</td>
                  <td style={styles.tableBody}>{each.title}</td>
                  <td style={styles.tableBody}>{each.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearningLog;
