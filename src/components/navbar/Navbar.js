import React from 'react'
import logo from '../../img/logo/logo_white_48.png'
import style from './Navbar.module.css'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-grid-system'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  // toggleHamburger = () => {
  //   this.setState(
  //     {
  //       active: !this.state.active,
  //     },
  //     // after state has been updated,
  //     () => {
  //       // set the class in state for the navbar accordingly
  //       this.state.active
  //         ? this.setState({
  //             navBarActiveClass: 'is-active',
  //           })
  //         : this.setState({
  //             navBarActiveClass: '',
  //           })
  //     }
  //   )
  // }

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation" className={style.nav}>
        <Container>
          <Row className={style.row}>
            <Col xs={2} lg={7}>
              <Link to="/" className={style.logo}>
                <img src={logo} alt="logo miso" className={style.logo} />
              </Link>
            </Col>
            <Col xs={6} lg={1} className={style.linkList}>
              <Link className={style.link} to="/blog">
                Blog
              </Link>
            </Col>
          </Row>
        </Container>
      </nav>
    )
  }
}

export default Navbar
