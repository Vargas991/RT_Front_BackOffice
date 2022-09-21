import ItemList from './ItemList'

export function MapItemList({ items = [1, 2, 3, 4, 5] }) {
	// const navigate = useNavigate()

	return (
		<>
			<table>
				<tbody>
					<tr className="title-container">
						{items.map((item, indx) => (
							<td className="full-width" key={indx}>
								<ItemList itemId={item} />
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</>
	)
}
