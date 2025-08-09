import React from "react";
import "./Home.css";

function Home() {
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

      {/* Image Grid Section */}
      <div className="image-grid-section">
        <h2 className="section-title">Explore Kenya</h2>
        <div className="image-grid">
          <img src="../assets/home-image1 (1).jpeg" alt="Maasai Mara" />
          <img src="../assets/home-image1 (2).jpeg" alt="Diani Beach" />
          <img src="../assets/home-image1 (3).jpeg" alt="Mount Kenya" />
          <img src="../assets/home-image1 (4).jpeg" alt="Amboseli" />
          <img src="../assets/home-image1 (5).jpeg" alt="Maasai Mara" />
          <img src="../assets/home-image1 (6).jpeg" alt="Diani Beach" />
          <img src="../assets/home-image1 (7).jpeg" alt="Mount Kenya" />
          <img src="../assets/home-image1 (8).jpeg" alt="Amboseli" />
          <img src="../assets/home-image1 (9).jpeg" alt="Maasai Mara" />
          <img src="../assets/home-image1 (10).jpeg" alt="Diani Beach" />
          <img src="../assets/home-image1 (11).jpeg" alt="Mount Kenya" />
          <img src="../assets/home-image1 (12).jpeg" alt="Amboseli" />
        </div>
      </div>
      <hr />
      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>

        {/* Testimonial 1 */}
        <div className="testimonial">
          <p>
            "Fadak Travels gave us the most amazing safari experience in Kenya!
            Highly professional and friendly service."
          </p>
          <h4>- Sarah M., UK</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial">
          <p>
            "Our beach vacation to Diani was perfectly organized. The team went
            above and beyond."
          </p>
          <h4>- Ahmed A., UAE</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial">
          <p>
            "Our trip to Diani was a dream come true! The team at Fadak Travels
            organized everything perfectly, from the accommodation to the
            amazing water sports. We can't wait to book our next adventure with
            them."
          </p>
          <h4>- John & Lisa P., Germany</h4>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial">
          <p>
            "I've always wanted to see the Maasai Mara migration, and Fadak
            Travels made it an unforgettable reality. The guides were incredibly
            knowledgeable and passionate, and we saw more wildlife than we ever
            imagined. Truly a once-in-a-lifetime experience."
          </p>
          <h4>- Emily R., USA</h4>
        </div>

        {/* Testimonial 5 */}
        <div className="testimonial">
          <p>
            "From the beautiful landscapes of Amboseli to the rich culture of
            Lamu, our tour was seamless and incredibly well-planned. Fadak
            Travels exceeded all our expectations with their attention to detail
            and excellent customer service."
          </p>
          <h4>- The Al-Fahad Family, UAE</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
