import React from "react";
import './SearchBar.css'
class SearchBar extends React.Component{
    state = { term: '' }
    onSubmatHandel = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    onChangeHandel = (e) => {
        this.setState({ term: e.target.value });
        console.log(this.state.term);
    }
    render() {
        return (
            <div className="search-bar">
                <form action="" className="frm" onSubmit={this.onSubmatHandel} >
                    <div className="field">
                        <label className="lbl">Video Search</label>
                        <input type="text" className="input" onChange={this.onChangeHandel} value={this.state.term }/>
                    </div>
                </form>
              </div>
        )
    }
}
export default SearchBar;