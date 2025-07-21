import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.jsx';
import GoalsBarChart from './components/GoalsBarChart.jsx';
import PointsLineChart from './components/PointsLineChart.jsx';

import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <>
      <Header toggleLang={toggleLang} />

      <Container fluid="lg">
        <Row className="mb-4">
          <Col>
            <h2 className="h4">{t('dashboardTitle')}</h2>
            <p className="text-muted">
              {t('dashboardSubtitle')}
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-4">
            <h3 className="h5 mb-2">{t('goalsByTeamTitle')}</h3>
            <GoalsBarChart />
          </Col>

          <Col md={6} className="mb-4">
            <h3 className="h5 mb-2">{t('teamProgressTitle')}</h3>
            <PointsLineChart />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;