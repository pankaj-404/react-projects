import React, { Component } from "react"
export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        // console.log(this.props.person)
        const heading = {
            fontSize: 40,
            fontFamily: "onanimationstart",
            fontWeight: 900,
            color: "wheat",
            textAlign: "center"
        }
        const inputBtn = {
            padding: "10px 20px",
            backgroundColor: "#086972",
            fontSize: 20,
            borderRadius: 5,
            fontWeight: "bolder",
            color: "wheat",
            margin: "5% 0 0 30%"
        }
        return (
            <div>
                <div style={heading}>Employee Data Form</div>
                <form onSubmit={e => this.props.submitForm(e)} >
                    <label>Name :</label>
                    <input type="text" name={"name"} onChange={this.props.handleFormData} value={this.props.person[0].name} />
                    <br />
                    <label>Age :</label>
                    <input type="number" name={"age"} onChange={this.props.handleFormData} value={this.props.person[0].age} />
                    <br />
                    <label>Address :</label>
                    <input type="text" name={"address"} onChange={this.props.handleFormData} style={{ width: "55%" }} value={this.props.person[0].address} />
                    <br />
                    <label>Department :</label>
                    <select name="department" style={{ width: "50%", textAlign: "center" }} onChange={this.props.handleFormData} value={this.props.department}>
                        <option>Select</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Devloper">Devloper</option>
                        <option value="Hr">HR</option>
                    </select>
                    <br />
                    <label>Salary :</label>
                    <input type="number" name={"salary"} onChange={this.props.handleFormData} value={this.props.person[0].salary} />
                    <br />
                    <input type="submit" value={"Submit"} style={inputBtn} />
                </form>
            </div>
        )
    }
}