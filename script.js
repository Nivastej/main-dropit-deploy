document.addEventListener('DOMContentLoaded', function () {
  // Store timing logic
  const header = document.querySelector('.header');
  const now = new Date();
  const currentHour = now.getHours();
  // Store timings: 6:00 AM to 12:00 AM (midnight)
  if (currentHour < 6 || currentHour >= 24) {
    header.style.backgroundColor = '#800080';
  }

  // Add to cart logic
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productId = button.dataset.productId;
      // Handle the add to cart logic for the specific product
      console.log(`Product ID: ${productId} added to cart`);
      // Redirect to cart page
      window.location.href = 'cart.html';
    });
  });

  // Rating stars logic
  const ratings = document.querySelectorAll('.rating');
  ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', function () {
        const value = this.dataset.value;
        const productId = rating.dataset.productId;
        // Handle the rating logic for the specific product
        console.log(`Product ID: ${productId}, Rating: ${value}`);
        // Update the UI based on rating (optional)
        stars.forEach(s => {
          s.style.color = s.dataset.value <= value ? '#f5c518' : '#ccc';
        });
      });
    });
  });

  // Sidebar selection logic
  const listItems = document.querySelectorAll('.sidebar ul li');
  listItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remove the 'selected' class from all items
      listItems.forEach(li => li.classList.remove('selected'));
      // Add the 'selected' class to the clicked item
      this.classList.add('selected');
    });
  });

  // Product sorting logic
  const productsContainer = document.querySelector('.products');
  const products = Array.from(document.querySelectorAll('.products .product'));
  const resultsCount = document.getElementById('results-count');
  const sortOptions = document.getElementById('sort-options');
  const totalResults = products.length;
  const displayResults = totalResults > 1000000 ? 1000000000 : totalResults;
  resultsCount.textContent = `Showing 1-${displayResults} of ${totalResults} results`;
  sortOptions.addEventListener('change', function() {
    const selectedOption = this.value;
    let sortedProducts = [...products]; // Clone the original array
    switch (selectedOption) {
      case 'price-asc':
        sortedProducts.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
        break;
      case 'rating-asc':
        sortedProducts.sort((a, b) => parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating));
        break;
      case 'rating-desc':
        sortedProducts.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
        break;
      case 'alpha-asc':
        sortedProducts.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
        break;
      case 'alpha-desc':
        sortedProducts.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
        break;
      default:
        sortedProducts = [...products]; // Default order
    }
    // Clear the current product list and append the sorted products
    productsContainer.innerHTML = '';
    sortedProducts.forEach(product => productsContainer.appendChild(product));
  });
});
