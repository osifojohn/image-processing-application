import Container from './components/Container';
import Header from './components/Header';
import ProcessingButton from './components/buttons/ProcessingButton';
import FooterImage from './components/images/FooterImage';
import MainImage from './components/images/MainImage';

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-1"
        >
          <div>
            <MainImage />
            <FooterImage />
          </div>
          <ProcessingButton />
        </div>
      </Container>
    </main>
  );
}
