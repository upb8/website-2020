import React, {Fragment} from 'react';
import BackToTop from '../components/BackToTop';
import Header from '../components/header';
import Footer from '../components/Footer';

const withMainLayout = (Component) => (
    class withMainLayout extends Component {
        render() {
            return (
                <Fragment>
                    <BackToTop/>
                    <Header/>
                    <Component {...this.props}/>
                    <Footer/>
                </Fragment>
            );
        }
      }
)
export default withMainLayout;