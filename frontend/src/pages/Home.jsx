import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookingModal from '../components/BookingModal';

const Home = () => {
    const { services, providers } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleBookClick = (provider) => {
        setSelectedProvider(provider);
        setIsModalOpen(true);
    };

    // Get top 4 services and top 3 providers
    const topServices = services.slice(0, 4);
    const topProviders = providers.slice(0, 3);

    // Responsive styles
    const isMobile = windowWidth <= 768;
    const isTablet = windowWidth <= 1024;

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* Hero Section */}
            <section style={{
                background: `linear-gradient(135deg, rgba(10, 25, 47, 0.95), rgba(10, 25, 47, 0.9)), url('https://images.unsplash.com/photo-1581578731548?auto=format&fit=crop&w=1920&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: isMobile ? '90vh' : '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#ffffff',
                padding: isMobile ? '20px' : '0 20px',
                position: 'relative'
            }}>
                <div style={{
                    maxWidth: '900px',
                    width: '100%',
                    padding: isMobile ? '20px' : '0'
                }}>
                    {/* Hero Badge */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        display: 'inline-block',
                        padding: isMobile ? '6px 16px' : '8px 24px',
                        borderRadius: '40px',
                        marginBottom: isMobile ? '15px' : '25px',
                        fontSize: isMobile ? '12px' : '14px',
                        fontWeight: 600,
                        letterSpacing: '1px'
                    }}>
                        ⭐ TRUSTED BY 100+ CUSTOMERS
                    </div>

                    {/* Main Heading */}
                    <h1 style={{
                        fontSize: isMobile ? '32px' : isTablet ? '48px' : '62px',
                        marginBottom: isMobile ? '15px' : '20px',
                        lineHeight: 1.2,
                        background: 'linear-gradient(135deg, #ffffff, #a8d8ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        FIND TRUSTED LOCAL SERVICES
                    </h1>

                    {/* Subheading */}
                    <p style={{
                        fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
                        marginBottom: isMobile ? '25px' : '35px',
                        opacity: 0.9,
                        maxWidth: '700px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        padding: isMobile ? '0 10px' : '0'
                    }}>
                        Connect instantly with verified, top-rated professionals for any job, big or small. Quality guaranteed, every time.
                    </p>

                    {/* Hero Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: isMobile ? '12px' : '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginBottom: isMobile ? '30px' : '45px'
                    }}>
                        <Link to="/services" style={{
                            background: 'linear-gradient(135deg, #28a745, #34ce57)',
                            color: 'white',
                            border: 'none',
                            padding: isMobile ? '12px 25px' : '16px 40px',
                            borderRadius: '50px',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 8px 20px rgba(40, 167, 69, 0.3)',
                            transition: 'all 0.3s ease',
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: 'center'
                        }}>
                            🔍 BROWSE SERVICES
                        </Link>
                        <Link to="/register" style={{
                            background: 'transparent',
                            color: 'white',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            padding: isMobile ? '12px 25px' : '16px 40px',
                            borderRadius: '50px',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: 'center'
                        }}>
                            👤 REGISTER NOW
                        </Link>
                    </div>

                    {/* Stats Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '15px' : '20px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: isMobile ? '20px' : '25px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: isMobile ? '32px' : '40px', marginBottom: '5px' }}>👥</div>
                            <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, color: '#28a745' }}>100+</div>
                            <div style={{ fontSize: isMobile ? '14px' : '16px', opacity: 0.8 }}>Happy Customers</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: isMobile ? '32px' : '40px', marginBottom: '5px' }}>✅</div>
                            <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, color: '#28a745' }}>50+</div>
                            <div style={{ fontSize: isMobile ? '14px' : '16px', opacity: 0.8 }}>Verified Experts</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: isMobile ? '32px' : '40px', marginBottom: '5px' }}>⭐</div>
                            <div style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: 800, color: '#28a745' }}>4.8★</div>
                            <div style={{ fontSize: isMobile ? '14px' : '16px', opacity: 0.8 }}>Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Services Section */}
            <section style={{ padding: isMobile ? '50px 20px' : '80px 20px', background: '#ffffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '50px' }}>
                        <h2 style={{
                            fontSize: isMobile ? '28px' : isTablet ? '36px' : '42px',
                            color: '#0a192f',
                            marginBottom: '15px',
                            position: 'relative',
                            display: 'inline-block'
                        }}>
                            POPULAR SERVICES
                        </h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #28a745, #20c997)',
                            margin: '0 auto 15px',
                            borderRadius: '2px'
                        }}></div>
                        <p style={{
                            color: '#64748b',
                            fontSize: isMobile ? '14px' : '16px',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Explore our most sought-after professional services
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                        gap: isMobile ? '20px' : '25px'
                    }}>
                        {topServices.map(service => (
                            <Link to="/services" key={service.id} style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                padding: isMobile ? '30px 20px' : '35px 25px',
                                textAlign: 'center',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                border: '1px solid #f0f0f0',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}>
                                <div style={{
                                    width: isMobile ? '70px' : '80px',
                                    height: isMobile ? '70px' : '80px',
                                    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    fontSize: isMobile ? '28px' : '32px',
                                    color: '#0a192f'
                                }}>
                                    {service.name === 'Accounting' ? '💰' :
                                        service.name === 'Electrical' ? '⚡' :
                                            service.name === 'Cleaning' ? '🧹' :
                                                service.name === 'Painting' ? '🎨' : '🛠️'}
                                </div>
                                <h3 style={{
                                    fontSize: isMobile ? '20px' : '22px',
                                    marginBottom: '10px',
                                    color: '#0a192f'
                                }}>{service.name}</h3>
                                <p style={{
                                    color: '#28a745',
                                    fontWeight: 700,
                                    fontSize: isMobile ? '18px' : '20px'
                                }}>From $15/hr</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Providers Section */}
            <section style={{ padding: isMobile ? '50px 20px' : '80px 20px', background: '#f8fafc' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: isMobile ? '30px' : '40px',
                        flexWrap: 'wrap',
                        gap: '15px'
                    }}>
                        <h2 style={{
                            fontSize: isMobile ? '24px' : isTablet ? '32px' : '36px',
                            color: '#0a192f',
                            margin: 0
                        }}>
                            TOP SERVICE PROVIDERS
                        </h2>
                        <Link to="/services" style={{
                            color: '#28a745',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: isMobile ? '14px' : '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            View All →
                        </Link>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: isMobile ? '20px' : '25px'
                    }}>
                        {topProviders.map(provider => (
                            <div key={provider.id} style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                border: '1px solid #f0f0f0'
                            }}>
                                {/* Provider Image */}
                                <div style={{
                                    height: '200px',
                                    background: 'linear-gradient(135deg, #0a192f, #1e3a8a)',
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontSize: '48px'
                                }}>

                                    <div style={{
                                        position: 'absolute',
                                        bottom: '15px',
                                        right: '15px',
                                        background: '#28a745',
                                        color: 'white',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        Verified ✓
                                    </div>
                                </div>

                                {/* Provider Content */}
                                <div style={{ padding: isMobile ? '20px' : '25px' }}>
                                    {/* Rating */}
                                    <div style={{
                                        color: '#FFD700',
                                        fontSize: '16px',
                                        marginBottom: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        {'★'.repeat(Math.floor(provider.rating))}
                                        {'☆'.repeat(5 - Math.floor(provider.rating))}
                                        <span style={{ color: '#64748b', marginLeft: '5px' }}>({provider.rating})</span>
                                    </div>

                                    {/* Name & Service */}
                                    <h3 style={{
                                        fontSize: isMobile ? '20px' : '22px',
                                        color: '#0a192f',
                                        marginBottom: '5px'
                                    }}>{provider.name}</h3>
                                    <p style={{
                                        color: '#28a745',
                                        fontWeight: 600,
                                        marginBottom: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                         {provider.service}
                                    </p>

                                    {/* Details Grid */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '10px',
                                        marginBottom: '15px',
                                        fontSize: '14px',
                                        color: '#64748b'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                             5+ Years
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            ✓ {provider.reviews} Jobs
                                        </div>
                                    </div>

                                    {/* Price & Location */}
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '20px',
                                        flexWrap: 'wrap',
                                        gap: '10px'
                                    }}>
                                        <span style={{
                                            color: '#28a745',
                                            fontWeight: 800,
                                            fontSize: '20px'
                                        }}>
                                            ${provider.price}
                                        </span>
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            color: '#64748b',
                                            fontSize: '14px'
                                        }}>
                                            📍 {provider.location}
                                        </span>
                                    </div>

                                    {/* Buttons */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                        gap: '10px'
                                    }}>
                                        <Link to={`/provider/${provider.id}`} style={{
                                            padding: '12px',
                                            border: '2px solid #0a192f',
                                            borderRadius: '10px',
                                            textDecoration: 'none',
                                            color: '#0a192f',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            textAlign: 'center'
                                        }}>
                                            View Profile
                                        </Link>
                                        <button
                                            onClick={() => handleBookClick(provider)}
                                            style={{
                                                padding: '12px',
                                                background: 'linear-gradient(135deg, #28a745, #34ce57)',
                                                border: 'none',
                                                borderRadius: '10px',
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                cursor: 'pointer'
                                            }}>
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section style={{ padding: isMobile ? '50px 20px' : '80px 20px', background: 'linear-gradient(135deg, #f8f9fa, #e3f2fd)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '50px' }}>
                        <h2 style={{
                            fontSize: isMobile ? '28px' : isTablet ? '36px' : '42px',
                            color: '#0a192f',
                            marginBottom: '15px'
                        }}>
                            HOW IT WORKS
                        </h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            background: 'linear-gradient(90deg, #28a745, #20c997)',
                            margin: '0 auto 15px',
                            borderRadius: '2px'
                        }}></div>
                        <p style={{ color: '#64748b', fontSize: isMobile ? '14px' : '16px' }}>
                            Simple, transparent, and hassle-free
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                        gap: isMobile ? '20px' : '25px'
                    }}>
                        {[
                            { num: 1, title: 'Search & Compare', desc: 'Browse verified providers, check ratings, and compare prices in seconds.' },
                            { num: 2, title: 'Book Instantly', desc: 'Choose your preferred professional and schedule service in minutes.' },
                            { num: 3, title: 'Enjoy & Review', desc: 'Receive quality service and share your experience to help others.' }
                        ].map(step => (
                            <div key={step.num} style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                padding: isMobile ? '30px 20px' : '35px 25px',
                                textAlign: 'center',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{
                                    width: isMobile ? '60px' : '70px',
                                    height: isMobile ? '60px' : '70px',
                                    background: 'linear-gradient(135deg, #28a745, #20c997)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    color: '#ffffff',
                                    fontSize: isMobile ? '24px' : '28px',
                                    fontWeight: 800
                                }}>
                                    {step.num}
                                </div>
                                <h3 style={{
                                    fontSize: isMobile ? '20px' : '22px',
                                    marginBottom: '15px',
                                    color: '#0a192f'
                                }}>{step.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '14px' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0a192f, #0f2744)',
                color: 'white',
                textAlign: 'center',
                padding: isMobile ? '50px 20px' : '80px 20px'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: isMobile ? '28px' : isTablet ? '36px' : '42px',
                        marginBottom: '20px',
                        lineHeight: 1.2
                    }}>
                        READY TO TRANSFORM YOUR SPACE?
                    </h2>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        opacity: 0.9,
                        marginBottom: '30px',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Join thousands of satisfied customers who trust ServiLink for all their service needs.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: isMobile ? '15px' : '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <Link to="/register" style={{
                            background: 'linear-gradient(135deg, #28a745, #34ce57)',
                            color: 'white',
                            border: 'none',
                            padding: isMobile ? '14px 30px' : '16px 40px',
                            borderRadius: '50px',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: 'center'
                        }}>
                            ✨ GET STARTED FREE
                        </Link>
                        <Link to="/services" style={{
                            background: 'transparent',
                            color: 'white',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            padding: isMobile ? '14px 30px' : '16px 40px',
                            borderRadius: '50px',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 600,
                            textDecoration: 'none',
                            width: isMobile ? '100%' : 'auto',
                            justifyContent: 'center'
                        }}>
                            📋 BROWSE PROVIDERS
                        </Link>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {selectedProvider && (
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    provider={selectedProvider}
                />
            )}
        </div>
    );
};

export default Home;