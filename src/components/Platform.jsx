import React from 'react';
import Grid from '../components/Grid';
import Cards from '../components/Cards';

import soloImage from '../assets/solo.jpg';
import demonSlayer from '../assets/demonslayer.jpg';
import jjkImage from '../assets/jjk.png';
import aotImage from '../assets/aot.jpeg';
import mhaImage from '../assets/mha.jpeg';
import onePieceImage from '../assets/onepiece.jpeg';
import frierenImage from '../assets/frieren.jpeg';
import windBreakerImage from '../assets/windbreaker.jpeg';
import blueLockImage from '../assets/bluelock.jpeg';
import tokyoRevengersImage from '../assets/tokyorevengers.jpeg';

const App = () => {
  const cardData = [
    {
      title: 'Solo Leveling',
      content: 'A weak hunter gains powerful shadow abilities and rises through the ranks.',
      image: soloImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Demon Slayer',
      content: 'Tanjiro fights demons to save his sister and avenge his family.',
      image: demonSlayer,
      moreInfo: <a href="https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Jujutsu Kaisen',
      content: 'A boy swallows a cursed object and joins a secret organization to fight curses.',
      image: jjkImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Attack on Titan',
      content: 'Humanity fights for survival against giant man-eating titans.',
      image: aotImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'My Hero Academia',
      content: 'In a world of heroes, Deku trains to become the best despite being born quirkless.',
      image: mhaImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'One Piece',
      content: 'Luffy and his pirate crew sail the seas in search of the One Piece treasure.',
      image: onePieceImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Frieren: Beyond Journey’s End',
      content: 'An elf mage explores life and emotions long after her heroic journey ends.',
      image: frierenImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Wind Breaker',
      content: 'A high school delinquent group fights to protect their town and honor.',
      image: windBreakerImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/G3KHEVDPE/wind-breaker" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Blue Lock',
      content: 'Strikers battle for a spot in Japan’s national soccer team in this intense competition.',
      image: blueLockImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/G4PH0WEKE/blue-lock" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
    {
      title: 'Tokyo Revengers',
      content: 'A man travels back in time to save his girlfriend and change the future.',
      image: tokyoRevengersImage,
      moreInfo: <a href="https://www.crunchyroll.com/series/G3KHEVMN1/tokyo-revengers" target="_blank" rel="noopener noreferrer">Watch Now</a>
    },
  ];

return (
    <div style={{ padding: '2rem' }}>
      <Grid row={4} column={3}>
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            content={card.content}
            image={card.image}
            moreInfo={card.moreInfo}
          />
        ))}
      </Grid>
    </div>
  );
};

export default App;


