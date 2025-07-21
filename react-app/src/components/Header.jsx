import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

const Header = ({toggleLang}) => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
			<Container fluid>
				<Navbar.Brand as="h1" className="mb-0 fs-4">
					Tableau Sport
				</Navbar.Brand>

				<Nav className="ms-auto">
					<Button
						variant="outline-light"
						size="sm"
						onClick={toggleLang}
						aria-label="Changer de langue"
					>
						FR / EN
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;