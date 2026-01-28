import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    departure: 'Hà nội',
    destination: 'Hà nội',
    tripType: 'one-way', // one-way, round-trip
    departureDate: '',
    returnDate: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (formData.fullName.length < 5) {
      newErrors.fullName = 'Họ tên phải có ít nhất 5 ký tự';
    } else if (formData.fullName !== formData.fullName.toUpperCase()) {
      newErrors.fullName = 'Họ tên phải viết IN HOA';
    }

    // Validate address
    if (formData.address.length < 5) {
      newErrors.address = 'Địa chỉ phải có ít nhất 5 ký tự';
    } else if (formData.address !== formData.address.toUpperCase()) {
      newErrors.address = 'Địa chỉ phải viết IN HOA';
    }

    // Validate departure and destination
    if (formData.departure === formData.destination) {
      newErrors.destination = 'Điểm đến phải khác điểm đi';
    }

    // Validate dates
    if (!formData.departureDate) {
      newErrors.departureDate = 'Vui lòng chọn ngày đi';
    }

    if (formData.tripType === 'round-trip' && !formData.returnDate) {
      newErrors.returnDate = 'Vui lòng chọn ngày về';
    }

    if (formData.tripType === 'round-trip' && formData.departureDate && formData.returnDate) {
      const depDate = new Date(formData.departureDate);
      const retDate = new Date(formData.returnDate);
      if (retDate < depDate) {
        newErrors.returnDate = 'Ngày về phải sau ngày đi';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Flight Booking Data:', formData);
      setSubmitted(true);
      alert('Đặt vé thành công!\n' + 
            `Họ tên: ${formData.fullName}\n` +
            `Địa chỉ: ${formData.address}\n` +
            `Từ: ${formData.departure}\n` +
            `Đến: ${formData.destination}\n` +
            `Loại vé: ${formData.tripType === 'one-way' ? 'Một chiều' : 'Khứ hồi'}\n` +
            `Ngày đi: ${formData.departureDate}\n` +
            `Ngày về: ${formData.returnDate || 'Không có'}`);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      address: '',
      departure: 'Hà nội',
      destination: 'Hà nội',
      tripType: 'one-way',
      departureDate: '',
      returnDate: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  const vietnamCities = [
    'Hà nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    'Nha Trang',
    'Huế',
    'Đà Lạt',
    'Phú Quốc',
    'Quảng Ninh'
  ];

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header as="h5" className="bg-primary text-white text-center">
              FORM ĐẶT VÉ MÁY BAY
            </Card.Header>
            <Card.Body>
              {submitted && (
                <Alert variant="success" className="text-center">
                  <h4>ĐẶT VÉ THÀNH CÔNG!</h4>
                  <p>Thông tin vé đã được ghi nhận.</p>
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                {/* Họ tên */}
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label><strong>Họ tên</strong></Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Nhập họ tên (viết IN HOA, ít nhất 5 ký tự)"
                    value={formData.fullName}
                    onChange={(e) => {
                      handleChange({
                        target: {
                          name: 'fullName',
                          value: e.target.value.toUpperCase()
                        }
                      });
                    }}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Phải nhập 5 ký tự, in hoa
                  </Form.Text>
                </Form.Group>

                {/* Địa chỉ */}
                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label><strong>Địa chỉ</strong></Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Nhập địa chỉ (viết IN HOA, ít nhất 5 ký tự)"
                    value={formData.address}
                    onChange={(e) => {
                      handleChange({
                        target: {
                          name: 'address',
                          value: e.target.value.toUpperCase()
                        }
                      });
                    }}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    Phải nhập 5 ký tự, in hoa
                  </Form.Text>
                </Form.Group>

                <Row>
                  {/* Đi từ */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formDeparture">
                      <Form.Label><strong>Đi từ</strong></Form.Label>
                      <Form.Select
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                      >
                        {vietnamCities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Đến */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formDestination">
                      <Form.Label><strong>Đến</strong></Form.Label>
                      <Form.Select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        isInvalid={!!errors.destination}
                      >
                        {vietnamCities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.destination}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Chọn chiều đi */}
                <Form.Group className="mb-3" controlId="formTripType">
                  <Form.Label><strong>Chọn chiều đi (Khứ hồi)</strong></Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Một chiều (Đi)"
                      name="tripType"
                      value="one-way"
                      checked={formData.tripType === 'one-way'}
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Khứ hồi (Đi & Về)"
                      name="tripType"
                      value="round-trip"
                      checked={formData.tripType === 'round-trip'}
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>

                <Row>
                  {/* Ngày đi */}
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formDepartureDate">
                      <Form.Label><strong>Ngày đi</strong></Form.Label>
                      <Form.Control
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        isInvalid={!!errors.departureDate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.departureDate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {/* Ngày về (chỉ hiển thị khi chọn khứ hồi) */}
                  {formData.tripType === 'round-trip' && (
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formReturnDate">
                        <Form.Label><strong>Ngày về</strong></Form.Label>
                        <Form.Control
                          type="date"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleChange}
                          isInvalid={!!errors.returnDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.returnDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  )}
                </Row>

                {/* Summary Table */}
                <Card className="mb-4">
                  <Card.Header><strong>Thông tin đặt vé</strong></Card.Header>
                  <Card.Body>
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td><strong>Họ tên:</strong></td>
                          <td>{formData.fullName || 'Chưa nhập'}</td>
                        </tr>
                        <tr>
                          <td><strong>Địa chỉ:</strong></td>
                          <td>{formData.address || 'Chưa nhập'}</td>
                        </tr>
                        <tr>
                          <td><strong>Tuyến bay:</strong></td>
                          <td>{formData.departure} → {formData.destination}</td>
                        </tr>
                        <tr>
                          <td><strong>Loại vé:</strong></td>
                          <td>
                            {formData.tripType === 'one-way' ? 'Một chiều' : 'Khứ hồi'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Card.Body>
                </Card>

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <Button variant="secondary" onClick={handleReset}>
                    Hủy
                  </Button>
                  <Button variant="primary" type="submit" size="lg">
                    ĐẶT VÉ
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
              <small>Form đặt vé máy bay - Exercise 6: Demo about Form Control</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FlightBookingForm;