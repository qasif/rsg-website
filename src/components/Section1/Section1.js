import './Section1.css';
const Section1 = ({ Section1data }) => {
  console.log(Section1data);
  let heading = 'Solving Complex Challenges';
  let para2 = 'We help CXOs and enterprises solve their most complex technology and business challenges. Our expertise is in our ability to help you sustain, grow and stay ahead of the curve';
  let para =
    'In today’s hyper-connected world and uncertain times, organizations are challenged in more ways than ever.';
   
  return (
    <div className='background py-5'>
      <div className='container'>
      <h1 className='h1size'>{heading}</h1>
      <div>
      <p className='pStyle'>{para}</p>
      </div>
      <div className='fdiv'>
      {Section1data.map((data) => {
        return (
          <div className='parentdiv'>
            <div >
              <img className='mt-4' src={data.url}></img>
            </div>
            <div>
              <h3 className='h3para'>{data.messg}</h3>
            </div>
            <div>
              <span className='pluslogo'>{data.logo}</span>
            </div>
          </div>
        );
      })}
      </div>
      <div className='paradiv'>
        <p className='para2'>{para2}</p>
      </div>
      </div>
      
    </div>
  );
};

export default Section1;
