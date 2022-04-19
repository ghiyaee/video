import React from "react";
import './SearchBar.css'
class SearchBar extends React.Component{
    state = { word: ''  } 
    onSubmatHandel = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.word)
    }
    onChangeHandel = (e) => {
        this.setState({ word: e.target.value })
    }
    render() {
        return (
          <div className="search-bar">
            <form action="" className="frm" onSubmit={this.onSubmatHandel}>
              <i className="youtube icon massive red"></i>
              <div className="field">
                <label className="lbl">Video Search With Api YouTube</label>
                <input
                  type="text"
                  placeholder="Search"
                  className="input"
                  onChange={this.onChangeHandel}
                  value={this.state.word}
                />
              </div>
            </form>
          </div>
        );
    }
}
export default SearchBar;