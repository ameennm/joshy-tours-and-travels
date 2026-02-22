import React, { useState } from 'react';
import EnquiryOptions from '../components/EnquiryOptions';
import './TourPackages.css';

const categories = ['Student', 'Corporate', 'Family', 'Club / Group'];
const studentSubCategories = ['KG', 'LP School', 'UP School', 'High School', 'Higher Secondary', 'College'];
const destinations = {
    Student: { Domestic: ['Kerala', 'Ooty', 'Mysore', 'Goa', 'Delhi'] },
    Corporate: {
        Domestic: ['Goa', 'Andaman', 'Manali', 'Kerala'],
        International: ['Dubai', 'Singapore', 'Malaysia', 'Thailand']
    },
    Family: {
        Domestic: ['Kashmir', 'Shimla', 'Kerala', 'Rajasthan'],
        International: ['Europe', 'Bali', 'Maldives', 'Sri Lanka']
    },
    'Club / Group': {
        Domestic: ['Goa', 'Rishikesh', 'Leh Ladakh', 'Manali'],
        International: ['Thailand', 'Vietnam', 'Bali', 'Dubai']
    }
};

const durations = ['2 Nights 3 Days', '3 Nights 4 Days', '4 Nights 5 Days', '6 Nights 7 Days'];

const TourPackages = () => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({
        category: '',
        studentSubCategory: '',
        region: '',
        destination: '',
        duration: '',
    });

    const handleSelect = (key, value, nextStep) => {
        setSelections({ ...selections, [key]: value });
        setStep(nextStep);
    };

    const resetFlow = () => {
        setStep(1);
        setSelections({ category: '', studentSubCategory: '', region: '', destination: '', duration: '' });
    };

    return (
        <div className="packages-page">
            <div className="page-header">
                <h1>Tour <span className="text-gold">Packages</span></h1>
                <p>Dynamic Package Builder. Find the perfect trip for your group.</p>
            </div>

            <div className="flow-container section-padding">

                {/* Step 1: Category */}
                {step >= 1 && (
                    <div className="flow-step">
                        <h2>1. Select Group Type</h2>
                        <div className="options-grid">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`btn-gold flow-btn ${selections.category === cat ? 'selected' : ''}`}
                                    onClick={() => handleSelect('category', cat, cat === 'Student' ? 1.5 : 2)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 1.5: Student Sub Categories (Only if Student) */}
                {step >= 1.5 && selections.category === 'Student' && (
                    <div className="flow-step">
                        <h2>Select Student Group</h2>
                        <div className="options-grid">
                            {studentSubCategories.map((sub) => (
                                <button
                                    key={sub}
                                    className={`btn-gold flow-btn ${selections.studentSubCategory === sub ? 'selected' : ''}`}
                                    onClick={() => handleSelect('studentSubCategory', sub, 2)}
                                >
                                    {sub}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Region (Domestic / International) */}
                {step >= 2 && (
                    <div className="flow-step">
                        <h2>2. Select Region</h2>
                        <div className="options-grid">
                            {/* Student only has Domestic rule */}
                            {selections.category === 'Student' ? (
                                <button
                                    className={`btn-gold flow-btn ${selections.region === 'Domestic' ? 'selected' : ''}`}
                                    onClick={() => handleSelect('region', 'Domestic', 3)}
                                >
                                    Domestic
                                </button>
                            ) : (
                                <>
                                    <button
                                        className={`btn-gold flow-btn ${selections.region === 'Domestic' ? 'selected' : ''}`}
                                        onClick={() => handleSelect('region', 'Domestic', 3)}
                                    >
                                        Domestic
                                    </button>
                                    <button
                                        className={`btn-gold flow-btn ${selections.region === 'International' ? 'selected' : ''}`}
                                        onClick={() => handleSelect('region', 'International', 3)}
                                    >
                                        International
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Step 3: Destination */}
                {step >= 3 && selections.category && selections.region && (
                    <div className="flow-step animate-in">
                        <h2>3. Select Destination</h2>
                        <div className="options-grid">
                            {destinations[selections.category][selections.region]?.map((dest) => (
                                <button
                                    key={dest}
                                    className={`btn-gold flow-btn ${selections.destination === dest ? 'selected' : ''}`}
                                    onClick={() => handleSelect('destination', dest, 4)}
                                >
                                    {dest}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Duration */}
                {step >= 4 && (
                    <div className="flow-step animate-in">
                        <h2>4. Select Duration</h2>
                        <div className="options-grid">
                            {durations.map((dur) => (
                                <button
                                    key={dur}
                                    className={`btn-gold flow-btn ${selections.duration === dur ? 'selected' : ''}`}
                                    onClick={() => handleSelect('duration', dur, 5)}
                                >
                                    {dur}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 5: Result & Enquiry */}
                {step >= 5 && (
                    <div className="flow-result animate-in">
                        <h2>Your Custom Package</h2>
                        <div className="result-details">
                            <p><strong>Category:</strong> {selections.category} {selections.studentSubCategory && `(${selections.studentSubCategory})`}</p>
                            <p><strong>Region:</strong> {selections.region}</p>
                            <p><strong>Destination:</strong> {selections.destination}</p>
                            <p><strong>Duration:</strong> {selections.duration}</p>
                        </div>

                        <div className="result-enquiry">
                            <p>Perfect choice! Contact us right now to book this specific package.</p>
                            <EnquiryOptions />
                        </div>

                        <button onClick={resetFlow} className="btn-outline-gold reset-btn">Start Over</button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default TourPackages;
