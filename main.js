function submitReview() {
  const name = document.getElementById("reviewerName").value.trim();
  const message = document.getElementById("userReview").value.trim();
  const stars = document.getElementById("reviewStars").value;
  const preview = document.getElementById("userPreview");

  if (name && message) {
    const starsDisplay = '⭐'.repeat(parseInt(stars));
    preview.innerHTML = `${starsDisplay} “${message}”<br><small>- ${name}</small>`;
    preview.style.display = "block";
  } else {
    alert("Please fill in both name and review.");
  }
}
