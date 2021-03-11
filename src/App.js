import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import './App.css';
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';

const App = () => {
  return (
    <>
        <Header title={'Привет!'} descr={'Тест'}/>
        <Layout title={'Страница 1'} descr={'Описание'} urlBg={bg1}/>
        <Layout title={'Страница 2'} descr={'Описание'} colorBg={'red'}/>
        <Layout title={'Страница 3'} descr={'Описание'} urlBg={bg2}/>
        <Footer />
    </>
  );
};

export default App;
