import { Component  } from "react";

class Title extends Component {
    constructor(props){
        super(props);
    }

    render() {
      let title =  this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1);
    
      return (
         <h1 className="title">{title} </h1>
      )
    }
}

export default Title;