import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import instagramIcon from '../../../img/footer/insta.svg';
import facebookIcon from '../../../img/footer/facebook.svg';
import linkedIcon from '../../../img/footer/linked-in.svg';
import letterSend from '../../../img/Contact/letter_send.png'

export default function ContactUs() {
    const { t } = useTranslation();
    return (
        <main className='overflow-hidden relative'>
            <section className='container pt-10 pb-25'>
                <div className='text-center mb-15 md:mb-40'>
                    <h2 className='text-primary-bg'>{t('Contact Us')}</h2>
                    <p className='text-main '>{t('Any question or remarks? Just write us a message!')}</p>
                </div>
                <div className='max-w-299 p-2.5 mx-auto  shadow-[0_0_40px_rgba(0,0,0,0.15)] flex items-stretch max-md:flex-col rounded-2xl'>
                    <div className='flex flex-col justify-between p-4 md:p-10 bg-primary-bg text-primary-addres min-h-120  max-md:w-full lg:w-4/10 rounded-2xl relative overflow-hidden'>
                        <div>
                            <h3 className='text-[22px]'>{t('Contact Information')}</h3>
                            <span>{t('Say something to start a live chat!')}</span>
                        </div>
                        <div className='flex flex-col gap-12.5 z-10'>
                            <div className='flex items-center gap-5'><Mail size={20} /><Link to='mailto:emadmoutasem0@gmail.com'>emadmoutasem0@gmail.com</Link></div>
                            <div className='flex items-center gap-5'><Phone size={20} /><span>+970 594 547 679</span></div>
                            <div className='flex items-center gap-5'><MapPin size={20} /><span>{t('Al-Bayader Street, Talfit, south of Nablus')}</span></div>

                        </div>
                        <div className="flex gap-6 sm:gap-3 z-10">
                            <Link href="https://www.instagram.com/moutasem112" target="_blank">
                                <img src={instagramIcon} alt="Instagram logo image"
                                    className="duration-400 hover:scale-125 w-[30px]" />
                            </Link>
                            <Link href="https://www.facebook.com/moutasem112" target="_blank">
                                <img src={facebookIcon} alt="Facebook logo image"
                                    className="duration-400 hover:scale-125 w-[30px]" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/moutasem-hassan-75b119387/" target="_blank">
                                <img src={linkedIcon} alt="LinkedIn logo image"
                                    className="duration-400 hover:scale-125 w-[30px]" />
                            </Link>

                        </div>
                        <div className='w-67 h-67 bg-[#708985] rounded-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 -'>
                        </div>
                        <div className='w-34 h-34 bg-[#9CB5B1]/50 rounded-full absolute bottom-8 right-8'>
                        </div>
                    </div>
                    <div className='px-3 pt-10 w-full md:w-6/10'>
                        <form className='grid grid-cols-2 gap-x-7 gap-y-11 lg:pe-23 ' >
                            <div className='flex flex-col text-primary-bg '>
                                <label htmlFor='First' className='text-[14px] ' >{t('First Name')}</label>
                                <input type="text" id='First' className='border-b-2 border-primary-bg focus:outline-none ' />
                            </div>
                            <div className='flex flex-col text-primary-bg'>
                                <label className='text-[14px] ' htmlFor="Last">{t('Last Name')}</label>
                                <input type="text" id='Last' className='border-b-2 border-primary-bg focus:outline-none' />
                            </div>
                            <div className='flex flex-col text-primary-bg'>
                                <label className='text-[14px] ' htmlFor="Email">{t('Email')}</label>
                                <input type="text" id='Email' className='border-b-2 border-primary-bg focus:outline-none' />
                            </div>
                            <div className='flex flex-col text-primary-bg'>
                                <label className='text-[14px] ' htmlFor="Phone">{t('Phone Number')}</label>
                                <input type="text" id='Phone' className='border-b-2 border-primary-bg focus:outline-none' />
                            </div>
                            <div className='flex flex-col text-primary-bg col-span-2 '>
                                <label className='text-[14px] ' >{t('Select Subject?')}</label>
                                <div className='flex gap-3.5 mt-3.5'>
                                    <div className='flex gap-2.5'>
                                        <input type="radio" name="Subject" id="GeneralInquiry" />
                                        <label htmlFor="GeneralInquiry" className='text-[12px]'>{t('Order Status')}</label>
                                    </div>
                                    <div className='flex gap-2.5'>
                                        <input type="radio" name="Subject" id="Inquiries" />
                                        <label htmlFor="Inquiries" className='text-[12px]'>{t('Product Inquiries')}</label>
                                    </div>
                                    <div className='flex gap-2.5'>
                                        <input type="radio" name="Subject" id="Issues" />
                                        <label htmlFor="Issues" className='text-[12px]'>{t('Billing Issues')}</label>
                                    </div>
                                    <div className='flex gap-2.5 items-center'>
                                        <input type="radio" name="Subject" id="Other" />
                                        <label htmlFor="Other" className='text-[12px]'>{t('Other')}</label>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col text-primary-bg col-span-2 '>
                                <label className='text-[14px] ' htmlFor="Message">{t('Message')}</label>
                                <input type="text" id='Message' placeholder={t('Write your message..')} className='border-b-2 border-primary-bg focus:outline-none text-[14px]' />
                            </div>
                           
                            <div className='relative lg:col-start-2'>
                                <button type='submit' className='button-Secondary mb-25 md:mb-38 min-w-53.5'>
                                    {t('Send Message')}
                                </button>
                                <img src={letterSend} alt="letter Send image" className='absolute top-1 -left-5 sm:-left-15 md:top-0 md:left-0 lg:-top-5 lg:-left-15 object-cover pointer-events-none select-none'
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </main>
    )
}
