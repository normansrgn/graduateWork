import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { menSneakers } from "../MenSneakerPage/SneakersPromoMen/data";
import './SneakerQuiz.scss';

const SneakerQuiz = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const questions = [
        {
            question: "Для чего вам нужны кроссовки?",
            options: [
                { text: "Для спорта/бега", value: "sport" },
                { text: "Для повседневной носки", value: "casual" },
                { text: "Для особого стиля", value: "fashion" },
                { text: "Для коллекции", value: "collection" }
            ]
        },
        {
            question: "Какой бренд вы предпочитаете?",
            options: [
                { text: "Nike", value: "nike" },
                { text: "Adidas", value: "adidas" },
                { text: "New Balance", value: "new balance" },
                { text: "Другой", value: "other" }
            ]
        },
        {
            question: "Какой ценовой диапазон?",
            options: [
                { text: "До 10,000₽", value: "low" },
                { text: "10,000-15,000₽", value: "medium" },
                { text: "15,000-20,000₽", value: "high" },
                { text: "Не важно", value: "any" }
            ]
        }
    ];

    const getRecommendation = (answers) => {
        // Фильтрация кроссовок на основе ответов
        let filtered = [...menSneakers];

        // Фильтр по назначению
        if (answers[0] === "sport") {
            filtered = filtered.filter(item =>
                item.title.includes("Air Max") ||
                item.title.includes("NMD") ||
                item.title.includes("Gel-Kayano")
            );
        } else if (answers[0] === "casual") {
            filtered = filtered.filter(item =>
                item.title.includes("Dunk") ||
                item.title.includes("Samba") ||
                item.title.includes("550")
            );
        } else if (answers[0] === "fashion") {
            filtered = filtered.filter(item =>
                item.title.includes("Scorpion") ||
                item.title.includes("Ozweego") ||
                item.title.includes("Mayze")
            );
        }

        // Фильтр по бренду
        if (answers[1] && answers[1] !== "other") {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(answers[1])
            );
        }

        // Фильтр по цене
        if (answers[2] === "low") {
            filtered = filtered.filter(item =>
                parseInt(item.price.replace(/,/g, '')) < 10000
            );
        } else if (answers[2] === "medium") {
            filtered = filtered.filter(item => {
                const price = parseInt(item.price.replace(/,/g, ''));
                return price >= 10000 && price <= 15000;
            });
        } else if (answers[2] === "high") {
            filtered = filtered.filter(item =>
                parseInt(item.price.replace(/,/g, '')) > 15000
            );
        }

        // Если ничего не найдено, возвращаем случайные модели
        if (filtered.length === 0) {
            return [
                menSneakers[0],
                menSneakers[3],
                menSneakers[6]
            ];
        }

        // Возвращаем 3 подходящие модели
        return filtered.slice(0, 3);
    };

    const handleAnswer = (value) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            const recommendations = getRecommendation(newAnswers);
            setResult(recommendations);
        }
    };

    const restartQuiz = () => {
        setStep(0);
        setAnswers([]);
        setResult(null);
    };

    return (
        <section className="sneaker-quiz">
            <Container>
                <h2>Подбор кроссовок по вашим предпочтениям</h2>
                <p>Ответьте на 3 вопроса и получите персональные рекомендации</p>

                {!result ? (
                    <div className="quiz-container">
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${(step / questions.length) * 100}%` }}
                            ></div>
                        </div>

                        <div className="question">
                            <h3>{questions[step].question}</h3>
                            <div className="options">
                                {questions[step].options.map((option, i) => (
                                    <Button
                                        key={i}
                                        variant="outline-dark"
                                        onClick={() => handleAnswer(option.value)}
                                    >
                                        {option.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="quiz-result">
                        <h3>Мы подобрали для вас</h3>
                        <p>На основе ваших ответов рекомендуем следующие модели:</p>

                        <div className="recommendations">
                            {result.map((sneaker) => (
                                <div className="col-xxl-12">
                                    <div key={sneaker.id} className="sneaker-card">
                                        <img src={sneaker.img} alt={sneaker.title} />
                                        <div className="sneaker-info">
                                            <h4>{sneaker.title}</h4>
                                            <div className="price">{sneaker.price}₽</div>
                                            <p className="description">{sneaker.description.substring(0, 100)}...</p>
                                            <Button variant="dark" href={`/product/${sneaker.id}`}>Подробнее</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="outline-secondary"
                            onClick={restartQuiz}
                            className="restart-btn"
                        >
                            Пройти тест еще раз
                        </Button>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default SneakerQuiz;