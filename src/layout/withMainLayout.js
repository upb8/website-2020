import React, {Fragment} from 'react';
import BackToTop from '../components/backtotop';
import Header from '../components/header';
import Footer from '../components/footer';

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