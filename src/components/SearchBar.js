import React from "react";

class SearchBar extends React.Component{

    state = {
        term : ""
    }

    onFormSubmit = (e) =>{
        e.preventDefault();

        this.props.onSubmit(this.state.term)
    }
    
    render(){
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12">
                                <div className = "form-group">  
                                    <label htmlFor = "searchbar"><h2>Image Search</h2></label>
                                    <input type = "text" className = "form-control" value = {this.state.term} onChange = {(e) => {this.setState({term : e.target.value})}}/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
        
    }
    
};

export default SearchBar;