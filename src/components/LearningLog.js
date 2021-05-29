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
      color: " black",
    },
    cursor: {
      height: "30px",
      width: "20px",
      backgroundColor: "black",
      borderRadius: "2px",
    },
    p: {
      color: "black",
    },
    table: {
      border: "1px black solid",
    },
  };

  const getReports = () => {
    fetch("../reports.json", {
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
    <div className="d-flex justify-content-center my-4">
      <div
        style={styles.logContainer}
        className="d-flex flex-column align-items-center p-2"
      >
        <h4 style={styles.header} className="mt-1 text-center">
          PROGRESS LOG
        </h4>
        <table className="table" style={styles.table}>
          <thead>
            <tr>
              <th style={styles.table} scope="col">
                Date
              </th>
              <th style={styles.table} scope="col">
                Title
              </th>
              <th style={styles.table} scope="col">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((each) => {
              return (
                <tr>
                  <td>{each.date}</td>
                  <td>{each.title}</td>
                  <td>{each.description}</td>
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
