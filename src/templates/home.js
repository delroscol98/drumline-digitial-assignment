export const homeTemplate = () => /*html*/ `
	<!-- Carousel Start -->
	<div class="container-fluid p-0">
		<div class="owl-carousel header-carousel position-relative">
				<div class="owl-carousel-item position-relative">
						<img class="img-fluid" src="/img/hunter.png" alt="">
						<div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
								style="background: rgba(43, 57, 64, .5);">
								<div class="container">
										<div class="row justify-content-start">
												<div class="col-10 col-lg-8">
														<h1 class="display-3 text-white animated slideInDown mb-4">Find and fix bugs. Earn
																cash!</h1>
														<p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum
																dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd
																rebum sea elitr.</p>
														<a href="/404.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Open a
																bounty</a>
														<a href="/404.html" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Take a
																bounty</a>
												</div>
										</div>
								</div>
						</div>
				</div>
				<div class="owl-carousel-item position-relative">
						<img class="img-fluid" src="/img/bug-1.png" alt="">
						<div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
								style="background: rgba(43, 57, 64, .5);">
								<div class="container">
										<div class="row justify-content-start">
												<div class="col-10 col-lg-8">
														<h1 class="display-3 text-white animated slideInDown mb-4">Start with S tier bugs!
														</h1>
														<p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum
																dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd
																rebum sea elitr.</p>
														<a href="/404.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Highest
																bounty!</a>
												</div>
										</div>
								</div>
						</div>
				</div>
		</div>
	</div>
	<!-- Carousel End -->


	<!-- Search Start -->
	<div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
		<div class="container">
				<div class="row g-2 justify-content-center">
						<div class="col-md-6">
								<div class="row g-2">
										<div class="col-md-6">
												<select class="form-select border-0">
														<option selected>Platform</option>
														<option value="1">Platform 1</option>
														<option value="2">Platform 2</option>
														<option value="3">Platform 3</option>
												</select>
										</div>
										<div class="col-md-6">
												<select class="form-select border-0">
														<option selected>Tool kit</option>
														<option value="1">Tool kit 1</option>
														<option value="2">Tool kit 2</option>
														<option value="3">Tool kit 3</option>
												</select>
										</div>
								</div>
						</div>
						<div class="col-md-2">
								<button class="btn btn-dark border-0 w-100">Search</button>
						</div>
				</div>
		</div>
	</div>
	<!-- Search End -->


	<!-- Jobs Start -->
	<div class="container-xxl py-5">
		<div class="container">
				<h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>

				<ul
					id="category-list"
					hx-get="/api/category-list"
					hx-trigger="load"
					hx-target="#category-list"
					hx-swap="innerHTML"
					class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
				</ul>

				<div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
						<div class="tab-content">

							<div class="tab-pane fade show p-0 active"
								id="bug-list"
								hx-get="/api/bugs-list?filter=none"
								hx-trigger="load"
								hx-swap="innerHTML"
							></div>

							<a
								class="btn btn-primary py-3 px-5"
								href="#bug-list"
								hx-trigger="click"
								hx-target="#bug-list"
								hx-get="/api/bugs-list?filter=none"
								hx-swap="innerHTML"
							>
								Browse More Jobs
							</a>
						</div>
				</div>
		</div>
	</div>
	<!-- Jobs End -->


	<!-- Testimonial Start -->
	<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
		<div class="container">
				<h1 class="text-center mb-5">Our Clients Say!!!</h1>
				<div class="owl-carousel testimonial-carousel">
						<div class="testimonial-item bg-light rounded p-4">
								<i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
								<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
										diam</p>
								<div class="d-flex align-items-center">
										<img class="img-fluid flex-shrink-0 rounded" src="/img/testimonial-1.jpg"
												style="width: 50px; height: 50px;">
										<div class="ps-3">
												<h5 class="mb-1">Client Name</h5>
												<small>Profession</small>
										</div>
								</div>
						</div>
						<div class="testimonial-item bg-light rounded p-4">
								<i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
								<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
										diam</p>
								<div class="d-flex align-items-center">
										<img class="img-fluid flex-shrink-0 rounded" src="/img/testimonial-2.jpg"
												style="width: 50px; height: 50px;">
										<div class="ps-3">
												<h5 class="mb-1">Client Name</h5>
												<small>Profession</small>
										</div>
								</div>
						</div>
						<div class="testimonial-item bg-light rounded p-4">
								<i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
								<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
										diam</p>
								<div class="d-flex align-items-center">
										<img class="img-fluid flex-shrink-0 rounded" src="/img/testimonial-3.jpg"
												style="width: 50px; height: 50px;">
										<div class="ps-3">
												<h5 class="mb-1">Client Name</h5>
												<small>Profession</small>
										</div>
								</div>
						</div>
						<div class="testimonial-item bg-light rounded p-4">
								<i class="fa fa-quote-left fa-2x text-primary mb-3"></i>
								<p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore
										diam</p>
								<div class="d-flex align-items-center">
										<img class="img-fluid flex-shrink-0 rounded" src="/img/testimonial-4.jpg"
												style="width: 50px; height: 50px;">
										<div class="ps-3">
												<h5 class="mb-1">Client Name</h5>
												<small>Profession</small>
										</div>
								</div>
						</div>
				</div>
		</div>
	</div>
	<!-- Testimonial End -->
`;
