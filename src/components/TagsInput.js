import React, { Component }  from 'react';
import {useState, useEffect} from 'react'
import CountryList from './CountryList'

function TagsInput() {
	const [tags, setTags]=useState(["t1","t2"]);
	const addTags=(events)=>{
			if(events.key=="Enter"){
				
				setTags([...tags,events.target.value])
				events.target.value='';
			}
	}
	const removeTags=(indexToRemove)=>{
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	

	}
	return (
		<div className='TagsInput'>
			<ul>
				{
					tags.map((tag, index)=>
					<li key={index}>
					<span>
						{tag}
					</span>
					<i className='material-icons' onClick={() => removeTags(index)}>closed</i> 
				</li>
					)
				}
				
				<input type='text' placeholder='enter the country name' onKeyUp={addTags}/>
			</ul>
		</div>
	)
}

export default TagsInput


