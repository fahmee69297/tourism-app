import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function InquiryFormModal({ show, handleClose, parkName, type }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    email: "",
    duration: "",
    safariStartDate: "",
    safariEndDate: "",
    numAdults: "",
    numChildren: "",
    ageChildren: [],
    estimatedBudget: "",
    currency: "",
    safariType: [],
    contactMethod: [],
    promoCode: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target; // We no longer need `checked` here

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedArray = prev[name].includes(value)
          ? prev[name].filter((item) => item !== value)
          : [...prev[name], value];
        return { ...prev, [name]: updatedArray };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      country: formData.country,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      duration: formData.duration,
      safariStartDate: formData.safariStartDate,
      safariEndDate: formData.safariEndDate,
      numAdults: formData.numAdults,
      numChildren: formData.numChildren,
      ageChildren: formData.ageChildren.join(", "), // Join the age ranges as a comma-separated string
      estimatedBudget: formData.estimatedBudget,
      currency: formData.currency,
      safariType: formData.safariType.join(", "), // Join the safari types as a comma-separated string
      contactMethod: formData.contactMethod.join(", "), // Join contact methods as a comma-separated string
      package_name: parkName,
      inquiry_type: type,
      createdAt: serverTimestamp(),
    };

    emailjs
      .send(
        "service_k2y3jxr", // e.g., service_xxxxx
        "template_6k5rqjv", // e.g., template_xxxxx
        templateParams,
        "ZH_e6o5ySAwVvxgfW" // e.g., Px1sXvxxxx...
      )
      .then(
        (response) => {
          alert("Inquiry sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            country: "",
            phoneNumber: "",
            email: "",
            duration: "",
            safariStartDate: "",
            safariEndDate: "",
            numAdults: "",
            numChildren: "",
            ageChildren: [],
            estimatedBudget: "",
            currency: "",
            safariType: [],
            contactMethod: [],
          });
          handleClose();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send inquiry. Please try again.");
        }
      );
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {type} - {parkName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* First Name */}
          <Form.Group className="mb-3" controlId="firstNameInput">
            <Form.Label>
              First Name <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3" controlId="lastNameInput">
            <Form.Label>
              Last Name <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Country */}
          <Form.Group className="mb-3" controlId="countryInput">
            <Form.Label>
              Country <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Phone Number */}
          <Form.Group className="mb-3" controlId="phoneNumberInput">
            <Form.Label>
              Phone Number <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Email Address */}
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label>
              Email Address <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Duration of Tour */}
          <Form.Group className="mb-3" controlId="durationInput">
            <Form.Label>
              Duration of Tour <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Safari Start Date */}
          <Form.Group className="mb-3" controlId="safariStartDateInput">
            <Form.Label>
              Safari Start Date <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="date"
              name="safariStartDate"
              value={formData.safariStartDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Safari End Date */}
          <Form.Group className="mb-3" controlId="safariEndDateInput">
            <Form.Label>
              Safari End Date <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="date"
              name="safariEndDate"
              value={formData.safariEndDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Number of Adults */}
          <Form.Group className="mb-3" controlId="numAdultsInput">
            <Form.Label>
              Number of Adults <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="number"
              name="numAdults"
              value={formData.numAdults}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Number of Children */}
          <Form.Group className="mb-3" controlId="numChildrenInput">
            <Form.Label>
              Number of Children <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="number"
              name="numChildren"
              value={formData.numChildren}
              onChange={handleChange}
              placeholder="Enter 0 if none"
              required
            />
          </Form.Group>

          {/* Age of Children */}
          <Form.Group className="mb-3">
            <Form.Label>
              Age of Children <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="0-3yrs"
                value="0-3yrs"
                name="ageChildren"
                checked={formData.ageChildren.includes("0-3yrs")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="4-12yrs"
                value="4-12yrs"
                name="ageChildren"
                checked={formData.ageChildren.includes("4-12yrs")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="13-18yrs"
                value="13-18yrs"
                name="ageChildren"
                checked={formData.ageChildren.includes("13-18yrs")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="No Children"
                value="No Children"
                name="ageChildren"
                checked={formData.ageChildren.includes("No Children")}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* Estimated Budget */}
          <Form.Group className="mb-3" controlId="estimatedBudgetInput">
            <Form.Label>
              Estimated Budget of Tour (Per Person){" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Currency */}
          <Form.Group className="mb-3" controlId="currencyInput">
            <Form.Label>
              Currency <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              as="select"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="KES">KES</option>
            </Form.Control>
          </Form.Group>

          {/* Type of Safari */}
          <Form.Group className="mb-3">
            <Form.Label>
              Type of Safari <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="National Parks"
                value="National Parks"
                name="safariType"
                checked={formData.safariType.includes("National Parks")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="Marine Parks"
                value="Marine Parks"
                name="safariType"
                checked={formData.safariType.includes("Marine Parks")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="Old Town Tours"
                value="Old Town Tours"
                name="safariType"
                checked={formData.safariType.includes("Old Town Tours")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="Combination of All"
                value="Combination of All"
                name="safariType"
                checked={formData.safariType.includes("Combination of All")}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* Contact Method */}
          <Form.Group className="mb-3">
            <Form.Label>
              How would you like to be contacted?{" "}
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div>
              <Form.Check
                type="checkbox"
                label="Email"
                value="email"
                name="contactMethod"
                checked={formData.contactMethod.includes("email")}
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                label="WhatsApp"
                value="whatsapp"
                name="contactMethod"
                checked={formData.contactMethod.includes("whatsapp")}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* Promo Code */}
          <Form.Group className="mb-3" controlId="promoCodeInput">
            <Form.Label>Promo Code (Optional)</Form.Label>
            <Form.Control
              type="text"
              name="promoCode"
              value={formData.promoCode}
              onChange={handleChange}
              placeholder="Enter promo code if you have one"
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-2">
            Submit Inquiry
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default InquiryFormModal;
