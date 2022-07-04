const Recipe = ({ imgSrc, title, by, mins }) => {
  return (
    <div className='card hover:shadow-lg'>
      {/* eslint-disable-next-line */}
      <img src={imgSrc} alt={imgSrc} className='w-full h-32 sm:h-48 object-cover' />
      <div className='m-4'>
        <span className='font-bold'>{title}</span>
        <span className='block text-gray-500 text-sm'>Recipe by {by}</span>
      </div>
      <div className='badge' >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{' '}{mins} mins</span>
      </div>
    </div>
  );
}

export default Recipe;