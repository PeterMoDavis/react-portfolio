import React, { Component } from "react";

class LearningLog extends Component {
  state = {
    reports: [],
    search: "",
  };

  styles = {
    logContainer: {
      border: " rgb(0, 255, 234) solid 2px",
      backgroundColor: "rgb(0, 255, 234)",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgb(0, 255, 234)",
      width: "60vw",
      height: "30vh",
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
    input: {
      width: "200px",
      borderRadius: "3px",
      border: "none",
      backgroundColor: "rgb(245, 236, 140)",
    },
  };

  getReports = () => {
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
        this.setState({ reports: data });
        console.log(this.state.reports);
      });
  };

  filterReports = (e) => {
    this.setState({ search: e.target.value });
    let regex = RegExp(this.state.search, "gi");
    this.setState({
      reports: this.reports.filter((each) => {
        return each.tools.match(regex);
      }),
    });
  };
  componentDidMount() {
    this.getReports();
    console.log(this.state.reports);
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center my-4">
        <h4 style={this.styles.header} className="mt-1 text-center">
          PROGRESS LOG
        </h4>
        <input
          onChange={this.filterReports}
          type="text"
          style={this.styles.input}
          className="mt-2 mb-4 p-1"
          placeholder="Search"
        />
        <div
          style={this.styles.logContainer}
          className="d-flex flex-column align-items-center"
        >
          <table className="table" style={this.styles.table}>
            <thead>
              <tr>
                <th style={this.styles.tableHeader} scope="col">
                  Date
                </th>
                <th style={this.styles.tableHeader} scope="col">
                  Title
                </th>
                <th style={this.styles.tableHeader} scope="col">
                  Description
                </th>
                <th style={this.styles.tableHeader} scope="col">
                  Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.reports.map((each) => {
                return (
                  <tr style={this.styles.table} key={each.index}>
                    <td style={this.styles.tableBody}>{each.date}</td>
                    <td style={this.styles.tableBody}>{each.title}</td>
                    <td style={this.styles.tableBody}>{each.description}</td>
                    <td style={this.styles.tableBody}>{each.tools}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LearningLog;
