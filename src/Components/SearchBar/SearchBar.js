import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}//end of constructor

	search(){
		this.props.onSearch(this.state.search);
	}//end of search

	handleTermChange(event){
		 this.setState({search: event.target.value});
	} //end of handleTermChange

	render(){
		return(
			<div className="SearchBar">
	  			<input
						placeholder="Enter A Song, Album, or Artist"
						onChange={this.handleTermChange} />
					<a onClick={this.search}>SEARCH</a>
			</div>
			)
	}
}
export default SearchBar;
