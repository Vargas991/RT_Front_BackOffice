export function InfoUser({user}) {
	return <div className="surveyed-data">
		<h2>{user.name}</h2>
		<p>Phone: {user.phone}</p>
		<p>Email: {user.mail}</p>
	</div>
}
