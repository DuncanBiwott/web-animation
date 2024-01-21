// Add your Email.js configuration here
emailjs.init("user_your_user_id");



// Function to calculate BMI
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = weight / ((height / 100) ** 2);
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  } else {
    document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
  }
}

// Function to send email using Email.js
function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send("your_service_id", "your_template_id", {
    from_name: name,
    from_email: email,
    message: message,
  }).then(
    function(response) {
      alert('Email sent successfully!');
    },
    function(error) {
      alert('Failed to send email. Please try again later.');
    }
  );
}

// Scroll-triggered animations
document.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add('active');
    }
  });
});

// Event listeners for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Add click event listeners to each link
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetSectionId = this.getAttribute('href').substring(1);

            // Scroll to the target section
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Event listener for service of beuty parlor
document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('servicesContainer');
    
    // Realistic beauty parlour services data
    const beautyParlourServices = [
        { image: "./img/image1.jpg", title: "Haircut & Styling", description: "Transform your look with our expert hairstylists" },
        { image: "./img/image3.jpg", title: "Manicure & Pedicure", description: "Indulge in a relaxing manicure and pedicure session." },
        { image: "./img/image.jpg", title: "Makeup Services", description: "Get ready for any occasion with our professional makeup services." },
        { image: "./img/image4.jpg", title: "Spa Treatments", description: "Experience ultimate relaxation with our spa treatments." },
        { image: "./img/image5.jpg", title: "Waxing & Hair Removal", description: "Achieve smooth and hair-free skin with our waxing and hair removal services." },
        { image: "./img/image2.jpg", title: "Nail Care", description: "Showcase beautiful nails with our nail care services." },
    ];

    // Loop through the beauty parlour services data and create service elements
    for (const service of beautyParlourServices) {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    }
});

// Scroll-triggered animations for gallery images
document.addEventListener('scroll', function() {
  const gallerySection = document.getElementById('gallery');
  const galleryImages = document.querySelectorAll('.gallery img');

  const position = gallerySection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight && !gallerySection.classList.contains('animated')) {
      fadeInGalleryImages();
      gallerySection.classList.add('animated');
  }

  function fadeInGalleryImages() {
      galleryImages.forEach((image, index) => {
          setTimeout(() => {
              image.style.opacity = 1;
              image.style.transform = 'translateY(0)';
          }, index * 500); // Adjust the delay (in milliseconds) between each image
      });
  }
});


// Add this script to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar a');
  const menuBtn = document.getElementById('menuBtn');
  const navbar = document.querySelector('.navbar');

  menuBtn.addEventListener('click', function () {
    navbar.classList.toggle('show'); // Toggle the 'show' class on the navbar
  });

  navbarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetSectionId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        navbar.classList.remove('show'); // Hide the navbar after clicking a link
      }
    });
  });
});


 // Get the slideshow container element
 const slideshowContainer = document.getElementById('slideshow');

 // Variable to keep track of the current image index
 let currentIndex = 0;

 // Function to change the background image
 function changeImage() {
     // Your array of image URLs
 const imageArray = [
 'img/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg',
 'img/close-up-beautician-painting-woman-s-nails-with-brush-nail-salon.jpg',
 'img/close-up-portrait-beautiful-woman-with-flowers.jpg'
 // Add more image URLs as needed
];


   const imageUrl = `url('${imageArray[currentIndex]}')`;
   slideshowContainer.style.backgroundImage = imageUrl;
   slideshowContainer.style.backgroundRepeat = "no-repeat"
   currentIndex = (currentIndex + 1) % imageArray.length;
 }

 // Initial image change
 changeImage();

 // Set interval for changing images (e.g., every 3 seconds)
 setInterval(changeImage, 3000);