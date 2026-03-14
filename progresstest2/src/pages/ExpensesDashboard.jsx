import React, { useState, useEffect, useCallback } from 'react'; // Thêm useCallback
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { getExpenses, addExpense, updateExpense, deleteExpense } from '../services/ExpensesAPI';
import NavbarExpenses from '../components/NavbarExpenses';
import FooterExpenses from '../components/FooterExpenses';
import ModalConfirm from '../components/ModalConfirm';
import { formatCurrency, formatDate } from '../utils/formatters';

function ExpensesDashboard() {
    const { state } = useAuth();

    // State danh sách expenses
    const [expenses, setExpenses] = useState([]);

    // State filter
    const [filterCategory, setFilterCategory] = useState('All categories');

    // State form
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        category: 'Food',
        date: ''
    });

    const [editingId, setEditingId] = useState(null);

    // State validation
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});

    // State modal xóa
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    // Fetch expenses - Bọc trong useCallback
    // Fetch expenses - Sửa phần filter để so sánh đúng kiểu
    // Fetch expenses - Sửa để admin thấy tất cả, user chỉ thấy của họ
    const fetchExpenses = useCallback(async () => {
        try {
            const data = await getExpenses();

            // Kiểm tra role
            if (state.user?.role === 'admin') {
                // Admin: xem tất cả expenses
                console.log('👑 Admin: showing all expenses');
                setExpenses(data);
            } else {
                // User thường: chỉ xem expenses của họ
                console.log('👤 User: showing only their expenses');
                const userExpenses = data.filter(e =>
                    String(e.userId) === String(state.user?.id)
                );
                setExpenses(userExpenses);
            }
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    }, [state.user?.id, state.user?.role]); // Thêm role vào dependency

    useEffect(() => {
        if (state.user) {
            fetchExpenses();
        }
    }, [state.user, fetchExpenses]); // Thêm fetchExpenses vào dependency array

    // Lấy danh sách categories duy nhất
    const categories = [...new Set(expenses.map(e => e.category))];

    // Lọc expenses theo category
    const filteredExpenses = filterCategory === 'All categories'
        ? expenses
        : expenses.filter(e => e.category === filterCategory);

    // Tính tổng chi tiêu
    const totalExpenses = filteredExpenses.reduce(
        (sum, e) => sum + Number(e.amount), 0
    );

    // Validation
    const validate = () => {
        const newErrors = {};

        if (!formData.name?.trim()) {
            newErrors.name = 'Name is required.';
        }

        if (!formData.amount || Number(formData.amount) <= 0) {
            newErrors.amount = 'Amount must be greater than 0.';
        }

        if (!formData.date) {
            newErrors.date = 'Date is required.';
        }

        return newErrors;
    };

    // Xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Xóa lỗi khi người dùng nhập lại
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Reset form
    const handleReset = () => {
        setFormData({
            name: '',
            amount: '',
            category: 'Food',
            date: ''
        });
        setEditingId(null);
        setValidated(false);
        setErrors({});
    };

    // Lưu expense (thêm mới hoặc cập nhật)
    const handleSave = async (e) => {
        e.preventDefault();

        const newErrors = validate();
        setValidated(true);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const expenseData = {
                ...formData,
                userId: state.user.id,
                amount: Number(formData.amount)
            };

            if (editingId) {
                await updateExpense(editingId, expenseData);
            } else {
                await addExpense(expenseData);
            }

            await fetchExpenses();
            handleReset();
        } catch (error) {
            console.error('Error saving expense:', error);
        }
    };

    // Click Edit
    const handleEdit = (expense) => {
        setFormData({
            name: expense.name,
            amount: expense.amount,
            category: expense.category,
            date: expense.date
        });
        setEditingId(expense.id);
        setValidated(false);
        setErrors({});
    };

    // Click Delete
    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };

    // Xác nhận xóa
    const handleConfirmDelete = async () => {
        try {
            await deleteExpense(deleteId);
            await fetchExpenses();

            if (editingId === deleteId) {
                handleReset();
            }
        } catch (error) {
            console.error('Error deleting expense:', error);
        } finally {
            setShowModal(false);
            setDeleteId(null);
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarExpenses />

            <Container className="my-4 flex-grow-1">
                {/* Row 1: Total + Filter */}
                <Row className="mb-4">
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h5>Total of Expenses</h5>
                                <p className="fs-4 fw-bold text-primary">
                                    {formatCurrency(totalExpenses)}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <h5>Filter</h5>
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    value={filterCategory}
                                    onChange={(e) => setFilterCategory(e.target.value)}
                                >
                                    <option>All categories</option>
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </Form.Select>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Row 2: Form + Table */}
                <Row>
                    {/* Form Add/Edit */}
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <h5>{editingId ? 'Edit Expense' : 'Add Expense'}</h5>
                                <Form noValidate onSubmit={handleSave}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            isInvalid={validated && !!errors.name}
                                            isValid={validated && !errors.name && formData.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleInputChange}
                                                isInvalid={validated && !!errors.amount}
                                                isValid={validated && !errors.amount && formData.amount}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.amount}
                                            </Form.Control.Feedback>
                                        </Col>
                                        <Col>
                                            <Form.Label>Category</Form.Label>
                                            <Form.Select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Food">Food</option>
                                                <option value="Utilities">Utilities</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="Mua sắm">Mua sắm</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            isInvalid={validated && !!errors.date}
                                            isValid={validated && !errors.date && formData.date}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.date}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <div className="d-flex gap-2">
                                        <Button
                                            variant="secondary"
                                            type="button"
                                            onClick={handleReset}
                                        >
                                            Reset
                                        </Button>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Table */}
                    <Col md={8}>
                        <Card>
                            <Card.Body>
                                <h5>Expense Management</h5>
                                <Table bordered hover responsive>
                                    <thead className="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Category</th>
                                            <th>Date</th>
                                            <th style={{ width: '120px' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredExpenses.length > 0 ? (
                                            filteredExpenses.map(expense => (
                                                <tr key={expense.id}>
                                                    <td>{expense.name}</td>
                                                    <td>{formatCurrency(expense.amount)}</td>
                                                    <td>{expense.category}</td>
                                                    <td>{formatDate(expense.date)}</td>
                                                    <td>
                                                        <Button
                                                            variant="warning"
                                                            size="sm"
                                                            className="me-2"
                                                            onClick={() => handleEdit(expense)}
                                                        >
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => handleDeleteClick(expense.id)}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-3">
                                                    No expenses found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <FooterExpenses />

            {/* Modal xác nhận xóa */}
            <ModalConfirm
                show={showModal}
                title="Confirm Delete"
                message="Are you sure you want to delete this expense?"
                onConfirm={handleConfirmDelete}
                onCancel={() => setShowModal(false)}
            />
        </div>
    );
}

export default ExpensesDashboard;