import React, {Component} from "react";

export class ToDoApp extends Component{
    constructor() {
        super();
        this.state={
            nameWork:'',
            nameWorkList:[]
        }
    }
    render() {
        return (
            <>
                <h1 style={{textAlign:"center"}}>TO DO LIST</h1>
                <div  className="d-flex justify-content-center">
                    <input value={this.state.nameWork}
                           onChange={(event)=>this.handleInputName(event.target.value)}/>
                    <button onClick={()=>this.addNameWork()}>Add</button>
                </div>
                <ul>
                    {
                        this.state.nameWorkList.map((nameWork,id)=>(
                            <li key={id}>{nameWork}</li>
                        ))
                    }
                </ul>
                </>
        );
    }

    handleInputName(value) {
        this.setState({
            nameWork:value
        });
    }

    addNameWork() {
        let newNameWork=this.state.nameWork;
        this.setState({
            nameWork:'',
            nameWorkList:[newNameWork,...this.state.nameWorkList]
        })
    }
}