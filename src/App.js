
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="My Own Online Shoe Store. Start Selling & Growing"
        description="Buy, store, & collect shoes."
        showBtn
        mockupImg={assets.Scene3}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Goat Online Shoe Store. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="Goat Shop is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains 6 screens. The first screen lists all shoes while the second one shows the details of a specific shoes."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

    
    </>
  );
}

export default App;
