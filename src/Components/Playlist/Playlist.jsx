import React from 'react';
import './Playlist.css';
import {TrackList} from './TrackList/TrackList';


class Playlist extends React.Component{
	constructor(props){
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);

	} // end of constructor

	handleNameChange(event){
		this.props.onNameChange()
		///to be finished see steps 59,60,61
	}
	render(){
		return(
			<div className="Playlist">
				  <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
				  <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval="true"/>
				  <a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
			);
	}
}
export default Playlist;
