import {	BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {	useTranslation } from 'react-i18next';

const data = [
	{ team: 'Barcelona',       goals: 102 },
	{ team: 'Real Madrid',     goals: 78  },
	{ team: 'Villarreal',      goals: 71  },
	{ team: 'Atlético Madrid', goals: 68  },
	{ team: 'Celta Vigo',      goals: 59  },
	{ team: 'Real Betis',      goals: 57  },
	{ team: 'Athletic Club',   goals: 54  },
	{ team: 'Osasuna',         goals: 48  },
	{ team: 'Girona',          goals: 44  },
	{ team: 'Valencia',        goals: 44  },
	{ team: 'Sevilla',         goals: 42  },
	{ team: 'Rayo Vallecano',  goals: 41  },
	{ team: 'Las Palmas',      goals: 40  },
	{ team: 'Espanyol',        goals: 40  },
	{ team: 'Leganés',         goals: 39  },
	{ team: 'Alavés',          goals: 38  },
	{ team: 'Mallorca',        goals: 35  },
	{ team: 'Real Sociedad',   goals: 35  },
	{ team: 'Getafe',          goals: 34  },
	{ team: 'Valladolid',      goals: 26  }
].sort((a, b) => b.goals - a.goals);

export default function GoalsBarChart() {
	const { t } = useTranslation();

	return (
		<ResponsiveContainer width="100%" height={420}>
			<BarChart data={data}>
				<XAxis
					dataKey="team"
					angle={-45}
					textAnchor="end"
					interval={0}
					height={80}
				/>
				<YAxis
					label={{ value: t('goals'), angle: -90, position: 'insideLeft' }}
				/>
				<Tooltip formatter={v => [v, t('goals')]} />
				<Bar dataKey="goals" fill="#0d6efd" />
			</BarChart>
		</ResponsiveContainer>
	);
}