export function References({references}) {
	return(
		<div className="container-section-references">
			<h3>References</h3>
			<div className="container-references">
				{references.map((reference,idx) => (
					<div key={idx} className="reference">
						<h4>{reference.name}</h4>
						<p>Phone: {reference.phone}</p>
						<p>Title: {reference.title}</p>
					</div>
				))}
			</div>
		</div>
	) 
}