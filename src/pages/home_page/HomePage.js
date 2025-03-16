import React from 'react';
import Navbar from '../../common_components/Navbar';
import assets from './assets/assets';
import Features from './components/Features';
import Footer from '../../common_components/Footer';
import Reachus from './components/Reachus';

function HomePage() {
  return (
    <div>
        {/* Navbar */}
        <Navbar parent={'Home'} />

        {/* Banner Section */}
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2'>
            <img src={assets.homeBannerImage} alt="Home_Banner_image" className='w-full h-full'/>
          </div>
          <div className='lg:w-1/2 flex flex-col justify-center'>
            <h1 className='font-mont font-semibold text-center text-2xl md:text-3xl'>Secure User Authentication</h1>
            <p className='p-5 font-roboto font-extralight md:font-medium text-center text-justify text-lg md:text-2xl md:leading-8 lg:text-lg lg:leading-7'>
              Need a secure and reliable way to handle user authentication and data storage? Our web application delivers! With robust 
              encryption, seamless integration, and scalable performance, you can protect user data and streamline your operations 
              effortlessly. From secure logins to efficient data management, we prioritize safety and simplicity—so you can focus on 
              growth while we handle the rest.
            </p>
          </div>
        </div>

        {/* Jumbotron */}
        <div className='bg-feature bg-cover bg-center bg-no-repeat'>
          <div className='p-2 py-72 h-full w-full bg-transparent_black'>
            <h1 className='mb-2 font-mont font-bold text-white text-xl md:text-3xl text-center'>Secure Your Users, Simplify Your App.</h1>
            <p className='font-roboto font-light text-white text-center text-justify md:text-2xl md:leading-8 md:p-3'>
              Experience effortless user authentication and management with our cutting-edge platform. 
              From secure logins to efficient user role handling, we provide the tools you need to protect data, 
              ensure privacy, and scale your application seamlessly. Built for developers, trusted by users—your 
              solution for secure and reliable app functionality.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className=''>
          <h1 className='my-4 md:pl-4 font-mont font-bold text-center md:text-start text-3xl md:text-4xl'>Features</h1>
          
          <div className='p-2 flex flex-col'>
            <Features imageUrl={assets.secureAuth}
              imageAlt={'SecureAuthentication'}
              heading={'Secure Authentication'}
              text={
                'Protect user accounts with advanced encryption and secure login systems.' +
                'Ensure credentials are safe from unauthorized access while providing users with a smooth and reliable experience.'
              }
            /> 
            <Features imageUrl={assets.userHandling}
              imageAlt={'UserHandling'}
              heading={'Efficient User Management'}
              text={
                'Manage users effortlessly with tools for role assignments, profile updates, and activity tracking.' + 
                'Stay in control of your application’s user base with an intuitive and organized system.'
              }
            /> 
            <Features imageUrl={assets.privacy}
              imageAlt={'Privacy'}
              heading={'Privacy'}
              text={
                'We adhere to industry standards to ensure your users' + 
                'data remains private and secure. Our platform prioritizes compliance and trust, giving you and your users peace of mind.'
              }
            /> 
          </div>
        </div>

        {/* About Us */}
        <div className='p-2'>
          <h1 className='my-4 font-mont font-bold text-3xl text-center md:text-start md:pl-3'>About Us</h1>
          <p className='p-2 md:p-3 font-roboto text-justify md:text-xl'>
            At the heart of modern digital experiences lies trust, security, and seamless functionality. That’s where we come in. 
            Our mission is to empower developers and businesses with an innovative platform for secure user authentication and 
            efficient user management.
          </p>
          <p className='p-2 md:p-3 font-roboto text-justify md:text-xl'>
            We understand the challenges of building applications that prioritize both functionality and safety. 
            Our platform is designed to simplify this process, offering advanced features like encrypted logins, 
            user role assignments, and robust data protection. Whether you’re a small startup or a growing enterprise, 
            our scalable and flexible solution adapts to your needs.
          </p>
          <p className='p-2 md:p-3 font-roboto text-justify md:text-xl'>
            With a team of experienced developers, designers, and security experts, we’re committed to creating tools 
            that are not only powerful but also easy to integrate into any application. We adhere to industry-leading 
            privacy standards to ensure your users’ data remains protected at all times.
          </p>
          <p className='p-2 md:p-3 font-roboto text-justify md:text-xl'>
            Innovation, reliability, and trust are at the core of everything we do. Join us as we redefine what’s possible 
            in user management and app security.
          </p>
          <p className='p-2 md:p-3 font-roboto text-justify md:text-xl'>Let’s build the future—securely, together.</p>
        </div>

        {/* Reach Us */}
        <Reachus />

        {/* Footer */}
        <Footer />

      </div>
  )
}

export default HomePage