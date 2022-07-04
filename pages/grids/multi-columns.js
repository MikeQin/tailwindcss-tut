const MultiColumns = () => {
  const body = {
    margin: '0px', 
    fontFamily: 'Nunito', 
    background: '#d1dedd'
  }
  const h = {
    //color: "#767f7e"
  }
  const p = {
    color: "#828b8a"
  }
  const header = {
    maxWidth: "1200px",
    margin: "0px auto",
    padding: "40px 60px",
    borderBottom:"1px solid #bbc7c7"
  }
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "60px",
    maxWidth: "1200px",
    padding: "40px",
    margin: "20px auto"
  }
 
  return (
    <div style={body}>
      <header style={header}>
        <h1 style={h} className='text-2xl font-bold text-gray-900'>Globe Roamer</h1>
      </header>
      <div style={gridContainer}>
        <article className='featured'>
          <picture>
            <source srcSet='/img/1.png' type='image/webp'/>
            <img src='/img/1.png' alt='featureed img'/>
          </picture>
          <div>
            <h2 style={h} className='text-1xl fond-bold text-gray-900'>Balloom Magic</h2>
            <p style={p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam sapiente ad expedita facere! Error voluptate 
              quaerat officiis ducimus esse. Dolor laboriosam repudiandae atque ex officiis ducimus, eius maiores praesentium!</p>
          </div>
        </article>
        <article>
          <picture>
            <source srcSet='/img/2.png' type='image/webp'/>
            <img src='/img/2.png' alt='featureed img'/>
          </picture>
          <div>
            <h3 style={h} className='text-lg fond-bold text-gray-900'>Road to Feedom</h3>
            <p style={p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam sapiente ad expedita facere! Error voluptate 
              quaerat officiis ducimus esse. Dolor laboriosam repudiandae atque ex officiis ducimus, eius maiores praesentium!</p>
          </div>
        </article>
        <article>
          <picture>
            <source srcSet='/img/1.png' type='image/webp'/>
            <img src='/img/1.png' alt='featureed img'/>
          </picture>
          <div>
            <h3 style={h} className='text-lg fond-bold text-gray-900'>Balloom Magic</h3>
            <p style={p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam sapiente ad expedita facere! Error voluptate 
              quaerat officiis ducimus esse. Dolor laboriosam repudiandae atque ex officiis ducimus, eius maiores praesentium!</p>
          </div>
        </article>
        <article>
          <picture>
            <source srcSet='/img/3.png' type='image/webp'/>
            <img src='/img/3.png' alt='featureed img'/>
          </picture>
          <div>
            <h3 style={h} className='text-lg fond-bold text-gray-900'>The Clear Blue</h3>
            <p style={p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam sapiente ad expedita facere! Error voluptate 
              quaerat officiis ducimus esse. Dolor laboriosam repudiandae atque ex officiis ducimus, eius maiores praesentium!</p>
          </div>
        </article>
      </div>
    </div>
  );
}
 
export default MultiColumns;