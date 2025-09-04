'use client'
import { useState } from 'react'
import CountUp from 'react-countup'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"

export default function Section2() {
	const [isOpen, setOpen] = useState(false)
	
	return (
		<>
			<div className="about2-section-area sp1">
				<img src="/assets/img/elements/elements13.png" alt="" className="elements12" />
				<div className="container">
					<div className="row align-items-center">
						{/* Section Vidéo - À gauche */}
						<div className="col-lg-6 col-md-12">
							<div className="video-section" data-aos="fade-right" data-aos-duration={800}>
								{/* Image de fond pour la vidéo */}
								<div className="video-thumbnail position-relative">
									<img 
										src="sara-presentation-video-2.webp" 
										alt="SARA 2025 - Aperçu vidéo"
										className="img-fluid rounded-3 w-100"
										style={{minHeight: '350px', objectFit: 'cover'}}
									/>
									{/* Bouton de lecture centré */}
									<div className="video-play-btn position-absolute top-50 start-50 translate-middle">
										<a 
											onClick={() => setOpen(true)} 
											className="popup-youtube d-flex align-items-center justify-content-center"
											style={{
												width: '80px',
												height: '80px',
												backgroundColor: '#fff',
												borderRadius: '50%',
												boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
												cursor: 'pointer',
												transition: 'all 0.3s ease'
											}}
										>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={28} viewBox="0 0 20 24" fill="none">
												<path d="M19.5185 11.1463L1.52146 0.147702C1.36988 0.0550624 1.19634 0.0044781 1.01872 0.0011519C0.8411 -0.00217431 0.665798 0.041878 0.510849 0.128777C0.3559 0.215677 0.226898 0.342285 0.137113 0.495581C0.0473273 0.648876 8.00178e-08 0.823322 0 1.00098V22.9981C8.00178e-08 23.1758 0.0473273 23.3502 0.137113 23.5035C0.226898 23.6568 0.3559 23.7834 0.510849 23.8703C0.665798 23.9572 0.8411 24.0013 1.01872 23.998C1.19634 23.9946 1.36988 23.944 1.52146 23.8514L19.5185 12.8528C19.6647 12.7635 19.7855 12.6381 19.8693 12.4887C19.9531 12.3393 19.9971 12.1709 19.9971 11.9996C19.9971 11.8282 19.9531 11.6598 19.8693 11.5104C19.7855 11.361 19.6647 11.2356 19.5185 11.1463Z" fill="#1A1719" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Section Présentation - À droite */}
						<div className="col-lg-6 col-md-12">
							<div className="about2-header heading4">
								<div className="space18" />
								<h2 className="text-anime-style-3" data-aos="fade-left" data-aos-duration={600}>
									SARA 2025
								</h2>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={800}>
									En seulement cinq éditions, le SARA s'est imposé comme le salon de référence en matière d'agriculture, de ressources animales, halieutiques et forestières en Afrique subsaharienne. Trois ans après sa dernière édition, le Salon International de l'Agriculture et des Ressources Animales d'Abidjan a été relancé par le gouvernement ivoirien afin de valoriser, promouvoir et développer toutes les richesses du secteur agricole, de l'élevage et de la pêche de la Côte d'Ivoire.
								</p>
								
								{/* Statistiques */}
								<div className="others-boxarea" data-aos="fade-left" data-aos-duration={1000}>
                                    <div className="icons-box">
                                        <div className="icons">
                                            <img src="/assets/img/icons/about-icon1.svg" alt="" />
                                        </div>
                                        <p><CountUp className="odometer" enableScrollSpy={true} end={7} />+ Intervenants</p>
                                    </div>
                                    <div className="icons-box">
                                        <div className="icons">
                                            <img src="/assets/img/icons/about-icon2.svg" alt="" />
                                        </div>
                                        <p><CountUp className="odometer" enableScrollSpy={true} end={10} />+ Sponsors</p>
                                    </div>
                                </div>
								
								<div className="space32" />
								
								{/* Bouton d'action */}
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link 
										href="/inscription" 
										className="vl-btn2 d-inline-flex align-items-center"
									>
										<span className="demo">Demander à participer</span>
										<span className="arrow ms-2">
											<i className="fa-solid fa-arrow-right" />
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/* Modal Vidéo */}
			<ModalVideo 
				channel='youtube' 
				isOpen={isOpen} 
				videoId="JXMWOmuR1hU" 
				onClose={() => setOpen(false)} 
			/>
		</>
	)
}