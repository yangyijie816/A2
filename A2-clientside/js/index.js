function search() {
  console.log('search')
}

function clearCheckboxes() {
  console.log('clearCheckboxes')
}

function toDetails(path) {
  window.location.href = './details.html'
}

function templateHtml(data, index) {
  console.log(data)
  //   {
  //     "FUNDRAISER_ID": 4,
  //     "ORGANIZER": "David",
  //     "CAPTION": "Feed the needy",
  //     "ACTIVE": 1,
  //     "TARGET_FUNDING": "4000.00",
  //     "CURRENT_FUNDING": "2500.00",
  //     "CITY": "Chicago",
  //     "CATEGORY_NAME": "Health"
  // }
  return `
		<li class="item" onclick="toDetails()">
          <div class="card">
            <div class="image">
              <img class="img" src="./image/img${index + 1}.png" alt="" />
              <div class="money">
                <p class="text-base">Current:&nbsp;$${data.CURRENT_FUNDING}</p>
                <p class="text-base">Target:&nbsp;$${data.TARGET_FUNDING}</p>
              </div>
            </div>
            <div class="info">
              <h4>${data.CAPTION}</h4>
              <div class="combination">
			  	<p class="address">${data.ORGANIZER}</p>
				<p>|</p>
                <p class="type">${data.CATEGORY_NAME}</p>
				<p>|</p>
                <p class="address">${data.CITY}</p>
				<p>|</p>
                <p class="type">${data.ACTIVE === 1 ? 'Underway' : 'Stop'}</p>
              </div>
              <div class="about">
                What started as Defeat The Mandates, an historic idea to bring together the world's leading COVID-19 dissidents in the early days of the vaccine
                mandates, and Rage Against The War Machine in the wake of the Ukrainian conflict, have become today's Rescue the Republic.
              </div>
            </div>
          </div>
        </li>
	`
}

function getFundraisers() {
  fetch('http://localhost:3000/fundraisers')
    .then(response => response.json())
    .then(res => {
      res.forEach((element, index) => document.getElementById('A').insertAdjacentHTML('beforeend', templateHtml(element, index)))
    })
}

getFundraisers()
