import React from 'react';

export default function HeroImage() {
  const mystyle = {
    fontFamily: "Tajawal', sans-serif",
    fontWeight: '400' 
  };

  const mystyle1 = {
    fontFamily: "Tajawal', sans-serif", 
    color: '#6164ff',
    letterSpacing: 3,
    fontWeight: '500' 
  };

  const mystyle2 = {
    fontFamily: "Tajawal', sans-serif", 
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: '400' 
  };

  return (
    <header style={{ paddingLeft: 0,backgroundColor: "#16151a" }}>
      <div
        className='p-5 text-center bg-image'
        style={{  backgroundImage: "url('https://usr.dokan-cdn.com/img/home/home.png')", height: 400 }}
      >
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 style={mystyle} className='mb'>أفضل منصة</h1>
              <h1 style={mystyle1} className='mb-3'>لبيع وشراء المنتجات الرقمية</h1>
              <h6 style={mystyle2} className='mb-3'>من خلال منصة يوزر يمكنك بيع وشراء المنتجات الرقمية بأمان وسلاسة</h6><br/>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}