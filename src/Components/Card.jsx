function Card(props){
	return(
		<a href="#">
			<div className="card">
                <div className="card-content">
                    <img src={props.image} alt="" className='image' />
				    <h1 className="text">{props.title}</h1>
                </div>
			</div>
		</a>
	);
}

export default Card