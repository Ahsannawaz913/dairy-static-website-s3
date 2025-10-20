document.getElementById("contact-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting PureMilk Dairy!");
  this.reset();
});
