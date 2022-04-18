import React from "react";
import './SearchBar.css'
class SearchBar extends React.Component{
    state = { term: ''  }
    
    onSubmatHandel = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    onChangeHandel = (e) => {
        this.setState({ term: e.target.value })
    }
    render() {
        return (
          <div className="search-bar">
            <form action="" className="frm" onSubmit={this.onSubmatHandel}>
              <i class="youtube icon massive red"></i>
              <div className="field">
                <label className="lbl">Video Search With Api YouTube</label>
                <input
                  type="text"
                  placeholder="Search"
                  className="input"
                  onChange={this.onChangeHandel}
                  value={this.state.term}
                />
              </div>
            </form>
          </div>
        );
    }
}
export default SearchBar;