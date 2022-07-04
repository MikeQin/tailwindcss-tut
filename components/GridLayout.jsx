import Head from 'next/head'
import styles from '../styles/GridLayout.module.css'

const GridLayout = () => {
  return (
    <>
    <div>
      <Head>
        <title>Grid Layout</title>
      </Head>
    </div>
    <div className={styles.body}>
      <div className='grid grid-areas-layout grid-rows-layout grid-cols-layout h-screen'>
        <header className='grid-in-header border p-4'>Header</header>
        <nav className='grid-in-nav border p-4'>Navigation</nav>
        <main className='grid-in-content border p-4'>Content</main>
        <aside className='grid-in-sidebar border p-4'>Sidebar</aside>
        <footer className='grid-in-footer border p-4'>Footer</footer>
      </div>
    </div>
    </>
  );
}
 
export default GridLayout;