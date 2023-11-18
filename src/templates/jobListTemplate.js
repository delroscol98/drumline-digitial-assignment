export const jobListTemplate = ({ ID, title, description, payout, created }) => /*html*/`
	<div class="job-item p-4 mb-4" data-uuid=${ID}>
		<div class="row g-4">
			<div class="col-sm-12 col-md-8 d-flex align-items-center">
				<img class="flex-shrink-0 img-fluid border rounded" src="/img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
				<div class="text-start ps-4">
					<h5 class="mb-3">${title}</h5>
					<p>${description}</p>
					<span class="text-truncate me-0">
						<i class="far fa-money-bill-alt text-primary me-2"></i>
						$${(payout / 100).toFixed(2)} AUD
					</span>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
				<div class="d-flex mb-3">
					<a class="btn btn-light btn-square me-3" href="/404.html">
						<i class="far fa-heart text-primary"></i>
					</a>
					<a class="btn btn-primary" href="/404.html">
						Apply Now
					</a>
				</div>
				<small class="text-truncate">
					<i class="far fa-calendar-alt text-primary me-2"></i>
					Date posted:
					${
						new Date(Date.parse(created))
							.toLocaleDateString(
								'en-AU',
								{
									day: 'numeric',
									month: 'short',
									year: 'numeric',
								}
							)
					}
				</small>
			</div>
		</div>
	</div>
`