import {	LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {	Form } from 'react-bootstrap';
import {	useState, useEffect } from 'react';
import {	useTranslation } from 'react-i18next';

const DATASETS = {
	barcelona: [
		{ matchday: 1,  points: 3 },  { matchday: 2,  points: 4 },
		{ matchday: 3,  points: 7 },  { matchday: 4,  points: 8 },
		{ matchday: 5,  points: 8 },  { matchday: 6,  points: 9 },
		{ matchday: 7,  points: 12 }, { matchday: 8,  points: 15 },
		{ matchday: 9,  points: 18 }, { matchday: 10, points: 19 },
		{ matchday: 11, points: 20 }, { matchday: 12, points: 23 },
		{ matchday: 13, points: 26 }, { matchday: 14, points: 29 },
		{ matchday: 15, points: 32 }, { matchday: 16, points: 35 },
		{ matchday: 17, points: 38 }, { matchday: 18, points: 41 },
		{ matchday: 19, points: 44 }, { matchday: 20, points: 44 },
		{ matchday: 21, points: 45 }, { matchday: 22, points: 48 },
		{ matchday: 23, points: 51 }, { matchday: 24, points: 51 },
		{ matchday: 25, points: 54 }, { matchday: 26, points: 55 },
		{ matchday: 27, points: 58 }, { matchday: 28, points: 61 },
		{ matchday: 29, points: 64 }, { matchday: 30, points: 67 },
		{ matchday: 31, points: 70 }, { matchday: 32, points: 71 },
		{ matchday: 33, points: 74 }, { matchday: 34, points: 77 },
		{ matchday: 35, points: 80 }, { matchday: 36, points: 83 },
		{ matchday: 37, points: 86 }, { matchday: 38, points: 88 }
	],

	realmadrid: [
		{ matchday: 1,  points: 3 },  { matchday: 2,  points: 6 },
		{ matchday: 3,  points: 7 },  { matchday: 4,  points: 10 },
		{ matchday: 5,  points: 13 }, { matchday: 6,  points: 16 },
		{ matchday: 7,  points: 19 }, { matchday: 8,  points: 22 },
		{ matchday: 9,  points: 23 }, { matchday: 10, points: 26 },
		{ matchday: 11, points: 29 }, { matchday: 12, points: 32 },
		{ matchday: 13, points: 35 }, { matchday: 14, points: 38 },
		{ matchday: 15, points: 41 }, { matchday: 16, points: 44 },
		{ matchday: 17, points: 47 }, { matchday: 18, points: 48 },
		{ matchday: 19, points: 51 }, { matchday: 20, points: 54 },
		{ matchday: 21, points: 55 }, { matchday: 22, points: 58 },
		{ matchday: 23, points: 61 }, { matchday: 24, points: 64 },
		{ matchday: 25, points: 67 }, { matchday: 26, points: 70 },
		{ matchday: 27, points: 73 }, { matchday: 28, points: 74 },
		{ matchday: 29, points: 77 }, { matchday: 30, points: 80 },
		{ matchday: 31, points: 81 }, { matchday: 32, points: 84 },
		{ matchday: 33, points: 84 }, { matchday: 34, points: 84 },
		{ matchday: 35, points: 84 }, { matchday: 36, points: 84 },
		{ matchday: 37, points: 84 }, { matchday: 38, points: 84 }
	],

	atletico: [
		{ matchday: 1,  points: 1 },  { matchday: 2,  points: 4 },
		{ matchday: 3,  points: 5 },  { matchday: 4,  points: 8 },
		{ matchday: 5,  points: 11 }, { matchday: 6,  points: 12 },
		{ matchday: 7,  points: 15 }, { matchday: 8,  points: 16 },
		{ matchday: 9,  points: 19 }, { matchday: 10, points: 22 },
		{ matchday: 11, points: 25 }, { matchday: 12, points: 26 },
		{ matchday: 13, points: 29 }, { matchday: 14, points: 32 },
		{ matchday: 15, points: 33 }, { matchday: 16, points: 36 },
		{ matchday: 17, points: 39 }, { matchday: 18, points: 42 },
		{ matchday: 19, points: 45 }, { matchday: 20, points: 46 },
		{ matchday: 21, points: 49 }, { matchday: 22, points: 50 },
		{ matchday: 23, points: 53 }, { matchday: 24, points: 54 },
		{ matchday: 25, points: 57 }, { matchday: 26, points: 58 },
		{ matchday: 27, points: 61 }, { matchday: 28, points: 64 },
		{ matchday: 29, points: 65 }, { matchday: 30, points: 66 },
		{ matchday: 31, points: 67 }, { matchday: 32, points: 70 },
		{ matchday: 33, points: 71 }, { matchday: 34, points: 72 },
		{ matchday: 35, points: 73 }, { matchday: 36, points: 74 },
		{ matchday: 37, points: 75 }, { matchday: 38, points: 76 }
	]
};

export default function PointsLineChart() {
	const { t } = useTranslation();
	const [team, setTeam] = useState('barcelona');
	const [data, setData] = useState(DATASETS.barcelona);

	useEffect(() => {
		setData(DATASETS[team]);
	}, [team]);

	return (
		<>
			<Form.Select
				value={team}
				onChange={e => setTeam(e.target.value)}
				size="sm"
				className="mb-2"
			>
				<option value="barcelona">Barcelona</option>
				<option value="realmadrid">Real Madrid</option>
				<option value="atletico">Atlético Madrid</option>
			</Form.Select>

			<ResponsiveContainer width="100%" height={420}>
				<LineChart data={data}>
					<XAxis
						dataKey="matchday"
						label={{ value: t('matchday'), position: 'insideBottom', offset: -5 }}
						tickCount={38}
					/>
					<YAxis
						label={{ value: t('points'), angle: -90, position: 'insideLeft' }}
					/>
					<Tooltip formatter={v => [v, t('points')]} />
					<Line
						type="monotone"
						dataKey="points"
						stroke="#dc3545"
						strokeWidth={2}
						dot={false}
						isAnimationActive={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}