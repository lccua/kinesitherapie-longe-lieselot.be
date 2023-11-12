const setup = () => {
  window.addEventListener('scroll', handleScroll);
  
  updateEndDateAndCreateBanner(); // Call the combined function to update the end date and create the banner.
}



const updateEndDateAndCreateBanner = () => {

  const currentDate = new Date();

  // Retrieve the start and end dates from local storage or use default values
  const savedStartDate = localStorage.getItem('startDate');
  const savedEndDate = localStorage.getItem('endDate');

  const startDateInput = document.getElementById("startDateInput");
  const endDateInput = document.getElementById("endDateInput");

  // Check if the elements exist before accessing their values
  const startDateString = savedStartDate;
  const endDateString = savedEndDate;

  // Convert the date strings to Date objects
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);


  // Function to compare only the date parts of two dates
  const areDatesEqual = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  
  if (currentDate < endDate || areDatesEqual(currentDate, endDate)) {

    
        // The current date is before the start date or the same as the end date, so create the vakantieBanner section
        const vakantieBanner = document.createElement("section");
        vakantieBanner.id = "vakantieBanner";

        // Create the inner HTML for the vakantieBanner
        vakantieBanner.innerHTML = `
          <div class="row text-light pt-2" style="background-color: #1ABC9C;">
            <div class="col-md-12 pl-2">
              <p class="outOffOffice">Momenteel ben ik op verlof <span id="startDate" style="color: #0064A7"> van ${formatDate(startDate)} tot en met ${formatDate(endDate)}</span>. Gedurende deze periode zal ik niet beschikbaar zijn.</p>
            </div>
          </div>
        `;

        // Insert the vakantieBanner at the very top of the page
        const body = document.body;
        const firstChild = body.firstChild;
        body.insertBefore(vakantieBanner, firstChild);
  } 
  
  else {
    // The end date has passed, so remove the banner if it exists
    const vakantieBanner = document.getElementById("vakantieBanner");
    if (vakantieBanner) {
      vakantieBanner.remove();
    }
  }

}

const handleScroll = () => {
  let toTop = document.querySelector(".toTop");
  if (window.pageYOffset > 100) {
    toTop.classList.add("active_toTop");
  } else {
    toTop.classList.remove("active_toTop");
  }
};

// Helper function to format a date as "dd/mm"
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are 0-indexed
  return `${day}/${month}`;
};

window.addEventListener('load', setup)
