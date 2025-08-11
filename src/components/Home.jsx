import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const images = [
    { src: "../assets/home-image1 (1).jpeg", alt: "Maasai Mara" },
    { src: "../assets/home-image1 (2).jpeg", alt: "Diani Beach" },
    { src: "../assets/home-image1 (3).jpeg", alt: "Mount Kenya" },
    { src: "../assets/home-image1 (4).jpeg", alt: "Amboseli" },
    { src: "../assets/home-image1 (5).jpeg", alt: "Maasai Mara" },
    { src: "../assets/home-image1 (6).jpeg", alt: "Diani Beach" },
    { src: "../assets/home-image1 (7).jpeg", alt: "Mount Kenya" },
    { src: "../assets/home-image1 (8).jpeg", alt: "Amboseli" },
    { src: "../assets/home-image1 (9).jpeg", alt: "Maasai Mara" },
    { src: "../assets/home-image1 (10).jpeg", alt: "Diani Beach" },
    { src: "../assets/home-image1 (11).jpeg", alt: "Mount Kenya" },
    { src: "../assets/home-image1 (12).jpeg", alt: "Amboseli" },
  ];

  const whyChooseUs = [
    {
      title: "Reliable Travel Agency",
      desc: "We pride ourselves on delivering consistent, dependable service from the moment you first reach out to us until long after your trip is complete. Our dedicated team is committed to understanding your needs, answering your questions promptly, and ensuring every detail is handled with care. From arranging smooth airport transfers to securing comfortable accommodations and managing last-minute changes, we make sure everything runs seamlessly. You can trust us to be there at every stage of your journey, providing peace of mind so you can focus entirely on enjoying your adventure.",
    },
    {
      title: "Local Expertise",
      desc: "Our guides and planners are not just travel professionals — they are proud locals who have spent years exploring every corner of Kenya. Their deep knowledge allows us to take you beyond the typical tourist attractions and introduce you to hidden gems, cultural traditions, and authentic flavors that most visitors miss. Whether it’s watching the sunrise over the Maasai Mara, sharing stories around a campfire with local communities, or sampling street food in Nairobi, our insider perspective ensures you experience Kenya in its most genuine and unforgettable form.",
    },
    {
      title: "Tailor-Made Tours",
      desc: "We believe that no two travelers are the same, which is why every tour we design is created specifically for you. We take the time to understand your preferences — from your ideal pace of travel to the activities you enjoy most — and then craft an itinerary that matches your style perfectly. Whether you dream of a thrilling safari, a deep dive into Kenya’s cultural heritage, a luxurious beach escape, or a blend of all three, we make it happen. Our flexibility ensures your trip is exactly what you envisioned, down to the smallest detail.",
    },
    {
      title: "Responsible Tourism",
      desc: "Travel should be as enriching for the destination as it is for the traveler. That’s why we work closely with local communities, conservation programs, and ethical suppliers to ensure your trip directly benefits people and nature. By supporting local businesses, preserving wildlife habitats, and promoting cultural heritage, we make sure your journey leaves a positive footprint. Whether it’s staying in eco-friendly lodges, participating in conservation projects, or engaging with community artisans, you’ll know your adventure is contributing to something greater.",
    },
    {
      title: "Competitive Prices",
      desc: "We believe unforgettable travel experiences shouldn’t come with an overwhelming price tag. Our goal is to offer exceptional value by combining fair pricing with top-quality services, accommodations, and experiences. Through strong local partnerships and efficient planning, we are able to secure the best deals without compromising comfort or authenticity. This means you enjoy premium travel moments — from luxury stays to unique excursions — while knowing you’re getting the most out of your budget.",
    },
    {
      title: "Best Tour Packages",
      desc: "Our tour packages are designed to cater to a wide range of travelers, whether you’re seeking pure luxury, thrilling adventure, cultural immersion, or a mix of everything. Each package is carefully curated to include iconic sights as well as lesser-known treasures, ensuring you get a well-rounded and deeply memorable experience. From the sweeping plains of the savannah to the turquoise waters of the coast, we plan every step with precision, so all you need to do is relax and enjoy the journey.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Fadak Travels gave us the most amazing safari experience in Kenya! Highly professional and friendly service.",
      author: "- Sarah M., UK",
    },
    {
      quote:
        "Our beach vacation to Diani was perfectly organized. The team went above and beyond.",
      author: "- Ahmed A., UAE",
    },
    {
      quote:
        "Our trip to Diani was a dream come true! The team organized everything perfectly. We can't wait for our next adventure.",
      author: "- John & Lisa P., Germany",
    },
    {
      quote:
        "I've always wanted to see the Maasai Mara migration, and Fadak Travels made it unforgettable. Knowledgeable guides, amazing wildlife.",
      author: "- Emily R., USA",
    },
    {
      quote:
        "From Amboseli to Lamu, our tour was seamless and exceeded expectations. Attention to detail was excellent.",
      author: "- The Al-Fahad Family, UAE",
    },
  ];

  const imageSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  const whyChooseUsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="home">
      {/* Welcome Section */}
      <div className="welcome-container">
        <p className="welcome-header">
          Welcome to Fadak Travels – Your Gateway to Unforgettable Kenyan
          Adventures!
        </p>
        <p className="welcome-main-msg">
          At Fadak Travels, we are thrilled to guide you on an extraordinary
          journey through Kenya’s breathtaking landscapes and rich cultural
          heritage. Whether you're looking to explore the majestic Maasai Mara,
          home to the famous Wildebeest Migration, or visit the pristine beaches
          of Diani and Watamu, our expert team is dedicated to crafting the
          perfect experience for you. Discover the awe-inspiring beauty of Mount
          Kenya, venture into the heart of Amboseli National Park with its
          stunning views of Kilimanjaro, or enjoy a safari through the diverse
          wildlife of Tsavo National Park. Our tours also take you to the
          vibrant Nairobi National Park and the rich history of Lamu Island.
          Join us for a once-in-a-lifetime experience and let us help you create
          memories that will last forever. Whether it's a wildlife adventure, a
          cultural immersion, or a relaxing beach getaway, we are here to make
          your dream Kenyan holiday a reality. Welcome aboard, and let the
          adventure begin!
        </p>
        <hr />
      </div>

      {/* Image Carousel Section */}
      <div className="image-grid-section">
        <h2 className="section-title">Explore Kenya</h2>
        <div className="slider-wrapper">
          <Slider {...imageSettings}>
            {images.map((img, index) => (
              <div key={index} className="carousel-slide">
                <img src={img.src} alt={img.alt} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Why Choose Us Carousel */}
      <div className="why-choose-us-section">
        <h2 className="section-title">Why Travel With Fadak</h2>
        <div className="slider-wrapper">
          <Slider {...whyChooseUsSettings}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-slide">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="slider-wrapper">
          <Slider {...testimonialSettings}>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial">
                <p>"{t.quote}"</p>
                <h4>{t.author}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
