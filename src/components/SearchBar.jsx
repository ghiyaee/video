import React from "react";
import './SearchBar.css'
import './imag/yout.png'
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
              <img src={require('./imag/yout.png')} alt={"photo"} className='logo' />
              <div className="field">
                <label className="lbl">Video Search With Api YouTube</label>
                <input
                  type="text"
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