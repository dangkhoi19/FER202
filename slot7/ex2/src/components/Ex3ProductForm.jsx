import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function Ex3ProductForm() {
    const [form, setForm] = useState({
        name: '',
        price: '',
        category: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `📄 Thông tin sản phẩm:\nTên: ${form.name}\nGiá: ${form.price}\nDanh mục: ${form.category}`
        );
    };

    return (
        <Card className="mt-4 shadow-sm mb-5">
            <Card.Body>
                <Card.Title>📝 Exercise 3: Product Form</Card.Title>

                <Form onSubmit={handleSubmit} className="mt-3">
                    <Form.Group className="mb-3">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nhập tên sản phẩm"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Giá</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            placeholder="Nhập giá"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Danh mục</Form.Label>
                        <Form.Control
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="Nhập danh mục"
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Lưu sản phẩm
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Ex3ProductForm;
