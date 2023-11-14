document.addEventListener('DOMContentLoaded', function () {
  // Fetch and display data for the Overview Page
  // You may use AJAX, fetch, or other methods to get data dynamically
  const data = {
    totalSales: 100000,
    productsSold: 500,
    newCustomers: 50,
    salesGrowth: '10%',
    // Additional data as needed
  };

  // Update the HTML content with dynamic data
  document.getElementById('overview-section').innerHTML = `
    <h2>Overview</h2>
    <div>Total Sales: ${data.totalSales}</div>
    <div>Products Sold: ${data.productsSold}</div>
    <div>New Customers: ${data.newCustomers}</div>
    <div>Sales Growth: ${data.salesGrowth}</div>
    <!-- Add other elements as needed -->
  `;
});
