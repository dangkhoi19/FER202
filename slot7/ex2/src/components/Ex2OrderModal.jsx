import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function Ex2OrderModal() {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleConfirm = () => {
        alert('🎉 Duyệt đơn hàng thành công!');
        setIsShowModal(false);
    };

    return (
        <Card className="mt-4 shadow-sm">
            <Card.Body>
                <Card.Title>📦 Exercise 2: Xử lý đơn hàng</Card.Title>

                <Button
                    variant="warning"
                    className="mt-2"
                    onClick={() => setIsShowModal(true)}
                >
                    Xử lý đơn hàng
                </Button>

                <Modal show={isShowModal} onHide={() => setIsShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Xác nhận xử lý</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsShowModal(false)}>
                            Hủy
                        </Button>
                        <Button variant="success" onClick={handleConfirm}>
                            Xác nhận
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
}

export default Ex2OrderModal;
