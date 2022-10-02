import { useNavigate } from 'react-router-dom';
import LandingImg from '../assets/landing-img.svg';

const Landing = () => {
  const navigate = useNavigate();

  const goToEvent = () => {
    navigate('/create');
  };

  return (
    <section className="text-center pt-[60px] pb-[13.67px] h-screen">
      <header className="max-w-[321px] text-4xl text-envited-purple-500 font-bold m-auto leading-9">
        Imagine if
        <br />
        <span className="text-gradient">Snapchat</span>
        <br /> had events.
      </header>
      <p className="font-light text-envited-grey-500 mt-4 mb-[36px] px-8 max-w-[521px] m-auto">
        Easily host and share events with your friends across any social media.
      </p>
      <div className="m-auto">
        <img src={LandingImg} alt="" className="img-shadow m-auto" />
        <button
          className="btn-gradient mt-[34px] py-4 px-[21px] text-white rounded-[10px] font-bold"
          onClick={goToEvent}
        >
          🎉 Create my event
        </button>
      </div>
    </section>
  );
};

export default Landing;
