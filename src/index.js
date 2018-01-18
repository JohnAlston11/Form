import React from "react";
import { render } from "react-dom";

class Select extends React.Component {
  render() {
    return(
      <div>...</div>
    )
    
  }
}

const InlineRadioGroup = (props) => {
  const { } = props;

  return (
    <p>hi...</p>
  )

}

class App extends React.Component {
  constructor() {
    super();

    this.likeRadioOptions = ["1", "2", "3", "4", "5"];
    this.isCatValues = ['',"yes", "no", "maybe"];

    this.state = {
      email: "",
      confirmEmail: "",
      likesCatsInput: "",
      isCatSelect: "",
      submitted: false
    };
  }

  validateInput = () => {
    const {
      email,
      confirmEmail,
      isCatSelect,
      likesCatsInput,
      submitted
    } = this.state;
    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    return (emailValid !== null 
    && email === confirmEmail
    && likesCatsInput !== "") 
    ? false 
    : true ;
  };
  

  handleInputChange = e => {
  this.setState({email:e.target.value})

  };
  handleInputChange2 = e => {
    this.setState({ confirmEmail:e.target.value })

  };

  handleRadioChange = e => {
    this.setState({likesCatsInput: e.target.value})
  };

  handleSubmit = () => {
    alert("You chose " + this.state.email);
  };



  
  render() {
    const {
      email,
      confirmEmail,
      likesCatsInput,
      isCatSelect,
      submitted
    } = this.state;
    console.log(likesCatsInput);
    const validEmail = this.validateInput() ?
      (<span className="invalid"> {" "}Emails is invalid, or do not match!{" "}</span>)
      :'';
    return (
      <div>
        <h1>Fill this form out</h1>
        
          <form onSubmit={this.handleSubmit}>
          Email: 
          <br></br><input
              type="text"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
            /><br />
            <br/>
            
          Confirm Email:
          <br></br><input
              type="text"
              placeholder="Confirm email"
              value={this.state.confirmEmail}
              onChange={this.handleInputChange2}
            />
            <p>From 1-5 how much do you like cats? </p>
            {this.likeRadioOptions.map(rate =>
              <label>{rate}
              <input onChange={this.handleRadioChange} name='rate' type='radio' value={rate} 
              />
              </label>
            )}

            <p>Are you a cat? 
            <br></br>
            <select>
              {this.isCatValues.map(el => <option value={el}> {el} </option>)}
            </select>
            </p>
            <br></br>
            <button disabled={this.validateInput()}>Sign up</button>
            <br/>
            <br/>
            {validEmail}
          </form>
      
      </div>
    );
  }
}

render(<App/>, document.getElementById("root"));

// confirmEmail: "",
//   likesCatsInput: "",
//     isCatSelect: "",
//       submitted: false

// <select />
//   <InlineRadioGroup />


//     #82         onChange={this.handleInputChange}
