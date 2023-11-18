export const listCategoryFilter = ({ category }) => /*html*/`
	<li class="nav-item">
		<a
			class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
			data-bs-toggle="pill"
			href="#${category}"
			hx-trigger="click"
			hx-target="#bug-list"
			hx-get="/api/bugs-list?filter=${category}"
			hx-swap="innerHTML"
		>
				<h6 class="mt-n1 mb-0">${category}</h6>
		</a>
	</li>
`