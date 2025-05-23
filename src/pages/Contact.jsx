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
      <section id="call" className="py-5">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="data:image/png;base64,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"
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
      <section id="email" className="py-5 bg-light">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="data:image/jpeg;base64,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"
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
      <section id="facebook" className="py-5">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBCAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQIDBAEHBv/EAEAQAAICAQMCAwQFCAgHAAAAAAABAgMEBRExBiESQVEHE2GhIjVxgbIkJTJSc3SRwRQjQkNictHhFRdTY5LC8P/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAzEQEAAgECAwUGBgIDAQAAAAAAAQIDBBEFEjEhM0FRcRMyYYGh0VKRscHh8CLxFSM0FP/aAAwDAQACEQMRAD8AWHvnkQAAAABwAdQBOIgsggNqqXBXKTdRHgovKypnjx4M15XVMKoGa0rohrrgVTKyIXxgVzKey2MCMylsmqyO57Je7Dc9kXWPmLZBwHuWyqcCcSjMM9kOxZEoTDJdEtrKuYLsiJopKi0Ft8eTVWVMsNq7l9UJZpdmSJWyUEgwJxgAAAAAAwAAAAAAAJAbqQglFAF9aFJtdMSqyUGFEOOxntK2INMavsZb2X1gxqrM1pXRDVXWVTK2IaYQK5lOIWxqITZLlWKsjzJbJe7FuNkXWg3GyuVZOLFMKZ1k4lCYZ7KyyJVzDHdX8C6sq5guyYGmkqLQWZEOTTSVNoL7o9zTWVUsk49yxFS1sMkGhhwCcA3dgA2AOMCAAAAAdA3UKQmgCyCEa+uO5GZNtogUWlODPGhwZrytrBrj19kZLy0VgwqrM9pXxDZXWVTK2IaIVlc2TiF0YFc2TiE1DvwLc9knXsLmPZFw+A+YuVCVfwHElMKbKyyJQ2ZrKyyLITDHdWXVsqmC/Jr7M0UsotBTkw7vsa6SotBdfA01sptDFavQuiUGaSJkgwJHYe4cAAA4ADAACAAAHQDqEacRGurQja6YldpODDHhwZ7StiDTGr7Iy3lfWDXHr7Iy3lorBhVAzWldENdcCqZWxDRFJd5bKK5bKpt27J7bdpJqfV+jac5Qd8si2P8Ad0R8Xz4+Zsw8O1OXt22j4s+TWYadm+8/AhyPaNNv8l06KX/dsbfyNteC+N7/AEZZ4n+GrL/zD1HfthYu3pvIu/4bDt70oTxLJ+GGrH9ost/ynTU/V1WbP5lVuC/hv+adeJfir+R9pvV+j6i4w9+6LZcQvXh+fD/iYc3D9RhjeY3j4f3dqx6zFknaJ2k62U12e+/GxkiWiYUWVlkShNWS6BdWVUwXZNZopKi0FWVXyaqSotBXkR5NVJUWL7ommsqphlnEmSljRRGEWMOAQABgAAAGACSCQ6hBOCEbRXEUm3UIpsnBljQ4Mt5XVg2xq+yMl7NFYNceHZGS0tFYMK4cdjPaV8Qo1fV8PRMT+kZk+77Qrj3lN+iX/wAiWHBk1F+XHH8Fly1w13s8117qbP1icozsdON5U1vZfe/M9HptBiwdu28+bjZ9VfL8IJkkuDZszAYGwgNgA9d+AHwONF6jz9IaVdjtoXNU3uvu9DFqdBizx5T5tWHV5MXZ1h6No2t4mr46spk1P+1CXMX8TzufBkwX5Luxiy1y15oa7Yb8CrImGDIr5NFLKbQVZcOTVSWe0FGTDuzZSWe0Ft0e7NFZUyxWIuhCVEkSJWxkixk4AAAMAAAA3UAdEEkhBbBAcNNSITKUN+PEz2lZEGuLDgy3ldWDfFh2RjvLTSDaiHZGW0tNYGq6jRpGnWZeT3jFfRguZy8or7fkQxYb58kUp/pLJkripN7eDybVNSydWzJ5WZPecuIriK9F8D1WDBTBSKVcHJktktzWZNi9WBAAGjCwsrOu9zh0WXWecYR32+0ryZseKOa87J0x3yTtWNz6roPqCyO7oog/Sdy3+W5hni2kidt5n5NccP1Exv2I29DdQVR3WLVZ8IXL+ewRxbSTO28x8inh+ojwj83z1tc6bZ1Wx8NlcnCS9GnszoVtF4i0dJY5iYnaV2Bm36fkRvxpuM1yl5r0ZDPgpnpNLQniy2xTzVen6DrNWqYcbF9Ga7Sj6M8pmxXw3mlvD+7u9jyVy05qtd8OSdZRtBVlw5NVJZrwT5UO7NlJZrFV8eTXSVFmC3tuXwrlmkTJUxk4BIjAABgAAAABISTEacWILYCk2yhFdkoMMeJntK2DbEjwZMktFYOMWHZGK8tNINaIcGW8tFYeb9c6u9Q1WWLVLfGxH4Fs/wBKf9p/y+49Bw3Teyxc9utv0cnW5vaZOWOkPnUdFjAAAGrS8C3U9RowaP07peHf0Xm/uW5TnzVwY5yW8FmPHOW8Ujxe06LpOJpGJHFw61GMV9KXnN+rPG5899RfnyT/AA9Liw1xVitTHZFK0NCkPB9Z+uc/95s/Ez3Om7mnpH6PLZu8t6yxlysz0DU5abnRkm/dya8S3ObxPT+0xe0jrX9PFt0Obkyck9J/X+XqFd0cmiNkHumjgUl1bQwZa5NeOWa5NlR5NtJZbQU5EeTXSVFoLrVyaYVSyzJoKWMOASPmMAAADgB0YdTFJpIQSQjXVpbik2yhFdpSgyxkzLdbU4xPIx5GmhxirsjHkaaL9VzP+HaRlZaf0q6m4f5n2j82irFi9tlrj85/39FmS/Jjm3k8eXG7e+/mz17z8dAIAAAD7H2W0Rs1/IufNOM9vtlJfyT/AInH41fbBWvnP6Q6XDK75Zt5Q9TfZHmJdx8n1z1PdoVVFGFGDyr02pTW6rivPbze7Opw3QxqZm15/wAY+rBrdVOCIivWXwsusuoW3+cZbvzVUP8AQ7f/ABek/C5n/wB2f8RJbZO66y2x7znJyk/Vvk31rFYisdIZJmZneUBkA6m9A6Nz/wCkYXupS7x7HkL4/ZZbY/Kf9PQ1vz44t5nGUuS+ii5PlruzbRmsT5C7s2UlnsW2rk01lVLJNFiClgTgwiwJwYDAAAADqCTdEE4oRr6+f9xScNlCKrJwZYyMt1tTnE4RjyNFDjF4Rju1V6FnXtrq6ccF/eXQi/s5NHDa76jfyiVWtmYwvNl6eR6NxwIAAAN9x7KPrTUP2EPxM4vG+6p6unwv37PTHwebdp5d7U/rzE/df/aR6Xgc/wDRb1/ZxOKd7X0fGHZc0AQAAA+j6Lv8GY6t+zPNcSry6qZ84h29HO+nj4Pt8jvErxpWKMvbubKMtybJ2W5soz2LbnzsaaqWOxlsIKWx7EhuMONjDgEAAAAA6uQk0kIJR58hGvr58hSbZSVWSgzxmjLddU4xH2RjyNFDnEfZGPI1UJ/aGvzDW/JXx3NXC52zz6Kdd3PzedI9A5IAnJvaD252bQ46iej1zT+i+n7sDGts0/ec6oyk/f2d20v8R5PLxPV1vaIv4+UfZ366DTzWJ5frP3NdI6e0zR7rLdOxfczsiozfvJy3S/zNmTPq8+oiIyW32+EfZow6bFhnfHG35mj4M68q1XpzS9XyI36li++shHwRfvJx2W+/k0aMGrz4I2x22j5M+XS4s073jt9S7J6M6coostendoRcn/X2eS3/AFjRHEtXaduf6R9lM6DTVjfl+s/d5Funu1w32+w9dEbOB2eDgEABz0o2tTW3wPOcU/8AV8na0XcfN9/a/oIpxp3KcvlmzGy3J8l8myjNYsu8zVVUyTLEFLGSIwixk4ADAAAADqCTSREJIDXVvuKTa6ZFdoSgyxmZrraycYkuyMeSGihziS7IxXhqoz9X47yum8pJbutK3/xff5bk9Ffk1Nd/HsGprzYZh5at/M9M4YAIz/Rl9g46iej3PTNRwo6biRlmY6apgmnbH9VfE8Rmw5faW/xnrPg9TTJTljtbaczHyJONF9VjXKhNPb+BTal6+9EwnF626SvZFJRdmY1E1C++quTW6U5qPb7yVaXt7sbozesdZJ+p9Vxa9AzpU5VE7PcyUYxti22+3qatJgvOopFqz1Z9RlrXDaYnweMrbbZPdI9l1eb227AAG4zPuj6/Fmzn5J7I8prL8+qtPyd7T15cFYfcXPasljhC8lGXLk244ZLyT5MuTZSFFpLbXyaaqWWZNFUxkiMIsexOAAwAAAA6gkOiNOIgtgxJNVLIWODLG3M11sG2I1su5kyQ0VOMWXZGO8NNJM4xjdU65pOM04yT80+THbeJ3hojaY7XkOp4U9Nz78Oxd65bJ/rLyf8AA9dhyxmxxkjx/XxcHJjnFeaT4MpYrDGHPCvRAW0PuPZQktU1DZbf1EPxM4nHO3FT1dXhfv2+T02XB5t2nlvtUSeuYm6T/JfT/FI9LwTuLev7Q4fFO9j0fGKMV5I7W7mbQ6JIASMuy3KNTmjDim8+C3DjnLeKeb7fo/D91jqUl3fc8njiZneXoMkxttB7lP5G6kMdyfLlybKQzWkpyHybKM9i+3z2L4Vyyz3LEVTAkRkj5jAABgAAAAIAkI04iCyDQkmmqRGYOJbceb9Si0LIk1xZcGW8LqycYkuDHkhpob0TWxjtHa01l851zozy8dahjwcrqY/TjFfpR/2NvDtT7K/s7dJ+k/yz6zBz0546w8+T3W56FxwAAB9x7KPrTUP2EPxHF433VPV1OF+/b++b0yXB5t2ZeXe1P68xP3Vfikel4J3FvX9ocXinex6PjDsuYAA454ANOlYcs/Milv4Is81xLVe2yezp0j6y7ejwezpzz1l6Xh0LHx0l22M+OFt7M2XZ3ZspDLaSfJn3ZrpDPaSu+W7NdIUWYLfgy+FcqJbr4kiVSYycAIjIAAwAAAAANJBId3e4gnHkRtFYpNtokUWhODLGnwZrwtrJti28GS9WikmuPZ2RlvVprJhGSnHwvzM1q7r4l8D1Z01PGtnl4MG6m951pd19h1tDxHb/AK8vylz9Vo57b4/m+T3f2Hbcx0A+49lH1pqH7CH4ji8b7qnq6nC/ft/fN6ZLg827MvLvan9eYn7qvxSPS8E7i3r+0OLxTvY9Hxh2XMDe3cPjJx2ztCeLRbmWquuD8O/KOFr+I82+LDPrP7OrpNHt/nk+T7/QNJhh0xco/S9Tk0r2N97Gt8/CtjXSrLaSrKs3bNdKs1pKcmfdmykKLSW3y7mmsKplisZahKl/AaKD2fIw40vUICIwAIAAAAAMA6gkOkTWRYGtg+4jaqpkJSb6LODPaqcSZY1vBmvVdWTbGt7IyXq0Vkxps4M1qtFZa2o3VuE1vF+RRaq6JfKdQdI15EpXYf0Jvv4fU06fX5cHZ1jyn7qc2lx5e3pL4vL07LxJ+G6p/ajs4eJ6fJ1nln4/fo5uTQ5adI3j4PrvZT21TP3/AOhD8Rj41aLYqTE79rTwyJi94n4PTJcHnXYl5d7U3+fMT91X4pHpODWrXT2mZ8f2hxuJ1m2Wu0b9j4yKnKW0IOT9Eac3FNPj7KzzT8Puox6HLfrG0fE00/QcrMlvZFxj6HF1Guzajsnsh0sOmx4e2I3l9ppOiU4cFtFbpehnrRdaxpOXu0l6GitVEyX5NpppVRaSnKs7s2UqzWksvs3NNaqZlhtluX1hXLLJliKqQyQAOMZOABuAGwAAAAAABISQjSTEFkWBr65EZg92umZVaEoMKLNtjPeq2smmNaZb1aKyZ0W8GW1V9bN1VvcptVbEtULFLsymYWxKGRhY+VDayuJXNU4kov6XxnLx0uVcv1q5OL+RDlT5mafTWRxHOy/D+2l/qLlHMpXSEJS8V0pWS/WnLd/MfIOcwxuncXH2agiUVRmxjCimqP0Y7bFlaq5srut9C+tVVrMV9pfWqm0lmTcaaVUWsWZFhqpCi0l18zTWFcyx2SLUJUye40UGMIgERkAAABgAAAAAHQk3RAIAmmAWRkI2mqWxCYOG6mzgotCcSY49hmvVfWTKm19jPaq6st1VvHcz2qtizZVaU2qtizTC0qmqyLLVZ8RbJczvjFsfMjKwIgplVOzbzJxVGbM9tvbksrVXNmO634l1aqrSX32mmtVNrFuRbuaaVU2kvusNFaqZlitkX1hCWaT3JFKqTGSO4AAERkAAABgAAAAAAAdAAA6mLYLIsDXVyIm11S4K7QlEt9FhntC2smFFnBntVbEt9VhRaq6JbKrCmarIlphaVTVOJWKwjyp7pe8FynujK0fKU2UztJxVHdnssLIqrmWO+wurVVMsGRYX1qptJffM01hXMsFsy+sKpZbJblsIqZMZK2xhwCAG4BAAAAYBwA6AAAAAAdAOoAkhGtgI2mp8EbJQ3UsosnDdU32M9lkN1Le6KLLYbKmymVtWmDZVKcLU2RSd3YjRk2MpVTbJwjLLa2WVVyyXN7F9VcsF7ZfVVLDezRVVLHYy6EJZp8kiVPzJQSLAnADgAAAAAAMA/9k="
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
      <section id="instagram" className="py-5 bg-light">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="data:image/jpeg;base64,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"
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
      <section id="tiktok" className="py-5">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="data:image/png;base64,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"
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
