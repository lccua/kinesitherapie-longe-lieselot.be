const setup = () => {
  headerFunction();
  window.addEventListener('scroll', handleScroll);
  updateEndDateAndCreateBanner(); // Call the combined function to update the end date and create the banner.
};

const updateEndDateAndCreateBanner = () => {
  const currentDate = new Date();

  // You can provide a way for users to input the start date, e.g., through a form
  // Here, we assume a variable 'startDate' holds the user-inputted start date
  const startDate = new Date("2023-09-02"); // Change this to the user-inputted start date
  const endDate = new Date("2023-09-17"); // Change this to the new end date

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



const headerFunction = () => {
  $(document).ready(function(){
    $('.header').height($(window).height());
  });
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
}

window.addEventListener('load', setup);
