import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Spinner, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRedo, FaArrowRight } from 'react-icons/fa';
import { menSneakers } from "../MenSneakerPage/SneakersPromoMen/data";
import './SneakerQuiz.scss';

const SneakerQuiz = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const questions = [
        {
            question: "Для чего вам нужны кроссовки?",
            options: [
                { text: "Для бега", value: "running", weight: { category: { sport: 3 } } },
                { text: "Для прогулок", value: "walking", weight: { category: { sport: 2, casual: 1 } } },
                { text: "Для повседневной носки", value: "casual", weight: { category: { casual: 3 } } },
                { text: "Для модного образа", value: "fashion", weight: { category: { fashion: 3 } } },
                { text: "Для коллекции", value: "collection", weight: { category: { fashion: 2, casual: 1 } } },
                { text: "Для спорта (кроме бега)", value: "other_sport", weight: { category: { sport: 3 } } },
            ],
        },
        {
            question: "Какой бренд вы предпочитаете?",
            options: [
                { text: "Nike", value: "nike", weight: { brand: { nike: 2 } } },
                { text: "Adidas", value: "adidas", weight: { brand: { adidas: 2 } } },
                { text: "New Balance", value: "new balance", weight: { brand: { newBalance: 2 } } },
                { text: "ASICS", value: "asics", weight: { brand: { asics: 2 } } },
                { text: "PUMA", value: "puma", weight: { brand: { puma: 2 } } },
                { text: "Не важно", value: "any", weight: {} },
            ],
        },
        {
            question: "Какой стиль вам ближе?",
            options: [
                { text: "Ретро", value: "retro", weight: { style: { retro: 3 } } },
                { text: "Современный", value: "modern", weight: { style: { modern: 3 } } },
                { text: "Классический", value: "classic", weight: { style: { classic: 3 } } },
                { text: "Футуристический", value: "futuristic", weight: { style: { modern: 2, fashion: 1 } } },
                { text: "Уличный", value: "street", weight: { style: { casual: 2, fashion: 1 } } },
                { text: "Минимализм", value: "minimal", weight: { style: { classic: 2, casual: 1 } } },
            ],
        },
        {
            question: "Какой цвет вы хотите?",
            options: [
                { text: "Белый", value: "white", weight: { color: { white: 3 } } },
                { text: "Черный", value: "black", weight: { color: { black: 3 } } },
                { text: "Серый", value: "grey", weight: { color: { grey: 3 } } },
                { text: "Синий", value: "blue", weight: { color: { blue: 3 } } },
                { text: "Красный", value: "red", weight: { color: { red: 3 } } },
                { text: "Любой", value: "any", weight: {} },
            ],
        },
        {
            question: "Какой ценовой диапазон вам подходит?",
            options: [
                { text: "До 10,000₽", value: "low", weight: { price: { low: 2 } } },
                { text: "10,000-12,500₽", value: "mid_low", weight: { price: { midLow: 2 } } },
                { text: "12,500-15,000₽", value: "mid", weight: { price: { mid: 2 } } },
                { text: "15,000-20,000₽", value: "mid_high", weight: { price: { midHigh: 2 } } },
                { text: "Свыше 20,000₽", value: "high", weight: { price: { high: 2 } } },
                { text: "Не важно", value: "any", weight: {} },
            ],
        },
        {
            question: "Какую особенность вы цените больше всего?",
            options: [
                { text: "Комфорт", value: "comfort", weight: { feature: { comfort: 3 } } },
                { text: "Легкость", value: "lightweight", weight: { feature: { lightweight: 3 } } },
                { text: "Амортизация", value: "cushioning", weight: { feature: { cushioning: 3 } } },
                { text: "Прочность", value: "durability", weight: { feature: { durability: 3 } } },
                { text: "Экологичность", value: "eco", weight: { feature: { eco: 3 } } },
                { text: "Уникальный дизайн", value: "design", weight: { feature: { design: 3 } } },
            ],
        },
    ];

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('sneakerQuizAnswers')) || [];
        setAnswers(savedAnswers);
        if (savedAnswers.length >= questions.length) {
            setResult(getRecommendation(savedAnswers));
            setStep(questions.length);
        } else if (savedAnswers.length > 0) {
            setStep(savedAnswers.length);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sneakerQuizAnswers', JSON.stringify(answers));
    }, [answers]);

    const getRecommendation = (answers) => {
        setLoading(true);
        let scores = {};

        menSneakers.forEach((sneaker) => {
            scores[sneaker.id] = 0;
        });

        answers.forEach((answer, index) => {
            const question = questions[index];
            const option = question.options.find((opt) => opt.value === answer);
            if (option && option.weight) {
                Object.entries(option.weight).forEach(([attribute, weights]) => {
                    menSneakers.forEach((sneaker) => {
                        const price = parseInt(sneaker.price.replace(/,/g, ''));
                        const titleLower = sneaker.title.toLowerCase();

                        if (attribute === 'category' && weights[sneaker.category]) {
                            scores[sneaker.id] += weights[sneaker.category];
                        }

                        if (attribute === 'brand' && weights[titleLower.split(' ')[0].toLowerCase()]) {
                            scores[sneaker.id] += weights[titleLower.split(' ')[0].toLowerCase()];
                        }

                        if (attribute === 'style') {
                            if (weights[sneaker.style]) {
                                scores[sneaker.id] += weights[sneaker.style];
                            } else if (weights[sneaker.category]) {
                                scores[sneaker.id] += weights[sneaker.category];
                            }
                        }

                        if (attribute === 'color' && weights[sneaker.color]) {
                            scores[sneaker.id] += weights[sneaker.color];
                        }

                        if (attribute === 'price') {
                            if (weights.low && price < 10000) scores[sneaker.id] += weights.low;
                            if (weights.midLow && price >= 10000 && price < 12500) scores[sneaker.id] += weights.midLow;
                            if (weights.mid && price >= 12500 && price < 15000) scores[sneaker.id] += weights.mid;
                            if (weights.midHigh && price >= 15000 && price <= 20000) scores[sneaker.id] += weights.midHigh;
                            if (weights.high && price > 20000) scores[sneaker.id] += weights.high;
                        }

                        if (attribute === 'feature') {
                            if (weights.comfort && (titleLower.includes('air') || titleLower.includes('cloudfoam') || titleLower.includes('fuelcell'))) scores[sneaker.id] += weights.comfort;
                            if (weights.lightweight && (titleLower.includes('nmd') || titleLower.includes('samba'))) scores[sneaker.id] += weights.lightweight;
                            if (weights.cushioning && (titleLower.includes('max') || titleLower.includes('boost') || titleLower.includes('gel'))) scores[sneaker.id] += weights.cushioning;
                            if (weights.durability && (titleLower.includes('force') || titleLower.includes('990'))) scores[sneaker.id] += weights.durability;
                            if (weights.eco && (titleLower.includes('vegan') || titleLower.includes('primeblue'))) scores[sneaker.id] += weights.eco;
                            if (weights.design && (titleLower.includes('scorpion') || titleLower.includes('ozweego') || titleLower.includes('mayze'))) scores[sneaker.id] += weights.design;
                        }
                    });
                });
            }
        });

        const sortedSneakers = menSneakers
            .map((sneaker) => ({ ...sneaker, score: scores[sneaker.id] || 0 }))
            .sort((a, b) => b.score - a.score || b.price - a.price)
            .slice(0, 3);

        if (sortedSneakers.every((sneaker) => sneaker.score === 0)) {
            return [menSneakers[0], menSneakers[3], menSneakers[6]];
        }

        setLoading(false);
        return sortedSneakers;
    };

    const handleAnswer = (value) => {
        const newAnswers = [...answers.slice(0, step), value];
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            const recommendations = getRecommendation(newAnswers);
            setResult(recommendations);
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleSkip = () => {
        const newAnswers = [...answers.slice(0, step), ''];
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
        localStorage.removeItem('sneakerQuizAnswers');
    };

    return (
        <section className="sneaker-quiz">
            <Container>
                <h2>Найдите идеальные кроссовки</h2>
                <p>Ответьте на 6 вопросов, и мы подберем лучшие варианты для вас</p>

                {!result ? (
                    <Card className="quiz-card shadow">
                        <Card.Body>
                            <div className="progress-info">
                                <span>Вопрос {step + 1} из {questions.length}</span>
                                <ProgressBar
                                    now={(step / questions.length) * 100}
                                    className="quiz-progress"
                                    aria-label={`Прогресс квиза: ${Math.round((step / questions.length) * 100)}%`}
                                />
                            </div>

                            <div className="question-container">
                                <h3>{questions[step].question}</h3>
                                <div className="options">
                                    {questions[step].options.map((option, i) => (
                                        <Button
                                            key={i}
                                            variant="outline-primary"
                                            className="quiz-option"
                                            onClick={() => handleAnswer(option.value)}
                                            aria-label={`Выбрать ${option.text}`}
                                        >
                                            {option.text}
                                        </Button>
                                    ))}
                                </div>
                                <div className="navigation">
                                    {step > 0 && (
                                        <Button
                                            variant="link"
                                            className="back-btn"
                                            onClick={handleBack}
                                            aria-label="Вернуться к предыдущему вопросу"
                                        >
                                            <FaArrowLeft /> Назад
                                        </Button>
                                    )}
                                    <Button
                                        variant="link"
                                        className="skip-btn"
                                        onClick={handleSkip}
                                        aria-label="Пропустить вопрос"
                                    >
                                        Пропустить <FaArrowRight />
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ) : (
                    <div className="quiz-result">
                        {loading ? (
                            <div className="text-center">
                                <Spinner animation="border" variant="light" aria-label="Загрузка рекомендаций" />
                                <p>Подбираем кроссовки...</p>
                            </div>
                        ) : (
                            <>
                                <div className="result-header">
                                    <h3>Ваши рекомендации</h3>
                                    <p>Мы подобрали эти кроссовки на основе ваших предпочтений:</p>
                                </div>
                                <div className="recommendations">
                                    {result.map((sneaker) => (
                                        <Card key={sneaker.id} className="sneaker-card shadow">
                                            <div className="sneaker-image">
                                                <Card.Img
                                                    src={sneaker.img}
                                                    alt={sneaker.title}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{sneaker.title}</Card.Title>
                                                <Card.Text className="price">{sneaker.price}₽</Card.Text>
                                                <Button
                                                    variant="primary"
                                                    as={Link}
                                                    to={{
                                                        pathname: `/product/${sneaker.id}`,
                                                        state: { sneaker }
                                                    }}
                                                    className="details-btn"
                                                    aria-label={`Подробнее о ${sneaker.title}`}
                                                >
                                                    Подробнее
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                                <Button
                                    variant="outline-light"
                                    className="restart-btn"
                                    onClick={restartQuiz}
                                    aria-label="Пройти квиз заново"
                                >
                                    <FaRedo /> Пройти заново
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </Container>
        </section>
    );
};

export default SneakerQuiz;