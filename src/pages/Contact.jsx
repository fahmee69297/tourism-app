import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We're here to help. Reach out via phone, email, or social media.</p>

      {/* 1. CALL US - Image Right */}
      <section id="call" className="py-3">
        <div className="container col-xxl-8 px-4 py-3">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACUCAMAAACwXqVDAAAAjVBMVEX////S+Pk9yeD///3Y+Pn3/f09yt/R+fjU9/nV+/vo9/ln1uQxyeLs9/mo3udazuBo0OFKzd6J4eq/9vis7vI1zN912ePM+/0oxtuf5+217/NU0+OB3ObI9fbf//9b0d6y5+3C6/Gh4u170t6S2uZAwtQSvtcYv9FWxNQ8wdqb7fGI6vC2+fvH//9w4OuFv95UAAALcUlEQVR4nO1cCZuiuBaVxYSI1RogEBCkNqt7asr+/z/vnRtQAZfC6plXOl/OTCtLAvfkLrk3YE0mFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/dXie+fDGNt91uS94gw1Q8JoPc8jrfhiYr28S9uvwJlNvz2tM+zvkSGjk9qazcXiYmk7fLPT1ID3Onp5fwsUopNHj0+y7Zb4Orc/5z0t3PndHQmv28jhret4LIOn0caFHc2zA2PLpjsItueXDC8S+jiXaq7fnu+FJLH2pryVJ2mRMv07vheZk8hBqUs4XmLru8/S7CYyD501fSJdXktw1Z4+TuwhD3uTxejUeMJez+/DP2VJ/wV4Pai0/yYm8m8DkUf+BMgE9O2u0uPr0RgBl/onRumz+es5qpw+ztX8jKDbsj2i67nJ6RJMOgGMQOA53rgDff/zTeH87oaGr1Cn9E1Y79YN/Q9qvQkTzY1LX0XSf+jTJ4WdQyS3xFOkpUtfkCmz+Y0jzwceV+S3RdEL3hG9eky4c0ZzMiOC/4mFfR3iKUViG8hqafZa3Za8NQnfAk7F5GWdZwkZH4ANNU53TVW9Ml8c0UXakmeCOyOVYw+3SnDwEThDcHMtjmlpWPuJHwPOxgahjtN4UIwRd3pzVHhmtm3DA4Vwki2tpet6sYXhQpxD4f8c6MHu7E8Js7j936J5smzq7XoNmu0PO/jrN96HrGZqMhVVgtBE4IhkXhzo0Z0FHj+AqqiLP86TC1cxegp2Ck09kCRBjAIokyYIq2aNAT3Myqbi5iOmVFxlk7zZrxy4oTBduvugeMd0wJqPq2tSRNqPdhIcbJFfSnPq9IQxEVUqttQwLnyTIa+wxWVbYLlZMqgiMaqkSkWxkCxVmjlMoyaRMjCB+kaKXkmXsODF6N2B1QzPIQsmoS6RlTQOU1wo3XOQYFM4v0MwPGuciuo7mTHQvjc1SK8WYYjILuF9gQ80VcyNSwgp7IUZ9xXQhEk2tFAEy066rVC449ard5kyZ+R8ah5uGdStmFjLTJdKshsAwQJx25yoPegnKUQjKRSspwlDwcR1Nn/dirJ9slKvlBq4QwWFqpbSUIL75EA5oMiZhehj9RBQ/9QZlL9votzDznb8NmYg0IkrN1EZumJJQ+k9YAzjCQn61RpvVHZpOlqLnBo11nfXi/ZAmLsZbXeC/+K8RUWhPc+rw3pQJYwCH9TZkbpiJLW7+O1u/a6Yjn5M2lc65UzOdcGe7zcBNfmRZRgNidJvCFp0qxOHtupBKR8JHs0ip1cc2ztr7iEabPNKqzvwCoxgKESl3UYhLNNmBpmPGaCxNj8JsH8Fv1C8iwF2ZjEUM0XMRZBIzc0C+icmr5Bzyg6Zw/AjajR1SEpdM1cZ8eRCDRorouYTVIjS2FzvEgMZoRaNNgdFguY+vOb54Z8hPGO1eGfx9VMn9Y5ca9AMQkEJyyjQYW2WiMDTJyljqE03wrDOnNjSdHU0qbbKNWqTKDbFHPsxKDNVS6ZTONTQPt8hC1ac5f/eduF5I3OqCb86jnX9x5/3KeXNIUxiakAyxL/MPNFXqk28qij68MdouTUQaFWJvhRlCxC3NWuuUproLNBeNNtN1wOO4qLpz29G8OU+r1uKQBl1HczrMfVqavIiiqKNNpRptyt8azimPaeaglJjW3Gi99GERv8tEOJ/RrEJtTBrG3U84hzThu620Ih9FskPzjDabHAY02YGmUyyUjOCCzmJotIEfIdxsTcxpaYom2SE7u0yTgp6ZRhtzPG+07C3aCSnK62jOhhk7aCrMmO1O0YagEHbl+6TNJGSb7GC0cwpUMKN1CIbZLwTkJo0wNHeOdpEmmsMlWBrz4SrUEU13kbUtaPz/OZq8pVkdaH6UWiehGtCkCVbma1I6/Cfe0dxd8yJNk6AqHVIWeck3AU3TssmURD7qscNXabJtjvB5RFMg0Mpijb6rqqPNcTSpgMR8HG77SdCpsppuxk0OIcK/RhRje98cFgaf0YwRGOvVEU00XMVIIxTtXqlNNEBHNU9FcJEmbaNN00TEC/254X5K09RKYkBzoVhBfqp6vmn04UJwH9KygvvdEDSCJl0p3yhFqXlwft6kOdvVOZm2uSiyp/HaPJEeKNlUJmFF86ZqIu3ONwtRgmWfJk0ZZgFji6QwRxZkJpRApFKWznGkRURjuqlQKD2gBmbhgwbqUqRtkJiRg9pF0dbWjVJPLiicTQ/2NJGWVqKhyavDvFmsczbUJrIJTEOrKPqbct/9hILUFZnhcRYUNNo0h2vuVEXxyEWWuvDunm2dphmSkxj/FEW7xMlkWoYnI9KPJqU9mQUp3NsHzRVpk+bNhqYwNGM/Rrw4orlsahA0b3JfQ5OSvSo4Z7RNhZI5iVQbWHCO4aWkNbhMk+xAOE0BLqpUzxmbyzwTWS7PadM7kboTzRXnfs7cfbIXZJB7R1NsYcGqT1NkKzJkU6jWmYhrosnFEto01yS19Wgy1vimWvAggcfBKZsUyrmQurvuLgw1Ssfogpx2NwmZsBOdNVpv4k2HNFEryq0PZ1NI3WMIT7UUVSh+S9M4544mLI1owk1YWkZRqGlwYkQplFYCydIp34SaUaFUgiw9RFWNe2z9NYKYzAMefEYTrcumbqXlLxFHm4Sib0Cuft43yWq7UTzIES3DJJKMLaHGX7j5e1LD594FJdkwWpFAazoJuIk8RBMWJ9kCpTUtIegPkZXQd5mgYGlqp7bZgSbqT1bG7xtkTpQEKVXnuIJaxMGl1YMDYCMUcE1O2q6VcVNuDANRZ5FkUFbHlHqR/VFM86knduCvmYNIS9NikJlI28g/N/JT2UYLPaKgUIuBgJ8octTGVIlWjyaMpPFkmZhVGTTWtKQiLq4edHSKqoLzfs7EaX1oGIfOLnkJB+Y+hxS4KTLyLNTmLRuZ0FqQ1KyghQK9o4nMz8iP75QOxFJTQsajDYmt5btw9s06UXSN4EPrTSrKEIfj0Hi1SfdG0cTBKN7Nnwc7xL9hgdZZjh4GIScpQ1mneWaWdao8XS3CsjDrjGVawq5EHqahUY6fp6mpKKM0NatAVZmmr8L0qqlXuwybp2HZoQmBcF4uQroHjC2O0sUijOJBqnJem3BQ85ihOyiU+AtnULl01mmhzr7yMYHEcQW/5uaJZ1XFVWWMgle0AVb4NqcCbNCMYQ4ETWM6BdFxCbpGe9Gmw+Ee5jyOCVOW0A0rhKTP1mk76mRuWIjhAxFU8vlZmuBpFrO7DtrvPVT3/wkXtElnZJSRv+0FJw5+3l0i6j/482YUtfh3sTmLyzRRlsGZ2xVszC1U3gTxouucrP/gz+QIt/dI7BOajL0hEnE4187QKZj1S5regz/zgDMILt7zG/CJ0dIpvYqKzEQAWkkqwv6LtwNtmnB7c8o0NC/C5AIyjJIMmWOWlIthATp8KG9ePrg1dX5Kc69XTEdLeSJ1Z8NXLChN4O2j3BuhSy/MjHz2jjKFnXhRnLEjbRqiTR3Eb8N+kUmOfcWAnV7+UuzpBE1v8rA+qrK/EcnoNxMNzRM2K/0BQ6/NFKaz2doPbgPFWJJHGzssp0NFHr6++/3SPWbLK3+YMYR+voeXwP/ktWFjwj9no39a9p34A3WSs+rXeyAJGZ++/NowMof5YnYXv//zJtPXE28Oj+b5NLkLmwUeXt72Yo/l1y5O63v5uQ2Z3EOtjejXWS/av73eD0ta24haRV6TKrjuX4/38VMbAyPp4+Iqo6VFA7b074plUwz/WLK3+Ui4c714eXy4k9hj0PwaHp+zp+fyZTkKL6+P/l2R7MGbPozE1Lur3xv3sPsbDyN+WLZrfYe4Ru7mryTcK7zmz1d8/lcsjM3eL8/RuIc81sLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC4j+B/wHrLBr3X5h+nQAAAABJRU5ErkJggg=="
                className="d-block mx-lg-auto img-fluid"
                alt="Call Us"
                width="700"
                height="500"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">Call Us</h2>
              <p className="lead">
                We're ready to answer your call. Reach us now!
              </p>
              <a
                href="tel:+254786620784"
                className="btn btn-primary btn-lg px-4"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMAIL US - Image Left */}
      <section id="email" className="py-2 bg-light">
        <div className="container col-xxl-8 px-4 py-2">
          <div className="row align-items-center g-5 py-2">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/assets/gmail.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Email Us"
                width="700"
                height="500"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">Email Us</h2>
              <p className="lead">Prefer writing? Send us an email anytime.</p>
              <a
                href="mailto:fadaktravels@gmail.com"
                className="btn btn-outline-primary btn-lg px-4"
              >
                Email Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACEBOOK - Image Right */}
      <section id="facebook" className="py-2">
        <div className="container col-xxl-8 px-4 py-2">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/assets/facebook.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Facebook"
                width="700"
                height="500"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">Facebook</h2>
              <p className="lead">
                Follow us on Facebook for updates and photos!
              </p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4"
              >
                Visit Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSTAGRAM - Image Left */}
      <section id="instagram" className="py-2 bg-light">
        <div className="container col-xxl-8 px-4 py-2">
          <div className="row align-items-center g-5 py-2">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/assets/instagram.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Instagram"
                width="700"
                height="500"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">Instagram</h2>
              <p className="lead">See our latest adventures and stories.</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                View Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIKTOK - Image Right */}
      <section id="tiktok" className="py-2">
        <div className="container col-xxl-8 px-4 py-2">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-2">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="/assets/tiktok.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="TikTok"
                width="700"
                height="500"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">TikTok</h2>
              <p className="lead">
                Check out fun clips and highlights of our trips!
              </p>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg px-4"
              >
                Watch TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
