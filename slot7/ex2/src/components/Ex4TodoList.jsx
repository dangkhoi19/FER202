import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function Ex4TodoList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim() === '') return;
        setTodos([...todos, task]);
        setTask('');
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div
            style={{
                backgroundColor: '#2f343a',
                minHeight: '100vh',
                padding: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            }}
        >
            {/* Input + Add button */}
            <div>
                <Form.Control
                    style={{ width: '300px', marginBottom: '10px' }}
                    placeholder="Please input a Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <Button variant="danger" onClick={addTodo}>
                    Add Todo
                </Button>
            </div>

            {/* Todo List */}
            <Card style={{ width: '300px' }}>
                <Card.Body>
                    <Card.Title className="text-center">
                        Todo List
                    </Card.Title>

                    {todos.length === 0 && (
                        <p className="text-muted text-center">
                            No tasks
                        </p>
                    )}

                    {todos.map((todo, index) => (
                        <div
                            key={index}
                            className="d-flex justify-content-between align-items-center mb-2"
                        >
                            <span>{todo}</span>

                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => deleteTodo(index)}
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Ex4TodoList;
